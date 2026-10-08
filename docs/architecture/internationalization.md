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

M1.4.2 uses this same registry/catalog for the exact reviewed homepage and metadata;
see its [qualification and fixture migration](../engineering/m1-4-2-homepage-qualification.md).
Legacy qualification/maturity keys remain test-only consumers, not public content.

Server components receive language explicitly. `next/root-params` was evaluated;
passing one value keeps the ReScript boundary explicit without an ambient framework
dependency. No global client language context exists. The historical Counter received resolved label strings, not a language registry
or catalog, and used a semantic label/value pair. It is now a retained test fixture;
the production homepage has no application-source client island. Pure maturity-code
and unchanged-machine-fact tests remain despite removal of the public proof. ICU/plural/interpolation machinery is not needed yet.

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
Retained qualification fixtures also have Node SSR coverage, including Counter's
initial output; this is not browser hydration or activation evidence.

The M1.4.2 production homepage is server-rendered and has no authored client island
or client interaction. `just check` includes canonical type validation, a production
build and Chromium checks of the actual approved homepage, metadata, routing,
keyboard navigation, accessibility, responsive behavior and withholding across
HTML/RSC/scripts. Firefox runs the same scenarios with
`just test-e2e --project=firefox`. The
[homepage record](../engineering/m1-4-2-homepage-qualification.md#regression-migration-matrix)
owns the deliberate retirement of live Counter browser coverage and its restoration
requirement before a real application client island is introduced. Maintainer
acknowledgment of that tradeoff and exact-commit supported Ubuntu CI remain pending.

For controlled pseudo qualification, run `just dev`, visit `/en-XA`, and inspect
all four expanded homepage sections, title/description, `lang="en-XA"`, `dir="ltr"`,
and `noindex, nofollow` robots metadata. Check native skip/identity navigation,
main-target focus and reflow with expanded text. No Counter is rendered on the
current English or pseudo homepage; unchanged machine IDs/codes remain separately
covered by retained fixture tests. Stop dev before canonical production validation,
preserving the version-sensitive Next generated-type workflow.

Historical M0.4 evidence applies to the former architecture-proof page: its
Chromium experiment verified expanded text, metadata and unchanged machine facts
with JavaScript disabled and enabled, with Counter hydration/interaction in the
JavaScript-enabled case. Next DevTools found `/[lang]` and no compilation/runtime
errors in that connected pseudo-page session. Historical M0.5 main CI run
37721922700 qualified the repository runtime and the then-current proof/Counter
suite across all three engines on Ubuntu x86_64; it does not qualify the new
homepage. Fedora ARM64 WebKit native-runtime compatibility remains unqualified.
See the [toolchain record](../engineering/toolchain.md) for that historical evidence.
