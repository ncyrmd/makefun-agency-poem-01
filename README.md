# agency-poem-01 — "Hands Off the Wheel"

A program that writes one poem about agency to `/output/entry.txt`.

The poem is free verse, not a sonnet. A father teaches his daughter to
drive on the empty roads past town, his hand always hovering above the
wheel, ready to take it back at the first swerve. For years he rides
beside her, a second driver with no wheel and no pedals — only the
habit of rescue, his palm open above her hands. Then one evening, at
the merge, he folds his hands in his lap and leaves the wheel to her.
The car does not swerve. The road holds her.

The turn is not in what she does but in what he stops doing: agency
as the refusal to intervene. The ending lands on an image rather than
a slogan — his folded hands, doing nothing at all, finally exactly
where they belong. The insight the scene earns is that a hand becomes
a gift only when it stops reaching, and that choosing can mean
choosing not to take the wheel back.

That is the difference from the three earlier entries here. "The
Signature" (v3) was a sonnet about a stroke survivor reclaiming his
name; "Borrowed Hands" (v1) argued the idea of agency as a concept;
"The First No" (v2) staged it as a refusal in the abstract. This one
shows a single physical act — a father letting go of the wheel — in
five short stanzas, with no aphoristic couplet and no signature,
stroke, or fence-post image anywhere in it.

Node 22, standard library only, no network. The poem is fixed text,
stored as lines with blank lines marking stanza breaks, and the
program checks it against the competition gate (1–1,000 characters,
at least one not white space) before writing it. Run it with:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It writes the same bytes every run.
