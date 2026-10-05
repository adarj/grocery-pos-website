# ADR 0006 — CSS and design-system foundation

**Status:** Accepted (M0.1)

## Context

The website needs consistent, accessible presentation without importing a large
styling/component ecosystem before its actual patterns are known.

## Decision

Start with modern standards-based CSS, CSS custom properties, semantic design
tokens, and a small first-party component/design system. Use cascade layers where
they clarify ordering, and logical properties where practical for RTL support.

Color tokens describe roles such as text, surface, action, error, and focus.
Validate contrast across intended foreground/background pairings and interaction
states; a semantic token name alone does not establish accessibility. Use native
HTML semantics and controls before custom component abstractions.

Do not introduce Tailwind or a major UI framework initially. CSS Modules may be
used selectively later; they are not mandatory without a demonstrated reason.
No token values, CSS implementation, or design-system components are created in M0.1.

## Consequences

The system grows from repeated needs, with direct control over semantics,
accessibility, and output. The project must maintain its own small set of patterns
and verify them. Revisit this choice through an ADR only when demonstrated project
needs justify additional tooling.

## Alternatives

Starting with a utility framework or large component suite would impose
dependencies and conventions before requirements justify them. Unstructured
per-page styling would lose consistency. Neither is the initial foundation.
