# Repository constitution

This is the Grocery POS **website**, not the operational Manager application.
Read the [documentation map](docs/README.md) and the task-specific guide below.
Accepted [ADRs](docs/adr/README.md) govern foundational choices; report concrete
contradictions rather than silently substituting another architecture.

## Durable rules

- Next App Router owns routing and framework rendering semantics. Keep route
  entrypoints thin; do not add a parallel client router.
- ReScript is the default for domain/application logic and reusable application/UI
  behavior where practical. Thin TS/TSX framework files and bounded TypeScript
  provider adapters are appropriate; neither language is a ceremonial wrapper.
- Server Components/server rendering are the default; use static rendering where
  appropriate. `"use client"` requires actual browser interaction, state, effects,
  or APIs. A global client provider also requires a concrete need.
- Validate external data at entry boundaries. UI must not directly manipulate
  Grocery cloud persistence; Grocery-owned API/application boundaries enforce
  commercial authority.
- Keep secrets and privileged adapters out of client code. Component location or
  hidden UI never establishes authorization.
- Accessibility is correctness: target WCAG 2.2 AA, and prefer semantic HTML and
  native controls before custom abstractions.
- Internationalization is architectural. `/[lang]` uses the typed language registry;
  pseudo content is qualification-only. Use typed messages for implemented UI text.
  Language, formatting locale, market, currency, tax jurisdiction, and direction
  are distinct; English implies neither US nor USD.
- Public claims require evidenced product maturity and separate authoritative
  publication/disclosure approval. Withhold information without that approval;
  follow the [capability claims policy](docs/product/public-capability-claims.md).
- Use standards-based CSS and a small first-party design system. Do not introduce
  Tailwind or a major UI framework without revisiting the recorded decision.
- Never hand-edit generated ReScript `.res.mjs` or GenType `.gen.tsx` files.
  They and ReScript `lib/` build state are ignored and regenerated before builds.
- Grow verification with risk. Use canonical `just` commands; dependency and browser
  installation remain explicit. Read the [toolchain record](docs/engineering/toolchain.md).
- Development mode is not the complete Next route/type acceptance gate. Run
  `just typecheck` after consequential framework/route changes and before checkpoint completion.
- Before Next.js-specific implementation, consult the relevant version-matched
  documentation under `node_modules/next/dist/docs/`.
- Complexity and dependencies require demonstrated need. Avoid large route files,
  generic `lib/` dumping grounds, and abstractions created only to fill a diagram.

## Task router

| Task | Read |
| --- | --- |
| Layers, framework seams, providers, tooling | [Architecture](docs/agents/architecture.md) |
| Test selection and verification | [Testing](docs/agents/testing.md) |
| Language, formatting, translations, RTL | [Internationalization](docs/agents/internationalization.md) |
| Markup, controls, interaction, visual behavior | [Accessibility](docs/agents/accessibility.md) |
| Inputs, secrets, integrations, accounts | [Security](docs/agents/security.md) |
| Marketing and capability descriptions | [Content claims](docs/agents/content-claims.md) |
| Repository changes and reporting | [Git workflow](docs/agents/git-workflow.md) |

## Checkpoint and Git limits

