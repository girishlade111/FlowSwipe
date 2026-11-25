import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

// Generates non-destructive WebP responsive variants for large raster images (> 1200px wide)
// while preserving original alpha channels and source files untouched.
async function main() {
  const manifest = JSON.parse(fs.readFileSync("docs/research/asset-manifest.json", "utf8"));
  const optimizedDir = "public/assets/optimized";
  fs.mkdirSync(optimizedDir, { recursive: true });

  let generated = 0;
  for (const item of manifest) {
    if (!item.localPath || item.acquisitionStatus !== "acquired") continue;
    if (item.localPath.endsWith(".svg")) continue;
    if ((item.originalWidth || 0) <= 1200) continue;

    const base = path.basename(item.localPath, path.extname(item.localPath));
    const outPath = path.posix.join(optimizedDir, `${base}-960.webp`);
    if (!fs.existsSync(outPath)) {
      await sharp(item.localPath)
        .resize({ width: 960, withoutEnlargement: true })
        .webp({ quality: 88, alphaQuality: 95 })
        .toFile(outPath);
      generated++;
    }
    item.optimizedVariants = [outPath];
  }

  fs.writeFileSync("docs/research/asset-manifest.json", JSON.stringify(manifest, null, 2));
  console.log(`Optimization complete: ${generated} new responsive WebP derivatives generated.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
