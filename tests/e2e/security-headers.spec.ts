import { expect, test } from "./browser-diagnostics";

test("production pages, root redirect, and invalid language enforce security headers", async ({ request }) => {
  for (const [path, status] of [["/en", 200], ["/", 307], ["/zz", 404]] as const) {
    const response = await request.get(path, { maxRedirects: 0 });
    expect(response.status(), path).toBe(status);
    const headers = response.headers();
    expect(headers["x-powered-by"]).toBeUndefined();
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["x-frame-options"]).toBe("DENY");
    expect(headers["permissions-policy"].split(",").map(value => value.trim()).sort())
      .toEqual(["camera=()", "geolocation=()", "microphone=()"]);
    const policy = headers["content-security-policy"];
    expect(policy).toBeTruthy();
    const directives = new Map<string, string[]>();
    for (const directive of policy.split(";").map(value => value.trim()).filter(Boolean)) {
      const [name, ...values] = directive.split(/\s+/);
      expect(directives.has(name), `duplicate CSP directive ${name}`).toBe(false);
      directives.set(name, values);
    }
    for (const directive of ["default-src", "img-src", "font-src", "connect-src"]) {
      expect(directives.get(directive), `${path}: ${directive}`).toEqual(["'self'"]);
    }
    for (const directive of ["script-src", "style-src"]) {
      expect(directives.get(directive)?.slice().sort()).toEqual(["'self'", "'unsafe-inline'"].sort());
    }
    for (const directive of ["script-src-attr", "object-src", "base-uri", "form-action", "frame-src", "frame-ancestors", "worker-src"]) {
      expect(directives.get(directive), `${path}: ${directive}`).toEqual(["'none'"]);
    }
    expect(policy).not.toContain("'unsafe-eval'");
    expect(policy).not.toMatch(/\b(?:ws|wss):/);
  }
});
