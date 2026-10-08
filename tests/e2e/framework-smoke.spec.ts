import { expect, test } from "./browser-diagnostics";

test.describe("visible server-rendered content", () => {
  test.use({ javaScriptEnabled: false });

  test("ReScript content is visible without JavaScript", async ({ page }) => {
    const response = await page.goto("/en");
    expect(response?.ok()).toBe(true);
    await expect(page.getByRole("heading", { name: "Grocery POS Website — M0.4 internationalized architecture proof" })).toBeVisible();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
    await expect(page).toHaveTitle("Grocery POS Website — M0.4 internationalized architecture proof");
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", "Engineering qualification of language routing and public-safe capability presentation.");
    await expect(page.locator('link[rel="canonical"], link[hreflang]')).toHaveCount(0);
    await expect(page.getByRole("main")).toHaveCount(1);
    await expect(page.getByRole("banner")).toHaveCount(1);
    await expect(page.getByRole("contentinfo")).toContainText("Engineering preview.");
    await expect(page.getByRole("navigation")).toHaveCount(0);
    await expect(page.getByRole("banner").getByRole("link", { name: "Grocery POS — engineering preview home", exact: true })).toHaveAttribute("href", "/en");
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to main content", exact: true });
    await expect(skip).toBeFocused();
    await expect(skip).toBeInViewport();
    await page.keyboard.press("Enter");
    await expect(page.getByRole("main")).toBeFocused();
    await expect(page).toHaveURL(/\/en#main-content$/);
    const samples = page.getByRole("region", { name: "Public-safe capability samples" });
    await expect(samples.getByText("sample-authorized-preview", { exact: true })).toBeVisible();
    await expect(samples.getByText("PREVIEW", { exact: true })).toBeVisible();
    await expect(samples.getByText("Preview", { exact: true })).toBeVisible();
    await expect(samples.locator("li")).toHaveCount(1);
    await expect(page.getByText("sample-withheld-available", { exact: true })).toHaveCount(0);
    await expect(page.getByText("sample-withheld-internal", { exact: true })).toHaveCount(0);
    const html = await response!.text();
    expect(html).not.toContain("sample-withheld-available");
    expect(html).not.toContain("sample-withheld-internal");
  });
});

test("ReScript client counter hydrates and responds to interaction", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { name: "Grocery POS Website — M0.4 internationalized architecture proof" })).toBeVisible();
  const counter = page.getByRole("region", { name: "Client component proof" });
  await expect(counter.getByRole("status", { name: "Count", exact: true })).toHaveText("0");
  await counter.getByRole("button", { name: "Increment counter" }).click();
  await expect(counter.getByRole("status", { name: "Count", exact: true })).toHaveText("1");
  await counter.getByRole("button", { name: "Increment counter" }).click();
  await expect(counter.getByRole("status", { name: "Count", exact: true })).toHaveText("2");
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
    expect(await response.text()).not.toContain("sample-authorized-preview");
  }
});
