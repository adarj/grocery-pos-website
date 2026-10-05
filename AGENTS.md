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
- Never hand-edit generated ReScript JavaScript. Output is normally untracked;
  M0.2 must prove its suffix and compiler configuration before ignore rules expand.
- Grow verification with risk. Use canonical `just` commands once M0.2 establishes
  them; do not invent executable commands during this checkpoint.
- Once Next is installed, read installed, version-matched Next documentation
  before framework work. If the package does not provide it, use official docs
  matching the installed version and record the limitation; no such docs exist here yet.
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

M0.1 is documentation only. Do not scaffold the app, install packages, create
build/tooling configuration, or alter global Codex/MCP configuration.

Do not commit, push, merge, rebase, reset, tag, create releases, force-update refs,
perform destructive Git operations, or create/modify GitHub remotes. Safe Git
status/diff/read operations are allowed. A later explicit human instruction is
required to authorize an exception; M0.1 authorizes none. Leave implementation,
validation results, and a suggested commit message for human review.
