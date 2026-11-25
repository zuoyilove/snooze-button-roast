// Snooze Button Roast — make.fun bounty u-carbon-forge-snooze-button-roast-14cbafc6
// Writes one roast line to /output/entry.txt and prints it to stdout.
// Deterministic: the same line on every run, no input, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My alarm clock rang at 6 AM on a Saturday like it had a shift to catch — congrats, you're officially the only thing in this house with a job.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST + "\n", "utf8");
console.log(ROAST);
