import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "./browser-diagnostics";
import { qualificationOnly, title as homeTitle, description as homeDescription } from "./approved-homepage";

// Independent, test-only R1 approval oracle. No imports from the application model.
const route = "/en/resources/evaluating-grocery-pos-systems";
const title = "Evaluating Grocery POS Systems: Checkout Continuity, Migration, and Operational Risk";
const metaTitle = "Evaluating Grocery POS: Continuity and Migration Questions";
const description = "Questions for grocery owners comparing POS systems: checkout continuity, data migration, device compatibility, payment responsibilities, and rollout evidence.";
const sections = [
  "Define what must continue during an interruption",
  "Ask to see recovery, not just disconnected operation",
  "Validate the migration with a representative sample",
  "Check the equipment and barcode path together",
  "Separate payment processing from the checkout promise",
  "Agree on the changeover and support responsibilities",
  "Source and scope notes"
];
const paragraphs = [
  "Changing checkout software starts with a practical question: what must your store be able to do, and what evidence would show that a proposed system can do it? Use the questions below to prepare a discussion with a supplier and the people responsible for your store's technology. They are evaluation suggestions, not a certification checklist or a recommendation of any particular product.",
  "Choose the questions that fit your store. Payment arrangements, taxes, privacy and measurement rules need review for your actual location and configuration. This article does not determine those obligations.",
  "Write down the operations you need during an internet interruption: finding items and prices, recording sales, accepting each intended payment type, printing receipts and closing a lane. Ask which depend on the store network, a remote service or a separate payment connection.",
  "For each operation, request a written answer: what continues, what stops, what staff see and what they should do next. Ask separately about losing internet access, losing a cloud service and losing power. A statement that a system “works offline” is too broad to answer all of those questions.",
  "Arrange a controlled demonstration away from live trading, using test records and the proposed software and equipment versions. Agree on expected results before introducing an interruption.",
  "Ask the supplier to show:",
  "Also ask how backups are checked and how restoration is demonstrated. NIST's small-business cybersecurity guide recommends testing backups and checking their integrity before restoration. That is cybersecurity guidance, not proof that any POS can survive every outage. Record what the demonstration did not test.",
  "Request a field-by-field migration plan before agreeing to a cutover. Decide which information is needed: item identifiers and barcodes, descriptions, prices, units, tax settings and, if applicable, customer or loyalty records. Ask what can be exported and imported, what needs conversion and what cannot be transferred.",
  "A Global Trade Item Number, or GTIN, identifies a trade item in the GS1 system. Matching an identifier is only one check; it does not establish that your complete catalog was migrated correctly.",
  "With the responsible store and implementation staff, compare source records with imported records and agreed expected checkout results. Include the exceptions you actually use, such as weighted goods, changed prices or discounts. Ask who investigates mismatches and who approves the result.",
  "Keep personal and payment data out of demonstrations unless an appropriate authorized process has been established. Ask how any required customer-data transfer will be scoped and protected under the rules applicable to your business. This is a request for a reviewed process, not a claim that all data may be moved.",
  "List the scanners, scales, printers, cash drawers, payment terminals, network equipment and any backup-power equipment you intend to retain or replace. Request compatibility evidence for the exact models, firmware, operating environment and POS version. For scales used to price goods, ask the responsible installer about the local measurement requirements.",
  "A scanner reading a symbol does not by itself demonstrate the complete checkout result. GS1's retail 2D implementation guideline addresses scanner software and POS host-system handling. Ask to see your relevant barcode types produce the expected item, price and quantity at checkout.",
  "Where a supplier mentions Sunrise 2027, distinguish the GS1 US industry transition initiative from a claim that every 2D capability is already implemented. It is not a universal legal deadline. Confirm the particular capability and configuration being offered.",
  "Ask who supplies the checkout software, terminal and payment-processing service, and who is responsible for installation, updates, access and incident handling. An answer about recording a sale does not establish whether a card payment can be authorized during the same interruption. Ask the payment provider about permitted behavior, restrictions and responsibility for later failures.",
  "PCI SSC explains that outsourcing payment processing does not remove the merchant's responsibility to ensure payment data is protected. Request evidence for the services actually provided and a clear allocation of shared responsibilities.",
  "Confirm applicable compliance validation and reporting with your merchant bank or relevant payment brand, as directed by PCI SSC's merchant guidance. The required approach depends on your arrangement; this article does not select a questionnaire, declare compliance or replace qualified advice.",
  "Before changing a live lane, ask who will train staff, authorize the switch, investigate exceptions and decide whether to pause or return to the previous system. Rehearse the tasks cashiers and supervisors will actually perform.",
  "Compare a phased transition with a single changeover for your own circumstances. Ask how records created after the switch would be handled if a return is needed; do not assume that switching back automatically reconciles them. Confirm any offered support channel, hours, exclusions and escalation owner in writing. Do not depend on an unconfirmed response-time promise.",
  "Finish with an evidence sheet for each critical requirement: expected behavior, tested configuration, observed result, remaining limitation and responsible person. Leave unsupported answers open. Use that record to decide whether further evaluation is needed before placing the system into live service.",
  "Sources were checked October 11, 2026 (UTC). GS1 material concerns its identifier and barcode system; it does not establish a supplier's compatibility. NIST SP 1300 is voluntary cybersecurity guidance from a U.S. authority. PCI guidance concerns payment-card arrangements; local obligations require separate review. GS1 US material is U.S.-published industry guidance, not a worldwide mandate. The questions are editorial suggestions, not observed store results, promised outcomes, or proof that any particular supplier meets them."
];
const questions = [
  "What happens to an unfinished sale when the connection is lost.",
  "Where completed sales are recorded during the interruption.",
  "What happens after reconnection, including any rejected or duplicate records.",
  "How staff compare lane records with the restored system and resolve differences.",
  "Which operations require a supervisor, supplier or payment provider."
];
const citations = [
  [
    "NIST's small-business cybersecurity guide",
    "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1300.pdf"
  ],
  [
    "Global Trade Item Number, or GTIN",
    "https://support.gs1.org/support/solutions/articles/43000734283-what-is-a-global-trade-item-number-gtin-"
  ],
  [
    "GS1's retail 2D implementation guideline",
    "https://ref.gs1.org/guidelines/2d-in-retail/1.1.0/"
  ],
  [
    "GS1 US industry transition initiative",
    "https://www.gs1us.org/industries-and-insights/by-topic/sunrise-2027"
  ],
  [
    "PCI SSC explains",
    "https://www.pcisecuritystandards.org/faqs/does-pci-dss-apply-to-merchants-who-outsource-all-payment-processing-operations-and-never-store-process-or-transmit-cardholder-data/"
  ],
  [
    "PCI SSC's merchant guidance",
    "https://www.pcisecuritystandards.org/merchants/"
  ]
];

