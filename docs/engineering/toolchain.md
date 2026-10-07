# M0.2 toolchain qualification

M0.2 qualified the foundation recorded here. M0.3–M0.4 use that stack for the
fictional capability-publication slice documented in the
[source architecture](../architecture/source-layout.md). The server-tree proof is
replaced; the counter remains an isolated client qualification control.
M0.4's [language/message boundary](../architecture/internationalization.md) serves
the proof at `/en`. M0.5 adds [quality/CI gates](quality-and-ci.md) and pending
Ubuntu x86_64 qualification. The visual system remains M1 work.

## Ownership and environment

The repository contract starts with a suitable **Linux environment with working
Nix**. Nix installation, the host, containers, and hypervisor are outside repository
ownership. Never bootstrap an alternative Nix environment to obtain spike evidence.

The current developer uses Fedora Kinoite → Distrobox `dev` → existing Nix.
Either `cd ~/Projects/grocery-pos-website` then `distrobox enter dev`, or entering
the container first and then changing directory, is a developer example. Distrobox
is optional. Do not inherit the POS repository's flake or `PROJECT_ROOT`.

Nix supplies Node, the pnpm executable, and just. pnpm supplies all JS packages and
owns `pnpm-lock.yaml`. The flake uses `mkShellNoCC`, one Nixpkgs input, no helper
library or overlays, and exposes `aarch64-linux` and `x86_64-linux` shells. ARM64 is
the execution-qualified system; x86_64 is evaluated, not runtime-qualified here.

## Versions

| Tool | Qualified selection |
| --- | --- |
| Outer Nix | 2.34.7; an environment observation, not installed by this repository |
| Nixpkgs | `nixos-26.05`, revision `0d9e9b832d03ac387417e16ce1febf73b2e631e1` |
| Node | 24.21.0 (LTS) |
| pnpm | 12.9.0 |
| just | 1.51.0 |
| Next | 16.3.8 |
| React / React DOM | 19.3.0 / 19.3.0 |
| TypeScript | 6.0.3 |
| ReScript | 12.3.1 |
| `@rescript/react` | 0.15.0 |
| `@rescript/runtime` | 12.3.1, direct runtime dependency |
| Playwright Test | 1.63.0 |

`flake.lock` owns the exact Nix revision and content hash. This supported stable
pin supplies Node 24 and a cached pnpm 12 package without extra inputs or a custom
derivation. Its default pnpm is 11.27.0; the explicit `pnpm_12` selection is 12.9.0,
slightly behind registry 12.9.1. Node 26 is not selected. TypeScript 6 is a stable,
supported compiler-API line; adopting the newly available 7 major is unnecessary
for this seam. Next's bundled TypeScript guide covers both; no experimental
checker configuration is needed.

These React versions describe declared pnpm packages. Next App Router uses its
framework-bundled React implementation, as explained in its installation guide;
the spike qualifies actual Next behavior rather than assuming identical internals.

## Installation and commands

Enter `nix develop`, then install with `pnpm install --frozen-lockfile`. The
`packageManager` field matches Nix's pnpm, and engines require the Node 24 line.
Neither field replaces the pinned shell. There is one application; M0.5's
`pnpm-workspace.yaml` supplies only root lifecycle policy, not extra packages.

During pre-commit review, untracked flake files require `nix develop path:.`.
Do not stage files for Nix. After the human tracks them, ordinary `nix develop`
works. Path-flake snapshots can include ignored local files, so this is a review
technique, not the preferred ongoing Git-backed workflow.

`.envrc` contains `use flake`. With outer direnv/nix-direnv configured, the human
must run `direnv allow` once after reviewing it. No global direnv configuration or
authorization was changed during qualification; automatic activation remains a
human one-time step. Explicit Nix shell entry is authoritative and does not require
direnv.

