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

Internal/preproduction; **Website M0.1 — Project Constitution & Architecture
Decisions**. This checkpoint contains documentation and repository guidance only.
There is no executable website, framework setup, or installation procedure yet.

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

## Next checkpoint

M0.2 will prove the executable ReScript + React + Next App Router stack with
Nix/pnpm, compiler output handling, server/client boundaries, a production build,
and canonical `just` commands. Exact versions, configuration, and working setup
instructions must follow that proof. M0.1 does not scaffold or install them.

Agents leave changes for human review and a human signed commit; see the
[Git workflow](docs/agents/git-workflow.md).
