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
approval on October 8, 2026 (UTC). **M1.3 — Design Tokens & Reusable Primitives: FORMALLY ACCEPTED October 8, 2026 (UTC).** M1.3.1 tokens are accepted, merged and qualified on main (30/30);
the [token record](engineering/m1-3-1-token-qualification.md) owns that evidence.
The [M1.3.2 no-extraction decision](engineering/m1-3-2-primitives-qualification.md)
was human-accepted October 8, 2026 (UTC), merged and qualified on main (30/30).
M1.3.3 is merged and main-qualified (30/30), with adversarial audit PASS.
The [canonical acceptance record](engineering/m1-3-3-design-system-qualification.md#formal-m13-acceptance-2026-10-08-utc)
records the maintainer's explicit formal decision, signed main closeout
`ad69f632129231bb2604a3a71678ac959900046c` and successful run 37827607606
(30/30 and source cleanliness). M1.3.4's historical CONDITIONAL PASS is preserved;
its human gates were resolved by five human-reported PASS observations and three
explicitly approved deferrals. D13-01–D13-03 remain **DEFERRED, UNVERIFIED — M1.5**.
**M1.4 — Reviewed Templates & Content: AUTHORIZED October 8, 2026 (UTC).**
**M1.4.1 — Content Readiness & Publication Matrix: FORMALLY ACCEPTED October 8, 2026 (UTC).**
The [accepted content-readiness register](product/m1-4-1-content-readiness.md#formal-m141-acceptance-2026-10-08-utc) owns candidate-page
readiness, claim provenance and separate publication decisions. Its
[post-acceptance update](product/m1-4-1-content-readiness.md#post-acceptance-homepage-approval-2026-10-08-utc)
records exact homepage content/metadata approval and M1.4.2 authorization October 8,
2026 (UTC). **M1.4.2 — First Reviewed Homepage Template: FORMALLY ACCEPTED October 8, 2026 (UTC).**
The [formal homepage acceptance record](engineering/m1-4-2-homepage-qualification.md#formal-m142-acceptance--october-8-2026-utc)
owns signed main commit `017fa33125310fb2d6bbc3bcd517ce9af738254d`, successful
run 37848845430 (30/30 and source cleanliness), the historical conditional audit,
resolved findings, human-accepted Counter coverage retirement and human-reported
manual checks. Browser interaction coverage must return before the next real
application client island. M1.4 is authorized and incomplete; M1.4.3 remains
unauthorized and M1.5 has not started. Other assertions and P02–P08 remain withheld.
The approved M1 plan and design-system specification remain governing; acceptance
grants no additional disclosure, public release or deployment approval.

| Question | Canonical document |
| --- | --- |
| What is this repository and its next checkpoint? | [Root README](../README.md) |
| Is the engineering foundation qualified for M1? | [Milestone 0 qualification](engineering/milestone-0-qualification.md) |
| Who is the website for, and how should pages/navigation work? | [Website information architecture](product/website-information-architecture.md) |
| Which content is evidenced, ready and separately approved for disclosure? | [M1.4.1 content readiness](product/m1-4-1-content-readiness.md) |
| What visual direction is approved? | [Visual direction](design/visual-direction.md) |
| What are the first-party presentation/accessibility contracts? | [Design-system specification](design/design-system-specification.md) |
| Which semantic tokens and pairings are implemented and qualified? | [M1.3.1 token record](engineering/m1-3-1-token-qualification.md) |
| Which existing presentation patterns justify reuse or extraction? | [M1.3.2 primitives assessment](engineering/m1-3-2-primitives-qualification.md) |
| What qualifies the implemented design-system subset, and what remains manual? | [M1.3.3 design-system qualification](engineering/m1-3-3-design-system-qualification.md) |
| How is the first reviewed homepage implemented and qualified? | [M1.4.2 homepage](engineering/m1-4-2-homepage-qualification.md) |
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
