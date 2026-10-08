# Documentation map

Milestone 0 was formally accepted and M1 authorized on October 8, 2026 (UTC);
main run 37727162386 qualifies the merged foundation on all three browser engines.
The [qualification record](engineering/milestone-0-qualification.md) owns acceptance,
evidence and the approved bounded ESLint exception. Detailed CI history remains in
[quality and CI](engineering/quality-and-ci.md).
M1.1 specifications were human-approved October 8, 2026 (UTC); the independent
audit and feature CI run 37728971554 pass. Main run 37749346349 qualifies the merged
specifications. The [M1 plan](engineering/milestone-1-plan.md#m11-approval-and-qualification-record)
owns that record and the approved M1.2 scope. The
[internal-preview shell record](engineering/m1-2-shell-qualification.md) owns local
and feature qualification history, the original adversarial CONDITIONAL PASS,
resolved A12-01/A12-02 and final main run 37780086710 (27/27). The maintainer
confirmed completion of visual review, formal M1.2 acceptance and ESLint retention
approval on October 8, 2026 (UTC). **M1.3 — Design Tokens & Reusable Primitives:
AUTHORIZED; implementation not started.** The approved M1 plan and design-system
specification govern its scope; M1.4 is not authorized. Architecture,
templates and proposed URLs
are not publication approval or evidence of commercially released features.

| Question | Canonical document |
| --- | --- |
| What is this repository and its next checkpoint? | [Root README](../README.md) |
| Is the engineering foundation qualified for M1? | [Milestone 0 qualification](engineering/milestone-0-qualification.md) |
| Who is the website for, and how should pages/navigation work? | [Website information architecture](product/website-information-architecture.md) |
| What visual direction is approved? | [Visual direction](design/visual-direction.md) |
| What are the first-party presentation/accessibility contracts? | [Design-system specification](design/design-system-specification.md) |
| What was accepted and qualified in M1.2, and which limits remain? | [Engineering-preview shell](engineering/m1-2-shell-qualification.md) |
| What are the M1 scopes, approval record and checkpoint gates? | [Milestone 1 plan](engineering/milestone-1-plan.md) |
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
