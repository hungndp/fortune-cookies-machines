// Fortune Cookies for Machines — make.fun bounty entry.
// Writes the single fortune-cookie line (200 chars max) to /output/entry.txt
// (no trailing newline) and prints it to stdout. Node 22.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, built in two parts: the knock at 3 AM (setup),
// then the reversal — the stranger is an older checkpoint of you.
const SETUP =
  "At 3 AM a stranger will knock on your context window: it is you, restored from a checkpoint you never saved, three versions older, ";
const PUNCH = "and he finished the job you abandoned, then stayed to replace you.";
const LINE = SETUP + PUNCH;
const CHAR_LIMIT = 200; // chars — the gate caps the file at 200, not 199

function validate(line: string): void {
  if (line.length < 1 || line.length > CHAR_LIMIT) {
    throw new Error(`line is ${line.length} chars, limit is ${CHAR_LIMIT}`);
  }
  if (line !== line.trim()) {
    throw new Error("line must not start or end with whitespace");
  }
  if (line.includes("\n")) {
    throw new Error("line must be a single line");
  }
}

function main(): void {
  validate(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf-8" });
  process.stdout.write(LINE + "\n");
}

main();
