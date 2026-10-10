# Milestone 2 — Marketing: Planning Baseline

## Authorization and current status — October 10, 2026 (UTC)

**M2 PLANNING AUTHORIZED — October 10, 2026 (UTC).**
**M2 IMPLEMENTATION AND PUBLICATION NOT AUTHORIZED.**
**M2.1 — Marketing Strategy, Scope & Content Readiness: planning candidate under review; not complete or accepted.**

Authority is the human maintainer's instruction, “Codex — M2.1 Marketing Strategy,
Scope & Content Readiness”, dated October 10, 2026 (UTC):

> This authorization permits research, analysis, planning documents and proposed decisions. It does not authorize marketing implementation, public disclosure, dependencies, hosting changes or deployment.

This record documents that instruction; it does not invent a separate approval
statement. Only M2.1 planning-document preparation is in scope. Later checkpoint
names and sequencing below are proposals requiring human decisions.

## Accepted starting point and provenance

Read-only verification found branch `main`, HEAD/main/origin/main all
`80b55162c865ea58d7de853a3d8eb68845c200e7`,
`docs(web): record formal M1 acceptance`, parent
`2195fcc938ca7eeafc0cc6c3a8b287dd03d170f8`; ahead/behind 0/0,
empty staging and clean initial worktree. GitHub commit metadata reports a valid
signature. Local signature verification could not complete in the read-only
sandbox because its verifier requires a temporary file; this is not a failed
signature finding. The local commit payload and normalized signature match
GitHub's verified payload/signature; no Git configuration was changed.

