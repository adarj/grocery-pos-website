# Internationalized routing foundation

M0.4 implements [ADR 0005](../adr/0005-internationalized-routing-model.md) for the
engineering qualification page. It introduces no real second language or product
content. Language ≠ formatting locale ≠ market/country ≠ currency ≠ tax jurisdiction
≠ text direction. No formatting or commercial context is inferred or created.

## Registry and route contract

`src/i18n/Language.res` is the authoritative typed registry. Its interface exposes
validated values, route codes, HTML language, direction, and public discovery queries.
Exposure is an explicit classification; public lists are derived from it.

| Code | Content | Exposure | HTML language | Direction |
| --- | --- | --- | --- | --- |
| `en` | English | Public | `en` | `ltr` |
| `en-XA` | Generated English pseudo messages | Qualification only | `en-XA` | `ltr` |

The artificial `XA` tag is a qualification convention, not geography. Direction
has a typed LTR/RTL representation; there is no RTL content or RTL pseudo route yet.
Exact, case-sensitive route decoding rejects aliases such as `EN`, `en-US`, and
`en-xa`. A route code is not a formatting locale.

- `/` uses a root-only `proxy.ts` to redirect temporarily (307) to a public language.
  Query parameters survive; `Cache-Control: no-store` and `Vary: Accept-Language`
  avoid treating the destination as a permanent preference.
- `/en` is statically generated from the registry's public route codes.
- Unsupported routes, including `/fr`, `/es`, `/zz`, `/EN`, and `/english`, return 404.
- Direct `/en-XA` is available only in `next dev`. The Next adapter passes
  `NODE_ENV === "development"` as explicit qualification permission to the registry.
  Ordinary production builds/servers reject it before rendering or projection.

`app/[lang]/layout.tsx` is the sole authored root layout. It validates before setting
`<html lang dir>`. Page and metadata entrypoints use the same bounded Next adapter,
which translates a failed registry result into `notFound()`. Unknown values never
acquire fallback English HTML metadata. Default dynamic-parameter handling permits
the ungenerated development pseudo route; validation still rejects unsupported
values. `generateStaticParams` includes only public languages in every mode.

## Negotiation and expansion trigger

There is one public language, so every usable preference and every fallback resolves
to the explicit default English. `Language.negotiate` therefore deliberately does
not parse `Accept-Language`. Absent, English/regional-English, unsupported, malformed,
wildcard, excluded-English, and pseudo preferences all resolve to `/en` under this
single-language fallback policy. Qualification languages never become candidates.

Negotiator and `@formatjs/intl-localematcher`, demonstrated by the installed Next
guide, add no behavior in this state. **Before adding a second real public language**,
replace the default-only operation with qualified quality-weighted matching using
focused standards-oriented utilities and tests for ordering, exclusions, regional
matching, and fallback. Continue deriving candidates from public exposure; do not
maintain a separate TypeScript supported-language array or hand-roll an RFC parser.

## Messages and semantic facts

`Messages.key` is an exhaustive ReScript variant. `Messages.res` owns the complete
English catalog; its `.resi` hides direct English lookup. UI requests semantic keys
with a validated language. Missing cases receive compiler diagnostics rather than
falling back to a key name. Metadata uses the same title/description keys.

`PseudoLocalization.transform` derives pseudo text from that catalog. It accents
vowels, preserves other characters/whitespace/punctuation, wraps messages in visible
`[!! ... !!]` markers, and appends `ceil(0.3 × source length)` padding characters.
The transformation is deterministic. There is no duplicate pseudo catalog.

Only human-facing messages enter the transformation. Capability IDs, canonical
maturity codes, URLs, and HTML semantics remain unchanged. M0.4 narrows the
application's maturity code from an arbitrary string to a closed set of uppercase
semantic codes, preserving runtime values. An exhaustive message mapping provides
labels such as `Preview`; pseudo mode transforms the label while retaining `PREVIEW`.
Domain facts and publication eligibility remain language-independent. Localization
occurs only after the public-safe projection, so withheld fixtures never reach the
rendered HTML/RSC or client output.

Server components receive language explicitly. `next/root-params` was evaluated;
passing one value keeps the ReScript boundary explicit without an ambient framework
dependency. No global client language context exists. Counter remains the sole
application-source client island and receives resolved label strings, not a language
registry or catalog. Its count uses a semantic label/value pair, avoiding concatenated
translated sentence fragments. ICU/plural/interpolation machinery is not needed yet.

## Metadata and public discovery

Title and description come from the message boundary. Development pseudo metadata
is marked `noindex, nofollow`. `publicLanguages`/`publicRouteCodes` exclude pseudo
content and are the future source for selectors, language alternates, and sitemaps.
There is no public selector, canonical URL, `hreflang`, sitemap implementation,
fake `metadataBase`, or invented production origin. Pseudo content must never be
an ordinary public discovery target, regardless of future qualification mechanisms.

The canonical public origin and final URL emission remain deliberately deferred.
The broader i18n library decision remains open until real multilingual editing,
pluralization/interpolation, or resource-loading needs justify more machinery.

## Qualification

`just test-unit` checks strict registry decoding/exposure, production versus
qualification access, default-only negotiation, semantic English/pseudo messages,
all maturity labels, deterministic expansion, and unchanged machine facts.
`just check` includes those tests, canonical type validation, a production build,
and Chromium production routing/SSR/metadata/hydration tests. Firefox runs the same
scenarios with `just test-e2e --project=firefox`. Existing WebKit native-runtime and
x86_64 runtime qualification limits remain in the [toolchain record](../engineering/toolchain.md).

For controlled pseudo qualification, run `just dev`, visit `/en-XA`, and inspect
expanded visible text, title/description, `lang="en-XA"`, `dir="ltr"`, and robots
metadata. IDs/codes must remain intact and the labeled counter must hydrate.
The M0.4 Chromium experiment proved this both with JavaScript disabled and enabled;
Next DevTools found `/[lang]` and no compilation/runtime
errors in the connected pseudo-page session. Stop dev before canonical production
validation, preserving the version-sensitive Next generated-type workflow.
