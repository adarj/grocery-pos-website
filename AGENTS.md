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
**M1.3 — Design Tokens & Reusable Primitives: AUTHORIZED.** M1.3.1 tokens are
accepted, merged and qualified on main (30/30); see the
[token record](docs/engineering/m1-3-1-token-qualification.md).
The [M1.3.2 assessment](docs/engineering/m1-3-2-primitives-qualification.md)
retains existing CSS patterns and ReScript composition; no additional component
extraction is presently justified. Human scope review and exact-commit remote CI
remain pending for this documentation-only candidate. M1.3 is not complete;
do not begin M1.3.3 or M1.4.
Follow the [M1 plan](docs/engineering/milestone-1-plan.md) and approved
[design-system specification](docs/design/design-system-specification.md).
The [shell record](docs/engineering/m1-2-shell-qualification.md) preserves audit/CI
history, resolved A12-01/A12-02 and final main qualification. Keep navigation limited
to eligible destinations; make identity current-state handling route-aware before
the first public child route. M1.4, public product claims and deployment are not authorized.
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