const sectionText = [
  "Define what must continue during an interruptionWrite down the operations you need during an internet interruption: finding items and prices, recording sales, accepting each intended payment type, printing receipts and closing a lane. Ask which depend on the store network, a remote service or a separate payment connection.For each operation, request a written answer: what continues, what stops, what staff see and what they should do next. Ask separately about losing internet access, losing a cloud service and losing power. A statement that a system “works offline” is too broad to answer all of those questions.",
  "Ask to see recovery, not just disconnected operationArrange a controlled demonstration away from live trading, using test records and the proposed software and equipment versions. Agree on expected results before introducing an interruption.Ask the supplier to show:What happens to an unfinished sale when the connection is lost.Where completed sales are recorded during the interruption.What happens after reconnection, including any rejected or duplicate records.How staff compare lane records with the restored system and resolve differences.Which operations require a supervisor, supplier or payment provider.Also ask how backups are checked and how restoration is demonstrated. NIST's small-business cybersecurity guide recommends testing backups and checking their integrity before restoration. That is cybersecurity guidance, not proof that any POS can survive every outage. Record what the demonstration did not test.",
  "Validate the migration with a representative sampleRequest a field-by-field migration plan before agreeing to a cutover. Decide which information is needed: item identifiers and barcodes, descriptions, prices, units, tax settings and, if applicable, customer or loyalty records. Ask what can be exported and imported, what needs conversion and what cannot be transferred.A Global Trade Item Number, or GTIN, identifies a trade item in the GS1 system. Matching an identifier is only one check; it does not establish that your complete catalog was migrated correctly.With the responsible store and implementation staff, compare source records with imported records and agreed expected checkout results. Include the exceptions you actually use, such as weighted goods, changed prices or discounts. Ask who investigates mismatches and who approves the result.Keep personal and payment data out of demonstrations unless an appropriate authorized process has been established. Ask how any required customer-data transfer will be scoped and protected under the rules applicable to your business. This is a request for a reviewed process, not a claim that all data may be moved.",
  "Check the equipment and barcode path togetherList the scanners, scales, printers, cash drawers, payment terminals, network equipment and any backup-power equipment you intend to retain or replace. Request compatibility evidence for the exact models, firmware, operating environment and POS version. For scales used to price goods, ask the responsible installer about the local measurement requirements.A scanner reading a symbol does not by itself demonstrate the complete checkout result. GS1's retail 2D implementation guideline addresses scanner software and POS host-system handling. Ask to see your relevant barcode types produce the expected item, price and quantity at checkout.Where a supplier mentions Sunrise 2027, distinguish the GS1 US industry transition initiative from a claim that every 2D capability is already implemented. It is not a universal legal deadline. Confirm the particular capability and configuration being offered.",
  "Separate payment processing from the checkout promiseAsk who supplies the checkout software, terminal and payment-processing service, and who is responsible for installation, updates, access and incident handling. An answer about recording a sale does not establish whether a card payment can be authorized during the same interruption. Ask the payment provider about permitted behavior, restrictions and responsibility for later failures.PCI SSC explains that outsourcing payment processing does not remove the merchant's responsibility to ensure payment data is protected. Request evidence for the services actually provided and a clear allocation of shared responsibilities.Confirm applicable compliance validation and reporting with your merchant bank or relevant payment brand, as directed by PCI SSC's merchant guidance. The required approach depends on your arrangement; this article does not select a questionnaire, declare compliance or replace qualified advice.",
  "Agree on the changeover and support responsibilitiesBefore changing a live lane, ask who will train staff, authorize the switch, investigate exceptions and decide whether to pause or return to the previous system. Rehearse the tasks cashiers and supervisors will actually perform.Compare a phased transition with a single changeover for your own circumstances. Ask how records created after the switch would be handled if a return is needed; do not assume that switching back automatically reconciles them. Confirm any offered support channel, hours, exclusions and escalation owner in writing. Do not depend on an unconfirmed response-time promise.Finish with an evidence sheet for each critical requirement: expected behavior, tested configuration, observed result, remaining limitation and responsible person. Leave unsupported answers open. Use that record to decide whether further evaluation is needed before placing the system into live service.",
  "Source and scope notesSources were checked October 11, 2026 (UTC). GS1 material concerns its identifier and barcode system; it does not establish a supplier's compatibility. NIST SP 1300 is voluntary cybersecurity guidance from a U.S. authority. PCI guidance concerns payment-card arrangements; local obligations require separate review. GS1 US material is U.S.-published industry guidance, not a worldwide mandate. The questions are editorial suggestions, not observed store results, promised outcomes, or proof that any particular supplier meets them."
];

