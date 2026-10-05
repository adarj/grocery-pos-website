# Proposed source layout after M0.2

This is a responsibility map, not directories to create in M0.1. Introduce each
area when real code needs it; a small feature need not populate every layer.

```text
app/                 Next routes, layouts and other framework entrypoints
src/
  domain/            Product models and pure rules
  application/       Use cases and narrow dependency contracts
  i18n/              Language resources, selection and formatting boundaries
  ui/                ReScript/React components and reusable UI behavior
  infrastructure/    Concrete external I/O and provider implementations
  adapters/          Framework/library interop and boundary translations
styles/              Global CSS, semantic tokens and shared styles
content/             Reviewed public/documentation content and assets
tests/               Cross-layer fixtures, integration and browser scenarios
```

## Layer responsibilities

- `app/` exports what Next requires and composes use cases/UI. Keep framework
  details here; large route files must not accumulate product rules.
- `src/domain/` contains pure models, invariants, and decisions. It must not import
  Next, React, browser APIs, provider SDKs, or persistence implementations.
- `src/application/` coordinates use cases with domain rules and narrow dependency
  contracts. Keep it independent of Next and concrete providers; isolate side effects
  behind those contracts rather than forcing every use case to be entirely pure.
- `src/i18n/` separates language/content selection from formatting and market data.
  Exact library and resource format remain deferred.
- `src/ui/` renders domain/application results and emits user intents. Client
  widgets get explicit browser boundaries; privileged SDKs and persistence calls
  do not belong here. Server-rendered UI is not automatically authorized.
- `src/infrastructure/` implements external I/O behind application/API contracts.
  Privileged modules are server-only. Provider adapters may run here in-process or
  in a justified Grocery service; Grocery API clients also belong here. Topology
  remains deferred under [ADR 0004](../adr/0004-first-party-api-authority-boundary.md).
- `src/adapters/` translates Next, React/library, or generated-module conventions
  into project types. A provider's concrete network implementation belongs in
  infrastructure; do not duplicate wrappers across both areas without a need.
- `styles/` carries the small CSS foundation; selective CSS Modules may be
  colocated when useful. `content/` contains public material, never secrets or
  unreviewed statements of product availability.
- `tests/` holds shared test support and broader scenarios. Pure/unit or component
  tests may be colocated once M0.2 establishes conventions.

## Dependency direction

```text
framework entrypoints --> application --> domain
UI --------------------> application-facing models / domain types
adapters/infrastructure --> application contracts / domain types
```

Framework entrypoints provide concrete implementations to use cases. Application
logic must not import concrete provider implementations. UI calls exposed
application boundaries and APIs; it never bypasses them for Grocery persistence.
These are ownership rules, not a mandate for an interface or wrapper per function.

Reject generic `lib/` dumping grounds, domain logic hidden in routes, components
with broad provider/database authority, and abstractions created only to satisfy
this diagram. Start with the smallest explicit boundary that protects a real need.

## ReScript generated output

Compiler-generated JavaScript is never hand-edited and should normally be
untracked, reproducible build output. Human-maintained JS/TS adapters remain source.
M0.2 must empirically qualify the compiler configuration, exact suffix/output
location, import paths, and Next build behavior. Then add precise ignore rules;
do not blanket-ignore `*.js` or invent final ReScript build syntax now.
