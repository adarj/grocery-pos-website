import type { Locator } from "@playwright/test";
import { expect, test } from "./browser-diagnostics";

// Computed opaque sRGB only. Reject transparency/other color spaces rather than
// reporting a ratio without the compositing or gamut conversion they require.
function contrast(first: string, second: string) {
  const luminance = (color: string) => {
    const match = color.match(/^rgba?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)(?:\s*,\s*(1(?:\.0+)?))?\s*\)$/);
    if (!match) throw new Error(`Unsupported contrast color: ${color}`);
    const channels = match.slice(1, 4).map(value => {
      const channel = Number(value) / 255;
      if (channel > 1) throw new Error(`Invalid sRGB channel: ${color}`);
      return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    });
    return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
  };
  const values = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

async function colors(element: Locator) {
  return element.evaluate(node => {
    const style = getComputedStyle(node);
    return { text: style.color, background: style.backgroundColor, border: style.borderColor };
  });
}

async function focusIndicator(element: Locator) {
  const indicator = await element.evaluate(node => {
    const style = getComputedStyle(node);
    return { visible: node.matches(":focus-visible"), color: style.outlineColor,
      style: style.outlineStyle, width: parseFloat(style.outlineWidth), offset: parseFloat(style.outlineOffset) };
  });
  expect(indicator.visible).toBe(true);
  expect(indicator.style).toBe("solid");
  expect(indicator.width).toBeGreaterThanOrEqual(3);
  expect(indicator.offset).toBeGreaterThanOrEqual(4);
  await expect(element).toBeInViewport();
  return indicator.color;
}

test("homepage shell has measured text, action and focus contrast", async ({ page }, info) => {
  await page.goto("/en");
  const banner = page.getByRole("banner");
  const identity = banner.getByRole("link", { name: "Grocery POS home", exact: true });
  await expect(identity).toHaveAttribute("href", "/en");
  await expect(identity).toHaveAttribute("aria-current", "page");
  await expect(identity).toHaveCSS("text-decoration-line", "underline");
  const currentUnderline = await identity.evaluate(element => {
    const style = getComputedStyle(element);
    return parseFloat(style.textDecorationThickness) / parseFloat(style.fontSize);
  });
  expect(currentUnderline).toBeGreaterThanOrEqual(0.14);
  await expect(banner.getByRole("link")).toHaveCount(1);
  await expect(page.getByRole("navigation")).toHaveCount(0);
  await expect(banner.getByRole("button")).toHaveCount(0);
  await expect(banner.locator("details, summary")).toHaveCount(0);
  // Test-only retained control styling: no button exists on the real homepage.
  await page.locator("main").evaluate(node => {
    const button = document.createElement("button");
    button.dataset.controlProbe = "true";
    button.textContent = "Control styling probe";
    node.append(button);
  });
  const button = page.locator("[data-control-probe]");
  const body = await colors(page.locator("body"));
  const header = await colors(banner);

  const results: Record<string, { foreground: string; background: string; ratio: number; minimum: number }> = {};
  const pair = (name: string, foreground: string, background: string, minimum = 4.5) => {
    results[name] = { foreground, background, ratio: contrast(foreground, background), minimum };
  };
  pair("pageText", body.text, body.background);
  pair("headerText", header.text, header.background);
  pair("mainParagraphText", (await colors(page.locator("main p").first())).text, body.background);
  pair("identityText", (await colors(identity)).text, header.background);
  await identity.hover();
  pair("identityHoverText", (await colors(identity)).text, header.background);
  await page.mouse.down();
  try {
    expect(await identity.evaluate(node => node.matches(":active"))).toBe(true);
    pair("identityActiveText", (await colors(identity)).text, header.background);
  } finally {
    // Move away before release: sample :active without navigating the page.
    await page.mouse.move(0, 0);
    await page.mouse.up();
  }
  const action = await colors(button);
  pair("buttonText", action.text, action.background);
  pair("buttonBoundary", action.border, body.background, 3);
  await button.hover();
  const hovered = await colors(button);
  pair("buttonHoverText", hovered.text, hovered.background);
  pair("buttonHoverBoundary", hovered.border, body.background, 3);
  await page.mouse.down();
  try {
    expect(await button.evaluate(node => node.matches(":active"))).toBe(true);
    const active = await colors(button);
    pair("buttonActiveText", active.text, active.background);
    pair("buttonActiveBoundary", active.border, body.background, 3);
  } finally {
    await page.mouse.up();
  }
  // Controlled test-only anchors exercise the generic link rule on both current
  // page/header surfaces. Removed before traversal; no application route is added.
  for (const [host, background] of [["main", body.background], ["header", header.background]]) {
    await page.locator(host).evaluate(node => {
      const link = document.createElement("a");
      link.dataset.contrastProbe = "true";
      link.href = "#main-content";
      link.textContent = "Link contrast probe";
      node.append(link);
    });
    const link = page.locator("[data-contrast-probe]");
    try {
      pair(`link-${host}`, (await colors(link)).text, background);
      await link.hover();
      pair(`link-${host}-hover`, (await colors(link)).text, background);
      await page.mouse.down();
      try {
        expect(await link.evaluate(node => node.matches(":active"))).toBe(true);
        pair(`link-${host}-active`, (await colors(link)).text, background);
      } finally {
        await page.mouse.move(0, 0);
        await page.mouse.up();
      }
    } finally {
      await link.evaluate(node => node.remove());
    }
  }
  // Real keyboard traversal reaches the focus treatment, including the skip link.
  await page.goto("/en");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to main content", exact: true });
  await expect(skip).toBeFocused();
  const focused = await colors(skip);
  pair("skipText", focused.text, focused.background);
  const skipFocus = await focusIndicator(skip);
  pair("skipFocusSurface", skipFocus, header.background, 3);
  pair("skipFocusFill", skipFocus, focused.background, 3);
  await page.keyboard.press("Tab");
  await expect(identity).toBeFocused();
  pair("identityFocusSurface", await focusIndicator(identity), header.background, 3);
  await page.locator("main").evaluate(node => {
    const button = document.createElement("button");
    button.dataset.controlProbe = "true";
    button.textContent = "Control styling probe";
    node.append(button);
  });
  await page.keyboard.press("Tab");
  await expect(button).toBeFocused();
  // The 4px offset leaves page background adjacent to the 3px indicator;
  // action fill is not its neighboring surface.
  pair("buttonFocusPage", await focusIndicator(button), body.background, 3);
  await page.goto("/en");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
  pair("mainFocusPage", await focusIndicator(page.getByRole("main")), body.background, 3);
  for (const [name, result] of Object.entries(results)) {
    expect(result.ratio, name).toBeGreaterThanOrEqual(result.minimum);
  }
  await info.attach("shell-contrast", { body: JSON.stringify(results, null, 2), contentType: "application/json" });
});

