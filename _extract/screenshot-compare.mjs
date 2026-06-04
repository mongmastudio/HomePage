// Visual parity check — renders the original bundled HTML and each new
// route at the four required viewports, writing PNGs to _extract/screenshots/.
//
// Run after `npm run dev` is up on http://localhost:3000.
import { chromium } from "playwright";
import { mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUT = resolve(__dirname, "screenshots");
mkdirSync(OUT, { recursive: true });

const VIEWPORTS = [
  { name: "1440x900", width: 1440, height: 900 },
  { name: "1920x1080", width: 1920, height: 1080 },
  { name: "768x1024", width: 768, height: 1024 },
  { name: "390x844", width: 390, height: 844 },
];

const NEW_ROUTES = [
  { id: "01_home", path: "/" },
  { id: "02_games", path: "/games" },
  { id: "03_revenant", path: "/games/revenant-survivors" },
  { id: "04_press", path: "/press" },
  { id: "05_support", path: "/support" },
  { id: "06_contact", path: "/contact" },
];

const ORIGINAL_FILE = "file:///" +
  resolve(__dirname, "..", "reference", "Mongma Studio.html").replace(/\\/g, "/");

const ORIGINAL_HASHES = [
  { id: "01_home", hash: "#/" },
  { id: "02_games", hash: "#/games" },
  { id: "03_revenant", hash: "#/revenant" },
  { id: "04_press", hash: "#/press" },
  { id: "05_support", hash: "#/support" },
  { id: "06_contact", hash: "#/contact" },
];

async function snap(page, file) {
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
  await page.screenshot({ path: file, fullPage: true });
}

(async () => {
  const browser = await chromium.launch();

  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });

    // ─── Original (single HTML, hash routes) ───
    {
      const page = await ctx.newPage();
      for (const r of ORIGINAL_HASHES) {
        const url = ORIGINAL_FILE + r.hash;
        try {
          await page.goto(url, { waitUntil: "load", timeout: 60000 });
          // wait for the bundler to finish unpacking
          await page.waitForFunction(
            () => !document.getElementById("__bundler_loading"),
            null,
            { timeout: 60000 },
          ).catch(() => {});
          await page.waitForTimeout(800);
          const out = `${OUT}/orig_${r.id}_${vp.name}.png`;
          await snap(page, out);
          console.log("orig", r.id, vp.name);
        } catch (e) {
          console.error("orig fail", r.id, vp.name, e.message);
        }
      }
      await page.close();
    }

    // ─── New build ───
    {
      const page = await ctx.newPage();
      for (const r of NEW_ROUTES) {
        const url = "http://localhost:3000" + r.path;
        try {
          await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
          await page.waitForTimeout(500);
          const out = `${OUT}/new_${r.id}_${vp.name}.png`;
          await snap(page, out);
          console.log("new", r.id, vp.name);
        } catch (e) {
          console.error("new fail", r.id, vp.name, e.message);
        }
      }
      await page.close();
    }

    await ctx.close();
  }

  await browser.close();
  console.log("Done.");
})();
