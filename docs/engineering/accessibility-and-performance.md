# Accessibility and performance

These are acceptance properties for implementation. M0.5 adds production
accessibility smoke over the qualification page; it does not establish a manual
accessibility audit, WCAG conformance, benchmark, or working design system.

## Implemented accessibility smoke

`@axe-core/playwright` 4.13.0 with axe-core 4.13.0 scans the complete production
`/en` page. The selected, verified tags are `wcag2a`, `wcag2aa`, `wcag21a`,
`wcag21aa`, and `wcag22aa` (70 rules in this version). There are no disabled rules
or element exclusions; any reported violation fails the test. Historically, M0.5
local Chromium and Firefox scans of the proof page passed with zero violations.
Ubuntu x86_64 CI run 37720760809 at
commit `ea43696930d129d848ad0a67d3ef2e0a98cadeb8` passes all three engines' axe and
keyboard scenarios, including WebKit 2370 after the browser-child GSettings lookup
correction. Fedora ARM64 WebKit native-runtime compatibility remains unqualified.
See the [qualification evidence](quality-and-ci.md).

Historical M0.5 and accepted M1.2/M1.3 browser qualification covered the native
Counter's hydration, Enter/Space activation, state updates and retained focus.
Those results and earlier contrast measurements remain valid for their historical
proof/Counter surfaces; they do not qualify interaction on the new homepage.

M1.4.2 checks the real homepage text, identity link, skip link and main focus target.
The browser suite measures text and focus contrast, verifies actual navigation's
forward/reverse traversal and native Enter behavior, and checks responsive layout,
enlarged/spaced text, forced colors and reduced motion. Controlled synthetic
anchors/buttons separately exercise retained generic CSS rules and control
boundaries. Synthetic button probes establish neither a button on the homepage nor
working user-facing button interaction. The
[homepage record](m1-4-2-homepage-qualification.md) owns current local results and
measurement limits; browser diagnostics also reject console/page/CSP errors.

**A142-02 — NOTE: Counter browser coverage consciously retired.** Counter source
remains available and its initial server-rendered output is tested. Live browser
hydration, state updates, Enter/Space activation and retained focus are no longer
exercised. The actual homepage has no authored client island. SSR-only tests are
not equivalent to browser interaction tests; maintainer acknowledgment of this
tradeoff remains pending.

**Before introducing the next real application client island, reinstate appropriate
production-browser tests for hydration, activation, state updates, keyboard
behavior and retained focus, as applicable to that component.** This future gate
is not yet satisfied. No public testing route, homepage Counter or new harness is
introduced by this documentation correction.
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
release reviews. Current M1.4.2 automated evidence covers homepage text/contrast,
identity/skip navigation, main-target focus, reflow and document language/direction.
There is no user-facing button or live Counter interaction on that page.

The checklist below was unperformed at M0.5. M1.3's later human-reported PASS
observations retain their historical scope; D13-01–D13-03 remain
**DEFERRED, UNVERIFIED — M1.5** in the
[canonical manual-obligation record](m1-3-3-design-system-qualification.md#retained-unverified-obligations-and-boundaries).
They do not qualify the new homepage or waive discovered defects. Human review of
the actual M1.4.2 surface remains pending:

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
