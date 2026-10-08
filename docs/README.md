# Documentation map

M0.1–M0.5 are complete: constitution, toolchain, source boundaries, typed language
routing/messages, and quality/security/CI gates. Main run 37721922700 qualifies the
merged M0.5 cleanup on Ubuntu x86_64 with all three browsers.
The [Milestone 0 qualification record](engineering/milestone-0-qualification.md)
owns M0.6 findings, proposed maintenance exceptions, and final acceptance status.
Detailed CI history remains in [quality and CI](engineering/quality-and-ci.md).
Architectural choices are policy, not evidence that product features exist.

| Question | Canonical document |
| --- | --- |
| What is this repository and its next checkpoint? | [Root README](../README.md) |
| Is the engineering foundation qualified for M1? | [Milestone 0 qualification](engineering/milestone-0-qualification.md) |
| How does the eventual website fit together? | [Architecture overview](architecture/website-architecture.md) |
| Where does source code belong? | [Source layout and application boundary](architecture/source-layout.md) |
| How do languages, messages, and pseudo qualification work? | [Internationalization foundation](architecture/internationalization.md) |
| Why were foundational choices made? | [ADR index](adr/README.md) |
| How should engineering tradeoffs be made? | [Development principles](engineering/development-principles.md) |
| How do I run and qualify the spike? | [Toolchain record](engineering/toolchain.md) |
| What do local and CI acceptance gates run? | [Quality and CI](engineering/quality-and-ci.md) |
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
