import { expect, test } from "@playwright/test";

test.describe("visible server-rendered content", () => {
  test.use({ javaScriptEnabled: false });

  test("ReScript content is visible without JavaScript", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.ok()).toBe(true);
    await expect(page.getByRole("heading", { name: "Grocery POS Website — M0.2 framework spike" })).toBeVisible();
    await expect(page.getByText("ReScript server component rendered through Next App Router.", { exact: true })).toBeVisible();
  });
});

test("ReScript client counter hydrates and responds to interaction", async ({ page }) => {
  const browserErrors: string[] = [];
  page.on("pageerror", (error) => browserErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error" || /hydrat/i.test(message.text())) {
      browserErrors.push(message.text());
    }
  });

  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Grocery POS Website — M0.2 framework spike" })).toBeVisible();
  const counter = page.getByRole("region", { name: "Client component proof" });
  await expect(counter.getByText("Count: 0", { exact: true })).toBeVisible();
  await counter.getByRole("button", { name: "Increment counter" }).click();
  await expect(counter.getByText("Count: 1", { exact: true })).toBeVisible();
  await counter.getByRole("button", { name: "Increment counter" }).click();
  await expect(counter.getByText("Count: 2", { exact: true })).toBeVisible();
  expect(browserErrors).toEqual([]);
});