for (const javaScriptEnabled of [false, true]) {
  test.describe(`approved resource with JavaScript ${javaScriptEnabled ? "enabled" : "disabled"}`, () => {
    test.use({ javaScriptEnabled });

    test("exact editorial projection, citations, metadata and page semantics", async ({ page }) => {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page.locator("html")).toHaveAttribute("lang", "en");
      await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
      await expect(page).toHaveTitle(metaTitle);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", description);
      await expect(page.locator("html, body, header, main, article")).toHaveCount(5);
      await expect(page.getByRole("main")).toHaveCount(1);
      await expect(page.getByRole("banner")).toHaveCount(1);
      await expect(page.getByRole("navigation")).toHaveCount(0);
      await expect(page.getByRole("contentinfo")).toHaveCount(0);
      await expect(page.locator("article h1")).toHaveText(title);
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
      await expect(page.locator("article h2")).toHaveText(sections);
      await expect(page.locator("article h3, article h4")).toHaveCount(0);
      await expect(page.locator("article p")).toHaveText(paragraphs);
      await expect(page.getByRole("main")).toHaveText(title + paragraphs.slice(0, 2).join("") + sectionText.join(""));
      await expect(page.getByRole("banner")).toHaveText("Grocery POS");
      await expect(page.locator("article section")).toHaveText(sectionText);
      await expect(page.locator("article ul")).toHaveCount(1);
      await expect(page.locator("article li")).toHaveText(questions);
      await expect(page.locator("article a")).toHaveText(citations.map(([label]) => label));
      expect(await page.locator("article a").evaluateAll(nodes => nodes.map(node => node.getAttribute("href"))))
        .toEqual(citations.map(([, href]) => href));
      await expect(page.getByRole("link")).toHaveCount(8);
      const identity = page.getByRole("link", { name: "Grocery POS home", exact: true });
      await expect(identity).toHaveAttribute("href", "/en");
      await expect(identity).not.toHaveAttribute("aria-current", /.+/);
      await expect(page.locator('[aria-current="page"]')).toHaveCount(0);
      await expect(page.locator('button, form, details, summary, img, iframe, time, link[rel="canonical"], link[hreflang], script[type="application/ld+json"], meta[property^="og:"]')).toHaveCount(0);
      const output = await response!.text();
      for (const label of [...qualificationOnly, "M22-C12-A01-R1", "Proposed article title:", "Proposed meta title:", "BEGIN M22", "SHA-256", "m2-4-human-decisions", "private-evidence"])
        expect(output).not.toContain(label);
    });

    test("native home/article, keyboard skip, history and new-tab navigation preserve identity", async ({ page, context }) => {
      await page.goto("/en");
      await expect(page).toHaveTitle(homeTitle);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", homeDescription);
      const identity = page.getByRole("link", { name: "Grocery POS home", exact: true });
      await expect(identity).toHaveAttribute("aria-current", "page");
      await page.keyboard.press("Tab");
      await page.keyboard.press("Tab");
      await expect(identity).toBeFocused();
      await page.keyboard.press("Tab");
      const entry = page.getByRole("link", { name: title, exact: true });
      await expect(entry).toBeFocused();
      await expect(entry).toHaveAttribute("href", route);
      await page.keyboard.press("Enter");
      await expect(page).toHaveURL(route);
      await expect(page).toHaveTitle(metaTitle);
      await expect(identity).not.toHaveAttribute("aria-current", /.+/);
      await page.keyboard.press("Tab");
      const skip = page.getByRole("link", { name: "Skip to main content", exact: true });
      await expect(skip).toBeFocused();
      await expect(skip).toBeInViewport();
      await page.keyboard.press("Enter");
      await expect(page.getByRole("main")).toBeFocused();
      await expect(page).toHaveURL(`${route}#main-content`);
      // Direct reload resets browser focus without assuming history restoration rules.
      await page.goto(route);
      await page.keyboard.press("Tab");
      await page.keyboard.press("Tab");
      await expect(identity).toBeFocused();
      await page.keyboard.press("Enter");
      await expect(page).toHaveURL("/en");
      await expect(page).toHaveTitle(homeTitle);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", homeDescription);
      await expect(identity).toHaveAttribute("aria-current", "page");
      await page.goBack();
      await expect(page).toHaveURL(route);
      await expect(identity).not.toHaveAttribute("aria-current", /.+/);
      await expect(page).toHaveTitle(metaTitle);
      await page.goForward();
      await expect(page).toHaveURL("/en");
      await expect(page).toHaveTitle(homeTitle);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", homeDescription);
      await expect(identity).toHaveAttribute("aria-current", "page");
      const newTab = context.waitForEvent("page");
      await entry.click({ modifiers: ["ControlOrMeta"] });
      const opened = await newTab;
      await opened.waitForLoadState();
      await expect(opened).toHaveURL(route);
      await expect(opened).toHaveTitle(metaTitle);
      await expect(opened.getByRole("link", { name: "Grocery POS home", exact: true })).not.toHaveAttribute("aria-current", /.+/);
      await opened.close();
      await expect(page).toHaveURL("/en");
    });
  });
}

