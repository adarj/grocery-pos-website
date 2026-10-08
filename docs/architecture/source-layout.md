# Source layout and application boundary

M0.3 proves the responsibility map with a small capability-publication slice;
M0.4 adds a typed internationalization boundary over that slice; M1.2 adds a
server-rendered [engineering-preview shell](../engineering/m1-2-shell-qualification.md).
This is an engineering surface with fictional fixtures, not a capability ledger.

## Actual source structure

```text
app/
  [lang]/layout.tsx                   Validated HTML language/direction, metadata, static params, shell
  [lang]/page.tsx                     Obtain typed views/language and render the ReScript page
  globals.css                         Semantic tokens and accessible preview-shell/proof CSS
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
    EngineeringShell.res              Server-rendered identity, skip link, footer; GenType export
    ArchitectureProof.res             Sole main landmark and engineering-page composition
    CapabilityList.res                Semantic rendering of public views
    qualification/Counter.res         Isolated M0.2 hydration qualification island
tests/
  unit/CapabilityPublicationTest.res   Direct pure-core tests, compiled for Node's test runner
  unit/InternationalizationTest.res    Language, exposure, messages, and pseudo invariants
  e2e/framework-smoke.spec.ts          Visible SSR without JS, then interactive hydration
  e2e/accessibility.spec.ts            Whole-page axe and native keyboard/focus behavior
  e2e/shell.spec.ts                    Measured contrast, reflow, expanded text and forced-colors/reduced-motion
  e2e/security-headers.spec.ts         Production page/redirect/404 HTTP security policy
  e2e/browser-diagnostics.ts           Shared browser/hydration/CSP error gate
  tooling/dev-supervisor.test.mjs      Isolated process-group regression fixtures
```

The generic server-tree `FrameworkProof.res` and `src/spike/` are superseded.
The counter remains useful for ongoing ReScript client-directive/hydration
qualification; it is not an application feature or a design-system primitive.

## Dependency direction

```text
proxy.ts --> i18n/Language (public-only root selection)
app/[lang] --> adapters/next/language --> i18n/Language
           --> qualification/CapabilityProofData --> application --> domain
           --> ui/EngineeringShell --> i18n/Messages, i18n/Language (server only)
           --> ui/ArchitectureProof --> ui/CapabilityList --> application view type
                                    --> i18n/Messages --> i18n/Language
                                    --> ui/qualification/Counter (resolved labels; client island)
```

Domain code imports no Next, React, browser, or provider APIs. Application code
depends on the domain and owns whether a public view exists. The list receives
only `id` and a closed semantic `maturityCode`, never publication internals, and makes
no eligibility decision. `Messages` maps these codes exhaustively to display labels.
UI imports of the application view are type dependencies; policy and catalogs are
not part of the client island. The root layout passes its validated language and
children through the generated shell props. ArchitectureProof owns the sole
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
its typed `load` operation to TypeScript through GenType. `page.tsx` passes its
result to the generated ReScript component interface. There are no handwritten
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
made them pass. Decoder cases cover known and unknown values directly. Framework
smoke tests prove the authorized sample is visible without JavaScript, withheld
samples are absent, and the separate counter hydrates without errors.

The clean production build lists only `ui/qualification/Counter.res.mjs` from
application source in Next's client-reference manifest; the capability modules
remain in the server tree. Static HTML/RSC output contains neither withheld sample
identifier. M1.2 Chromium and Firefox each pass nine production scenarios locally;
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
additional component extraction is justified. Its human scope review and
exact-commit remote CI remain pending. M1.3 is not complete; M1.3.3 has not begun.
Fedora ARM64 WebKit native runtime remains unqualified.

M0.5's [quality/CI contract](../engineering/quality-and-ci.md) adds lint/format,
supervisor, and production accessibility/security gates to `just check`.
Development feedback is not full framework/type acceptance;
retain the sequential, version-sensitive Next type workflow in the
[toolchain record](../engineering/toolchain.md). Full browser qualification remains
`just test-e2e`, with the known local WebKit native-runtime limitation reported.