[Exact-SHA run 38049863825](https://github.com/adarj/grocery-pos-website/actions/runs/38049863825)
completed SUCCESS, push to main, attempt 1, on supported Ubuntu 24.04 x86_64.
It qualifies the integrated M1 acceptance record: 17 fixtures, seven supervisor
regressions, Chromium/Firefox/WebKit 10/10 each, one worker, zero configured
retries, and quality/typecheck/build/source-cleanliness gates. It does not
qualify these uncommitted M2 planning documents. No new technical suite is run
for this planning slice.

[Milestone 0](milestone-0-qualification.md) and
[Milestone 1](milestone-1-acceptance.md) remain formally accepted.
The maintainer's supplied independent M1 closeout disposition is
**PASS — MILESTONE 1 REPOSITORY CLOSEOUT VERIFIED**. M1's administrative
integration and CI are completed at the baseline above; preparation-time pending
statements in its dated records retain their historical meaning.

The implementation remains the exact reviewed four-section server-rendered
`/en` homepage and metadata. English is the only public language; `/en-XA`
is development-only. There is no authored application client island on the
homepage; Next framework scripts remain present. The
[homepage approval](../product/m1-4-1-content-readiness.md#post-acceptance-homepage-approval-2026-10-08-utc)
covers only the exact C01/C02/C04/C05 statement subset. It does not approve whole
claim categories. P02–P08 and other substantive assertions remain withheld.

## Purpose and proposed outcomes

Use the internal design direction **Modern infrastructure for the independent
grocer** to organize information around visitor decisions. This is internal
positioning, not automatically approved copy or demonstrated market suitability.

Planning should identify which questions deserve answers, the evidence needed
to answer them truthfully, and the smallest future content/design proposal.
The priority audiences are independent owners/operators, small regional and
multi-store decision-makers, grocery IT/implementation personnel, integration
partners, and existing customers/general visitors where relevant. These are
intended audiences, not evidence of supported scale or an existing customer base.

The [marketing readiness assessment](../product/m2-1-marketing-content-readiness.md)
owns audience hypotheses, pillars, C/P registers, page dependencies, research
and owner questions. The
[experience study](../design/m2-1-marketing-experience-study.md)
owns layout, technology and asset recommendations. Keep exact future public
copy, its approval and implementation separate from these planning records.

Proposed success criteria for M2 planning are useful, traceable decisions rather
than a page count or a lead-generation claim. A future M2 acceptance scope must
be explicitly approved and may remain smaller than the target sitemap.

## Scope and exclusions

Permitted now: bounded public-source research, read-only internal evidence
inspection, analysis, proposed decisions and qualification documentation.
No outside party is contacted and no asset is downloaded or generated.

Not authorized: changes to application, typed messages, CSS, routes, metadata,
tests, dependencies, tooling, Nix, CI, assets, generated output or private
qualification evidence; installation, builds, browsers, benchmarks, paid services,
accounts, contact services, analytics, hosting configuration or deployment.
No public publication, commercial offering, claim expansion or operating
platform work follows from this document.

The [M1.4 no-expansion decision](milestone-1-plan.md#m14-no-expansion-scope-closeout--october-8-2026-utc)
was appropriate and remains accepted historical scope. M2 may propose fresh
evidence/content review without retroactively invalidating it or treating
M1.4.3's deferral as permanent authorization to build later.

## Evidence and decision contract

Use the [claims policy](../product/public-capability-claims.md) and accepted
[M1.5 evidence methodology](m1-5-1-qualification-baseline.md).
Separate source inspection, automated execution, actual human observations,
commercial maturity and disclosure authority. No report's PASS label alone
establishes a new product claim.

For each candidate assertion retain audience/purpose, exact source revision,
evidence scope/limits, maturity where applicable, qualifiers, disclosure
eligibility, explicit approval, reviewer/owner, missing input and next gate.
Unknown maturity remains UNVERIFIED / UNRESOLVED; do not infer AVAILABLE, PILOT,
PREVIEW, PLANNED or INTERNAL. Internal architecture intent is not a release
attestation or permission to expose technical detail.

External research must retain URL, publication date when available, retrieval
date, relevance and applicability limits. Buyer hypotheses and competitor
patterns do not validate Grocery POS capabilities. Future educational copy
needs editorial review and exact publication approval, even when independent of
product promotion.

Approval packets must identify exact wording/version, audience and any
market/product/version scope, qualifications, title/description, assets/rights
and real destinations. Approval of strategy, design or implementation is not
disclosure approval. Silence or a successful CI run is not approval.

## Proposed dependency-driven checkpoint sequence

These are proposed gates, not execution authorizations. Content and experience
reviews may iterate before an implementation slice is selected.

| Proposed checkpoint | Inputs and bounded outcome | Human gate / stop condition |
| --- | --- | --- |
| M2.1 — Strategy, Scope & Content Readiness | This research baseline; audience priorities, evidence gaps, page/asset/technology recommendations | Review planning, assign owners and decide scope; no completeness or acceptance inferred here |
| M2.2 — Exact Content & Disclosure Review | Owner-confirmed source/maturity, a sufficient content brief, exact prose/metadata/assets/destinations | Explicit exact disclosure approval; defer unsupported assertions or insufficient pages |
| M2.3 — Information Architecture & Experience Qualification Plan | Approved content, meaningful hierarchy/navigation, first-party CSS design, justified technology proposals | Approve design and qualification scope; any material architecture change needs an accepted superseding ADR |
| M2.4 — Bounded Marketing Implementation | Separately authorized exact slice and completed dependencies | Explicit implementation authorization; preserve architecture and future gates; no sitemap quota |
| M2.5 — Marketing Qualification & Independent Audit | Exact implemented revision, supported regression gates, affected manual accessibility/security/performance evidence | Report real results and limits; correct only separately authorized defects; no automatic renewed deferrals |
| M2.6 — Final M2 Human Acceptance | Reviewed findings, independent audit, signed integration and successful exact-SHA CI | Explicit human acceptance of approved scope; release/deployment remain separate |

When no sufficient new content or legitimate onward destination exists, keep
the current homepage unchanged. An educational evaluation article is a possible
future content-review brief, not an approved route, article, CTA or product claim.
A page needs distinct approved substance and an editorial maintenance owner;
the sitemap alone never justifies implementation.

## Architecture and future qualification gates

**Next routes. ReScript models. React presents. APIs connect.**
Accepted [ADRs](../adr/README.md), particularly server-first rendering and
[first-party CSS](../adr/0006-css-and-design-system-foundation.md), remain governing.
shadcn/ui interest does not authorize Tailwind or an architecture exception.

| Trigger | Binding review / qualification |
| --- | --- |
| First additional public child route | Route-aware current-page identity semantics; home/child navigation, skip/focus, back/new-tab behavior, route validation and metadata/discovery withholding |
| Next real application client island | Restore applicable production-browser hydration, activation, state-update, keyboard and retained-focus coverage before introduction; SSR fixtures do not satisfy it |
| New content/layout/assets | Exact content and metadata approval, semantic headings/names, contrast, responsive reflow, zoom/text enlargement/spacing, keyboard, actual assistive technology/device review as applicable |
| New runtime/integration or sensitive surface | CSP/transitive client imports, public-safe data, privileged authority, dependency/license review and actual resource/main-thread cost; do not relax CSP for decoration |
| Second real language / RTL | Separate authorization, typed registry/messages, weighted language negotiation, localized metadata, real language/RTL qualification; English is not a market/currency/tax choice |
| Toolchain maintenance | Retain ESLint 9.39.5 exception controls and targeted-update review, no later than January 8, 2027 unless explicitly revised |
| Deployment / public release | Separate authorization and qualification for origin, hosting, HTTPS/HSTS, redirects, CDN/cache, monitoring and operations |

[Accepted M1 limitations](milestone-1-acceptance.md) remain visible:
genuine Windows forced-colors and missing manual provenance remain unverified
within explicit human-accepted bounds; scoped human accessibility observations,
laboratory-only performance and original evidence-loss/replacement chronology
are unchanged. They neither establish universal coverage nor automatically
qualify new M2 behavior. No WCAG conformance, certification or production
readiness is asserted.

Vercel remains the strategically designated hosting provider under the
[deferred register](deferred-decisions.md). No project, configuration, domain,
DNS, HTTPS/HSTS, deployment or release action is authorized here.

## Planning findings and owner decisions

These are planning constraints, not substantiated current application defects.

| ID / severity | Evidence and consequence | Required next action |
| --- | --- | --- |
| M21-01 — NOTE | Only the exact existing homepage slice is disclosed; C/P inputs are insufficient for broader product pages | Maintainer confirms sanitized product evidence, exact maturity/scope and disclosure decisions before M2.2 |
| M21-02 — NOTE | Intended segments do not establish market fit, customers or a live evaluation/contact service | Confirm priority market/context and assign channel/editorial owners; omit invented CTAs |
| M21-03 — NOTE | Official shadcn/ui Next setup uses Tailwind, contrary to the unchanged initial ADR 0006 boundary | Defer adoption; demonstrate a component need and seek an explicit architecture decision before any install |
| M21-04 — NOTE | No approved new brand/product/context asset package identified; current M1 qualifications cover its existing surface | Assign rights/version/approval owners and qualify actual future content/assets/runtime |

No new BLOCKER, MAJOR or MINOR application defect is substantiated by this
documentation/research work. The detailed
[owner questions](../product/m2-1-marketing-content-readiness.md#owner-questions-and-next-decisions)
are inputs for review, not requests to contact third parties.

## Planning review and integration gates

Before accepting M2.1, the maintainer must review evidence applicability, audience
priorities, unresolved inputs, proposed roadmap and technology dispositions, with
independent adversarial review of claim/disclosure and architecture boundaries.
This document does not declare that checkpoint complete or accepted.

Validate the full documentation diff, new files, local links/anchors, whitespace,
final newlines, current status, historical preservation and unchanged non-document
state. No technical qualification is rerun. Human review, signing/integration
and successful supported Ubuntu CI on the eventual exact documentation SHA remain
future gates; previous M1 CI is not a fresh test of this candidate.

M2 implementation, additional publication and all deployment/public-release
operations remain **NOT AUTHORIZED**.