| Command | Behavior |
| --- | --- |
| `just dev` | Initial ReScript build, then one managed ReScript watcher and Next dev on `127.0.0.1:3000` |
| `just rescript` | ReScript 12 `rescript build` |
| `just lint` | Next flat ESLint/TypeScript over handwritten JS/TS only |
| `just format-check` | Non-mutating ReScript `format --check` |
| `just test-unit` | ReScript build → Node's built-in runner for pure domain/application tests |
| `just typecheck` | ReScript build → `next typegen` → strict `tsc --noEmit` |
| `just test-supervisor` | Isolated Linux launcher/descendant fixtures for development process cleanup |
| `just build` | ReScript build → ordinary Next/Turbopack production build, including TypeScript |
| `just start` | Ordinary Next Node server for the existing production build, on `127.0.0.1:3000` |
| `just browsers` | Explicit Playwright-controlled browser provisioning; no OS dependency installation |
| `just test-e2e` | All three browser projects against an owned production server on port 3100; requires build and provisioning first |
| `just test-e2e --project=firefox` | The same scenario for one selected engine |
| `just test-a11y` | Chromium axe/keyboard smoke after a production build |
| `just quality` | Lint/format, pure unit/supervisor, typecheck, one production build |
| `just check` | Quality plus all Chromium production scenarios, including a11y/security |
| `just ci` | Quality plus all Chromium/Firefox/WebKit scenarios on a supported host |
| `just clean` | Remove only known generated outputs/build state; preserve source, lockfiles, dependencies, and browser cache |

`scripts/dev.mjs` uses Node's child-process API, without an orchestration dependency.
Each tool runs in a separate process group. SIGINT/SIGTERM terminate both groups;
unexpected tool exit stops its sibling and propagates failure. A bounded SIGKILL
fallback retains process-group ownership even if a leader exits before its children.
Initial compilation precedes server startup. Failed or signal-terminated initial
compiler launchers use the same group cleanup before ownership is released; numeric
failure status is preserved, and an abnormally killed launcher reports failure.
Live source changes and restoration were observed in an open Chromium page without
manual reload/restart; normal interruption and an invalid Next startup were checked
for child cleanup. A forced Next CLI exit also terminated its surviving server
child and the ReScript watcher within the bounded shutdown period.

`just test-supervisor` copies the actual supervisor into temporary fixture roots
with tiny fake launchers and real native-child stand-ins. It checks initial launcher
SIGKILL/non-zero exit, watcher/Next launcher SIGKILL, normal startup, SIGINT/SIGTERM,
and repeated signals, asserting exit status and disappearance of owned processes.
The initial SIGKILL case deliberately keeps a descendant alive through SIGTERM to
exercise the bounded fallback. Fixtures use Node built-ins only, verify ownership
before failure cleanup, and remove their temporary directories. They do not start
an application server or write project compiler/build output.

## ReScript / Next / TypeScript seam

Current ReScript configuration uses `dependencies`, JSX v4, in-source ESM, and
`.res.mjs`. No legacy `bsconfig.json` or `bs-*` keys are used. Generated modules
import React/`react/jsx-runtime`. The tiny counter's integer/string operations
compile to native JS, so this particular output needs no runtime helper import.
The direct `@rescript/runtime` dependency satisfies the binding's peer ownership
and makes generated runtime helper paths resolvable under pnpm isolation; a direct
ESM import of `@rescript/runtime/lib/es6/Stdlib_Option.js` was verified. No hoisting
policy was weakened.

