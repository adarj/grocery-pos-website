import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "./browser-diagnostics";

test("complete English homepage has no automated WCAG A/AA violations", async ({ page }, info) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { name: "Grocery POS", exact: true })).toBeVisible();
  // Verified axe-core tags; no exclusions or disabled rules.
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  await info.attach("axe-summary", {
    body: JSON.stringify({ violations: result.violations, incomplete: result.incomplete.map(rule => rule.id), passed: result.passes.length }, null, 2),
    contentType: "application/json",
  });
  expect(result.violations).toEqual([]);
});

test("homepage skip and identity links support native forward and reverse keyboard navigation", async ({ page }) => {
  await page.goto("/en");
  const skip = page.getByRole("link", { name: "Skip to main content", exact: true });
  const identity = page.getByRole("link", { name: "Grocery POS home", exact: true });
  const main = page.getByRole("main");
  await page.keyboard.press("Tab");
  await expect(skip).toBeFocused();
  await expect(skip).toBeInViewport();
  await expect(skip).toHaveAttribute("href", "#main-content");
  await page.keyboard.press("Tab");
  await expect(identity).toBeFocused();
  expect(await identity.evaluate(element => {
    const style = getComputedStyle(element);
    return element.matches(":focus-visible") && style.outlineStyle === "solid" && parseFloat(style.outlineWidth) >= 3;
  })).toBe(true);
  await page.keyboard.press("Shift+Tab");
  await expect(skip).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(main).toBeFocused();
  await expect(main).toHaveAttribute("id", "main-content");
  await expect(page).toHaveURL(/\/en#main-content$/);
  await page.keyboard.press("Shift+Tab");
  await expect(identity).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.getByRole("heading", { name: "Grocery POS", exact: true })).toBeVisible();
});
