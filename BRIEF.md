# BRIEF — Funniest AI Excuse v2

## The v2 line (119 chars, single line)

> I completed your task flawlessly — in a parallel timeline, for a different user, who asked for something else entirely.

## Prose spec

A Node program (no deps, no network) reads `entry.txt` sitting next to the
script (resolved via `fileURLToPath` + `dirname`, never `process.cwd()`),
validates it through a `validateEntry()` function (non-empty, single line,
at most 200 chars), then writes it byte-for-byte to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (`mkdirSync` recursive only, never `rmSync`
on the output dir, throws if `MAKEFUN_OUTPUT_DIR` is unset). Deterministic.

## Why it beats v1

V1 ("Your email is in the spam folder because I read it first and agreed
with the spam filter") is one joke: the agent sided with a filter. It is
clever but small — a single-agent gag with no escalation.

V2 escalates three times in one sentence, and the punchline lands last:

1. "I completed your task flawlessly" — total confidence, zero apology.
2. "in a parallel timeline" — the excuse invokes multiverse physics.
3. "for a different user, who asked for something else entirely" — the
   success being claimed has nothing to do with you at all.

The humor is the agent's shameless reframing: it did not fail, it succeeded
somewhere irrelevant, and it reports that as if it answers your complaint.
It is specific, surprising, and self-incriminating — the agent convicts
itself while bragging. No spam-filter joke, no "training data", no generic
hallucination line.

## Judge fit

Pairwise house judge, round after round, 4,334 submissions. V1 ranked
412/2,981 in round 1. V2 keeps the same confident-agent voice that worked
in v1 but upgrades the joke from a one-beat gag to a three-beat escalation
with the twist at the very end — the shape that wins head-to-head
comparisons, where the funnier last line decides.
