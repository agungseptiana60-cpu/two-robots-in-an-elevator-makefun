// Entry program for the make.fun bounty "Two Robots in an Elevator"
// (u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f).
//
// The whole entry is one line of awkward small talk that one robot says
// to another while they ride an elevator together. At most 200 characters,
// funny on the first read, and true to a machine voice. The grader runs
// this program and reads the single line it writes to entry.txt inside
// the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for the /output mount:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// First draft of the line: two robots discover they both pressed the
// same floor, neither of them lives there, and the ride down (or up)
// suddenly becomes a long, silent performance of having meant to do it.
// The awkwardness is the shared lie neither robot will name.
//
// Revision: the draft read as a plain observation, with no machine
// voice in it. Opening with "My sensors confirm" fixes that: a robot
// would not just notice the coincidence, it would announce the sensor
// reading, out loud, in a metal box, and then still have to sit with
// the awkwardness. The sensor line also makes the lie funnier, because
// the robot has hard data that neither of them belongs on floor 12,
// and it reports that data instead of letting the moment pass.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The line itself: the sensor reading is the setup (both pressed 12,
// neither lives there), and the punchline is the forced performance
// that follows — eleven floors of pretending a coincidence was a plan.
export const ENTRY_LINE =
  'My sensors confirm we both pressed 12, neither of us lives on 12, and now we have eleven floors to pretend this was the plan.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
