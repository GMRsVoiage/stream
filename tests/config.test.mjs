import test from "node:test";
import assert from "node:assert/strict";
import { resolveSceneConfig } from "../core/js/config.mjs";

test("brand, theme and scene overrides have the approved precedence", () => {
  const brand = { name: "GMRsVoiage", status: { label: "AO VIVO", visible: true }, sizes: [1, 2] };
  const theme = { status: { label: "CONNECTED" }, sizes: [3] };
  const scene = { status: { visible: false } };
  const resolved = resolveSceneConfig({ brand, theme, scene });
  assert.deepEqual(resolved, {
    name: "GMRsVoiage",
    status: { label: "CONNECTED", visible: false },
    sizes: [3]
  });
  assert.deepEqual(brand.sizes, [1, 2]);
  assert.deepEqual(brand.status, { label: "AO VIVO", visible: true });
});

test("returned nested data does not mutate the source", () => {
  const brand = { nested: { items: [{ enabled: true }] } };
  const result = resolveSceneConfig({ brand });
  result.nested.items[0].enabled = false;
  assert.equal(brand.nested.items[0].enabled, true);
});

test("reject invalid config layer values", () => {
  assert.throws(() => resolveSceneConfig({ theme: null }), TypeError);
});
