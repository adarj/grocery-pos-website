# Grocery POS Website

The first-party website repository for the Grocery POS Platform. Its intended
surfaces are public marketing, customer documentation, product and hardware
information, commerce, commercial account administration, support, and developer
information. These are future responsibilities, not a list of released features.

This website manages a customer's commercial relationship with Grocery POS.
The Manager and other operational products run the customer's grocery business.
See [Website vs Manager](docs/product/website-vs-manager.md).

The broader platform follows: **Flutter presents. Racket decides. SQLite
remembers. Rust talks to edges. The cloud coordinates.** This separate web
repository shares the product identity without sharing the appliance runtime or
implementation. Its intended repository identity is `adarj/grocery-pos-website`.

## Current status

**M2 PLANNING AUTHORIZED — October 10, 2026 (UTC).**
**M2 APPLICATION IMPLEMENTATION: ONLY THE BOUNDED M2.4.1 SLICE AUTHORIZED.**
**PRODUCTION PUBLICATION: NOT AUTHORIZED.**
**M2.1 — Marketing Strategy, Scope & Content Readiness: FORMALLY ACCEPTED October 11, 2026 (UTC).**
Its [acceptance record](docs/engineering/m2-1-acceptance.md) is signed and integrated at
`0610d5ff40fbd2580e9f9bd0c723e180d222d107`;
[exact-SHA run 38104636456](https://github.com/adarj/grocery-pos-website/actions/runs/38104636456)
passed. M2.1 repository closeout is verified; its preparation-time pending statements are historical.
**M2.2 — Exact Content & Disclosure Review: FORMALLY ACCEPTED October 11, 2026 (UTC).**
The [canonical acceptance record](docs/engineering/m2-2-acceptance.md) records the effective human
decision for completed documentation and internal editorial review.
Its signed acceptance-record commit `2f9e522ec0fc2a4eb729b93e013c2fbd5cae60d0`
passed [exact-SHA run 38112225630](https://github.com/adarj/grocery-pos-website/actions/runs/38112225630).
M2.2 repository closeout is verified by the subsequent retrospective audit:
**PASS — M2.2 FORMAL ACCEPTANCE RECORD REPOSITORY CLOSEOUT VERIFIED.**
M22-ACC-N01 remains a nonblocking NOTE that this audit followed integration.
Preparation-time pending statements in the acceptance record are historical.
The disclosure deferrals at M2.2/M2.3 acceptance are historical; D5 below
supersedes them only for exact R1 content. The separate M2.4.1 authorization below
supersedes the earlier implementation-entry deferral; release restrictions remain.
**M2.3 — Information Architecture & Experience Qualification Plan: FORMALLY ACCEPTED October 12, 2026 (UTC).**
The [canonical acceptance record](docs/engineering/m2-3-acceptance.md) records the effective human decision.
At M2.3 acceptance, the recommendation was **NO IMPLEMENTATION YET**.
The later exact D1–D6 decisions and M2.4.1 authorization below permit only the bounded local slice.
Its signed acceptance-record commit `df43895a81e02683e13e6c87896893c306c41eb2`
passed [exact-SHA run 38199211077](https://github.com/adarj/grocery-pos-website/actions/runs/38199211077),
SUCCESS, push to main, attempt 1, with valid GitHub signature verification.
M2.3 repository closeout is verified; preparation-time pending statements in
its acceptance record are historical. M2.1–M2.3 closeouts are complete.
**M2.4 EDITORIAL / DISCLOSURE / PRESENTATION DECISIONS: HUMAN APPROVED — October 12, 2026 (UTC).**
The [consolidated human record](docs/engineering/m2-4-human-decisions.md) records D1–D6:
confirmed interim editorial/maintenance ownership, audience, maintenance policy,
rights/subject-review approach, exact R1 disclosure and page/navigation specification.
The entry packet is signed at `22dd719d16d17faa9e5db8cd1e71f81ff5eec638`;
[exact-SHA run 38303766796](https://github.com/adarj/grocery-pos-website/actions/runs/38303766796)
passed, SUCCESS, push to main, attempt 1, with valid GitHub signature verification.
Its pending choices remain historical; the packet and accepted records are unchanged.
**EXACT M22-C12-A01-R1 DISCLOSURE: APPROVED.**
This narrow approval supersedes article withholding only for R1's exact identity;
other claims and P02–P08 material remain withheld beyond that scope.
**M2.4 FIRST BOUNDED APPLICATION IMPLEMENTATION: HUMAN AUTHORIZED; CANDIDATE UNDER REVIEW — October 12, 2026 (UTC).**
The [implementation record](docs/engineering/m2-4-1-resource-implementation.md) records the explicit authority, exact R1
projection, server-first home/child identity, page metadata, approved contextual
homepage link, automated checks and unperformed human/OS/AT qualification.
**FORMAL M2.5 QUALIFICATION: NOT PERFORMED; NOT AUTHORIZED.**
**PRODUCTION PUBLICATION: NOT AUTHORIZED.**
**DEPLOYMENT: NOT AUTHORIZED.**
**Milestone 2 overall: IN PROGRESS, NOT FORMALLY ACCEPTED.**
**M2.5–M2.6: NOT AUTHORIZED.**
The human-decision record is signed and integrated at
`3854375bf2e7ccd2149ce3e316d7343108291649`; [exact-SHA run 38314035517](https://github.com/adarj/grocery-pos-website/actions/runs/38314035517)
passed, SUCCESS, push to main, attempt 1, with valid GitHub signature verification.
That CI qualifies the decision record only. Its preparation-time pending wording
is historical. The local M2.4.1 implementation remains unstaged and uncommitted;
it requires a separate independent read-only implementation audit, human manual
review, human-signed integration and new exact-SHA CI. Final prepublication
source/rights verification, formal qualification and release gates remain.
No additional feature, dependency, asset, language, operational-platform or hosting
change is authorized. Accepted M0/M1 limitations remain binding.

**MILESTONE 1 — WEBSITE FOUNDATION: FORMALLY ACCEPTED AND COMPLETE October 10, 2026 (UTC).**
The [canonical acceptance record](docs/engineering/milestone-1-acceptance.md) records the maintainer's explicit
human decision, approved M1.1–M1.5 scope, retained limitations and future gates.
M1 repository closeout is verified: signed main commit
`80b55162c865ea58d7de853a3d8eb68845c200e7` passed exact-SHA
[run 38049863825](https://github.com/adarj/grocery-pos-website/actions/runs/38049863825);
the independent closeout returned **PASS — MILESTONE 1 REPOSITORY CLOSEOUT VERIFIED**.
Preparation-time pending statements in the canonical record remain historical.
M1 acceptance granted no additional implementation, public release or deployment authority;
the later bounded M2.4.1 instruction above is separate.

Milestone 0 remains formally accepted; M1.1 is **HUMAN-APPROVED AND QUALIFIED**
October 8, 2026 (UTC), with its original specification/design approval preserved.

Internal/preproduction; **M1.2 — Public Shell & Responsive Foundation** is accepted.
**M1.3 — Design Tokens & Reusable Primitives: FORMALLY ACCEPTED October 8, 2026 (UTC).** M1.3.1 tokens are
accepted, merged and qualified on main (30/30); see the
[token qualification record](docs/engineering/m1-3-1-token-qualification.md).
The [M1.3.2 no-extraction decision](docs/engineering/m1-3-2-primitives-qualification.md)
was human-accepted October 8, 2026 (UTC), merged and qualified on main (30/30).
M1.3.3 is merged and main-qualified (30/30), with adversarial audit PASS.
The [formal acceptance record](docs/engineering/m1-3-3-design-system-qualification.md#formal-m13-acceptance-2026-10-08-utc)
identifies signed main closeout `ad69f632129231bb2604a3a71678ac959900046c`
and successful main run 37827607606 (30/30 and source cleanliness).
M1.3.4's historical CONDITIONAL PASS remains intact; its human gates were resolved
by five human-reported PASS observations and three explicitly approved deferrals.
At M1.3 acceptance, D13-01–D13-03 were **DEFERRED, UNVERIFIED — M1.5**;
the later scoped human observations and accepted limitations are recorded in
the M1.5.2 acceptance linked below.
**M1.4 — Reviewed Templates & Content: FORMALLY ACCEPTED AND COMPLETE October 9, 2026 (UTC).**
**M1.4.1 — Content Readiness & Publication Matrix: FORMALLY ACCEPTED October 8, 2026 (UTC).**
The [accepted content-readiness register](docs/product/m1-4-1-content-readiness.md#formal-m141-acceptance-2026-10-08-utc) proposes a
bounded first content slice. The maintainer subsequently authorized M1.4.2 on
October 8, 2026 (UTC), with exact four-section homepage wording and metadata;
see the [scoped approval](docs/product/m1-4-1-content-readiness.md#post-acceptance-homepage-approval-2026-10-08-utc).
**M1.4.2 — First Reviewed Homepage Template: FORMALLY ACCEPTED October 8, 2026 (UTC).**
The [formal homepage acceptance record](docs/engineering/m1-4-2-homepage-qualification.md#formal-m142-acceptance--october-8-2026-utc)
identifies signed main commit `017fa33125310fb2d6bbc3bcd517ce9af738254d` and
successful run 37848845430: Chromium/Firefox/WebKit 10/10 each, 30/30 with one
worker, zero retries and source cleanliness. The original conditional audit remains
historical; the maintainer accepted the bounded Counter browser-coverage retirement
and reported the requested manual homepage checks passing. Restore applicable
browser interaction tests before the next real application client island.
The maintainer approved no further content or navigation October 8, 2026 (UTC);
the [scope closeout](docs/engineering/milestone-1-plan.md#m14-no-expansion-scope-closeout--october-8-2026-utc)
preserves that decision. The [formal M1.4 acceptance](docs/engineering/milestone-1-plan.md#formal-m14-acceptance--october-9-2026-utc)
records the October 9, 2026 (UTC) outcome, signed closeout
`8729179ee18b0d154d8fa63b144d1d98212f8f39` and successful main run
37877425523 (30/30 and source cleanliness).
**M1.4.3 — Additional Reviewed Content & Navigation: REVIEWED AND DEFERRED;
NO IMPLEMENTATION AUTHORIZED.** This intentional deferral is part of M1.4's
accepted scope; no additional content was implemented.
**M1.5 — Final Qualification: FORMALLY ACCEPTED AND COMPLETE October 10, 2026 (UTC).**
The [canonical M1.5 acceptance record](docs/engineering/m1-5-final-qualification-acceptance.md)
owns the cumulative evidence and accepted limitations. Signed main acceptance record
`2195fcc938ca7eeafc0cc6c3a8b287dd03d170f8` passed exact-SHA
[run 38047244927](https://github.com/adarj/grocery-pos-website/actions/runs/38047244927)
on supported Ubuntu 24.04 x86_64. The subsequent independent audit returned
**PASS — M1.5 CLOSEOUT VERIFIED; M15R-01 RESOLVED**. Its preparation-time
integration/CI statements are historical; this repository closeout is complete.
**M1.5.1 — Qualification Baseline & Adversarial Review: FORMALLY ACCEPTED October 9, 2026 (UTC).**
Its [formal acceptance record](docs/engineering/m1-5-1-qualification-baseline.md#formal-m151-acceptance--october-9-2026-utc)
records independent audit PASS, signed integration and exact-commit main CI.
**M1.5.2 — Accessibility & Performance Qualification: FORMALLY ACCEPTED AND COMPLETE October 9, 2026 (UTC).**
The [formal acceptance record](docs/engineering/m1-5-2-qualification-results.md#formal-m152-acceptance--october-9-2026-utc)
owns the maintainer's explicit decision, signed main integration
`b5c090709145d3fc48efef0f12e3aa8630f7d07e`, successful exact-SHA main run
37978959204, independent audit PASS outcomes and scoped human observations.
Windows forced-colors remains **UNVERIFIED**; its absence and the missing
manual-test provenance metadata are human-accepted bounded limitations for
this homepage. Acceptance establishes neither Windows compatibility nor WCAG
conformance. **Milestone 1 overall: FORMALLY ACCEPTED AND COMPLETE October 10,
2026 (UTC).** The [canonical acceptance record](docs/engineering/milestone-1-acceptance.md) owns that separate
human decision; its signed integration, exact-SHA CI and independent closeout
are completed as recorded above.
Signed M1.5.2 acceptance-record commit
`335a31187284956f2a8eb6e23deecee0e12ed3fe` is integrated on main and
[run 37981808698](https://github.com/adarj/grocery-pos-website/actions/runs/37981808698)
passed on that exact SHA.
**M1.5.3 — FORMALLY ACCEPTED AND COMPLETE; NO CORRECTIVE APPLICATION IMPLEMENTATION REQUIRED.**
The [formal acceptance record](docs/engineering/m1-5-3-correction-assessment.md#formal-m153-acceptance--october-10-2026-utc)
records the maintainer's October 10, 2026 (UTC) decision. Its signed
acceptance-record commit `1067bd0d21ac45890dcf8e94a3afdf353f372bde` is
integrated on main; [run 38044969571](https://github.com/adarj/grocery-pos-website/actions/runs/38044969571)
passed on that exact SHA on Ubuntu 24.04 x86_64: 17/17 fixtures, 7/7 supervisor
regressions, Chromium/Firefox/WebKit 10/10 each, one worker, zero configured
retries and quality/typecheck/build/source-cleanliness gates.
The accepted conclusion remains **A — NO CORRECTION JUSTIFIED**. A153A-01 is
independently **RESOLVED** by the focused PASS audit; the original CONDITIONAL
PASS remains historical. The separate M1.5 overall decision is recorded above;
Milestone 1 acceptance and release authorization remain separate.
**Corrective application implementation remains NOT AUTHORIZED.**
Other assertions and P02–P08 material remain withheld beyond the exact R1 approval
recorded above. No public release or deployment is authorized. The human maintainer
formally accepted Milestone 0 and authorized M1 on October 8, 2026 (UTC).
Final main [CI run 37727162386](https://github.com/adarj/grocery-pos-website/actions/runs/37727162386)
qualifies commit `780ba8b89364fd16dba8609a0cb2a13779c24348`, including all 21
Chromium/Firefox/WebKit scenarios. See the
[foundation acceptance record](docs/engineering/milestone-0-qualification.md).
The [M1 checkpoint plan](docs/engineering/milestone-1-plan.md) records the approved
specifications, adversarial audit PASS and feature [CI run 37728971554](https://github.com/adarj/grocery-pos-website/actions/runs/37728971554) PASS.
M1.1 is merged and qualified by main [CI run 37749346349](https://github.com/adarj/grocery-pos-website/actions/runs/37749346349)
at `cea8dea94bafe182af40ef30fe390cc9b667ac07`. M1.2 adds a server-rendered identity
header, skip link, responsive proof container and preview footer; no additional
navigation destinations exist. See the [shell qualification record](docs/engineering/m1-2-shell-qualification.md)
for historical local/feature CI and adversarial evidence, resolved A12-01/A12-02,
and final main [run 37780086710](https://github.com/adarj/grocery-pos-website/actions/runs/37780086710)
at `e5f690977273ce721998f6f778b946924b5a443f`: Chromium/Firefox/WebKit 9/9 each,
27/27, one worker, zero retries and source cleanliness PASS. The maintainer confirmed
completion of visual review, formal M1.2 acceptance and M1.3 authorization on
October 8, 2026 (UTC). M1.4.1 is formally accepted as documentation-only planning;
M1.4.2 is formally accepted only for the exact approved informational homepage.
No claim, route or feature beyond M2.4.1, asset, public release or deployment is authorized. The broader palette
remains exploratory. The [M1.2 lint review](docs/engineering/quality-and-ci.md#m12-eslint-compatibility-review-2026-10-08)
and explicit maintainer retention approval satisfy the first-implementation-checkpoint
requirement under the existing bounded exception and January 8, 2027 maximum review date.
`/` redirects to `/en`, the sole public content language. The homepage renders all reviewed sections on the server with no application
client island. The capability-projection proof and Counter remain test fixtures;
fictional qualification data is excluded from public homepage output.
Development-only `/en-XA` derives expanded pseudo messages from English; production
rejects it and all unsupported languages. See the
[i18n foundation](docs/architecture/internationalization.md) and
[source architecture](docs/architecture/source-layout.md).

**Next routes. ReScript models. React presents. APIs connect.**

Next owns the web framework; ReScript owns product/application logic where
practical; React renders the interface; first-party APIs own commercial authority.
Rendering is server-first, and client JavaScript requires a concrete reason.

## Start here

- [Documentation map](docs/README.md)
- [Architecture overview](docs/architecture/website-architecture.md)
- [Accepted architecture decisions](docs/adr/README.md)
- [Agent constitution and task router](AGENTS.md)
- [Deliberately deferred decisions](docs/engineering/deferred-decisions.md)

## Development

The portable prerequisite is a suitable Linux environment with **working Nix**.
The repository supplies Node, pnpm, and just through its pinned flake. It does not
install Nix or require Distrobox, Fedora, a particular host, or direnv.

The current developer example is `cd ~/Projects/grocery-pos-website`, then
`distrobox enter dev`. Entering the container first and then changing directory
works too. With outer direnv/nix-direnv configured, approve this repository's
`.envrc` once with `direnv allow` to activate its flake automatically.

The explicit workflow, without direnv, is:

```bash
nix develop
pnpm install --frozen-lockfile
just --list
just dev
```

Production and browser qualification:

```bash
just browsers             # Explicit Playwright binary provisioning, once per revision
just test-unit            # Pure publication, decoding, language, and message tests
just check                # Lint/format, unit/supervisor, TS, build, Chromium/a11y/security
just test-a11y            # Focused Chromium axe + keyboard smoke after a build
just ci                   # Full quality + three browsers; supported runtime required
just test-e2e             # Full Chromium / Firefox / WebKit matrix after a build
just start                # Serve the last production build on 127.0.0.1:3000
```

Chromium and Firefox passed on the current ARM64 Fedora development environment.
WebKit's Ubuntu fallback lacks compatible native libraries there; the full matrix
reports that failure rather than skipping it. Ubuntu x86_64 CI qualifies all three
engines with Playwright 1.64.0. Omitting inherited `XDG_DATA_DIRS` only from Linux-CI
WebKit browser children resolves their GSettings schema-lookup failure. This does
not qualify Fedora ARM64 WebKit native-runtime compatibility. WebKit remains
required and blocking. See the [toolchain qualification record](docs/engineering/toolchain.md)
for versions, interop, native-runtime limits,
and workflow details. Local `just browsers` never installs host OS packages;
CI provisions system libraries only on its disposable Ubuntu runner.

With `just dev` running, visit `/en` or `/en-XA` for controlled pseudo qualification.
Content language establishes no formatting-locale, market, currency, or tax defaults.
Development diagnostics do not replace `just typecheck`.

Agents leave changes for human review and a human signed commit; see the
[Git workflow](docs/agents/git-workflow.md).
