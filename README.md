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

Internal/preproduction; **Website M0.5 — Quality, Security & CI Foundation**.
Local acceptance includes linting, accessibility smoke, security headers, and CSP.
The first Ubuntu x86_64 CI run qualifies the toolchain and Chromium/Firefox;
the targeted Playwright 1.64.0 upgrade is now implemented with local Chromium/Firefox
regressions passing. Supported-host WebKit requalification awaits remote CI.
M0.5 is conditional and must not yet merge; see [quality and CI](docs/engineering/quality-and-ci.md).
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
reports that failure rather than skipping it. Prior Ubuntu CI ran all three engines:
Chromium/Firefox passed; Playwright 1.63.0 WebKit navigation failed with an internal
error matching an upstream bundle defect. The stable 1.64.0 upgrade awaits remote
requalification; WebKit remains required and blocking. See the [toolchain qualification
record](docs/engineering/toolchain.md) for versions, interop, native-runtime limits,
and workflow details. Local `just browsers` never installs host OS packages;
CI provisions system libraries only on its disposable Ubuntu runner.

With `just dev` running, visit `/en` or `/en-XA` for controlled pseudo qualification.
Content language establishes no formatting-locale, market, currency, or tax defaults.
Development diagnostics do not replace `just typecheck`.

Agents leave changes for human review and a human signed commit; see the
[Git workflow](docs/agents/git-workflow.md).