Milestone 0 is accepted and M1 authorized; see the
[qualification record](docs/engineering/milestone-0-qualification.md).
M1.1 specifications and the M1.2 internal engineering-preview shell are accepted,
merged and qualified on main. The maintainer confirmed completed visual review,
formal M1.2 acceptance and M1.3 authorization on October 8, 2026 (UTC).
**M1.3 — Design Tokens & Reusable Primitives: FORMALLY ACCEPTED October 8, 2026 (UTC).** M1.3.1 tokens are
accepted, merged and qualified on main (30/30); see the
[token record](docs/engineering/m1-3-1-token-qualification.md).
The [M1.3.2 no-extraction decision](docs/engineering/m1-3-2-primitives-qualification.md)
is human-accepted October 8, 2026 (UTC), merged and qualified on main (30/30).
M1.3.3 is merged and qualified on main (30/30), with adversarial audit PASS.
M1.3.4's historical CONDITIONAL PASS — ACCEPTANCE GATES OUTSTANDING is preserved;
its gates were subsequently resolved by five human-reported PASS observations,
three explicitly approved M1.5 deferrals and merged closeout qualification.
The canonical [acceptance record](docs/engineering/m1-3-3-design-system-qualification.md#formal-m13-acceptance-2026-10-08-utc)
records the maintainer's explicit formal decision and signed main closeout
`ad69f632129231bb2604a3a71678ac959900046c`, run 37827607606 (30/30).
At M1.3 acceptance, D13-01–D13-03 were **DEFERRED, UNVERIFIED — M1.5**;
the later scoped human observations and accepted limitations are recorded in
the M1.5.2 acceptance linked below.
**M1.4 — Reviewed Templates & Content: FORMALLY ACCEPTED AND COMPLETE October 9, 2026 (UTC).**
**M1.4.1 — Content Readiness & Publication Matrix: FORMALLY ACCEPTED October 8, 2026 (UTC).**
The [content-readiness acceptance record](docs/product/m1-4-1-content-readiness.md#formal-m141-acceptance-2026-10-08-utc) owns candidate pages,
evidence, unresolved maturity and separate disclosure decisions.
**M1.4.2 — First Reviewed Homepage Template: FORMALLY ACCEPTED October 8, 2026 (UTC).**
Acceptance covers only the exact four statements, composition and metadata in the
[post-acceptance approval](docs/product/m1-4-1-content-readiness.md#post-acceptance-homepage-approval-2026-10-08-utc).
The [formal homepage acceptance record](docs/engineering/m1-4-2-homepage-qualification.md#formal-m142-acceptance--october-8-2026-utc)
owns signed main commit `017fa33125310fb2d6bbc3bcd517ce9af738254d`, run
37848845430 (30/30 and source cleanliness), the preserved conditional audit,
resolved A142-01 and human-accepted A142-02 retirement. Before the next real
application client island, restore applicable production-browser hydration,
activation, state-update, keyboard and retained-focus coverage; SSR alone is not
interaction evidence. The maintainer approved no additional content or navigation
October 8, 2026 (UTC); the [scope-closeout decision](docs/engineering/milestone-1-plan.md#m14-no-expansion-scope-closeout--october-8-2026-utc)
preserves that chronology. The [formal M1.4 acceptance](docs/engineering/milestone-1-plan.md#formal-m14-acceptance--october-9-2026-utc)
records the October 9, 2026 (UTC) decision, signed closeout
`8729179ee18b0d154d8fa63b144d1d98212f8f39` and successful main run
37877425523 (30/30 and source cleanliness). **M1.4.3 — Additional Reviewed Content
& Navigation: REVIEWED AND DEFERRED; NO IMPLEMENTATION AUTHORIZED.** Its deferral
is part of the accepted M1.4 scope, not implemented work.
**M1.5 — Final Qualification: AUTHORIZED October 9, 2026 (UTC); IN PROGRESS.**
**M1.5.1 — Qualification Baseline & Adversarial Review: FORMALLY ACCEPTED October 9, 2026 (UTC).**
The [formal acceptance record](docs/engineering/m1-5-1-qualification-baseline.md#formal-m151-acceptance--october-9-2026-utc)
owns the independent audit PASS, signed implementation and exact-commit main CI.
**M1.5.2 — Accessibility & Performance Qualification: FORMALLY ACCEPTED AND COMPLETE October 9, 2026 (UTC).**
The [formal acceptance record](docs/engineering/m1-5-2-qualification-results.md#formal-m152-acceptance--october-9-2026-utc)
owns the maintainer's explicit decision, signed main integration
`b5c090709145d3fc48efef0f12e3aa8630f7d07e`, successful exact-SHA main run
37978959204, independent audit PASS outcomes and scoped human observations.
Windows forced-colors remains **UNVERIFIED**; its absence and the missing
manual-test provenance metadata are human-accepted bounded limitations for
this homepage. Acceptance establishes neither Windows compatibility nor WCAG
conformance. M1.5 remains **IN PROGRESS, NOT FORMALLY COMPLETE**; M1 is
**NOT FORMALLY COMPLETE**. Signed M1.5.2 acceptance-record commit
`335a31187284956f2a8eb6e23deecee0e12ed3fe` is integrated on main and
[run 37981808698](https://github.com/adarj/grocery-pos-website/actions/runs/37981808698)
passed on that exact SHA.
**M1.5.3 — NO-CORRECTION CLOSEOUT PROPOSED; FORMAL HUMAN ACCEPTANCE PENDING.**
The [post-integration reconciliation](docs/engineering/m1-5-3-correction-assessment.md#post-integration-ci-and-independent-audit-reconciliation)
retains **A — NO CORRECTION JUSTIFIED** and records signed main assessment
`f2db122136675e21133cb4c3c0443d87f6dd41b2` with successful exact-SHA
[run 38042793882](https://github.com/adarj/grocery-pos-website/actions/runs/38042793882).
The independent audit returned **CONDITIONAL PASS — A153A-01 MINOR correction required**.
A153A-01 is corrected in this documentation candidate; independent follow-up
confirmation and formal human acceptance remain pending. This correction's
eventual signed commit requires its own exact-SHA CI.
**Corrective application implementation remains NOT AUTHORIZED.**
No public release or deployment is authorized; other claim subjects and
P02–P08 remain withheld.
Follow the [M1 plan](docs/engineering/milestone-1-plan.md) and approved
[design-system specification](docs/design/design-system-specification.md).
The [shell record](docs/engineering/m1-2-shell-qualification.md) preserves audit/CI
history, resolved A12-01/A12-02 and final main qualification. Keep navigation limited
to eligible destinations; make identity current-state handling route-aware before
the first public child route. No additional route, claim, asset or deployment is authorized.
The maintainer approved ESLint retention at M1.2, satisfying its first-implementation
review. Retain all exception controls; review targeted lint-stack updates and no
later than January 8, 2027 unless explicitly revised.
Use `just check` locally and `just ci` on a supported full browser runtime for
implementation; documentation changes need links, whitespace and scope checks.
Real translations, production ledgers and provider integrations remain outside this scope.
Use the [source layout](docs/architecture/source-layout.md) for placement and interfaces.
Do not alter global Codex/MCP configuration.
Nix must already work in the outer Linux environment; never bootstrap a substitute.

Do not commit, push, merge, rebase, reset, tag, create releases, force-update refs,
perform destructive Git operations, or create/modify GitHub remotes. Safe Git
status/diff/read operations are allowed. A later explicit human instruction is
required to authorize an exception; this slice authorizes no Git mutation. Do not stage, cherry-pick,
or create/delete/switch branches. Leave implementation,
validation results, and a suggested commit message for human review.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
