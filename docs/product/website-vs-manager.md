# Website/account portal vs Manager

**Manager: “Operate my grocery business.”**

**Website/Account Portal: “Manage my commercial relationship with Grocery POS.”**

The website is a separate first-party product surface within one Grocery POS
identity. Public marketing, customer/developer documentation, product/hardware
information, commerce, and support belong here. An authenticated web UI does not
justify moving operational application features into this repository.

| Website/account portal: future commercial scope | Manager/operational products |
| --- | --- |
| Organization/account profile and account security | Inventory and active stock management |
| Subscriptions, billing, and invoices | Item/store pricing and promotions |
| Quotes/orders and purchases | Receiving and grocery workflows |
| Hardware ownership, warranty, and RMA | Employees and shifts |
| Support entitlements and cases | Register administration and live device management |
| API credentials eventually | Grocery operational dashboards |

Commercial organization contacts are distinct from store employee administration.
A hardware purchase/warranty record is distinct from live register control. When a
journey crosses the boundary, use explicit contracts and links/handoffs to the
appropriate product rather than copying its implementation into the website.
Developer information and future credential administration do not grant operational
data access by themselves.

Before adding an account feature, ask which job it serves and where authoritative
rules belong. If it operates the grocery business, route it to Manager or another
operational product. If it manages the customer relationship, apply the website's
[API authority](../adr/0004-first-party-api-authority-boundary.md) and security rules.

These lists define eventual ownership, not present commercial availability. Public
statements must follow the [capability claims policy](public-capability-claims.md).
