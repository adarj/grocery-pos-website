# Documentation map

M0.1 records the constitution; M0.2 qualifies the toolchain; M0.3 proves source boundaries;
M0.4 establishes typed language routing and messages.
Architectural choices are policy, not evidence that product features exist.

| Question | Canonical document |
| --- | --- |
| What is this repository and its next checkpoint? | [Root README](../README.md) |
| How does the eventual website fit together? | [Architecture overview](architecture/website-architecture.md) |
| Where does source code belong? | [Source layout and application boundary](architecture/source-layout.md) |
| How do languages, messages, and pseudo qualification work? | [Internationalization foundation](architecture/internationalization.md) |
| Why were foundational choices made? | [ADR index](adr/README.md) |
| How should engineering tradeoffs be made? | [Development principles](engineering/development-principles.md) |
| How do I run and qualify the spike? | [Toolchain record](engineering/toolchain.md) |
| What verification will be introduced? | [Testing strategy](engineering/testing-strategy.md) |
| What security rules apply already? | [Security baseline](engineering/security-baseline.md) |
| What are accessibility and performance expectations? | [Accessibility and performance](engineering/accessibility-and-performance.md) |
| Which choices are deliberately open? | [Deferred decisions](engineering/deferred-decisions.md) |
| Which features belong in Manager? | [Product boundary](product/website-vs-manager.md) |
| What may public copy claim? | [Capability claims policy](product/public-capability-claims.md) |
| How should agents work? | [AGENTS.md](../AGENTS.md) and its task router |

Keep rationale in ADRs, expectations in engineering/product documents, and task
instructions in agent guides. Link to the canonical policy instead of duplicating
an essay. When changing a decision, update affected guidance and links together.
Use a superseding ADR for a material architecture change; preserve its history.
