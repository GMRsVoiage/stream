/**
 * Theme-neutral scene configuration.
 * Later layers override earlier layers: brand -> theme -> scene.
 * No network requests, framework, or OBS dependency.
 */
const BLOCKED_KEYS = new Set(["__proto__", "prototype", "constructor"]);

function isRecord(value) {
  return value !== null &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    (Object.getPrototypeOf(value) === Object.prototype ||
      Object.getPrototypeOf(value) === null);
}

function copy(value) {
  if (Array.isArray(value)) return value.map(copy);
  if (!isRecord(value)) return value;

  const result = {};
  for (const [key, entry] of Object.entries(value)) {
    if (!BLOCKED_KEYS.has(key)) result[key] = copy(entry);
  }
  return result;
}

function merge(base, overrides) {
  const result = copy(base);
  for (const [key, value] of Object.entries(overrides)) {
    if (BLOCKED_KEYS.has(key)) continue;
    result[key] = isRecord(value) && isRecord(result[key])
      ? merge(result[key], value)
      : copy(value);
  }
  return result;
}

/** Resolve immutable inputs without mutating them. Arrays are replaced. */
export function resolveSceneConfig({ brand = {}, theme = {}, scene = {} } = {}) {
  if (![brand, theme, scene].every(isRecord)) {
    throw new TypeError("Configuration layers must be plain objects.");
  }
  return merge(merge(brand, theme), scene);
}
