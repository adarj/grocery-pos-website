# Git workflow for agents

Codex must not **commit, push, merge, rebase, reset, tag, create a release,
force-update refs, or perform destructive Git operations** unless the human
explicitly requests otherwise. Do not create/modify GitHub remotes or external
repository state without an explicit instruction. M0.1 forbids all these actions;
no exception is authorized by this checkpoint.

Safe read-only/status/diff commands are allowed. Inspect the baseline first,
preserve existing work, and report an uninitialized repository rather than silently
creating it. Do not stage changes merely to make a documentation diff visible.

```text
checkpoint prompt
  ↓
Codex implementation
  ↓
Codex report
  ↓
review/adversarial review
  ↓
human manual review
  ↓
human signed commit
```

The report records changed paths, decisions/deviations, validation and limitations,
and final Git state. Run `git diff --check` and `git status --short`; remember a
normal diff omits untracked files, so inspect/check new files separately. Confirm
that no prohibited Git/ref/remote operation occurred. Offer a Conventional Commit
message only; the human owns the signed commit and subsequent push.