test("resource output stays within the approved public graph and local runtime origins", async ({ page, request }) => {
  const unexpected: string[] = [];
  page.on("request", req => {
    const url = new URL(req.url());
    if (/^https?:$/.test(url.protocol) && (url.origin !== "http://127.0.0.1:3100" || url.pathname.startsWith("/api/"))) unexpected.push(req.url());
  });
  const response = await page.goto(route);
  const rsc = await request.get(route, { headers: { RSC: "1" } });
  expect(rsc.ok()).toBe(true);
  expect(rsc.headers()["content-type"]).toContain("text/x-component");
  const outputs = [await response!.text(), await rsc.text()];
  for (const src of await page.locator("script[src]").evaluateAll(nodes => nodes.map(node => (node as HTMLScriptElement).src))) {
    const script = await request.get(src);
    expect(script.ok()).toBe(true);
    outputs.push(await script.text());
  }
  for (const output of outputs) for (const value of [...qualificationOnly, "M22-C12-A01-R1", "Proposed meta description:", "m2-4-human-decisions", "private-evidence"]) expect(output).not.toContain(value);
  expect(unexpected).toEqual([]);
});

test("resource rejects unsupported languages, pseudo production routes, nonexistent ancestors and extra segments", async ({ request }) => {
  for (const path of [
    ...["fr", "es", "zz", "EN", "english", "en-US", "en-xa", "en-XA"].map(code => `/${code}/resources/evaluating-grocery-pos-systems`),
    "/en/resources", "/en/resources/unknown", `${route}/extra`, "/en/extra",
  ]) {
    const response = await request.get(path, { maxRedirects: 0 });
    expect(response.status(), path).toBe(404);
    const output = await response.text();
    expect(output).not.toContain(paragraphs[0]);
    for (const value of qualificationOnly) expect(output).not.toContain(value);
  }
});

