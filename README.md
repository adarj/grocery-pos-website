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
**M1.3 — Design Tokens & Reusable Primitives: AUTHORIZED.** M1.3.1 tokens are
accepted, merged and qualified on main (30/30); see the
[token qualification record](docs/engineering/m1-3-1-token-qualification.md).
The [M1.3.2 no-extraction decision](docs/engineering/m1-3-2-primitives-qualification.md)
was human-accepted October 8, 2026 (UTC), merged and qualified on main (30/30).
M1.3.3 was authorized on the same date; its
[design-system qualification record](docs/engineering/m1-3-3-design-system-qualification.md)
documents independent inspection and bounded local probes over the unchanged UI.
Adversarial audit, exact-commit CI and human review remain pending. M1.3 is not
complete; M1.3.4 has not begun.
The accepted surface remains the
internal engineering-preview shell. The human maintainer
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
October 8, 2026 (UTC). M1.4 is not authorized. No public marketing
page, customer claim, asset or deployment is authorized. The broader palette
remains exploratory. The [M1.2 lint review](docs/engineering/quality-and-ci.md#m12-eslint-compatibility-review-2026-10-08)
and explicit maintainer retention approval satisfy the first-implementation-checkpoint
requirement under the existing bounded exception and January 8, 2027 maximum review date.
`/` redirects to `/en`, the sole public content language. The engineering page
demonstrates a ReScript-owned public capability projection and an isolated hydration
counter. All capability data is fictional qualification data, not product claims.
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
