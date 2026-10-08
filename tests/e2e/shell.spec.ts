import { expect, test } from "./browser-diagnostics";

function contrast(first: string, second: string) {
  const luminance = (color: string) => {
    const channels = color.match(/[\d.]+/g)!.slice(0, 3).map(value => {
      const channel = Number(value) / 255;
      return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    });
    return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
  };
  const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

test("preview shell has measured text, action and focus contrast", async ({ page }, info) => {
  await page.goto("/en");
  const button = page.getByRole("button", { name: "Increment counter", exact: true });
  const measured = await page.evaluate(() => {
    const body = getComputedStyle(document.body);
    const header = getComputedStyle(document.querySelector("header")!);
    const identity = getComputedStyle(document.querySelector("header a")!);
    const action = getComputedStyle(document.querySelector("button")!);
    return { bodyText: body.color, page: body.backgroundColor, identity: identity.color,
      surface: header.backgroundColor, actionText: action.color, action: action.backgroundColor,
      boundary: action.borderColor };
  });
  const results: Record<string, number> = {
    pageText: contrast(measured.bodyText, measured.page),
    identityText: contrast(measured.identity, measured.surface),
    buttonText: contrast(measured.actionText, measured.action),
    buttonBoundary: contrast(measured.boundary, measured.page),
  };
  await button.hover();
  const hovered = await button.evaluate(element => {
    const style = getComputedStyle(element);
    return { text: style.color, background: style.backgroundColor };
  });
  results.buttonHoverText = contrast(hovered.text, hovered.background);
  await page.mouse.down();
  try {
    const active = await button.evaluate(element => {
      const style = getComputedStyle(element);
      return { text: style.color, background: style.backgroundColor };
    });
    results.buttonActiveText = contrast(active.text, active.background);
  } finally {
    await page.mouse.up();
  }
  // Real keyboard traversal reaches the focus treatment, including the skip link.
  await page.goto("/en");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to main content", exact: true });
  await expect(skip).toBeFocused();
  const focused = await skip.evaluate(element => {
    const style = getComputedStyle(element);
    return { text: style.color, background: style.backgroundColor, outline: style.outlineColor };
  });
  results.skipText = contrast(focused.text, focused.background);
  results.skipFocusSurface = contrast(focused.outline, measured.surface);
  results.skipFocusFill = contrast(focused.outline, focused.background);
  for (const key of ["pageText", "identityText", "buttonText", "buttonHoverText", "buttonActiveText", "skipText"]) {
    expect(results[key], key).toBeGreaterThanOrEqual(4.5);
  }
  for (const key of ["buttonBoundary", "skipFocusSurface", "skipFocusFill"]) {
    expect(results[key], key).toBeGreaterThanOrEqual(3);
  }
  await info.attach("shell-contrast", { body: JSON.stringify({ measured, results }, null, 2), contentType: "application/json" });
});

test("preview shell reflows with narrow widths, enlarged text and spacing overrides", async ({ page }) => {
  await page.goto("/en");
  const button = page.getByRole("button", { name: "Increment counter", exact: true });
  for (const width of [320, 375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${width}px overflow`).toBe(true);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(button).toBeVisible();
    const bounds = await button.boundingBox();
    expect(bounds!.x).toBeGreaterThanOrEqual(0);
    expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(width);
  }
  // 1280px at 400% zoom has a 320 CSS-pixel viewport; this asserts that reflow
  // condition, independently of browser-chrome zoom controls.
  await page.setViewportSize({ width: 320, height: 900 });
  await page.addStyleTag({ content: "html { font-size: 200% !important; } * { line-height: 1.5 !important; letter-spacing: .12em !important; word-spacing: .16em !important; } p { margin-block-end: 2em !important; }" });
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).fontSize)).toBe("32px");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to main content", exact: true })).toBeFocused();
  await expect(page.getByRole("link", { name: "Skip to main content", exact: true })).toBeInViewport();
  await page.keyboard.press("Tab");
  await expect(page.getByRole("banner").getByRole("link")).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(button).toBeFocused();
  await expect(button).toBeInViewport();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("status", { name: "Count", exact: true })).toHaveText("1");
  await expect(button).toBeFocused();
});
