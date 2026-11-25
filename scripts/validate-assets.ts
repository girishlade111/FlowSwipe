import fs from "node:fs";
import crypto from "node:crypto";
import sharp from "sharp";

interface AssetEntry {
  id: string;
  sourceUrl: string;
  mimeType: string;
  localPath: string;
  acquisitionStatus: string;
  sha256: string;
  originalWidth: number;
  originalHeight: number;
  hasTransparency: boolean;
}

async function main() {
  const manifest: AssetEntry[] = JSON.parse(
    fs.readFileSync("docs/research/asset-manifest.json", "utf8")
  );
  let valid = 0;
  let errors = 0;
  const seenHashes = new Map<string, string>();

  for (const item of manifest) {
    if (!item.localPath || !fs.existsSync(item.localPath)) {
      console.error(`MISSING: ${item.id} -> ${item.localPath}`);
      errors++;
      continue;
    }
    const buf = fs.readFileSync(item.localPath);
    const hash = crypto.createHash("sha256").update(buf).digest("hex");
    if (hash !== item.sha256) {
      console.error(`CHECKSUM MISMATCH: ${item.id}`);
      errors++;
      continue;
    }
    if (!seenHashes.has(hash)) seenHashes.set(hash, item.localPath);

    const head = buf.slice(0, 64).toString("utf8").trimStart();
    if (head.startsWith("<!DOCTYPE html") || head.startsWith("<html")) {
      console.error(`HTML ERROR PAGE SAVED AS MEDIA: ${item.localPath}`);
      errors++;
      continue;
    }

    if (!item.localPath.endsWith(".svg")) {
      try {
        const meta = await sharp(buf).metadata();
        if (!meta.width || !meta.height) {
          console.error(`INVALID DIMENSIONS: ${item.localPath}`);
          errors++;
          continue;
        }
      } catch (e: any) {
        console.error(`DECODE ERROR: ${item.localPath} -> ${e.message}`);
        errors++;
        continue;
      }
    }
    valid++;
  }

  console.log(`Validation complete: ${valid}/${manifest.length} valid, ${errors} errors, ${seenHashes.size} unique binaries.`);
  if (errors > 0) process.exit(1);
}

main();
