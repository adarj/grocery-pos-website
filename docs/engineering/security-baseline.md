# Security baseline

Security constraints apply before authentication exists. M0.5 implements and tests
response headers for the unauthenticated qualification page. These controls do not
establish HTTPS deployment correctness or account/commerce security.

## Implemented response policy

`next.config.ts` applies these headers to all paths, including the root redirect
and invalid-language responses. The ordinary Next Node server owns delivery;
there is no custom server or hosting-provider dependency.

| Control | Policy and purpose |
| --- | --- |
| Powered-by header | `poweredByHeader: false`; do not disclose the default Next header. |
| MIME handling | `X-Content-Type-Options: nosniff`. |
| Referrer | `strict-origin-when-cross-origin`; retain useful same-origin referrers while limiting cross-origin detail. |
| Framing | CSP `frame-ancestors 'none'`, plus `X-Frame-Options: DENY` for older clients. No current surface needs embedding. |
| Browser capabilities | `Permissions-Policy: camera=(), microphone=(), geolocation=()`; none is used by this website. |

Production CSP is:

```text
default-src 'self'; script-src 'self' 'unsafe-inline'; script-src-attr 'none';
style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'self';
connect-src 'self'; object-src 'none'; base-uri 'none'; form-action 'none';
frame-src 'none'; frame-ancestors 'none'; worker-src 'none'
```

Inline scripts are needed by static Next hydration/RSC output; a browser probe
removing that allowance prevented Counter hydration. Inline styles are needed by
Next's default 404 surface; removing that allowance produced CSP violations.
Inline event-handler attributes remain denied separately. Other directives limit
resource/network origins and deny unused objects, framing, forms, workers, and base
URL changes. This policy does **not** prevent every inline-script injection.

The installed Next 16.3.8 CSP documentation states that nonce-based rendering
requires dynamic rendering. The current page has no authentication, user input,
provider access, or third-party runtime scripts, so M0.5 preserves static `/en`
rather than introducing that cost or experimental SRI. Before authentication,
billing/commerce, rich user content, sensitive support uploads, or significant
third-party JavaScript, revisit nonce/hash/SRI options against the then-current
framework. Do not treat the inline allowance as permanent policy for sensitive
surfaces.

Development alone adds script `'unsafe-eval'` and connection `ws: wss:` allowances
for Next tooling. Production response tests reject those relaxations. Browser
tests capture console errors, page errors, and CSP violations while checking SSR
and hydration. See [quality and CI](quality-and-ci.md) for command and host scope.

HTTPS and HSTS are deployment-edge requirements for a real production origin.
No HSTS header or `upgrade-insecure-requests` directive is emitted for localhost
HTTP qualification; actual HTTPS/HSTS correctness remains deferred.

## Public-site baseline

- **No client secrets:** `NEXT_PUBLIC_*` values are always public by definition.
  Secrets must not appear in client imports, serialized
  props, generated pages, content, source maps, logs, or tracked environment files.
- **Structurally bound server authority:** Keep privileged adapters in server-only
  modules and qualify their framework enforcement and build boundaries;
  naming a directory `server` or omitting a visible button is not a control.
- **Validate external input:** Routes, queries, forms, API/provider responses, and
  later webhooks are untrusted. Decode types and enforce size, shape, and relevant
  business constraints at the authoritative boundary. Avoid unsafe raw HTML;
  rich content needs a defined trust/sanitization policy when introduced.
- **No browser database authority:** Components do not directly manipulate Grocery
  cloud/provider persistence. Grocery APIs validate and authorize operations; see
  [ADR 0004](../adr/0004-first-party-api-authority-boundary.md).
- **Minimize third-party execution:** No script ecosystem by default. Each script
  needs a concrete function, data/execution review, and measured impact.
- **Headers and transport:** Preserve the tested response policy above; qualify
  HTTPS and deployment-edge delivery before production. Review each integration's
  resource and browser-capability requirements before relaxing a directive.
- **Supply-chain discipline:** Review dependencies, pin through source-controlled
  lockfiles, use frozen installation in CI, qualify updates, and assess install
  scripts and vulnerabilities. Never commit secrets or copy unreviewed provider code into UI.
- **Public submissions and privacy:** Contact endpoints will need abuse limits,
  safe error handling, minimal personal-data collection, and restrained logging.
  Public caches must not contain customer-specific data.

The current source uses no `NEXT_PUBLIC_*` configuration, raw HTML injection,
remote fonts, analytics, or third-party runtime scripts. There are no credentials
or required `.env` files. Future rich content must be sanitized at its trust
boundary; no sanitizer is needed for the present typed text-only surface.

Root Proxy currently returns a method-preserving 307, including for POST/PUT/OPTIONS.
No write endpoint exists at `/`. Before introducing one, decide whether language
negotiation should be restricted to GET/HEAD.

## Gates for later surfaces

Authentication requires server-side verification of identity, organization scope,
and authorization for every protected read/write. UI visibility checks are not
authorization. Account work must address session/cookie behavior, CSRF where
applicable, cache isolation, MFA/recovery, and safe audit/error handling before
shipping; provider selection alone does not solve these requirements.

Commerce must use qualified provider-hosted/tokenized payment flows. **No raw
payment-card handling in Grocery application code.** Authoritative prices,
currency, taxes, and entitlements come from server/API decisions, never client
assertions. Verify provider callbacks and safe retry behavior when that integration
is designed.

Uploads require dedicated hardening before introduction: file type/size limits,
content inspection, storage/access isolation, and safe serving rules. Do not add a
generic upload endpoint as incidental support UI work.

The full account/commerce security implementation, threat models, vendors, and
operational controls belong to their future milestones. Keep the present
[authority model](../architecture/website-architecture.md) intact as they evolve.
