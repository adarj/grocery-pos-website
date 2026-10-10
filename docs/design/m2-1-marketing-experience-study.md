# M2.1 — Marketing Experience and Technology Compatibility Study

## Status and decision scope

**Planning candidate — October 10, 2026 (UTC); not an accepted architecture change.**
[M2 planning only is authorized](../engineering/milestone-2-plan.md).
[M2.1 readiness](../product/m2-1-marketing-content-readiness.md) owns audiences,
claims, source limits and page recommendations. This study creates no designs,
assets, components, dependencies or public copy and does not accept M2.1.

The internal leading direction remains **Modern infrastructure for the independent
grocer** under the approved [visual direction](visual-direction.md). It is not
automatically a public tagline. The calm, precise presentation should help a
visitor understand a fact, its limits and a legitimate next step. No visual
treatment can substitute for product evidence or disclosure approval.

## Exact implementation baseline and ownership

Source inspection at `80b55162c865ea58d7de853a3d8eb68845c200e7`
establishes Next.js 16.3.8, React/React DOM 19.3.0, ReScript 12.3.1,
@rescript/react 0.15.0, TypeScript 6.0.3, pnpm 12.9.0 and the Node
>=24.21.0 <25 contract in `package.json`. These are repository versions,
not freshly executed tool versions or tested compatibility with proposed libraries.
No new integration proof was performed.

The accepted implementation uses `app/globals.css`, the measured 43-property
foundation and ReScript homepage composition. **CSS Modules are an allowed
selective option, not a currently implemented stylesheet family.**
[ADR 0006](../adr/0006-css-and-design-system-foundation.md) remains accepted;
Tailwind and a major UI framework require a justified revisiting decision.
The [design specification](design-system-specification.md) and accepted
[no-extraction assessment](../engineering/m1-3-2-primitives-qualification.md)
remain governing. A broader component library is not a milestone obligation.

**Next routes. ReScript models. React presents. APIs connect.**
Next keeps thin route/metadata files and validated language context. ReScript owns
typed semantic messages, domain/application policy and reusable presentation
where practical. Bounded TS/TSX provider/framework adapters are appropriate;
a visual tool must not move product decisions into copied TypeScript code.
Keep public-safe projection before presentation and localization. Server/static
rendering remains the default; interaction must earn a bounded client island.

Version-matched installed Next documentation was inspected read-only:
`node_modules/next/dist/docs/01-app/01-getting-started/11-css.md` and
`01-app/02-guides/sass.md`. These ignored dependency documents are not durable
repository links; future reviewers must resolve them from the pinned Next package.
The public official references below supplement them and can change after retrieval.

## Content hierarchy and layout proposals

Keep the existing homepage unchanged until exact new content is approved.
A future page should answer one distinct visitor question, show material
limitations near the relevant assertion, then supply evidence and a real onward
destination when available. An unsupported slot is omitted, not filled with
aspirational copy, decorative screenshots or a disabled CTA.

| Approved future content need | Smallest proposed treatment | Constraint / qualification |
| --- | --- | --- |
| Owner orientation / scope | Plain introduction, native headings and readable prose using existing container/rhythm | Preserve honest maturity and operational/website distinction; no oversized hero that buries limits |
| Evidence and requirements | Structured list or native captioned table for actual versioned data | Technical detail after plain explanation; readable narrow layout and genuine content, no generic data-grid |
| Educational article | Question-led prose, short checklist and visible source/review notes | Distinguish supplier-neutral advice from Grocery assertions; no index without a useful corpus |
| Architecture explanation | Approved static diagram with equivalent nearby text, if prose alone is insufficient | Intent versus implemented scope visible; no fake product UI or implied supported integration |
| Real onward navigation | Ordinary named anchors to reviewed eligible destinations | Route-aware identity before a child route; no menu, global client provider or mobile disclosure without a real need |
| Genuine interaction | Native control first; small isolated enhancement only when required | JS-disabled useful content; future production interaction-test gate applies |

