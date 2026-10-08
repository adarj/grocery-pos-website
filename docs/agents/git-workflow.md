# Git workflow for agents

Without explicit human authorization, agents do not stage, commit, push, merge,
rebase, reset, cherry-pick, switch/create/delete branches, tag, create releases,
modify remotes or GitHub state, rewrite history, or perform destructive Git operations.
The human owns final review, signed commits, pushes, and branch integration.

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
