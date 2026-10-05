# ADR 0002 — Next / ReScript / React boundaries

**Status:** Accepted (M0.1)

## Context

The project needs Next's web framework semantics and ReScript's explicit modeling
without fighting framework-specific filenames, exports, or static analysis.
Language purity is not the objective; substantial, testable application logic is.

## Decision

Use Next.js App Router, React, and ReScript. **Next routes. ReScript models.
React presents. APIs connect.**

- Next owns routing, layouts, metadata, request handling, and rendering semantics.
- Thin TypeScript/TSX boundary files may expose Next-required filenames/exports
  and translate framework APIs into application calls.
- ReScript is the default for domain/application logic and reusable application/UI
  behavior where practical. It must own meaningful models and rules, not merely
  wrap a growing TypeScript application.
- React is the common component/rendering model across language boundaries.
- Third-party/framework adapters may use TypeScript when materially cleaner;
  keep business rules in domain/application layers and provider-specific details
  confined to bounded integrations.

Dependencies point inward: framework entrypoints compose application and UI;
application logic depends on domain models and narrow contracts; adapters implement
those contracts. Domain rules do not depend on Next, React, or provider SDKs.
Language interop does not change authority or server/client boundaries.

## Consequences

This permits small TS/TSX seams while preventing domain logic from drifting into
TypeScript by ecosystem default. M0.2 must prove compiler output, imports, React
bindings, and Server/Client Component integration against selected versions.
Do not prescribe unverified compiler syntax or generated suffixes now.

## Alternatives

An all-TypeScript application would discard the selected modeling direction.
A 100% ReScript target would force unnecessary framework workarounds. Both are
rejected. See [source layout](../architecture/source-layout.md) for placement rules.
