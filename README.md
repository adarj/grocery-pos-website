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
the later October 9 human observations are summarized below.
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
**M1.5 — Final Qualification: AUTHORIZED October 9, 2026 (UTC); IN PROGRESS.**
**M1.5.1 — Qualification Baseline & Adversarial Review: FORMALLY ACCEPTED October 9, 2026 (UTC).**
Its [formal acceptance record](docs/engineering/m1-5-1-qualification-baseline.md#formal-m151-acceptance--october-9-2026-utc)
records independent audit PASS, signed integration and exact-commit main CI.
**M1.5.2 — Accessibility & Performance Qualification: AUTHORIZED October 9, 2026 (UTC); technical qualification completed; UNDER REVIEW, NOT FORMALLY ACCEPTED.**
The [current reconciliation](docs/engineering/m1-5-2-qualification-results.md#current-manual-evidence-reconciliation--october-9-2026-utc) records the independent replacement-evidence
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
**M1.5.3 and corrective application changes:
NOT AUTHORIZED.**
Other assertions and P02–P08 remain withheld. No public
release or deployment is authorized. The human maintainer
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
No additional claim, route, asset, public release or deployment is authorized. The broader palette
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
