import { expect, test as base } from "@playwright/test";

// Enforce browser/hydration/CSP diagnostics for every production page scenario.
export const test = base.extend<{ browserDiagnostics: void }>({
  browserDiagnostics: [async ({ page }, use) => {
    const errors: string[] = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("console", message => {
      if (message.type() === "error" || /hydrat/i.test(message.text())) errors.push(message.text());
    });
    await page.addInitScript(() => {
      document.addEventListener("securitypolicyviolation", event => {
        console.error(`CSP violation: ${event.effectiveDirective} ${event.blockedURI}`);
      });
    });
    await use();
    expect(errors, "browser, hydration, and CSP diagnostics").toEqual([]);
  }, { auto: true }],
});

export { expect } from "@playwright/test";