In M0.2, the server export's `@genType` produced a typed `title: string` prop.
A comparison experiment showed direct unchecked `.res.mjs` imports accepted
`title: 42`, while GenType rejected it with TS2322. M0.3 retains the qualified seam:
the qualification module's `load` and the `ArchitectureProof` component use the generated
public view type with readonly fields. M0.4 narrows maturity codes to a closed string
union and adds a typed language prop; the generated seam remains authoritative.
Invalid numeric `maturityCode` props
are rejected by strict TypeScript. This is why GenType
is materially better here than direct JS inference or hand-maintained declarations.
It is built into ReScript and adds no dependency. Its generated, localized
`as any` assignment attaches the compiler-derived interface to the JS export;
there is no handwritten `any` shim or duplicate prop model. This attachment does
not runtime-validate external data or guarantee serializable props.
See the [ReScript TypeScript integration guide](https://rescript-lang.org/docs/manual/typescript-integration/).

GenType uses ESM/bundler resolution and `.gen.tsx`; TS uses `allowJs` and
`allowImportingTsExtensions` for that supported seam. `strict` remains true and
`skipLibCheck` false. No build-error suppression is configured.

Next 16.3.8 generates overlapping ambient declarations under `.next/types` and
`.next/dev/types`. Including both after development and production caused duplicate
declaration errors. Canonical checks regenerate production types with `next typegen`
and exclude `.next/dev` from root-file discovery. Dev startup removes only stale
`.next/types`, letting `next-env.d.ts` import the current dev route declarations
without duplicate production globals. Product and route-validator code remains
checked by canonical validation; no declaration checking is disabled.

`just dev` provides ReScript watch compilation, Next compilation/runtime diagnostics,
and the ordinary TypeScript/editor feedback available in that environment. Its
development-only TypeScript program does not include the complete generated Next
route-export validators. A running development server is therefore not the complete
framework/type acceptance gate.

`just typecheck` is the authoritative static gate: it compiles ReScript, regenerates
production Next route types and export validators, then checks them with strict
TypeScript. Run it after consequential framework/route changes and before checkpoint
completion. `just build` likewise generates and checks production validators;
`just check` includes pure unit/supervisor and lint/format checks before canonical
typecheck, build, and Chromium accessibility/security/framework smoke.
Use these workflows sequentially with dev startup; they share generated type state
and `next-env.d.ts`. Re-evaluate this version-sensitive workaround when Next is
upgraded, using the newly installed bundled documentation rather than assuming
live validator parity or disabling strictness.

The ReScript server component has no client directive. It imports the counter's
generated module directly; only that module starts with `'use client'`, emitted
from `@@directive("'use client'")`. GenType does not insert a directive or expand
the client boundary. The server content appears in HTTP HTML, and the counter
hydrates and updates state in development and production without console/hydration
errors in the passing browser runs. Rendering grants no authorization.

`.res.mjs`, `.gen.tsx`, `lib/`, `.next/`, and Next's `next-env.d.ts` are ignored.
Compiler output is never hand-edited. GenType seams can remain after a source move;
`just clean` removes the narrow `src/**/*.gen.tsx` generated suffix as well as
compiler/build state. `just clean` followed by `just build`
regenerates the seam and production output from source. Tests never install
dependencies or silently build: run `just build` before `just test-e2e`; `just check`
already provides that order.

## Browser qualification and native limitations

The production scenarios run for each configured engine. One disables
JavaScript and asserts that the ReScript heading and authorized sample are visible
in the rendered page, so embedded script/RSC payload text cannot satisfy the SSR
proof. The separate default JavaScript-enabled scenario checks hydration, counter
updates, and browser errors; it does not expect interaction with JavaScript disabled.
The SSR scenario also checks that withheld samples are absent. Pure policy and
decoder tests remain separate from these framework-boundary scenarios. M0.4 also
asserts `/en` language/direction and metadata, temporary root redirection, strict
unsupported-language 404s, and production pseudo exclusion. Controlled dev pseudo
qualification does not change the production test server's mode.

Playwright controls browser revisions. The normal Linux user cache,
`~/.cache/ms-playwright`, avoids a second project-local browser store and can be
reused across container sessions. Browser binaries are outside Git. pnpm package
versions and Playwright revisions define provisioning; arbitrary host browsers
are not used.

The ARM64 Fedora 44 container is not an officially supported Playwright OS. It
downloads the Ubuntu 24.04 ARM64 fallback:

| Engine | Provisioned version / revision | Production smoke |
| --- | --- | --- |
| Chromium | 153.0.8010.12 / 1243 | Passed |
| Firefox | 155.0 / 1543 | Passed |
| WebKit | 26.6 / 2359 | Failed before page load: native dependency validation |

Chromium/Firefox use the existing compatible Linux runtime here. WebKit lacks
GTK4, ICU74, GStreamer components, flite, JPEG8, AVIF16 and related libraries.
`ldd` also identifies `libjxl.so.0.8`; the pinned Nixpkgs supplies libjxl 0.11.2,
not an ABI-compatible 0.8 package. Its bundled MiniBrowser launcher overwrites
`LD_LIBRARY_PATH`, so exporting a few Nix library paths would not suffice. This is
a native-runtime limitation, not an application or ReScript failure.

The spike does not install privileged host packages, run `install-deps`, replace
browser revisions with Nixpkgs' older Playwright browsers, fake SONAME compatibility,
patch shared browser caches, or force architecture emulation. A newer Ubuntu
target exists in Playwright, but changing its fallback/platform assumptions was
not adopted merely to obtain a green matrix. No extra Nix input or custom legacy
library derivation is justified by this small spike.

Full WebKit qualification remains open on a compatible supported Linux runtime
or a deliberately qualified Nix native-runtime solution; future x86_64 CI may
supply additional evidence. `just test-e2e` keeps the failing WebKit project enabled.
The foundation is qualified with a **conditional browser-matrix result**, not a
claim that all Linux hosts or all engines have passed.

## Supply chain and framework guidance

Frozen installation succeeded with an unchanged lockfile hash. pnpm 12 reported
successful supply-chain policy checks. No required lifecycle-script failure or
approval notice occurred during M0.2. M0.5 explicitly denies the lint resolver's
fallback script through `allowBuilds`; see [quality and CI](quality-and-ci.md).
Native compiler/SWC payloads arrive through platform-specific packages. No blanket
script approval or isolation weakening was introduced; the single root policy
only adds the explicit resolver-script denial.

Next decisions were checked against installed `node_modules/next/dist/docs/`:
manual installation, TypeScript/typegen, server/client boundaries, CLI, AI-agent
rules, and MCP guidance. Next's managed agent-rule block is retained in `AGENTS.md`.
M0.2 required no custom Next configuration; M0.5 adds normal `next.config.ts`
headers without a custom router/server, hosting adapter, or deployment provider.
Next's ordinary telemetry notice and Playwright's OS/native warnings were
observed; they are not application failures. Color-variable notices under the tool
runner do not affect test results.

The running application is ready to evaluate official Next DevTools MCP for M0.3:
live compilation/runtime errors, routes, logs, and component/page metadata complement
static bundled docs and scripted Playwright tests. Recommend a reviewed, pinned
`next-devtools-mcp` stdio entry in the human's website Codex profile, using the Nix
Node environment and project-local dev endpoint. Preserve approval for mutating
actions; do not grant blanket tool approval. No profile or project MCP configuration
was modified. See the installed `01-app/02-guides/mcp.md` and
`01-app/02-guides/ai-agents.md` before configuring it.
At M0.2 qualification, the live `/_next/mcp` endpoint returned its tool list and
the then-sole App Router route, `/`. Its `get_errors` query requires a connected browser session; querying after
the smoke browser closed returned that limitation rather than an error-free result.
M0.4 used the human-configured MCP against `/[lang]`; connected pseudo-page metadata,
compilation issues, and runtime errors supplemented browser/static qualification.

All six M0.1 ADRs remain valid. The accepted architecture is unchanged; only the
old milestone description of language routing was aligned with M0.4. Hosting,
commercial authority integrations, authentication, real translations, and the
design system remain outside this spike. M0.5's quality/CI expansion is recorded
separately above and still requires remote qualification.
