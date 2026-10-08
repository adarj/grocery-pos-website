# Source layout and application boundary

M0.3 proves the responsibility map with a small capability-publication slice;
M0.4 adds a typed internationalization boundary over that slice; M1.2 adds a
server-rendered [engineering-preview shell](../engineering/m1-2-shell-qualification.md).
That engineering surface is historical. M1.4.2 now composes the exact reviewed
[homepage](../engineering/m1-4-2-homepage-qualification.md); fictional capability
and Counter fixtures are retained only under test, not imported by public routes.

## Actual source structure

```text
app/
  [lang]/layout.tsx                   Validated HTML language/direction, metadata, static params, shell
  [lang]/page.tsx                     Validate language and render the approved ReScript homepage
  globals.css                         Accepted semantic tokens, homepage and retained qualification styling
proxy.ts                              Bare-root temporary public language redirect
src/
  domain/Capability.res + .resi        Opaque capability, maturity, disclosure, decoder
  application/
    CapabilityPresentation.res + .resi Public eligibility and minimal view projection
  i18n/
    Language.res + .resi              Registry, exposure, direction, route validation/selection
    Messages.res + .resi              Semantic keys, private English catalog, resolved labels
    PseudoLocalization.res            Deterministic human-message qualification transform
  adapters/next/language.ts            Registry result to Next notFound/mode seam
  qualification/CapabilityProofData.res Fictional sample composition for architecture proof
  ui/
    EngineeringShell.res              Server-rendered identity and skip link; GenType export
    Homepage.res                      Sole main and exact approved typed homepage sections
    ArchitectureProof.res             Test-only engineering composition; never a public route import
    CapabilityList.res                Semantic rendering of public views
    qualification/Counter.res         Retained M0.2 client fixture; Node SSR only today
tests/
  unit/CapabilityPublicationTest.res   Direct pure-core tests, compiled for Node's test runner
  unit/InternationalizationTest.res    Language, exposure, messages, and pseudo invariants
  unit/QualificationPresentationTest.res Retained proof/Counter initial-state Node SSR
  e2e/framework-smoke.spec.ts          Exact SSR/metadata, JS-enabled HTML/RSC/script exposure
  e2e/accessibility.spec.ts            Whole-page axe and native keyboard/focus behavior
  e2e/shell.spec.ts                    Measured contrast, reflow, expanded text and forced-colors/reduced-motion
  e2e/security-headers.spec.ts         Production page/redirect/404 HTTP security policy
  e2e/browser-diagnostics.ts           Shared browser/hydration/CSP error gate
  tooling/dev-supervisor.test.mjs      Isolated process-group regression fixtures
```

The generic server-tree `FrameworkProof.res` and `src/spike/` are superseded.
The Counter source/directive and initial-state SSR fixture remain available.
It is not a homepage feature or design-system primitive. Live browser hydration
and activation are not currently exercised; the homepage record owns that explicit
migration and the requirement to restore coverage before a real client island returns.

## Dependency direction

```text
proxy.ts --> i18n/Language (public-only root selection)
app/[lang] --> adapters/next/language --> i18n/Language
           --> ui/EngineeringShell --> i18n/Messages, i18n/Language (server only)
           --> ui/Homepage --> i18n/Messages (server only)

tests/unit --> qualification/CapabilityProofData --> application --> domain
           --> ui/ArchitectureProof --> ui/CapabilityList
                                    --> ui/qualification/Counter (Node SSR fixture)
```

Domain code imports no Next, React, browser, or provider APIs. Application code
depends on the domain and owns whether a public view exists. The list receives
only `id` and a closed semantic `maturityCode`, never publication internals, and makes
no eligibility decision. `Messages` maps these codes exhaustively to display labels.
UI imports of the application view are type dependencies; policy and catalogs are
not client application imports. No application-source client island is referenced
by the current production homepage. The root layout passes its validated language and
children through the generated shell props. Homepage owns the sole
focusable main landmark; the shell's native skip anchor works without JavaScript.
Only the existing validated language home destination is linked; no empty
navigation or mobile disclosure is introduced. The identity link marks home current
with `aria-current="page"` and an emphasized underline under the current single-page
language-root assumption. Before adding a public child route, make current-state
composition route-aware; the shared layout must not mark home current on child pages.

