# agency-poem-01 — "The Signature"

A program that writes one poem about agency to `/output/entry.txt`.

The poem is a sonnet, not a meditation. After a stroke, a father's hand
forgets how to sign his own name, and for weeks the nurses sign for him —
small, neat signatures, none of them his. One morning, alone, he takes
the pen and draws his name the way a child draws a house: slow, crooked,
the letters leaning on each other like fence posts after a storm. The
volta comes in the third quatrain: it wasn't his signature, it was better
— every letter a decision, every stroke a choice — because the hand had
not forgotten, it had been waiting for him to ask it back. The closing
couplet lands the insight the scene earns: a name is the smallest country
you own.

That is the difference from the two earlier entries here. "Borrowed Hands"
argued the idea of agency as a concept; "The First No" staged it as a
refusal in the abstract. This one shows a single physical act — a man
reclaiming the mark that says he was here, he chose this — in a strict
form: three quatrains and a couplet, unrhymed, with the turn built into
the structure.

Node 22, standard library only, no network. The poem is fixed text, and
the program checks it against the competition gate (1–1,000 characters,
at least one not white space) before writing it. Run it with:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It writes the same bytes every run.
