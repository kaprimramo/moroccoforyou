import fs from 'node:fs';
import path from 'node:path';
import type { PlannerConfig } from './types';

const CONFIG_PATH = path.join(process.cwd(), 'planner-config.json');
const IS_DEV = process.env.NODE_ENV !== 'production';

type CacheEntry = { config: PlannerConfig; mtimeMs: number };
let cache: CacheEntry | null = null;

/** Cheap structural sanity check. We do NOT ship a runtime validator like
 *  zod (avoids a dep) — instead we throw with a specific message if the
 *  loader detects an obvious shape violation. Editing the JSON with a typo
 *  will surface here rather than as a mystery 500 from OpenAI. */
function assertShape(raw: unknown): asserts raw is PlannerConfig {
  if (typeof raw !== 'object' || raw === null) {
    throw new Error('planner-config.json: root must be an object');
  }
  const c = raw as Record<string, unknown>;
  const required = [
    'meta',
    'brand',
    'model',
    'persona',
    'tone',
    'systemPrompt',
    'planModeSystemPromptSuffix',
    'safety',
    'ctas',
    'limits',
  ] as const;
  for (const key of required) {
    if (!(key in c)) throw new Error(`planner-config.json: missing required key "${key}"`);
  }
  const model = c.model as Record<string, unknown>;
  if (typeof model.name !== 'string' || model.name.length === 0) {
    throw new Error('planner-config.json: model.name must be a non-empty string');
  }
  if (typeof c.systemPrompt !== 'string' || (c.systemPrompt as string).length < 20) {
    throw new Error('planner-config.json: systemPrompt must be a substantive string');
  }
}

/** Read and parse `planner-config.json`.
 *  - Development: re-reads from disk if the file's mtime changed. Save the
 *    file, hit the API again, changes apply — no server restart needed.
 *  - Production: reads once per Node instance, then serves from memory.
 *
 *  Throws on missing file or malformed JSON so problems fail fast at request
 *  boundary instead of returning garbled AI replies. */
export function loadPlannerConfig(): PlannerConfig {
  if (IS_DEV) {
    const stat = fs.statSync(CONFIG_PATH);
    if (cache && cache.mtimeMs === stat.mtimeMs) return cache.config;
    const raw = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8')) as unknown;
    assertShape(raw);
    cache = { config: raw, mtimeMs: stat.mtimeMs };
    return raw;
  }

  if (cache) return cache.config;
  const raw = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf-8')) as unknown;
  assertShape(raw);
  // In prod mtime is captured once — not used again, but kept for symmetry.
  cache = { config: raw, mtimeMs: 0 };
  return raw;
}

/** Test / admin utility: force a re-read on next call. Useful if a future
 *  admin endpoint wants to reload the config in prod without a redeploy. */
export function invalidatePlannerConfigCache(): void {
  cache = null;
}