The qualification module owns the fictional sample inputs and calls the application
projection. Qualification artifacts exercise architectural/runtime properties;
they are not production data, marketing truth, or provider implementations.
It performs no I/O, does not simulate a provider, and exports only
its typed `load` operation through GenType. The historical engineering page passed
that result to ArchitectureProof; M1.4.2 removes both imports from `page.tsx`.
Retained Node SSR tests still exercise the fixture projection and semantic output. There are no handwritten
TypeScript model mirrors, unchecked route imports, speculative ports, or extra
network hops. Being called by a Next page does not make this module a Next adapter.
Next request/cache/metadata details belong in framework entrypoints or genuine
framework interoperability seams under `adapters/next`. M0.4's language adapter
translates registry failure to `notFound()` and limits qualification exposure by
the framework's development mode; it owns no catalog or disclosure decisions.

## Capability and publication boundary

`Capability` models maturity and publication as independent variants. `make`
defaults to `Withheld`; even AVAILABLE and INTERNAL yield no public view without
separate `ApprovedForPublicDisclosure`. That approval value must come from an
authoritative trusted source when real data replaces the fixtures. Constructing
the variant is not itself a security or disclosure-approval mechanism.

`CapabilityPresentation.present` returns `option<view>` and checks approval before
projecting public fields. Its canonical uppercase maturity code preserves the
original status; approved disclosure of INTERNAL information does not turn it
into a customer offering. Production claims still require evidence, scope, and
publication review under the [claims policy](../product/public-capability-claims.md).

The domain stores structured maturity, not formatted English prose. View codes
are closed uppercase semantic values, not localized labels. M0.4 maps them to typed
messages after projection; no formatting locale, market, currency, or jurisdiction
is inferred here. The sample IDs identify fictional
engineering examples, not product names.

## Interfaces and decoding

`Capability.resi` hides the capability record behind `type t`, forcing ReScript
callers through controlled construction and the narrow read API.
`CapabilityPresentation.resi` exposes the public record and projection operation
while hiding the status-mapping helper. Interfaces are justified by these actual
boundaries; UI and fixture modules do not need mechanical interface copies.
These compiler contracts are not runtime protection against arbitrary JavaScript.

`decodeMaturity` accepts a raw string and returns `result<maturity, decodeError>`.
The five supported lowercase transport values decode explicitly; unknown values
return `UnknownMaturity(raw)`, without coercion, exceptions, or AVAILABLE fallback.
This directly tested format boundary demonstrates validation without fabricating
an HTTP API. Real payloads will also require shape/size validation and separate
verification of publication authority before domain construction; maturity decoding
does not approve disclosure.

## Future responsibilities, introduced only when needed

- Formatting-locale and commercial context remain future separate concerns;
  the implemented [i18n boundary](internationalization.md) handles content language only.
- `src/infrastructure/`: concrete external I/O, HTTP clients, storage and privileged
  provider implementations behind application boundaries. No such I/O exists yet.
- `src/adapters/`: framework/library interoperability and boundary translations.
  M0.4 introduces the real Next validation seam; a Next caller alone does not justify one.
  A concrete provider network implementation belongs in infrastructure; do not
  duplicate wrappers across these areas merely to populate folders.
- UI primitives/layout, shared styles/tokens, and reviewed content grow when real
  repeated needs justify them; M0.3 creates none of that scaffolding.

No empty infrastructure, third-party, design-system, or content directories
were created. Reject large route files, generic `lib/` dumping grounds, broad UI
provider authority, and abstraction solely to match a diagram.

## Generated code and verification

In-source ESM `.res.mjs`, GenType `.gen.tsx`, and ReScript `lib/` state remain
ignored, reproducible, and never hand-edited. GenType derives the public view's
readonly TypeScript fields and component props; its generated assertions remain
localized, with strong caller types. `just clean` removes generated seams, including
stale ones after module moves, before a fresh build regenerates them. Hand-authored
JS/TS source remains trackable.

