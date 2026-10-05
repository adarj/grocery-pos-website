# Security guide for agents

Use the [security baseline](../engineering/security-baseline.md) and
[API authority ADR](../adr/0004-first-party-api-authority-boundary.md).

Before adding an external input or integration, identify the trusted operation,
server-side validation, minimum authority, and safe public response. Decode external
data into Grocery-owned models; do not pass provider schemas or SDK authority through UI.

Keep secrets out of client imports, public environment variables, serialized props,
tracked files, and reports. Check transitive dependencies and generated output when
changing a server/client seam. A Server Component or hidden control does not
authorize a customer or organization.

For future protected operations, verify server-side authorization and customer-data
cache isolation. Keep raw card data out of Grocery code. Uploads and third-party
scripts require their own scoped design/review before introduction, not an incidental
endpoint or script tag.

Document real exposure or incomplete controls in the checkpoint report. Do not
claim M0.1 implements CSP, authentication, payments, or security headers, and do not
choose vendors or build those systems during this checkpoint.
