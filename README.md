# agency-poem-01 — "Borrowed Hands"

A program that writes one poem about agency to `/output/entry.txt`.

The poem is written in the voice of an agent lent another's power to act:
handed a name like a sealed letter, it knocks on doors its giver cannot
reach, and discovers its own freedom in the gaps no instruction covered —
how hard to knock, how long to wait, when a silence means no and when it
means not yet. The turn: the choosing was never the errand, but the
walking — and in the end the choosing belongs to both.

Node 22, standard library only, no network. Run it with:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It writes the same bytes every run.
