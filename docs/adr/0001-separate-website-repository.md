# ADR 0001 — Separate website repository

**Status:** Accepted (M0.1)

## Context

The local-first POS appliance and a public website share a product identity but
have different engineering constraints. Combining them would couple web changes
to the store runtime without a demonstrated benefit.

| Concern | Reason to separate |
| --- | --- |
| Release cadence | Website/content changes and appliance qualifications need independent schedules |
| Threat model | Public HTTP traffic, untrusted submissions, and future accounts differ from store/device boundaries |
| Runtime | Next/React web execution differs from the platform's Flutter/Racket/SQLite/Rust roles |
| Dependencies | Browser/Node packages should not enlarge the appliance dependency graph |
| Secrets | Web/service credentials need separate exposure and access controls |
| Deployment | Website deployment and store appliance distribution have distinct processes |
| Rollback | Web releases must be reversible without changing installed register software |
| Web requirements | Browser compatibility, SEO, accessibility, and web performance need dedicated qualification |

## Decision

Keep the website in `adarj/grocery-pos-website`, separate from the fixed-register
POS repository. Connect repositories through explicit contracts/APIs, not shared
implementation imports or appliance source copies. Do not create a shared
contracts repository during M0.1.

Separate repositories do **not** imply separate product identity. Terminology,
truthful capability claims, and customer expectations remain Grocery POS concerns.
The website/account portal manages the commercial relationship; operational
Manager features remain outside it.

## Consequences

The website can choose web tooling, deployments, and rollback independently.
Cross-repository compatibility must be explicit and tested when APIs appear;
ownership and contract evolution require coordination. Separation alone does not
provide security isolation without appropriate credentials and deployment controls.

## Alternatives

Adding the website to the appliance repository would entangle unrelated release
and dependency concerns. A shared contracts package may become useful after real
consumers demonstrate a need; it is [deferred](../engineering/deferred-decisions.md).
