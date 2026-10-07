# Accessibility guide for agents

The acceptance target is **WCAG 2.2 AA**. Read
[accessibility and performance](../engineering/accessibility-and-performance.md).

Before inventing a control, choose an appropriate native element with a meaningful
name. Preserve heading/landmark structure, labels, instructions, error associations,
and keyboard behavior. Do not replace semantics with clickable containers or add
ARIA without a defined interaction model.

For interaction changes, check keyboard order, visible/unobscured focus, activation,
and focus return where relevant. Review touch targets, zoom/reflow, contrast,
non-color error/status cues, reduced motion, and language/direction behavior.

Use `just test-a11y` for the focused production axe/keyboard smoke, plus relevant
manual keyboard and assistive-technology checks. Report limits honestly: a passing axe scan does not
establish WCAG conformance. Scale verification to the affected behavior rather than
writing tests for a trivial reversible edit.

Check client, font, image, and motion costs alongside usability; do not introduce
arbitrary performance budgets before a measured baseline.
