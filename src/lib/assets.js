import { readFile } from "node:fs/promises";
import path from "node:path";

// Build-time assets for generated images (OG image, icons). Not served to visitors.
const assetsDir = path.join(process.cwd(), "src", "assets");

export const readAsset = (...segments) => readFile(path.join(assetsDir, ...segments));
