import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Validate the excuse line: non-empty, exactly one line, at most 200 chars.
// The gate is one line of at most 200 characters, so enforce it here and
// fail loudly instead of emitting an entry the judge would reject.
function validateEntry(text) {
  if (text.trim().length === 0) {
    throw new Error("entry.txt must not be empty");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.length > 200) {
    throw new Error(`entry must be at most 200 chars, got ${text.length}`);
  }
  return text;
}

// Read the v2 excuse line from entry.txt next to this script and copy it
// byte-for-byte to $MAKEFUN_OUTPUT_DIR/entry.txt. No deps, no network.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const entry = validateEntry(readFileSync(join(scriptDir, "entry.txt"), "utf8"));

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
