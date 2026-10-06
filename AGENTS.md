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
- Internationalization is architectural. Language, formatting locale, market,
  currency, and tax jurisdiction are distinct; English implies neither US nor USD.
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

M0.3 proves application/source boundaries with fictional capability data. Do not
expand into M0.4 routing/i18n, a production ledger, providers, or product/design work.
Use the [source layout](docs/architecture/source-layout.md) for placement and interfaces.
Do not alter global Codex/MCP configuration.
Nix must already work in the outer Linux environment; never bootstrap a substitute.

Do not commit, push, merge, rebase, reset, tag, create releases, force-update refs,
perform destructive Git operations, or create/modify GitHub remotes. Safe Git
status/diff/read operations are allowed. A later explicit human instruction is
required to authorize an exception; M0.3 authorizes none. Do not stage, cherry-pick,
or create/delete/switch branches. Leave implementation,
validation results, and a suggested commit message for human review.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
