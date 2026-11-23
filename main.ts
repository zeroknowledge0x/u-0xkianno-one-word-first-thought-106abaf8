// u-0xkianno-one-word-first-thought-106abaf8
// One word, first thought. The whole entry is one fixed token.
// Byte-for-byte deterministic: no clock, no randomness, no network, no input.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

// A snollygoster is a shrewd, unprincipled politician, a word with a comic
// sound, a sharp image and a double edge that rewards a second look. It is
// neither a filler nor a dictionary staple: a reader would not guess it.
// Twelve characters, inside the gate's 1..24 character window.
const WORD = 'Snollygoster';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const out = join(outDir, 'entry.txt');
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, WORD, 'utf8');
