# Accessibility and performance

These are acceptance properties for implementation. M0.5 adds production
accessibility smoke over the qualification page; it does not establish a manual
accessibility audit, WCAG conformance, benchmark, or working design system.

## Implemented accessibility smoke

`@axe-core/playwright` 4.13.0 with axe-core 4.13.0 scans the complete production
`/en` page. The selected, verified tags are `wcag2a`, `wcag2aa`, `wcag21a`,
`wcag21aa`, and `wcag22aa` (70 rules in this version). There are no disabled rules
or element exclusions; any reported violation fails the test. Local Chromium and
Firefox scans passed with zero violations. Ubuntu x86_64 CI run 37720760809 at
commit `ea43696930d129d848ad0a67d3ef2e0a98cadeb8` passes all three engines' axe and
keyboard scenarios, including WebKit 2370 after the browser-child GSettings lookup
correction. Fedora ARM64 WebKit native-runtime compatibility remains unqualified.
See the [qualification evidence](quality-and-ci.md).

A separate keyboard smoke tabs to the named native Counter button, verifies a
visible focus treatment, activates it with Enter and Space, and checks the count
and retained focus. Browser diagnostics also reject console/page/CSP errors.
`just test-a11y` runs the focused Chromium checks; `just check` includes them, and
`just ci` runs them across the configured browser projects. See
[quality and CI](quality-and-ci.md) for the exact command and environment contract.

Automated axe smoke is distinct from manual accessibility review; neither alone
establishes WCAG 2.2 AA conformance.

## Accessibility: WCAG 2.2 AA

- Use semantic landmarks, headings, links, and native controls. Accessible names
  and labels must describe the action or input.
- Make all interactions keyboard-operable with coherent order, visible focus,
  and appropriate focus management. Focus must not be obscured by overlays.
- Associate instructions/errors with controls, identify validation failures in
  text, and expose meaningful status changes to assistive technology.
- Support zoom/reflow, adequate touch targets, and reduced motion. Do not make
  information available only through color, motion, hover, or precision pointing.
- Set language/direction attributes from explicit content context; accommodate
  translated text expansion and RTL presentation.
- Use contrast-safe semantic color tokens and verify foreground/background/state
  combinations, including focus and error indicators.

Automated accessibility smoke checks support manual evaluation; they do not prove
WCAG conformance. Review keyboard use, focus, reflow, screen-reader behavior,
contrast, and reduced-motion behavior as relevant. Native elements reduce custom
work but do not remove verification responsibility.

## Manual review checklist

Record the routes/devices reviewed and unresolved issues at later checkpoints or
release reviews. Current automated evidence covers the one button's keyboard/focus
behavior and document language/direction. The broader manual checks below remain
unperformed in M0.5:

- Keyboard-only operation, coherent focus order, visible/unobscured focus, and
  appropriate focus return across the complete surface.
- Heading/landmark structure and screen-reader names, status announcements, and
  reading order on representative assistive technology.
- Zoom/text enlargement and reflow without clipping or loss of controls.
- Text/control/state contrast, including focus indicators and non-color cues.
- Language/direction correctness and translated text expansion; review RTL once
  an RTL language or qualification surface exists.
- Motion and reduced-motion behavior when motion is introduced.

## Performance philosophy

Favor server/static rendering and minimal client JavaScript. Every client boundary,
dependency, and global provider carries transfer and execution costs. Prefer
progressive enhancement when it preserves the required experience.

Do not add a third-party script ecosystem by default. Choose font loading,
fallbacks, weights, image sizes/formats, dimensions, and loading priority
deliberately. Prevent avoidable layout shifts and qualify behavior on slower
devices/networks, not only a fast development machine.

Production builds must be qualified before performance conclusions. Establish
Core Web Vitals measurements and representative routes/devices with M1's actual
public shell, then set budgets from evidence. M0.5 adds no Lighthouse gate or
arbitrary byte budgets to the engineering page.
Hosting, caching, private-data isolation, and real-user measurement must be evaluated
with their requirements; vendor decisions remain in the
[deferred register](deferred-decisions.md).

See [testing strategy](testing-strategy.md) for verification layers and
[ADR 0006](../adr/0006-css-and-design-system-foundation.md) for the CSS foundation.
