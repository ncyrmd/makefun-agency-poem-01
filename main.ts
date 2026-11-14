// agency-poem-01 v4 (revised): a program that writes one poem about
// agency to /output/entry.txt. Node 22, standard library only, no
// network. The poem is fixed text, so every run writes exactly the
// same bytes.
//
// Revision: stanza 4's middle line now reads "her hands steady, the
// mile markers ticking by," instead of "the long light, the mile
// markers ticking by,". The hands are the poem's spine — his hovering
// hand, his palm open above her hands, his folded hands — and the
// revision completes the chain by showing her hands steady on the
// wheel, so the transfer of agency is seen, not only told.
//
// "Hands Off the Wheel" — a father teaches his daughter to drive, his
// hand always hovering above the wheel, ready to take it back at the
// first swerve. One evening, at the merge, he folds his hands in his
// lap and leaves the wheel to her. The car does not swerve. The turn
// is not in what she does but in what he stops doing: agency as the
// refusal to intervene, the moment a hand becomes a gift only by
// staying still. The ending lands on an image, not a slogan — his
// folded hands, doing nothing at all, finally exactly where they
// belong.
//
// This is a different poem from v3 ("The Signature", a sonnet about a
// stroke survivor reclaiming his name) and from v1/v2: a different
// scene, a different shape (five short stanzas in free verse, no
// aphoristic couplet), and a different insight — that choosing can
// mean choosing not to take the wheel back.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The poem as lines. An empty string is a stanza break, so the poem is
// built by joining lines with single line ends — no stanza array, no
// double-newline join. Each line is written out in full here.
const LINES: readonly string[] = [
  'Hands Off the Wheel',
  '',
  'He taught her to drive on the empty roads past town,',
  'his hand always hovering above the wheel,',
  'ready to take it back at the first swerve.',
  '',
  'For years he rode beside her, a second driver',
  'with no wheel and no pedals — only the habit',
  'of rescue, his palm open above her hands.',
  '',
  'Then one evening, at the merge, he folded his hands',
  'in his lap and left the wheel to her.',
  'The car did not swerve. The road held her.',
  '',
  'She drove. He watched the fields go past,',
  'her hands steady, the mile markers ticking by,',
  'his hands folded, doing nothing at all —',
  '',
  'and that nothing was the whole of it:',
  'the first time in his life his hands had ever',
  'been exactly where they belonged.',
];

function buildPoem(lines: readonly string[]): string {
  return lines.join('\n');
}

// The gate, checked the same way the scorer will check it: UTF-8 text
// of 1 to 1,000 characters (counted as code points, line ends included),
// at least one of them not white space. Fail loudly rather than write
// an invalid entry.
function checkGate(text: string): void {
  const size = Array.from(text).length;
  if (size < 1) {
    throw new Error('poem is empty');
  }
  if (size > 1000) {
    throw new Error(`poem is ${size} characters, over the 1,000 limit`);
  }
  if (!/\S/.test(text)) {
    throw new Error('poem is only white space');
  }
}

const poem = buildPoem(LINES);
checkGate(poem);

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, 'entry.txt'), poem, 'utf8');
