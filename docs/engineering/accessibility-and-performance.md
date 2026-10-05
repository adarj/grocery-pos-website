# Accessibility and performance

These are acceptance properties for future implementation. M0.1 sets expectations
without claiming an audit, benchmark, or working design system exists.

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

## Performance philosophy

Favor server/static rendering and minimal client JavaScript. Every client boundary,
dependency, and global provider carries transfer and execution costs. Prefer
progressive enhancement when it preserves the required experience.

Do not add a third-party script ecosystem by default. Choose font loading,
fallbacks, weights, image sizes/formats, dimensions, and loading priority
deliberately. Prevent avoidable layout shifts and qualify behavior on slower
devices/networks, not only a fast development machine.

Production builds must be qualified before performance conclusions. Establish
Core Web Vitals measurements and representative routes/devices once the executable
site exists, then set budgets from evidence. **No arbitrary byte budgets in M0.1.**
Hosting, caching, private-data isolation, and real-user measurement must be evaluated
with their requirements; vendor decisions remain in the
[deferred register](deferred-decisions.md).

See [testing strategy](testing-strategy.md) for verification layers and
[ADR 0006](../adr/0006-css-and-design-system-foundation.md) for the CSS foundation.
