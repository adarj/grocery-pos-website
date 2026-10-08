# Visual direction

**Status: M1.1 leading hypothesis, pending human design approval.**
Canonical direction for later implementation; no asset, font or component is
created here. Pair with [information architecture](../product/website-information-architecture.md)
and the [design-system contract](design-system-specification.md).

## Leading hypothesis

**Modern infrastructure for the independent grocer.**

Express dependable, precise and technically credible infrastructure through calm
hierarchy and clear explanations. Keep it approachable for an owner/operator:
readability and practical context should carry more weight than spectacle.
“Premium” means attentive spacing, legible details and disciplined materials,
not luxury exclusivity or a price/availability claim. This phrase is an internal
direction hypothesis, not approved public marketing copy.

Ground the site in real grocery environments and verified product relationships.
Do not imply operational features or deployed performance through decorative
dashboards. International adaptability starts with neutral assets, expandable
text and language-independent structure.

| Direction considered | Benefit | Risk / disposition |
| --- | --- | --- |
| Calm infrastructure with grocery context | Connects technical rigor to understandable physical-store decisions | Leading direction; real assets and reviewed copy are required to avoid generic abstraction |
| Dense industrial/technical catalog | Gives specifications authority and practical detail | Useful for hardware/docs sections; too dense as the site's universal presentation |
| Warm community/editorial emphasis | Approachable and humane | Useful in company/resources; avoid implying unverified customer stories or obscuring technical constraints |

Favor the first direction, borrowing precise specification layouts and humane
editorial pacing from the alternatives. Avoid interchangeable enterprise-SaaS
hero art, excessive gradients/glass, ornamental charts, playful grocery mascots,
fake screenshots, unsupported metrics and excessive motion.

## Candidate palette

These are raw **candidates, not contrast-approved production tokens**.
[Semantic roles and validation](design-system-specification.md#color-contract)
determine their eventual use; no combination has been measured in this checkpoint.

| Candidate | Value | Intended exploration |
| --- | --- | --- |
| Deep ink | #152B30 | Main text, strong headings, occasional contrasting panel |
| Warm paper | #F7F8F4 | Predominant light page background |
| Evergreen | #236D58 | Restrained action/link emphasis, selected meaningful accents |
| Soft sage | #DDEBE4 | Quiet supporting surfaces and explanatory grouping |
| Harvest highlight | #D5A65C | Small editorial emphasis; not default small text or an assumed warning color |

Do not infer semantic status from hue. Warning/error/focus colors still need role
selection and measured foreground/background/state pairs. An evergreen brand
accent does not automatically mean a successful operation; harvest does not
automatically mean a safe warning treatment. Large colored surfaces should remain
rare enough to preserve hierarchy.

## Composition and typography

Use generous but purposeful whitespace: align content on a readable grid, distinguish
sections through rhythm rather than decorative boxes, and group details close to
the question they answer. Alternate editorial prose and practical supporting
information where useful. Avoid identical hero/card sequences on every template.

Start with local system sans-serif fonts. Weight, size, line height and measure
create hierarchy; short display lines must wrap naturally. Technical identifiers
may use the system monospace stack. Long text should remain comfortable rather
than stretched across the full desktop viewport. No remote font provider, font
dependency or image-of-text heading is approved here.

## Imagery, illustration and icons

Prefer verified product photography or clearly identified real grocery context
with usage rights and approval. Capture equipment/details in honest scale and
lighting. A generic shop image must never imply a customer deployment or endorsement.
If suitable imagery does not exist, use a strong text layout; do not fabricate a
screenshot or purchase stock imagery to fill a decorative slot.

Explanatory diagrams may show approved architecture and relationships, with a
text equivalent and explicit scope. Do not turn concepts into fake product UI.
Icons should be small, consistent and functional. Visible labels carry meaning;
no flag-as-language icons, icon-only critical CTAs or culturally dependent food
symbols as navigation. Directional icons mirror only when their meaning is directional;
product photos, logos, numbers and technical identifiers do not mirror automatically.

## Surfaces, elevation and motion

Prefer subtle borders and tonal surface differences over stacks of elevated cards.
Use restrained radii, minimal shadows and mostly flat layouts. Borders must not
be the only clue to a state; interactive boundaries require contrast checks.

Motion is optional functional feedback, never the organizing idea. Candidate
100–200 ms opacity/color/disclosure transitions need testing; no autoplay carousel,
parallax, scroll hijack or large entrance choreography. Reduced-motion presentation
removes nonessential movement while preserving state changes. Default to a stable
page with no motion until an interaction justifies it.

## Approval evidence and open choices

Human approval selects the direction, not accessibility certification. M1.2/M1.3
must qualify actual layouts, palette pairs, focus states and imagery under the
[responsive scenarios](design-system-specification.md#responsive-and-accessibility-qualification).
Confirm appetite for warm paper/evergreen balance, the desired level of technical
density, existing brand/asset constraints and available truthful photography.
Do not generate assets or lock final palette/type measurements during M1.1.
