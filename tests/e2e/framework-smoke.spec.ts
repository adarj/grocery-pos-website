import { expect, test } from "./browser-diagnostics";
import { title, description, headings, paragraphs, qualificationOnly } from "./approved-homepage";

test.describe("visible server-rendered content", () => {
  test.use({ javaScriptEnabled: false });

  test("all approved homepage sections and metadata render exactly without JavaScript", async ({ page }) => {
    const response = await page.goto("/en");
    expect(response?.ok()).toBe(true);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
    await expect(page).toHaveTitle(title);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", description);
    await expect(page.locator('link[rel="canonical"], link[hreflang], script[type="application/ld+json"], meta[property^="og:"]')).toHaveCount(0);
    await expect(page.getByRole("main")).toHaveCount(1);
    await expect(page.getByRole("banner")).toHaveCount(1);
    await expect(page.getByRole("contentinfo")).toHaveCount(0);
    await expect(page.getByRole("navigation")).toHaveCount(0);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator("main h1, main h2")).toHaveText(headings);
    const sections = page.locator("main > section");
    await expect(sections).toHaveCount(4);
    await expect(sections.first().locator("p").first()).toHaveText("Introduction");
    for (let i = 0; i < paragraphs.length; i++) {
      const paragraph = sections.nth(i).locator("p").last();
      await expect(paragraph).toHaveText(paragraphs[i]);
      await expect(paragraph).toBeVisible();
    }
    await expect(page.locator("main p")).toHaveCount(5);
    const identity = page.getByRole("link", { name: "Grocery POS home", exact: true });
    await expect(identity).toHaveAttribute("href", "/en");
    await expect(identity).toHaveAttribute("aria-current", "page");
    await expect(page.getByRole("link")).toHaveCount(2);
    await expect(page.locator("button, form, details, summary, img, iframe")).toHaveCount(0);
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to main content", exact: true });
    await expect(skip).toBeFocused();
    await expect(skip).toBeInViewport();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("main")).toBeFocused();
    await expect(page).toHaveURL(/\/en#main-content$/);
    const html = await response!.text();
    for (const value of qualificationOnly) expect(html).not.toContain(value);
  });
});

test("JavaScript-enabled homepage preserves approved output and excludes fixtures from HTML, RSC and scripts", async ({ page, request }) => {
  const unexpectedRequests: string[] = [];
  page.on("request", req => {
    const url = new URL(req.url());
    if ((url.protocol === "http:" || url.protocol === "https:") &&
        (url.origin !== "http://127.0.0.1:3100" || url.pathname.startsWith("/api/"))) unexpectedRequests.push(req.url());
  });
  const response = await page.goto("/en");
  await expect(page.locator("main h1, main h2")).toHaveText(headings);
  await expect(page.locator("main > section p:last-child")).toHaveText(paragraphs);
  await expect(page.locator("main")).toHaveText(["Introduction", headings[0], paragraphs[0], headings[1], paragraphs[1], headings[2], paragraphs[2], headings[3], paragraphs[3]].join(""));
  const rsc = await request.get("/en", { headers: { RSC: "1" } });
  expect(rsc.ok()).toBe(true);
  expect(rsc.headers()["content-type"]).toContain("text/x-component");
  const publicOutputs = [await response!.text(), await rsc.text()];
  for (const src of await page.locator("script[src]").evaluateAll(nodes => nodes.map(node => (node as HTMLScriptElement).src))) {
    const script = await request.get(src);
    expect(script.ok()).toBe(true);
    publicOutputs.push(await script.text());
  }
  for (const output of publicOutputs) for (const value of qualificationOnly) expect(output).not.toContain(value);
  await expect(page.getByRole("link")).toHaveCount(2);
  await expect(page.getByRole("button")).toHaveCount(0);
  await expect(page.getByRole("navigation")).toHaveCount(0);
  expect(unexpectedRequests).toEqual([]);
});

test("root temporarily redirects only to the public language and preserves query", async ({ request }) => {
  for (const preference of [undefined, "en", "en-GB,en;q=0.8", "fr", "en-XA", "en-XA,fr;q=0.9"]) {
    const response = await request.get("/?qualification=1", {
      headers: preference ? { "Accept-Language": preference } : {},
      maxRedirects: 0,
    });
    expect(response.status()).toBe(307);
    const destination = new URL(response.headers().location, response.url());
    expect(destination.pathname).toBe("/en");
    expect(destination.search).toBe("?qualification=1");
    expect(response.headers()["cache-control"]).toBe("no-store");
    expect(response.headers().vary).toContain("Accept-Language");
  }
});

test("unsupported identifiers and the pseudo language are unavailable in production", async ({ request }) => {
  for (const code of ["fr", "es", "zz", "EN", "english", "en-US", "en-xa", "en-XA"]) {
    const response = await request.get(`/${code}`, { maxRedirects: 0 });
    expect(response.status(), code).toBe(404);
    const html = await response.text();
    for (const value of qualificationOnly) expect(html).not.toContain(value);
    for (const paragraph of paragraphs) expect(html).not.toContain(paragraph);
  }
});
