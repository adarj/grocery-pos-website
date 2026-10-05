# Security baseline

Security constraints apply before authentication exists. This document establishes
boundaries for an unauthenticated site and future work; it does not claim controls
are implemented in this documentation-only repository.

## Public-site baseline

- **No client secrets:** Treat `NEXT_PUBLIC_`-style environment variables as public
  when Next is introduced. Secrets must not appear in client imports, serialized
  props, generated pages, content, source maps, logs, or tracked environment files.
- **Structurally bound server authority:** Keep privileged adapters in server-only
  modules. M0.2 must qualify framework enforcement and inspect build boundaries;
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
- **Plan headers and transport:** Establish HTTPS and a CSP/security-header profile
  before deployment. Restrict resource origins, framing, and unnecessary browser
  powers; consider MIME-sniffing protection and referrer policy. Start with the
  minimum integrations. Exact CSP nonce/hash mechanics and host-specific header
  delivery are [deferred](deferred-decisions.md), not an excuse to omit a review.
- **Supply-chain discipline:** Review dependencies, pin through source-controlled
  lockfiles once introduced, qualify updates, and assess install scripts and
  vulnerabilities. Never commit secrets or copy unreviewed provider code into UI.
- **Public submissions and privacy:** Contact endpoints will need abuse limits,
  safe error handling, minimal personal-data collection, and restrained logging.
  Public caches must not contain customer-specific data.

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
