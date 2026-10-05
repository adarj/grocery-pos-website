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

Internal/preproduction; **Website M0.2 — Reproducible Toolchain & Framework
Spike**. The root page is an engineering proof: a ReScript server component and
an interactive ReScript counter. It is not a marketing homepage or released product.

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

Before the first human commit tracks the new flake files, use `nix develop path:.`
for review; Git-backed Nix flake discovery omits untracked files. Do not stage
files merely to enter the shell. After that commit, ordinary `nix develop` and
`use flake` apply.

Production and browser qualification:

```bash
just browsers             # Explicit Playwright binary provisioning, once per revision
just check                # Compiler, strict TS, production build, Chromium smoke
just test-e2e             # Full Chromium / Firefox / WebKit matrix after a build
just start                # Serve the last production build on 127.0.0.1:3000
```

Chromium and Firefox passed on the current ARM64 Fedora development environment.
WebKit's Ubuntu fallback lacks compatible native libraries there; the full matrix
reports that failure rather than skipping it. See the [toolchain qualification
record](docs/engineering/toolchain.md) for versions, interop, native-runtime limits,
and workflow details. Browser provisioning never installs host OS packages.

M0.3 will establish durable source architecture; M0.4 owns language-bearing routing.
The spike's temporary English text establishes no market or currency defaults.

Agents leave changes for human review and a human signed commit; see the
[Git workflow](docs/agents/git-workflow.md).
