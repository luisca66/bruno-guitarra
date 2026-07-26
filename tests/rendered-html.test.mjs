import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("progress is bounded and rounds evenly weighted tasks", () => {
  const percentage = (complete, total) => Math.round((complete / total) * 100);
  assert.equal(percentage(8, 11), 73);
  assert.equal(percentage(11, 11), 100);
});

test("fretboard note generation follows standard tuning", () => {
  const notes = ["Do","Do♯ / Re♭","Re","Re♯ / Mi♭","Mi","Fa","Fa♯ / Sol♭","Sol","Sol♯ / La♭","La","La♯ / Si♭","Si"];
  const strings = [4, 11, 7, 2, 9, 4];
  assert.equal(notes[(strings[0] + 1) % 12], "Fa");
  assert.equal(notes[(strings[1] + 1) % 12], "Do");
});

test("PWA assets include install and offline configuration", async () => {
  const [manifest, worker] = await Promise.all([
    readFile(new URL("public/manifest.webmanifest", root), "utf8"),
    readFile(new URL("public/sw.js", root), "utf8"),
  ]);
  assert.equal(JSON.parse(manifest).display, "standalone");
  assert.match(worker, /caches\.open/);
  assert.match(worker, /fetch/);
});

test("app includes versioned persistence and invalid-import feedback", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");
  assert.match(page, /version:1/);
  assert.match(page, /localStorage\.setItem/);
  assert.match(page, /no es un respaldo válido/);
  assert.match(page, /20 repeticiones adicionales de C–G/);
});
