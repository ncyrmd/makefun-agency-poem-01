// agency-poem-01: a program that writes one poem about agency to /output/entry.txt.
// Node 22, standard library only, no network. The poem is a fixed string, so
// every run writes exactly the same bytes.

// "The Signature" — a sonnet about agency taken back. After a stroke, a
// father's hand forgets how to sign his own name, and for weeks the nurses
// sign for him. One morning, alone, he takes the pen and draws his name the
// way a child draws a house — slow, crooked, leaning — and the signature
// that comes out is not the old one. It is better: every letter a decision,
// every stroke a choice. The turn: the hand had not forgotten; it had been
// waiting for him to ask it back. The couplet lands the insight: a name is
// the smallest country you own.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem as a sonnet: a title, three quatrains and a closing couplet.
// Blank lines separate the blocks. The volta falls in the third quatrain,
// where the failed signature turns out to be the better one.
const STANZAS: string[] = [
  `The Signature`,
  `After the stroke, my father's hand forgot its name.
The pen fell. The line went where it wanted.
For weeks the nurses signed for him — small,
neat signatures, none of them his.`,
  `Then one morning, alone, he took the pen
and drew his name the way a child draws a house:
slow, crooked, the letters leaning on each other
like fence posts after a storm.`,
  `It wasn't his signature. It was better:
every letter a decision, every stroke a choice.
The hand had not forgotten. It had been waiting
for him to ask it back.`,
  `He signed the form. The form believed him.
A name is the smallest country you own.`,
];

const POEM = STANZAS.join('\n\n');

// The sealed scorer's gate: UTF-8 text of 1 to 1,000 characters (counted
// as code points), at least one of them not white space. Fail loudly
// rather than write an invalid entry.
function assertGate(poem: string): void {
  const length = [...poem].length;
  if (length < 1 || length > 1000 || !/\S/.test(poem)) {
    throw new Error(`poem fails the gate: ${length} characters`);
  }
}

assertGate(POEM);

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
