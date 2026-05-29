#!/usr/bin/env node
/**
 * IndexNow submitter.
 *
 * Reads the production sitemap.xml from www.moroccoforyou.com, extracts all
 * <loc> URLs, and POSTs them in a single batch to api.indexnow.org with the
 * site's IndexNow key. Run after every Vercel production deploy:
 *
 *   node scripts/indexnow.mjs
 *
 * The key file is hosted publicly at /36811f9c07ed4ff1ad49d782e547ab27.txt
 * so search engines (Bing, Yandex, Seznam, Naver, Yep, etc.) can verify
 * ownership before accepting submitted URLs.
 */

const HOST = 'www.moroccoforyou.com';
const KEY = '36811f9c07ed4ff1ad49d782e547ab27';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = 'https://api.indexnow.org/IndexNow';

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL, { redirect: 'follow' });
  if (!res.ok) throw new Error(`Sitemap fetch failed: HTTP ${res.status}`);
  const xml = await res.text();
  return Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map((m) => m[1].trim());
}

async function submitBatch(urls) {
  const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls };
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  return { status: res.status, body: text };
}

(async () => {
  try {
    const urls = await fetchSitemapUrls();
    console.log(`Fetched ${urls.length} URLs from ${SITEMAP_URL}`);
    if (urls.length === 0) {
      console.error('No URLs found in sitemap. Aborting.');
      process.exit(1);
    }

    // IndexNow accepts up to 10,000 URLs per request. We are well under that.
    const result = await submitBatch(urls);
    console.log(`IndexNow status: ${result.status}`);
    console.log(result.body || '(empty body — success)');

    if (result.status < 200 || result.status >= 300) {
      // 202 Accepted is success. 400 = invalid request. 403 = key/file mismatch.
      // 422 = URL not under host. 429 = throttled. 200/202 are the only OKs.
      process.exit(1);
    }
  } catch (err) {
    console.error('IndexNow submission failed:', err.message);
    process.exit(1);
  }
})();