`just test-unit` compiles ReScript and runs the pure tests with Node 24's built-in
runner. Tests are written in ReScript to exercise the `.resi` API without mirroring
generated variant representations in JS. Two test-only bindings connect to
`node:test` and `node:assert/strict`; no new dependency is needed. Vitest remains
an option when mocks, runner features, or a larger suite justify it; React Testing
Library remains deferred until component behavior warrants it.

The disclosure invariant followed red/green development: a projection without
the approval check failed the default/explicit-withholding tests; adding the gate
made them pass. Decoder cases cover known and unknown values directly. Historical framework
smoke tests proved the authorized sample visible without JavaScript and separate
Counter hydration. The M1.4.2 migration retains projection/withholding via pure
and Node SSR tests while proving all qualification output absent from public
HTML, RSC and loaded scripts. Exact homepage SSR/metadata and native keyboard
navigation replace obsolete page assumptions; live Counter hydration is retired.

The historical M1.2 clean production build listed only `ui/qualification/Counter.res.mjs`
from application source in Next's client-reference manifest; capability modules
stayed in the server tree and neither withheld identifier entered HTML/RSC.
M1.4.2's clean production build has zero application-source client references and
excludes every qualification identifier/label from public HTML/RSC/JavaScript. M1.2 Chromium and Firefox each pass nine production scenarios locally;
feature run 37752595132 attempt 2 qualifies all three engines at 9/9 each (27/27)
on the signed implementation commit. The [shell record](../engineering/m1-2-shell-qualification.md#feature-branch-remote-qualification-2026-10-08)
distinguishes the failed provisioning attempt from the successful rerun. A12-01/A12-02
are resolved; [final main qualification](../engineering/m1-2-shell-qualification.md#final-merged-main-qualification-and-human-acceptance-2026-10-08)
passes all 27 scenarios at `e5f690977273ce721998f6f778b946924b5a443f`.
M1.2 is formally accepted; M1.3 is authorized. The bounded
[M1.3.1 token slice](../engineering/m1-3-1-token-qualification.md) is accepted,
merged and qualified on main: run 37791509300 at
`61784aec86d53f35aa839c9ef7fce780d3cd4805`, all three engines 10/10 (30/30).
The [M1.3.2 assessment](../engineering/m1-3-2-primitives-qualification.md) retains
the existing shared container/section CSS rules and ReScript composition; no
additional component extraction is justified. The maintainer accepted that
decision October 8, 2026 (UTC); signed main commit
`e14416956296233844b833526ccc32d21b86f47e` and run 37797004595 qualify it (30/30).
The [M1.3.3 qualification](../engineering/m1-3-3-design-system-qualification.md)
is merged and main-qualified at `b3175b473710279152e78598019812ff43e15a08`,
run 37804897764 (30/30), with adversarial audit PASS.
M1.3 was formally accepted October 8, 2026 (UTC); the
[acceptance record](../engineering/m1-3-3-design-system-qualification.md#formal-m13-acceptance-2026-10-08-utc)
owns signed main closeout `ad69f632129231bb2604a3a71678ac959900046c`,
run 37827607606 (30/30), the preserved M1.3.4 CONDITIONAL PASS and subsequent human
gate resolution. D13-01–D13-03 remain DEFERRED, UNVERIFIED — M1.5.
M1.4.1 is formally accepted; M1.4.2 was subsequently authorized October 8, 2026
(UTC) for only the [exact scoped homepage payload](../product/m1-4-1-content-readiness.md#post-acceptance-homepage-approval-2026-10-08-utc).
The [homepage record](../engineering/m1-4-2-homepage-qualification.md) owns current
local evidence and pending review/CI. Other assertions and later work remain
withheld/unauthorized. No public release or deployment is authorized.
Fedora ARM64 WebKit native runtime remains unqualified.

M0.5's [quality/CI contract](../engineering/quality-and-ci.md) adds lint/format,
supervisor, and production accessibility/security gates to `just check`.
Development feedback is not full framework/type acceptance;
retain the sequential, version-sensitive Next type workflow in the
[toolchain record](../engineering/toolchain.md). Full browser qualification remains
`just test-e2e`, with the known local WebKit native-runtime limitation reported.