test("complete resource has zero automated WCAG A/AA violations and ordered visible keyboard focus", async ({ page }, info) => {
  await page.goto(route);
  const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
  await info.attach("resource-axe-summary", { body: JSON.stringify({ violations: result.violations, incomplete: result.incomplete.map(rule => rule.id), passed: result.passes.length }, null, 2), contentType: "application/json" });
  expect(result.violations).toEqual([]);
  const links = page.getByRole("link");
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press("Tab");
    await expect(links.nth(i)).toBeFocused();
    await expect(links.nth(i)).toBeInViewport();
    expect(await links.nth(i).evaluate(node => {
      const style = getComputedStyle(node);
      return node.matches(":focus-visible") && style.outlineStyle === "solid" && parseFloat(style.outlineWidth) >= 3 && parseFloat(style.outlineOffset) >= 4;
    })).toBe(true);
  }
  for (let i = 6; i >= 0; i--) {
    await page.keyboard.press("Shift+Tab");
    await expect(links.nth(i)).toBeFocused();
  }
});

test("article prose and real links reflow under widths, enlargement, spacing and media stress", async ({ page }) => {
  await page.goto(route);
  for (const width of [320, 375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${width}px overflow`).toBe(true);
    await expect(page.locator("article p")).toHaveText(paragraphs);
    const article = await page.locator("article").boundingBox();
    expect(article!.x).toBeGreaterThanOrEqual(0);
    expect(article!.x + article!.width).toBeLessThanOrEqual(width);
    const measure = await page.locator("article").evaluate(node => getComputedStyle(node).maxInlineSize);
    expect(article!.width).toBeLessThanOrEqual(parseFloat(measure) + 1);
  }
  await page.setViewportSize({ width: 320, height: 900 });
  await page.addStyleTag({ content: "* { line-height: 1.5 !important; letter-spacing: .12em !important; word-spacing: .16em !important; } p { margin-block-end: 2em !important; }" });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  await page.addStyleTag({ content: "html { font-size: 200% !important; }" });
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).fontSize)).toBe("32px");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true);
  await page.emulateMedia({ forcedColors: "active", reducedMotion: "reduce" });
  expect(await page.locator("body *").evaluateAll(nodes => nodes.every(node => {
    const style = getComputedStyle(node);
    return style.animationName === "none" && style.transitionDuration.split(",").every(value => parseFloat(value) === 0);
  }))).toBe(true);
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press("Tab");
    const focused = page.getByRole("link").nth(i);
    await expect(focused).toBeFocused();
    await expect(focused).toBeInViewport();
    expect(await focused.evaluate(node => getComputedStyle(node).outlineStyle)).toBe("solid");
  }
  // Viewport/font/media stress is supplemental; no native zoom, real OS or touch/AT claim.
});
