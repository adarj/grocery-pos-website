# ADR 0005 — Internationalized routing and model

**Status:** Accepted (M0.1)

## Context

The platform is Global-by-Design. Content language cannot safely identify where a
customer trades, how values are formatted, or which commercial rules apply.
Internationalization introduced only after page construction would embed assumptions.

## Decision

Model these concepts independently:

| Concept | Meaning |
| --- | --- |
| Language | Language of content and messages |
| Formatting locale | Conventions for dates, numbers, and related display |
| Market/country | Commercial availability and customer/store geography |
| Currency | Explicit monetary denomination |
| Tax jurisdiction | Authority/rules applicable to a transaction |

Public content uses an explicit language URL segment, conceptually `/[lang]/...`.
Initial real content is English at `/en/...`. English implies neither United States
nor USD. A language route is not a market, currency, or tax selector.

Document `lang` and directionality are first-class. Use language names rather than
flags for selection. Design for RTL with semantic structure and logical CSS
properties where practical.

Pseudo-localization is early development/test/qualification infrastructure for
revealing hard-coded strings, clipping, text expansion, fragile fixed-width layouts,
concatenated translated fragments, and related defects. Pseudo-locales are not
normal publicly supported content languages. They must not appear in ordinary
production language selectors, public `hreflang` alternatives, or production
sitemaps, and must not be intentionally indexed by search engines. They may be
exposed in explicitly controlled development/test environments where useful.
Implementation and identifiers remain open, including a later RTL pseudo-locale.

Validate supported language route values. Define language negotiation, fallback,
resource loading, localized metadata, and formatting policy when the first routes
and content require them. The final translation/i18n library remains deferred.

## Consequences

URLs identify content language explicitly. Commercial operations still require
authoritative market/currency/tax context; formatting cannot supply it. Components
must avoid concatenated translations and fixed layout assumptions. See the
[agent guide](../agents/internationalization.md).

## Alternatives

An English-only architecture, flags as languages, and language-derived US/USD
defaults are rejected. Country-specific domains are deliberately undecided.
