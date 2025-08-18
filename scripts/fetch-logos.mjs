import fs from "node:fs";
import path from "node:path";
import https from "node:https";

const CORE_LOGOS = [
  { slug: "openai", label: "OpenAI" },
  { slug: "anthropic", label: "Anthropic" },
  { slug: "google", label: "Google" },
  { slug: "microsoft", label: "Microsoft" },
  { slug: "github", label: "GitHub" },
  { slug: "stripe", label: "Stripe" },
  { slug: "vercel", label: "Vercel" },
  { slug: "supabase", label: "Supabase" },
];

const OUT_DIR = path.resolve("public/logos");
fs.mkdirSync(OUT_DIR, { recursive: true });

function download(url, outPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      const file = fs.createWriteStream(outPath);
      res.pipe(file);
      file.on("finish", () => file.close(resolve));
    }).on("error", reject);
  });
}

(async () => {
  for (const { slug, label } of CORE_LOGOS) {
    const url = `https://cdn.simpleicons.org/${slug}/FFFFFF`;
    const out = path.join(OUT_DIR, `${slug}.svg`);
    process.stdout.write(`↻ ${label} … `);
    try { await download(url, out); console.log("OK"); }
    catch (e) { console.error("FAIL", e.message); }
  }
})();
