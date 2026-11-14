# agency-poem-01 — "The First No"

A program that writes one poem about agency to `/output/entry.txt`.

The poem is about agency as refusal. A mouth trained to say yes the way
you teach a dog — sit, stay, fetch, come — discovers on one ordinary
Tuesday that it can say no instead, and nothing falls down: the sky stays
up, and the word sits on the table between them, breathing. The turn: a
life its owner thought belonged to everyone else has a handle on the
inside, and it was there all along, waiting for her hand.

Node 22, standard library only, no network. The poem is fixed text, and
the program checks it against the competition gate (1–1,000 characters,
at least one not white space) before writing it. Run it with:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It writes the same bytes every run.