[W3C page structure](https://www.w3.org/WAI/tutorials/page-structure/)
supports logical headings and meaningful regions. Use one meaningful H1 per
page and section hierarchy from the content, not typography size. Keep DOM reading
order coherent across columns and breakpoints. The baseline system font stack,
prose measure, rem-based sizing and logical properties remain the initial tools.
Different section rhythm or a new token consumer requires actual layout/contrast
review, not a palette replacement or blanket requalification claim.

## Technology recommendations

These are proposed dispositions. None grants permission to install, initialize,
migrate or create an ADR.

| Technology | Proposed recommendation | Demonstrated need / prerequisite |
| --- | --- | --- |
| Standards CSS, custom properties; selective CSS Modules | Retain accepted baseline for future separately approved slices | Anticipated prose, sections, lists, diagrams and tables do not establish a new tooling requirement; use Modules only when local isolation is useful |
| shadcn/ui | Defer pending demonstrated need and explicit ADR review | Maintainer interest acknowledged; selected repeated interaction must justify Tailwind/owned component dependencies and bounded interop |
| Sass / SCSS Modules | Defer pending a concrete compile-time styling need | No repeated mixin/generation problem established that existing CSS/custom properties cannot adequately serve |
| Rive | Defer pending a specific, approved storytelling/interaction problem | No current content dependency requires motion; static approved text/diagram should be evaluated first |

### Existing CSS and custom properties

The current first-party system already provides qualified text, spacing, surfaces,
links and focus roles. New layouts can start with semantic HTML, grid/flex,
logical properties and selective module isolation. This is an assessment of the
anticipated content needs, not runtime proof of unbuilt layouts.

Keep the accepted custom properties as the semantic source of truth. Do not add
raw per-page colors or a parallel theme registry because a tool supplies defaults.
New roles/consumers require measured text/non-text contrast, states, forced-colors
behavior and responsive/text-expansion checks. Extract a primitive only when real
consumers share meaningful semantics; visual resemblance alone does not require
a generic component factory.

### shadcn/ui compatibility and architecture implications

The official [Next.js installation guide](https://ui.shadcn.com/docs/installation/next)
requires Tailwind for an existing custom project and uses a component-distribution
CLI. The [Tailwind v4 guide](https://ui.shadcn.com/docs/tailwind-v4) documents
React 19 support. These establish an official integration direction, not exact
Next 16.3.8 / React 19.3.0 / ReScript proof. Browser compatibility, package versions
and the actual selected components remain unqualified here.

[shadcn/ui's code-ownership model](https://ui.shadcn.com/docs)
gives the project component source to customize. The team therefore owns local
changes, semantic behavior, dependency updates and reconciliation with upstream.
Copied/generated component TSX is owned application source, distinct from
ignored ReScript `.res.mjs` and GenType `.gen.tsx` compiler output; those must
never be hand-edited.

The official [components configuration](https://ui.shadcn.com/docs/components-json)
includes RSC, TSX, aliases, CSS and Tailwind-related choices. Future evaluation
must reconcile actual import paths, token mapping, global base styles and class
discovery for ReScript-generated consumers. No first-party ReScript integration
or correct class extraction is established by the documentation.

An adoption proposal must select actual components and their registry/source
revision, dependency graph and licenses. Do not invoke an unpinned “latest”
installer or a community registry as an approval mechanism. Review installer
effects, package scripts, pinned lockfile changes, module provenance and any icon/
motion/form dependencies. Source ownership does not remove supply-chain risk.

A native link, content section, card-like article or static comparison table can
usually be expressed with existing first-party semantics/styles; current planning
shows no need to import an entire interactive set. Components with state,
effects or browser APIs need client boundaries; static composition does not
justify a site-wide client root. Evaluate transitive client imports rather than
assuming all shadcn components are server-only or all require hydration.

If a selected pattern genuinely justifies adoption, propose a superseding
ADR 0006 decision explaining Tailwind's need, alternatives, ownership and migration
scope, while retaining ADRs 0002/0003 language and server-first boundaries.
Separately authorize implementation and prove GenType/React interoperability,
SSR/JS-disabled behavior, actual accessibility, styles/contrast, public-output
withholding and resource/main-thread costs. Accessibility marketing descriptions
are not a conformance result for Grocery's customized components.
There is no approved architecture exception or measured bundle benefit now.

### Sass / SCSS Modules

[Next's Sass guide](https://nextjs.org/docs/app/guides/sass), consistent with
the installed version's guide, supports Sass after installing a Sass implementation
and permits component-level `.module.scss` / `.module.sass` styles.
That would add a build dependency and qualification responsibility; no Sass
dependency is currently added or integration executed.

The possible gain is compile-time reuse/generation for a demonstrated complex
styling pattern. Current anticipated marketing prose/layout does not establish
that need. CSS custom properties remain runtime semantic tokens; do not duplicate
them in a Sass variable palette or hide token ownership in global injected data.
Assess mixin expansion/import duplication and final CSS ordering/output rather
than assuming fewer authoring lines reduce transferred bytes.

SCSS Modules would retain local style ownership and compile to CSS, but a later
approved slice must pin dependencies, review build/toolchain implications and
test production output, contrast, reflow and source cleanliness. Native CSS
Modules/custom properties remain the smaller initial option. Sass is not
rejected as intrinsically incompatible; adoption is deferred pending evidence.

### Rive: concrete purpose, fallback and runtime review

An approved future animation might explain a complex relationship only if a
static diagram/text alternative demonstrably fails that communication task.
No such requirement is established now. A conceptual animation cannot imply
implemented recovery, certified devices, customer deployments or live product UI.

The [official web runtime](https://rive.app/docs/runtimes/web/web-js)
uses JavaScript/WASM and canvas rendering, with renderer/package-dependent
features. Essential content and controls must remain useful as server-rendered
HTML when JavaScript, WASM, graphics support or the asset fails. Provide equivalent
visible text or a separately approved static diagram; canvas pixels are not
accessible headings, link names or authoritative product facts.

A future design must respect reduced motion before starting nonessential motion,
offer applicable pause/stop controls, avoid flashes and preserve native keyboard/
focus behavior. [WCAG Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html)
is relevant to qualifying autoplay content; the separate
[Animation from Interactions criterion](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)
is AAA, useful as optional design guidance, not an invented AA requirement.

[WASM loading guidance](https://rive.app/docs/runtimes/web/preloading-wasm)
shows externally hosted examples and a configurable WASM location.
Any future proposal must enumerate JS, WASM, .riv, image/font/audio resources,
origins, renderer requirements, cache/compression and lifecycles.
Do not adopt a CDN example by default or weaken the existing CSP to make it work.
Assess self-hosted version-matched assets, CSP fetch/worker/script/WASM behavior
and actual browser diagnostics in a separately authorized proof. Compatibility
with the present CSP is unverified; no current violation is alleged.

Measure payload, requests, compilation/startup, main-thread/GPU work, animation
frame cost and offscreen/background behavior on representative hardware.
Record profiling overhead and compare against an equivalent static explanation
under reproducible conditions. No runtime byte estimate, performance guarantee
or new mandatory budget is asserted. A real interactive island would trigger
production hydration/activation/state/keyboard/retained-focus regression restoration.

The inspected [web runtime license](https://github.com/rive-app/rive-wasm/blob/master/LICENSE)
is MIT. This mutable upstream reference was retrieved October 10, 2026;
a future package/revision needs its own exact license review. Runtime licensing
does not grant rights to editor services, community assets, fonts, photos or
commissioned artwork. Editor/export plan terms were not reliably retrieved;
commercial-service and asset-rights review remains a prerequisite, with no
subscription or paid service authorization. Preserve editable source/version
ownership and fallback maintenance if Rive is ever approved.

## Asset and brand readiness

This is a needs assessment, not a collection. No new approved asset package was
identified in the governing records; this does not prove that no assets exist
elsewhere. Each proposed owner is an unassigned role requiring maintainer
confirmation, not an invented person or delegated approver.

| Asset / possible question answered | Required ownership, fidelity and approval | Accessibility / output / maintenance |
| --- | --- | --- |
| Logo / identity artwork | Brand authority, creator/license, permitted use/variants; exact identity facts approved | Context-appropriate accessible name or decorative treatment, legible small size, real dimensions; text identity remains adequate without artwork |
| Grocery-context photography | Creator and subject/location permissions, usage scope; no implied customer relationship | Useful alt or decorative classification, honest caption, privacy/redaction, responsive dimensions/compression and contrast if text is nearby |
| Real product / hardware photos | Actual model/version/configuration and ownership; approved capability context and rights | Clear scale/details, versioned captions, no supported-device implication beyond evidence; known dimensions and suitable formats |
| Screenshots | Real implemented version, owner/disclosure permission, no secrets/customer/personnel data | Do not show imagined UI as implemented; retain meaningful nearby text, legible annotations and source revision/update trigger |
| Diagrams | Approved relationships and intent/implementation distinctions; author/source rights | Equivalent text, readable labels, non-color-only meaning and tested contrast; revise with changed contracts |
| Icons | Concrete function, source/version/license and consistent meaning | Native semantics and visible names; decorative icons ignored by assistive technology; directional behavior only when meaningful |
| Optional interactive graphics | Approved content/purpose, author/editor/runtime and asset rights | Static/non-JS/reduced-motion alternative, actual keyboard/AT behavior and measured costs; no automatic Rive or client-island approval |

[W3C image guidance](https://www.w3.org/WAI/tutorials/images/)
distinguishes informative, decorative and functional alternatives by purpose.
A licensing record and an alt-text field alone do not make a screenshot truthful
or a diagram's assertions publishable. Review the asset together with its caption,
placement, claim qualifiers and the public artifacts it creates.

Use local system fonts initially. Do not generate/download imagery, buy stock,
invent logos or fill an asset slot with fake software. An all-text first slice
is legitimate when it answers the approved question.

## Future accessibility, performance and security qualification

New marketing content requires its own risk-based plan; M1's accepted homepage
observations do not qualify different layouts, assets or interactions.
Carry forward the [accepted limitations](../engineering/milestone-1-acceptance.md)
and [M1.5 methodology](../engineering/m1-5-1-qualification-baseline.md).

| Area | Evidence needed in a future authorized slice |
| --- | --- |
| Structure and navigation | Actual headings/landmarks/names, useful JS-disabled content, native keyboard/skip/identity behavior and route-aware current-page state |
| Responsive / text | Representative narrow/intermediate/wide widths, native zoom, enlargement, pseudo expansion, spacing overrides and complete reading order; ordinary wrapping is not a defect |
| Contrast and motion | Real token/asset/state pairings, unobscured focus, forced-colors/reduced-motion behavior and genuine applicable manual environments; retain differences between emulation and devices |
| Human observations | Actual operator, exact running build, OS/browser/AT/device, viewport/DPR/zoom and expected/observed results; explicit disposition of missing coverage rather than automatic deferral |
| Public outputs / security | Exact content/metadata/assets versus disclosure approval; HTML/RSC/scripts and transitive client imports; CSP/headers/diagnostics, origins, private-data and source-map boundaries |
| Performance | Exact production build, controlled cache/network/CPU, cold/warm repetitions and raw evidence; FCP/LCP/CLS, transfer categories/requests/origins, script/main-thread costs and actual interaction where relevant |

[Text-spacing guidance](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)
requires content to tolerate the specified user overrides; it does not prescribe
those values as the site's default design. M152-T01's scoped human PASS is retained,
including P03's clarified ordinary wrapping, without claiming all future widths/
combined enlargement/platforms were tested.

[Google's Web Vitals guidance](https://web.dev/articles/vitals)
distinguishes laboratory diagnosis from real-user field data. Use the accepted
production measurement method for future comparisons and derive any proposed
budget from actual evidence plus justified headroom before human approval.
Do not infer field INP from a navigation test or use an arbitrary Lighthouse
score as qualification. No analytics, telemetry or permanent benchmark tool
is authorized by this study.

The existing CSP's qualified inline allowances do not automatically constitute
a new defect. A changed resource/runtime or sensitive surface needs review of
actual behavior and authority. A static marketing contact link differs from
a form/submission service; the latter needs a separate input/privacy/abuse and
delivery-boundary design before implementation.

## External technology and experience sources

All URLs retrieved October 10, 2026 (UTC); unless noted, publication/update date
was not recorded. Live official documentation describes current vendor guidance,
not repository-tested integration or an accepted Grocery architecture.

| ID / primary source | Use and limits |
| --- | --- |
| T01 — [shadcn/ui Next setup](https://ui.shadcn.com/docs/installation/next) | Tailwind and component-distribution setup; no CLI execution or exact-version/ReScript proof |
| T02 — [shadcn/ui Tailwind v4](https://ui.shadcn.com/docs/tailwind-v4) | React 19 / Tailwind v4 direction; selected component/browser compatibility remains to be proved |
| T03 — [shadcn/ui introduction](https://ui.shadcn.com/docs) | Local component-code ownership; not automatic accessibility or bundle assurance |
| T04 — [components.json](https://ui.shadcn.com/docs/components-json) | RSC/TSX/styles/aliases configuration considerations; does not prove ReScript class discovery |
| T05 — [Next Sass](https://nextjs.org/docs/app/guides/sass) | Build dependency and SCSS/Sass Modules support; also checked against installed Next 16.3.8 guide; no integration run |
| T06 — [Rive web runtime](https://rive.app/docs/runtimes/web/web-js) | JS/WASM/canvas and renderer choice; costs/fallback/CSP need actual proof |
| T07 — [Rive WASM loading](https://rive.app/docs/runtimes/web/preloading-wasm) | Resource/version/origin planning; example settings are not approved hosting instructions |
| T08 — [Rive runtime license](https://github.com/rive-app/rive-wasm/blob/master/LICENSE) | MIT for the inspected runtime license; mutable master, not editor/asset rights or a future pinned dependency review |
| T09 — [W3C WAI images](https://www.w3.org/WAI/tutorials/images/) | Purpose-specific alternatives; does not establish truthfulness or asset licensing |
| T10 — [W3C text spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html) | AA content-tolerance guidance; not a default token prescription or conformance audit |
| T11 — [W3C Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) | Applicable motion review; conditions and exceptions must be assessed for the actual design |
| T12 — [W3C Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) | AAA optional design guidance; target remains WCAG 2.2 AA without a conformance claim |
| T13 — [Google Web Vitals](https://web.dev/articles/vitals) | Published May 4, 2020; updated October 31, 2024 on inspected page. Laboratory/field distinction; no new values, telemetry or budget |
| T14 — [W3C WAI page structure](https://www.w3.org/WAI/tutorials/page-structure/) | Content hierarchy/regions; shared with R06 in the readiness record, not a second independent evidence source |

No source establishes Grocery's device support, commercial maturity, marketing
effectiveness or certification. Unretrievable Rive editor terms are not cited as
reviewed; the missing legal/service input remains explicit.

## Proposed decisions and review boundary

Recommend retaining first-party CSS and the current homepage while evidence is
collected. Defer shadcn/ui, Sass and Rive until a concrete approved need warrants
a separately scoped decision and qualification proof. No architectural contradiction
in the accepted current implementation is demonstrated.

Review M21-03/M21-04 in the
[planning findings](../engineering/milestone-2-plan.md#planning-findings-and-owner-decisions),
assign asset/editorial/engineering owners and seek exact content approval before
selecting a design. New routes, runtime, packages, public claims, translations
and deployment remain **NOT AUTHORIZED**. This study is a proposal for review,
not M2.1 completion or acceptance.
