import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("portfolio content is wired into the app", async () => {
  const [page, projectsPage, data, css, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/projects/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/portfolio.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /mathematics minor and a 3\.6 GPA/);
  assert.match(page, /software engineering, embedded systems, and machine learning/);
  assert.match(page, /home-link/);
  assert.match(page, /name-lockup/);
  assert.match(page, /mailto:aryamaan\.dash@icloud\.com/);
  assert.doesNotMatch(
    page,
    /signal locked|full-stack software|brand-link|intro-card|new Date/,
  );
  assert.match(projectsPage, /Projects/);
  assert.doesNotMatch(page, /ThemeToggle|theme-toggle|data-theme/);
  assert.doesNotMatch(projectsPage, /ThemeToggle|theme-toggle|data-theme/);
  assert.match(data, /RISC-V RV32I Single-Cycle Processor/);
  assert.match(data, /EcoToken/);
  assert.match(data, /Programmable Multi-Effects Guitar Pedal/);
  assert.match(data, /aryamaan-dash-a8589a2b7/);
  assert.match(data, /Aryamaan-Dash-Resume\.pdf/);
  assert.match(data, /PyTorch/);
  assert.match(data, /TensorFlow/);
  assert.match(data, /scikit-learn/);
  assert.ok(
    data.indexOf("EcoToken") < data.indexOf("Programmable Multi-Effects Guitar Pedal"),
  );
  assert.ok(
    data.indexOf("Programmable Multi-Effects Guitar Pedal") <
      data.indexOf("Guitar Audio Classification Model"),
  );
  assert.ok(data.indexOf("Guitar Audio Classification Model") < data.indexOf("Study Tracker"));
  assert.ok(data.indexOf("Study Tracker") < data.indexOf("TeachBack: Inverted Tutoring"));
  assert.ok(
    data.indexOf("TeachBack: Inverted Tutoring") <
      data.indexOf("RISC-V RV32I Single-Cycle Processor"),
  );
  assert.match(css, /@keyframes letter-rise/);
  assert.match(css, /@keyframes scan/);
  assert.doesNotMatch(css, /data-theme|color-scheme:\s*dark/);
  assert.match(layout, /Aryamaan Dash/);
  assert.doesNotMatch(layout, /theme-script|localStorage|data-theme/);
  assert.match(packageJson, /"build": "next build"/);
  assert.doesNotMatch(packageJson, /vinext|react-loading-skeleton|wrangler/);
});