test("homepage shell reflows with narrow widths, enlarged text and spacing overrides", async ({ page }) => {
  await page.goto("/en");
  const identity = page.getByRole("banner").getByRole("link");
  for (const width of [320, 375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${width}px overflow`).toBe(true);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(identity).toBeVisible();
    const bounds = await identity.boundingBox();
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
  await expect(identity).toBeInViewport();
  await page.keyboard.press("Shift+Tab");
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
  await expect(page.getByRole("heading", { level: 1 })).toBeInViewport();
});


test("homepage shell retains native controls and focus with forced colors and reduced motion", async ({ page }) => {
  await page.emulateMedia({ forcedColors: "active", reducedMotion: "reduce" });
  await page.goto("/en");
  expect(await page.evaluate(() => matchMedia("(forced-colors: active)").matches)).toBe(true);
  expect(await page.evaluate(() => matchMedia("(prefers-reduced-motion: reduce)").matches)).toBe(true);
  // No animations/transitions exist; reduced motion needs no extra override.
  expect(await page.locator("body *").evaluateAll(nodes => nodes.every(node => {
    const style = getComputedStyle(node);
    return style.animationName === "none" && style.transitionDuration.split(",").every(value => parseFloat(value) === 0);
  }))).toBe(true);
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to main content", exact: true });
  await expect(skip).toBeFocused();
  await focusIndicator(skip);
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
  await focusIndicator(page.getByRole("main"));
  await page.keyboard.press("Shift+Tab");
  const identity = page.getByRole("link", { name: "Grocery POS home", exact: true });
  await expect(identity).toBeFocused();
  const outline = await focusIndicator(identity);
  const highlight = await identity.evaluate(node => {
    const probe = document.createElement("span");
    node.append(probe);
    try {
      probe.style.color = "Highlight";
      return getComputedStyle(probe).color;
    } finally {
      probe.remove();
    }
  });
  expect(outline).toBe(highlight);
  // Retain forced-colors boundary coverage for the existing control CSS without
  // claiming that the homepage contains a Counter or exercising its hydration.
  await page.locator("main").evaluate(node => {
    const button = document.createElement("button");
    button.dataset.controlProbe = "true";
    button.textContent = "Control styling probe";
    node.append(button);
  });
  const button = page.locator("[data-control-probe]");
  try {
    const buttonText = await button.evaluate(node => {
      const probe = document.createElement("span");
      node.append(probe);
      try {
        probe.style.color = "ButtonText";
        return getComputedStyle(probe).color;
      } finally { probe.remove(); }
    });
    await expect(button).toHaveCSS("border-top-color", buttonText);
    await expect(button).toHaveCSS("border-top-width", "2px");
  } finally { await button.evaluate(node => node.remove()); }
});
