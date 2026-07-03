import OpenAI from 'openai';

let client: OpenAI | null = null;

/** Singleton OpenAI client. Reads `OPENAI_API_KEY` from the server-side env.
 *  The key is never bundled into client code because this module is only
 *  imported from Route Handlers (which run on the server) — Next.js will
 *  tree-shake it out of any accidental client-component import path and
 *  refuse to build if the key is referenced from a component marked
 *  `'use client'`. */
export function getOpenAI(): OpenAI {
  if (client) return client;
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error(
      'OPENAI_API_KEY is not set. Add it to .env.local (development) or the ' +
        'hosting environment (production). This env var is server-only — never ' +
        'expose it with a NEXT_PUBLIC_ prefix.',
    );
  }
  client = new OpenAI({ apiKey });
  return client;
}
