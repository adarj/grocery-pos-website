# ADR 0004 — First-party API authority boundary

**Status:** Accepted (M0.1)

## Context

Browser components and convenient provider SDKs must not become the commercial
system of record or define Grocery's domain. Provider replacement, authorization,
and consistent product rules require a Grocery-owned boundary.

## Decision

Authority and dependency separation govern this boundary; network topology does
not. A first-party API/application boundary may be an in-process Grocery-owned
server operation or an independently deployed Grocery service/API.

Both flows are valid:

```text
Browser -> Next/Grocery server application boundary
        -> in-process provider adapter -> provider

Browser -> Next/Grocery server application boundary
        -> independent first-party Grocery service/API -> provider
```

Grocery-owned server/application code controls authority and provider access.
Browser/UI components must not directly manipulate Grocery persistence or acquire
broad provider authority. Do not normalize
`React/ReScript component -> Supabase table`. Supabase or another early provider
is an implementation choice, not Grocery's domain architecture.

Do not add a network hop merely to create conceptual separation. Introduce an
independent service only for concrete deployment, scaling, security, ownership,
reuse, lifecycle, or another justified requirement. Final deployment topology
remains deferred.

Authoritative Grocery operations enforce commercial rules, organization scope,
and authorization. Translate provider data and failures into Grocery-owned types,
validating external data at entry; provider-specific models must not become
Grocery's domain model. Keep privileged adapters server-only and expose the minimum
operation required.

Future commerce, authentication, support, and other provider integrations follow
the same bounded-adapter policy instead of permeating UI or domain code.
React component placement, including placement on a server, grants no authorization.

## Consequences

Provider contracts and credentials remain bounded. UI receives public or
authorized projections rather than raw persistence power. Application/API boundaries
need explicit contracts, validation, and later integration tests without requiring
a network hop. No shared contracts repository is introduced during M0.1.

## Alternatives

Direct browser persistence and provider-shaped domain models are rejected because
they couple product authority to an SDK/schema. Hosting, provider selection, and
contract packaging remain [deferred](../engineering/deferred-decisions.md).
