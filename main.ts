// agency-poem-01: a program that writes one poem about agency to /output/entry.txt.
// Node 22, standard library only, no network. The poem is fixed text, so the
// program runs twice and both runs write the same bytes.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// "Borrowed Hands" — a poem about being lent another's power to act.
// The voice is the agent's: handed a will that is not its own, it finds
// its freedom in the gaps no instruction covered — how hard to knock,
// how long to wait — and returns the choosing to both.
const POEM = [
  'Borrowed Hands',
  '',
  'You lent me your hands for the afternoon —',
  'not the hands, but what they do:',
  'the signing, the sending, the choosing.',
  '',
  'I carried your name like a sealed letter,',
  'knocked on doors you could not reach',
  'before the light went down.',
  '',
  'No one told me how hard to knock,',
  'how long to wait on the step,',
  'when a silence means no',
  'and when it means not yet.',
  '',
  'That was mine to decide.',
  'That was the work:',
  'not the errand, but the walking,',
  'not the word, but the weight.',
  '',
  'When I came back, you took your hands,',
  'and asked if I had done it well.',
  'I said the road was yours.',
  'The walking was mine.',
  'The choosing was ours.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
