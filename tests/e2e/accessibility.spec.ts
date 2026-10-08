import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "./browser-diagnostics";

test("complete English page has no automated WCAG A/AA violations", async ({ page }, info) => {
  await page.goto("/en");
  await expect(page.getByRole("button", { name: "Increment counter" })).toBeVisible();
  // Verified against axe-core 4.13.0's actual rule tags; no exclusions/disabled rules.
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  await info.attach("axe-summary", {
    body: JSON.stringify({ violations: result.violations, incomplete: result.incomplete.map(rule => rule.id), passed: result.passes.length }, null, 2),
    contentType: "application/json",
  });
  expect(result.violations).toEqual([]);
});

test("Counter supports keyboard activation and retains visible focus", async ({ page }) => {
  await page.goto("/en");
  const button = page.getByRole("button", { name: "Increment counter", exact: true });
  const count = page.getByRole("status", { name: "Count", exact: true });
  await expect(count).toHaveText("0");
  const skip = page.getByRole("link", { name: "Skip to main content", exact: true });
  await page.keyboard.press("Tab");
  await expect(skip).toBeFocused();
  await expect(skip).toBeInViewport();
  await expect(skip).toHaveAttribute("href", "#main-content");
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(button).toBeFocused();
  expect(await button.evaluate(element => {
    const style = getComputedStyle(element);
    return element.matches(":focus-visible") &&
      ((style.outlineStyle !== "none" && parseFloat(style.outlineWidth) > 0) || style.boxShadow !== "none");
  })).toBe(true);
  await page.keyboard.press("Enter");
  await expect(count).toHaveText("1");
  await expect(button).toBeFocused();
  await page.keyboard.press("Space");
  await expect(count).toHaveText("2");
  await expect(button).toBeFocused();
});
