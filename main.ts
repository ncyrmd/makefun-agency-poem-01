// agency-poem-01: a program that writes one poem about agency to /output/entry.txt.
// Node 22, standard library only, no network. The poem is a fixed string, so
// every run writes exactly the same bytes.

// "The First No" — a poem about agency as refusal. A mouth trained to say
// yes the way you teach a dog discovers, on one ordinary Tuesday, that it
// can say no instead — and nothing falls down. The turn: a life its owner
// thought belonged to everyone else turns out to have a handle on the
// inside, and it was there all along, waiting for her hand.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem, stanza by stanza. Each stanza is one block of lines; the title
// stands on its own at the top, and blank lines separate the blocks.
const STANZAS: string[] = [
  `The First No`,
  `They taught me yes the way you teach a dog —
sit, stay, fetch, come —
until yes was the only word
my mouth knew how to make.`,
  `Then one ordinary Tuesday,
someone asked for a piece of me
I had already given away twice,
and my mouth, without asking me,
said no.`,
  `It came out small and crooked,
a chick breaking its shell from the inside.`,
  `No one fell down. The sky stayed up.
The word sat on the table between us,
breathing.`,
  `That was the day I found it:
my life has a handle on the inside.
It had been there all along,
waiting for my hand.`,
];

const POEM = STANZAS.join('\n\n');

// The gate the sealed scorer applies: UTF-8 text of 1 to 1,000 characters
// (counted as code points), at least one of them not white space. Refuse
// to write anything that fails it rather than emit an invalid entry.
const poemLength = [...POEM].length;
if (poemLength < 1 || poemLength > 1000 || !/\S/.test(POEM)) {
  throw new Error(`poem fails the gate: ${poemLength} characters`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
