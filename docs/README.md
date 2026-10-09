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
explicitly approved deferrals. At M1.3 acceptance, D13-01–D13-03 were **DEFERRED, UNVERIFIED — M1.5**;
the later October 9 human observations are summarized below.
**M1.4 — Reviewed Templates & Content: FORMALLY ACCEPTED AND COMPLETE October 9, 2026 (UTC).**
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
application client island. The [dated scope decision](engineering/milestone-1-plan.md#m14-no-expansion-scope-closeout--october-8-2026-utc)
preserves the maintainer's October 8, 2026 (UTC) no-expansion approval.
The [formal M1.4 acceptance](engineering/milestone-1-plan.md#formal-m14-acceptance--october-9-2026-utc)
records the October 9, 2026 (UTC) outcome, signed closeout
`8729179ee18b0d154d8fa63b144d1d98212f8f39` and successful main run
37877425523 (30/30 and source cleanliness).
**M1.4.3 — Additional Reviewed Content & Navigation: REVIEWED AND DEFERRED;
NO IMPLEMENTATION AUTHORIZED.** This deferral is part of the accepted M1.4 scope,
not an implemented checkpoint.
**M1.5 — Final Qualification: AUTHORIZED October 9, 2026 (UTC); IN PROGRESS.**
**M1.5.1 — Qualification Baseline & Adversarial Review: FORMALLY ACCEPTED October 9, 2026 (UTC).**
The [canonical acceptance record](engineering/m1-5-1-qualification-baseline.md#formal-m151-acceptance--october-9-2026-utc)
owns audit PASS, signed integration, exact-commit main CI and retained obligations.
Acceptance validates the M1.5.1 baseline and proposed methods.
**M1.5.2 — Accessibility & Performance Qualification: AUTHORIZED October 9, 2026 (UTC); technical qualification completed; UNDER REVIEW, NOT FORMALLY ACCEPTED.**
The [current reconciliation](engineering/m1-5-2-qualification-results.md#current-manual-evidence-reconciliation--october-9-2026-utc) records the independent replacement-evidence
follow-up audit PASS and A152A-01 resolved within its audited scope; the focused
summary-correction audit returned PASS and resolved A152M-01. October 9
human-reported PASS observations are D13-01: 8/8 VoiceOver/Safari checks;
D13-02: 6/6 iPhone 13 Pro/Safari checks; D13-03: 5/5 macOS Increase Contrast
checks, limited to that setting; and M152-T01: 5/5 Safari manual text-spacing
checks after P03 clarification, within the recorded environment. Windows
forced-colors remains **UNVERIFIED**; on October 9 the maintainer explicitly
accepted its absence as a bounded qualification limitation for the current
pre-production informational homepage. Missing exact running-build identity
and other recorded manual metadata limitations remain. These scoped observations
establish neither Windows compatibility nor WCAG conformance.
Human review, successful exact-SHA CI and explicit M1.5.2 acceptance remain required.
**M1.5.3 and corrective application changes: NOT AUTHORIZED.**
Other assertions and P02–P08 remain withheld.
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
| What formally accepts M1.4's implemented scope and no-expansion decision? | [M1.4 formal acceptance](engineering/milestone-1-plan.md#formal-m14-acceptance--october-9-2026-utc) |
| Which current properties are demonstrated, and how should final qualification proceed? | [M1.5.1 qualification baseline](engineering/m1-5-1-qualification-baseline.md) |
| What fresh accessibility/performance evidence exists, and what remains manual? | [M1.5.2 qualification results](engineering/m1-5-2-qualification-results.md) |
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
