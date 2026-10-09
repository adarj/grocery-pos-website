# M1.5.2 accessibility and performance qualification results

## Authorization, baseline and checkpoint status

**M1.5.2 — Accessibility & Performance Qualification: AUTHORIZED October 9, 2026 (UTC); technical execution complete, manual evidence incomplete; UNDER REVIEW, NOT ACCEPTED.**

**M1.5.2 TECHNICAL QUALIFICATION COMPLETE — READY FOR HUMAN MANUAL EVIDENCE AND INDEPENDENT AUDIT**

**Evidence chronology:** The original execution sections below are historical agent-reported observations from October 9, 2026 (UTC). Their temporary raw evidence was unavailable at independent audit after a maintainer-reported VM restart. Original performance tables remain unchanged; they are not replacement measurements. The [dated correction and replacement run](#evidence-availability-correction-and-replacement-run--october-9-2026-utc) supersede availability-dependent assertions and record new, separately preserved evidence.

The human maintainer authorized exact-build inspection, existing tests, development pseudo-localization, temporary performance instrumentation and genuine manual evidence collection. Application corrections, M1.5.3, production deployment and public release remain unauthorized. M1.5 is authorized and in progress; neither M1.5 nor M1 is formally complete. M1.4 remains formally accepted and complete, with M1.4.3 reviewed and deferred.

Starting branch: `docs/m1-5-2-qualification`. HEAD, main and origin/main were all `e5db9126e57b39aa120004d684f7af78e229fc7b`, with 0/0 ahead/behind relationships, empty staging, clean tracked files and no nonignored untracked files. Read-only SSH verification returned a good signature for this baseline, `docs(web): record formal M1.5.1 acceptance`. No newer source baseline was adopted.

The [accepted M1.5.1 assessment](m1-5-1-qualification-baseline.md#formal-m151-acceptance--october-9-2026-utc) owns the 26 requirements, evidence classifications, ten sources and nine NOTE obligations. This report records their authorized execution rather than rewriting that earlier assessment. The [M1 plan](milestone-1-plan.md), [homepage acceptance](m1-4-2-homepage-qualification.md#formal-m142-acceptance--october-8-2026-utc), [exact disclosure approval](../product/m1-4-1-content-readiness.md#post-acceptance-homepage-approval-2026-10-08-utc), accepted [ADRs](../adr/README.md) and agent guides remain governing.

**Next routes. ReScript models. React presents. APIs connect.** This is the informational website, not the operational Grocery POS Platform.

## Environment and execution inventory

Technical collection occurred October 9, 2026 (UTC), using the existing Nix environment.

| Item | Actual environment / availability |
| --- | --- |
| Execution host | Fedora Linux 44 Container Image, Linux aarch64; five exposed Apple CPU cores; precise CPU model and host power mode not exposed |
| Memory / initial load | 11,911 MiB RAM, approximately 3,372 MiB available before execution; 8,191 MiB swap, 9 MiB initially used; load 0.25 / 0.39 / 0.40. Resources/load varied during collection; no host-wide load isolation |
| Limits / power | CPU cgroup `max 100000` and memory limit `max`; power state unknown. No claim of controlled mobile-device conditions |
| Existing tools | Nix 2.34.7; Node 24.21.0; pnpm 12.9.0; just 1.51.0; Next 16.3.8; React/React DOM 19.3.0; ReScript 12.3.1; Playwright 1.64.0 |
| Automated browsers | Chromium 156.0.8078.4, cached revision 1248; Firefox 157.0, revision 1555; both launched |
| Local WebKit | Cached revision 2370 exists but launch reports missing host native dependencies. No local WebKit scenario was qualified; no system packages/OS provisioning attempted |
| Supported three-engine host | No local Ubuntu x86_64 host available. Prior supported Ubuntu exact-SHA CI is separately identified below |
| Maintainer desktop | User-reported M1 MacBook Pro host with Fedora Linux 44 Kinoite environment; KDE Plasma 6.7.5, Frameworks 6.30.0, Qt 6.11.2, kernel 7.2.8-200.fc44.aarch64, Wayland; five processors, 11.6 GiB usable RAM, SVGA3D/LLVM, VMware20,1 |
| Human-tested browsers | Firefox 157.0 (aarch64); Chrome 154.0.8037.97 Official Build (arm64). Chrome differs from automated Chromium 156 |
| Host Safari | macOS Sequoia 15.6, Safari version not supplied; maintainer could not reach the production page |
| Physical device | iPhone **13 Pro**, corrected by maintainer; iOS/browser versions not supplied; could not reach the production page |
| Actual assistive technology / OS contrast | No genuine screen-reader or OS contrast-theme execution result supplied; available operator/environment not established for these checks |
| Operator | Codex for technical execution; human maintainer for explicitly reported desktop manual observations only |

All owned servers used `127.0.0.1`. Production was `http://127.0.0.1:3102/en`; development was `http://127.0.0.1:3101/en-XA`. Neither server was exposed broadly. Inaccessible host/device access is an evidence-collection limitation, not proof that the homepage fails on Safari or iPhone. An approved private access arrangement is needed; no firewall, networking or hosting changes were made.

## Evidence provenance and private retention

Original temporary evidence directory: `/tmp/grocery-pos-m152-bxpry6eg`, reported mode 0700, outside the source tree and not uploaded. It is now unavailable. This inventory records the original reported collection, not currently available files; paths below are historical references. Replacement evidence is identified in the dated correction below.

| Evidence | Exact files / collection method |
| --- | --- |
| Initial state / preservation | `baseline.json`; `pre-existing-artifacts.json`; `pre-existing-artifacts.tar.gz`. Before execution, 561 generated/build/report files were inventoried; backup preserves those plus `next-env.d.ts` and `tsconfig.tsbuildinfo`, 563 files |
| Canonical commands | `commands.json`, `frozen-install.log`, `just-check.log`, `firefox.log`; timestamped commands and exit codes |
| Prior remote evidence | `prior-main-ci.log`; read-only run/job/log retrieval, not a newly triggered workflow |
| Runtime availability | `browser-inventory.mjs`, `browser-inventory.json`, `browser-inventory.log`; actual launches and failure |
| Fresh artifacts | `artifact-audit.json`: path, bytes and SHA-256; `qualified-production-artifacts.tar.gz` preserves the production build before development execution; `public-http-checks.json` |
| Actual rendered review | `supplementary-production.cjs`, `supplementary-production.json`, `supplementary-production.log`, `axe-chromium.json`, `axe-firefox.json`, `firefox-attachments.json`, `production-320.png` and `production-1440.png` |
| Development pseudo | `pseudo.cjs`, `pseudo-results.json`, `pseudo.log`, `pseudo-320-enlarged.png`; earlier `pseudo-initial.log` and `pseudo-interrupted.log` retained separately |
| Performance | `performance.cjs` and `performance-limited.cjs`; `performance-environment.json`, `performance-results.json`, `performance.log`; the equivalent files under `limited/`; `derive-statistics.py` and `performance-statistics.json` |
| Raw repetitions | Each profile: `cold-1.json` through `cold-5.json`, `warm-1.json` through `warm-5.json`, corresponding `*-trace.json`, five `cold-*.har` and `warm.har`. Warm HAR includes the priming load |
| Manual observations | `manual-observations.json` records the maintainer's supplied observations and metadata; no invented screenshots/AT results |
| Integrity / lifecycle | `production-process.json`, `production-stop.json`, `development-process.json`, `development-stop.json`; `final-integrity.json`; `SHA256SUMS` |

The original retention instruction required private preservation through audit/review and warned that `/tmp` was not durable. That evidence is no longer available after the reported VM restart. Original archives, repetitions, HAR/traces and `SHA256SUMS` cannot now be reviewed. Sanitized historical tables do not replace them; checksums alone are not external attestation or independent measurement verification.

## Canonical quality and browser results

Frozen installation used the existing pinned dependencies, without manifest or lockfile changes. No `just clean` was run.

| Execution / provenance | Actual result |
| --- | --- |
| `nix develop --command pnpm install --frozen-lockfile`, 04:43:50–04:43:51 UTC | Exit 0; frozen dependency gate passed |
| `nix develop --command just check`, 04:43:51–04:44:24 UTC | Exit 0; lint zero warnings, nonmutating formatting check, 17/17 pure/SSR fixtures, 7/7 supervisor regressions, ReScript/TypeScript typechecking, production build and Chromium 10/10 |
| `nix develop --command just test-e2e --project=firefox`, 04:44:24–04:44:33 UTC | Exit 0; Firefox 10/10 against production server |
| Local full `just ci` / WebKit scenarios | Not executed on this unsupported host; browser availability probe failed before WebKit qualification |
| Prior exact-SHA [main run 37884329332](https://github.com/adarj/grocery-pos-website/actions/runs/37884329332), [job 113670815146](https://github.com/adarj/grocery-pos-website/actions/runs/37884329332/job/113670815146) | Read-only logs/steps show checkout `e5db9126e57b39aa120004d684f7af78e229fc7b`, supported Ubuntu quality/build, 17/17 fixtures, 7/7 supervisor, Chromium/Firefox/WebKit 10/10 each, aggregate 30/30, source cleanliness PASS |

Fresh local browser evidence is **20/20**, not a newly executed local 30/30. Both the existing remote matrix and unchanged local configuration use one worker and zero retries. Prior main CI applies to the accepted source baseline, not the uncommitted qualification documentation or its future signed commit.

The current ten scenarios per engine remain meaningful: JS-disabled exact content/metadata/semantics; JS-enabled HTML/RSC/loaded-script exclusion; temporary root redirect/query; invalid and pseudo production rejection; security headers; whole-page axe; forward/reverse skip/identity keyboard traversal; contrast/state measurements; widths/enlargement/spacing; forced-colors/reduced-motion. Shared browser diagnostics remain active. Three executions of ten scenarios are not thirty distinct product behaviors.

## Fresh production artifacts and import graph

Build command was the canonical production build within `just check`. Source was the clean accepted baseline. Build ID: `AcWqkZgAYoIcgHaRz-HXI`. The manifest/artifact inventory is associated with that source, command and environment, rather than an unproven inherited build.

Inspected `.next/prerender-manifest.json`, `.next/server/app-paths-manifest.json`, `.next/routes-manifest.json`, three `page_client-reference-manifest.js` files, all `.next/static` files and rendered `.next/server/app` HTML/RSC/body/text/segment outputs. Public-asset discovery included `public/` if present. The artifact inventory covers **25 public-output files**, **639,945 on-disk bytes**, with per-file hashes; this is neither route-transfer size nor all private server/cache files.

Results:

- `/en` is prerendered; the only prerender entries are `/en` and framework error pages. `/en-XA` is not a production page and fresh HTTP returns 404.
- The four exact statements, Introduction label, one H1, three H2 headings, title and description match the [approved payload](../product/m1-4-1-content-readiness.md#post-acceptance-homepage-approval-2026-10-08-utc) in canonical browser assertions. No canonical origin, hreflang, structured company data, social metadata, new route, API, CTA or navigation was introduced.
- Three client-reference manifests contain eight unique **framework** modules and zero application-source client entries. Source composition remains Next page/layout → ReScript Homepage/EngineeringShell/messages; the retained Counter/qualification components are outside that public graph.
- The five downloaded JavaScript files are Next/React framework/bootstrap code. There is no authored application client island, but JavaScript downloads and execution are real when enabled.
- No public source map or discovery file was found. Twenty-nine private server source maps exist; bounded HTTP requests for the language-page map under `/_next/server/...` and `/.next/server/...` returned 404. This sampling is not a universal hosting-edge source-map guarantee. `/sitemap.xml` and `/robots.txt` also returned 404.
- No external asset/font/image/API request appeared in the measured page loads; all seven observed requests used the loopback origin.

Full public-file searches used these eight literal needles: `sample-authorized-preview`, `sample-withheld-available`, `sample-withheld-internal`, `Public-safe capability samples`, `M0.4 internationalized architecture proof`, `Fictional qualification data`, `Internal engineering preview` and `Increment counter`. **Zero hits**. Canonical tests additionally inspect served HTML, explicitly requested RSC and loaded scripts. Actual imports, route/metadata composition and manifest classifications supplement the searches. No qualification-data leak or privileged application client import was substantiated.

This is a scoped exposure audit, not exhaustive arbitrary-secret detection. Server configuration/credentials must never be printed into public output; private build state is not a public asset merely because it exists locally. No claim of security certification or universal absence of secrets is made.

## Development pseudo-localization

The installed Next 16.3.8 CLI guide was consulted. Existing compiled ReScript output was used with `nix develop --command pnpm exec next dev --hostname 127.0.0.1 --port 3101`; Next writes ignored development output under `.next/dev`.

Fresh probes ran Chromium 156.0.8078.4 and Firefox 157.0 with JavaScript disabled. They compared actual text to `Messages.get("PseudoEnglish", key)` from the same generated typed catalog, not a duplicate translation. All four sections, label/headings, identity accessible name, skip text, title and description matched. HTML language is `en-XA`, direction `ltr`; robots is `noindex, nofollow`. The identity destination is `/en-XA` and current-page annotation is correct there.

| Paragraph | English characters | Pseudo characters |
| --- | ---: | ---: |
| Introduction | 216 | 290 |
| Developed foundation | 341 | 453 |
| Local-first objective | 281 | 375 |
| Website responsibilities | 218 | 293 |

Both engines passed overflow checks at 320, 375, 768, 1024 and 1440 CSS px, and at 320px with 200% root font plus spacing overrides. Named focus assertions confirmed skip → identity → reverse skip → Enter/main. Unsupported `/zz` returned 404 in development. Production pseudo rejection remains separately demonstrated above. Identifiers/routes are not pseudo-transformed; existing pure tests preserve machine-code invariants.

A preliminary temporary harness referenced an unexported catalog helper and was corrected to `Messages.get`. An earlier JS-disabled style-injection helper stalled; that owned probe/browser tree was stopped, logs retained, and the bounded successful probe used direct temporary DOM style insertion. These are instrumentation limitations, not application failures; only the completed probe supplies PASS evidence. No source or test was changed.

This is controlled development pseudo expansion, not a genuine public second language, translation or RTL qualification.

## Performance methods and interpretation limits

The accepted [measurement protocol](m1-5-1-qualification-baseline.md#performance-measurement-protocol--proposed-not-executed) was executed with temporary instrumentation and existing Playwright, without benchmark dependencies. Chromium 156.0.8078.4 was headless, viewport 1440×900, DPR 1, default 100% zoom, service workers absent. Origin was local HTTP, not a deployed HTTPS/CDN/mobile environment. Hardware/power/background-load limitations are recorded above.

Two selected profiles each contain **five cold and five warm observations**:

| Profile | Network and CPU conditions |
| --- | --- |
| Loopback | No network or CPU throttling; container/host caches and background activity uncontrolled |
| Limited laboratory | CDP `Network.emulateNetworkConditions`: offline false, 150ms latency, 200,000 bytes/s download, 93,750 bytes/s upload; `Emulation.setCPUThrottlingRate` rate 4 |

The limited profile is a stated laboratory slowdown, not equivalence to a specific real mobile device or connection. Cold means a fresh context with HTTP cache disabled, retaining DNS/OS/server/build caches. Warm means one fresh context, a documented one-second priming load, cache enabled, then five navigations in the same context. Renderer lifecycle can still change; warm is an HTTP-cache condition, not guaranteed JIT/renderer reuse.

Every measured load waits for `load` then observes another **10 seconds**, remaining visible and without user input. FCP uses Paint Timing. LCP is the last buffered candidate observed within that window, not an indefinitely finalized field value. CLS is the maximum session-window sum, excludes shifts with recent input, starts a new window after at least one second between shifts or more than five seconds from the window start. The original agent reported retaining raw candidates/shifts and observing zero CLS; those original records are now unavailable.

Full HAR, CDP network events, PerformanceObserver and timeline tracing were active together; instrumentation overhead is included, not subtracted. Trace categories include devtools.timeline, disabled-by-default-devtools.timeline, toplevel, v8.execute, blink.user_timing and loading.

Main-thread costs below are union durations of complete `RunTask` events on named `CrRendererMain` threads. Selected script-event costs merge nested/overlapping `EvaluateScript`, `FunctionCall` and `RunMicrotasks` spans on those threads. They are instrumented elapsed event time, not exhaustive CPU/JavaScript-engine accounting. Raw CDP Performance counters were reported as retained during original collection; their original files are now unavailable. Their first warm delta is unavailable in each profile because counters reset across navigation; those invalid deltas were not treated as zero. Trace-derived costs provide all five observations per condition.

There were no failed requests or excluded samples. The original agent reported retaining all observations, including slower early loopback loads, without a post hoc outlier filter; their unavailable raw files cannot now substantiate that collection detail. No field INP, Lighthouse score, Core Web Vitals certification or arbitrary performance budget is asserted.

## Performance raw observations and statistics

The original agent reported equal FCP and LCP in every observation and separate measurement of each. The independent audit checked the printed arithmetic, but could not inspect the underlying original entries. These unchanged tables are historical agent-reported results.

| Profile / condition | FCP raw ms (also LCP raw) | FCP / LCP median, range ms | CLS raw / median |
| --- | --- | --- | --- |
| Loopback cold | 60, 68, 36, 32, 32 | 36; 32–68 | 0, 0, 0, 0, 0 / 0 |
| Loopback warm | 32, 24, 20, 20, 24 | 24; 20–32 | 0, 0, 0, 0, 0 / 0 |
| Limited cold | 380, 364, 376, 364, 376 | 376; 364–380 | 0, 0, 0, 0, 0 / 0 |
| Limited warm | 200, 192, 200, 200, 192 | 200; 192–200 | 0, 0, 0, 0, 0 / 0 |

| Profile / condition | Renderer task raw ms | Median / range ms | Selected script-event raw ms | Median / range ms |
| --- | --- | --- | --- | --- |
| Loopback cold | 118.429, 107.827, 71.745, 66.055, 68.248 | 71.745 / 66.055–118.429 | 59.566, 53.767, 38.154, 36.386, 36.031 | 38.154 / 36.031–59.566 |
| Loopback warm | 35.958, 21.230, 47.502, 29.664, 27.099 | 29.664 / 21.230–47.502 | 13.120, 6.444, 7.186, 6.244, 7.868 | 7.186 / 6.244–13.120 |
| Limited cold | 286.091, 278.223, 258.848, 255.231, 268.689 | 268.689 / 255.231–286.091 | 166.087, 171.336, 155.727, 152.748, 158.156 | 158.156 / 152.748–171.336 |
| Limited warm | 126.581, 86.394, 138.441, 120.264, 94.136 | 120.264 / 86.394–138.441 | 54.773, 27.451, 36.692, 31.597, 27.244 | 31.597 / 27.244–54.773 |

CDP `Network.loadingFinished.encodedDataLength` supplies received encoded network bytes, including protocol/header overhead. All samples in each cache condition had identical values:

| Condition, both profiles | HTML bytes | CSS bytes | JavaScript bytes | Other | Total received bytes | Observed requests / origins |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Cold, each of ten observations | 3,543 | 2,178 | 137,974 | 0 | 143,695 | 7 / only `http://127.0.0.1:3102` |
| Warm, each of ten observations | 827 | 0 | 0 | 0 | 827 | 7 including cache-served entries / same origin |

Cold response bodies use gzip. Resource Timing retains a distinct size model: HTML encoded body 2,600 / decoded 9,358 bytes; CSS 1,320 / 4,437 bytes; five JS bodies total 133,538 / 453,506 bytes. Resource Timing `transferSize` is a browser accounting value and must not be substituted for measured CDP wire accounting or on-disk size. Warm HTML uses revalidation while cached CSS/JS receive zero new CDP bytes; this does not mean scripts/resources are absent or cease executing. The original HAR/CDP/Resource Timing records are unavailable, so these original accounting assertions are historical reports rather than inspectable raw evidence.

No unexpected request, third-party origin or layout shift was observed. The limited cold samples each recorded one long task of 103, 101, 102, 95 and 98ms respectively; loopback and limited warm samples recorded none. This establishes framework execution cost under the specified slowdown, not a proven real-device responsiveness failure. No interaction latency was measured. A152-03 below preserves the observation without inventing a code remedy or budget.

These original results were reported as a local laboratory baseline; loss of their raw records prevents detailed independent verification of that original collection. Deployment, representative physical hardware/network, real content growth and field performance remain separate responsibilities. Future regression review should compare like-for-like raw conditions, examine persistent practical impact, then derive justified headroom/budgets; one changed number alone does not authorize M1.5.3.

## Automated accessibility, geometry and contrast

Fresh canonical Chromium/Firefox scans use axe's WCAG 2 A/AA, 2.1 A/AA and 2.2 AA tags, no exclusions or disabled rules. Supplementary full axe results in both engines contained **zero violations, zero incomplete rules, 18 passes**. These configured scans do not clear all manual WCAG requirements or establish screen-reader compatibility/conformance.

Supplementary geometry checks inspect actual headings, every main paragraph and identity at 320, 375, 768, 1024 and 1440 CSS px, with no page horizontal overflow or elements extending past the viewport. Actual 320/1440 Chromium screenshots were visually inspected for wrapping/reading order; this is agent review of an automated render, not a physical-device or human manual PASS. Existing 60rem container, 68ch prose, fluid heading/gutters, 43 properties and section rhythm remain unchanged.

Both engines also passed 320px with root font 32px (200%), line height 1.5, letter spacing .12em, word spacing .16em and paragraph end margin 2em. Named skip, identity and main targets were focused and in the viewport; their outline styles and geometry were retained in the supplementary record. Additional JS-disabled contexts in both engines read four complete substantive paragraphs and verified native skip-to-main focus at 320px. These viewport cases are not native 400% browser zoom.

The fresh Firefox canonical report attachment records 24 computed pairing/state assertions. Ratios round to the accepted seven unique combinations: ink/paper 13.86, ink/white 14.79, evergreen/paper 5.79, evergreen/white 6.18, white/evergreen 6.18, white/ink 14.79, ink/sage 12.03. Chromium's equivalent canonical scenario passed; the extracted numeric attachment is specifically Firefox evidence.

Actual homepage measurements cover body/paragraph/header text, identity default/hover/active, skip text/focus, identity focus and main focus. State targets are asserted before measuring active/focused values. Skip ink outline is compared with actual white header and sage fill; main focus is compared with paper, identity focus with white. Text thresholds are 4.5:1 and essential boundary/focus comparisons 3:1. The parser accepts only opaque sRGB; transparency/other gamuts require future compositing/conversion. Decorative sage dividers are not essential control boundaries.

Generic link surfaces and button normal/hover/active/boundary/focus are **controlled synthetic styling probes**. No button or Counter is present on the homepage; these measurements do not prove a user-facing button interaction. Forced-colors and reduced-motion media conditions are asserted active; real focus uses system Highlight, retained synthetic button boundaries use ButtonText. No animations or transitions exist. Emulation is not actual OS/assistive-device qualification.

## Human observations and common manual worksheet

The maintainer reported on October 9, 2026 (UTC): “Both browsers perform as expected when performing the actions listed,” then supplied the Firefox/Chrome and Fedora/KDE versions recorded above. This is genuine **human-reported** evidence for the requested actions on the current production page, not an independent repetition or invented detailed transcript.

| Test ID | Requested action / expected result | Actual supplied outcome | Disposition / limits |
| --- | --- | --- | --- |
| M152-K01 | Tab to skip; Tab to identity; Shift+Tab back to skip; Enter focuses main; Shift+Tab reaches identity; focus visible/unobscured | Both Firefox 157.0 and Chrome 154.0.8037.97 perform as expected, maintainer report | PASS — human-reported. Keyboard input, current page/build; no screenshots or instrumented per-target transcript supplied |
| M152-Z01 | Set native browser zoom to 400%; read/scroll all four paragraphs; preserve usable reflow | Both browsers perform the requested actions as expected | PASS — human-reported native zoom/reflow. Starting window size, resulting CSS viewport and DPR not supplied |
| M152-T01 | Independently apply 200% text enlargement and WCAG text-spacing overrides, inspect all text/focus | No separate fresh manual override observation supplied | UNVERIFIED as manual evidence; fresh automated override evidence exists above |
| M152-S01 | Actual screen-reader protocol | No AT observations supplied; host Safari access unavailable | UNVERIFIED |
| M152-D01 | Actual iPhone touch protocol | iPhone 13 Pro available but cannot reach page | UNVERIFIED; no inferred layout/touch defect |
| M152-H01 | Genuine OS contrast-theme protocol | No genuine theme/environment/result supplied | UNVERIFIED |

For further observations, the operator should fill this worksheet for **each test**, not just supply a blanket PASS:

| Field | Required recording |
| --- | --- |
| Identity/provenance | Test ID, UTC date, operator, exact source commit and build ID, URL, private access arrangement |
| Environment | OS/version; browser/version; device/model/architecture; AT/version or contrast theme; input method |
| Display/runtime | Viewport/window size, orientation, DPR/display scale, native zoom, JavaScript enabled/disabled |
| Observation | Expected result; actual observed behavior; PASS, FAIL or UNVERIFIED; steps to reproduce; defect ID if applicable |
| Evidence | Private filename/location or explicit absence of capture; limitations and missing metadata |

Unknown metadata remains unknown. Historical M1.3/M1.4.2 manual PASS reports remain valid historical observations with their recorded limitations; new desktop results do not retroactively fill those old environments or close D13 obligations.

## D13-01 — Actual screen-reader disposition and worksheet

**DEFERRED, UNVERIFIED — M1.5.** The prior approved deferral is retained; no renewed deferral or PASS has been granted.

Follow the [accepted D13-01 protocol](m1-5-1-qualification-baseline.md#d13-01--actual-screen-reader-protocol) using an actual available screen reader and identified operator. Safari/VoiceOver is a possible future environment only once private access and actual AT availability are established; no such execution is claimed.

| Action | Expected observable result | Current disposition |
| --- | --- | --- |
| Load `/en`; hear title and language; read sequentially | Exact approved title, English language, Introduction label followed by H1 and four complete paragraphs in natural order | UNVERIFIED |
| Navigate landmarks and heading list | Banner then sole main; one “Grocery POS” H1 and the three approved H2 headings; no duplicate/hidden qualification content | UNVERIFIED |
| Inspect links; use forward/reverse keyboard and skip activation | Appropriate “Grocery POS home” name/destination/current state; skip focuses main; announcements/order make sense | UNVERIFIED |
| Read section boundaries and qualifications | Complete text, clear heading/paragraph associations, pre-production limitations understandable | UNVERIFIED |
| Repeat relevant reading/skip checks with JS disabled where feasible | Server content and native navigation remain available; record unsupported AT/browser configuration as a limitation | UNVERIFIED |
| Counter status announcements on current homepage | No Counter/client island exists | NOT APPLICABLE to current homepage only |

Record OS/browser/AT versions, input mode, actual announcements and reproduction details using the common fields. Any incorrect announcement/order is FAIL with an evidence-backed finding, not automatically deferred. Counter browser hydration/interaction restoration remains a binding separate future gate.

## D13-02 — Physical touch/device disposition and worksheet

**DEFERRED, UNVERIFIED — M1.5.** iPhone 13 Pro exists; the missing prerequisite is access to the exact production build, plus recorded iOS/browser characteristics and actual observations.

| Action on actual device | Expected observable result | Current disposition |
| --- | --- | --- |
| Establish approved private access; record device/OS/browser/display scale | Identifiable current build without broad public exposure | UNVERIFIED — access unavailable |
| Read/scroll all four sections in portrait | Legible text and complete paragraphs; no clipping, accidental horizontal scroll or unreachable content | UNVERIFIED |
| Rotate to supported landscape and repeat | Content remains readable and reachable; record orientation-lock or unsupported behavior | UNVERIFIED |
| Tap the actual identity link several times; inspect its spacing | Correct home destination, accurate activation, no neighboring-target interference | UNVERIFIED |
| Review applicable focus/navigation with actual device input | Existing controls remain perceivable/usable; do not invent a button/menu | UNVERIFIED |

Record model **iPhone 13 Pro**, iOS/browser versions, actual viewport/orientation/DPR/zoom, touch method, scrolling/activation observations and capture limitations. Desktop widths or Playwright mobile emulation cannot close this requirement.

## D13-03 — Actual OS contrast disposition and worksheet

**DEFERRED, UNVERIFIED — M1.5.** A genuine OS contrast mode and suitable operator/browser have not been established. No system/VM provisioning was performed.

| Action in genuine OS theme | Expected observable result | Current disposition |
| --- | --- | --- |
| Enable actual OS contrast theme; record name/OS/browser/version | Actual browser follows the recorded theme; distinguish it from emulated media and unrelated contrast settings | UNVERIFIED |
| Read headings/paragraphs; identify identity/current link | Readable foreground/background, recognizable underline/current state; no color-only meaning | UNVERIFIED |
| Tab/Shift+Tab through actual links; activate skip | Focus visible/unobscured, skip recognizable and main focus perceivable | UNVERIFIED |
| Inspect meaningful boundaries on real controls | Actual links/focus remain usable; no nonexistent button obligation | UNVERIFIED |

Windows contrast themes with an actual compatible browser are one suitable option if available. Other environments require an explicit description of their real behavior. Browser forced-colors PASS remains partial evidence only.

## Security, disclosure and performance reconciliation

Fresh canonical security tests retain CSP, MIME protection, framing prohibition, referrer policy and Permissions Policy across page, redirect and invalid route. Browser diagnostics passed. No change to policy, dependencies, install/build controls or public environment configuration occurred.

Accepted CSP inline bootstrap/RSC scripts and inline-style allowances remain explicit limitations; development unsafe-eval/WebSocket allowances do not become production policy. No authentication, payment, user-submission, third-party telemetry, remote fonts, form action or privileged client adapter exists on this surface. This review is not a penetration test or security certification.

Only the exact C01/C02/C04/C05 homepage subset has disclosure approval. No complete claim category or commercial maturity state is newly approved. P02–P08 and other assertions remain withheld. No public hosting, HTTPS/HSTS, CDN/cache policy, canonical-origin, Vercel, operational monitoring or release qualification was performed. Green tests and implementation acceptance do not authorize deployment.

## Nine carried NOTE dispositions

| Accepted ID | New disposition and evidence | Remaining action / acceptance significance |
| --- | --- | --- |
| A151-01 | UNVERIFIED: no actual AT result; D13-01 worksheet/access prerequisites above | Human operator/environment and genuine observations required; cannot close with axe |
| A151-02 | UNVERIFIED: iPhone 13 Pro available, current access unavailable | Approved private access and actual touch review; no automatic renewed deferral |
| A151-03 | UNVERIFIED: only fresh forced-colors emulation | Genuine OS theme/environment and observations required |
| A151-04 | ORIGINAL RAW PERFORMANCE UNVERIFIED: historical printed statistics retained; their arithmetic was audited, but original traces/HAR/repetitions are unavailable | Replacement evidence and current laboratory disposition are recorded below; field/device/deployment performance remains unqualified |
| A151-05 | ORIGINAL PROVENANCE PARTIALLY VERIFIED: independent audit corroborated retained build/public outputs and client manifests; original inventory/archive unavailable | Replacement build identity, inspected-output hashes and archive are recorded below; no universal secret or hosting certification |
| A151-06 | BINDING FUTURE OBLIGATION: accepted A142-02 retirement retained | Before next real application client island restore production-browser hydration, activation, state-update, keyboard and retained-focus tests as applicable. Counter SSR is not equivalent |
| A151-07 | ACCEPTED CURRENT LIMITATION / SEPARATELY GATED: headers pass, CSP inline allowances unchanged | Revisit for sensitive/new surfaces; production edge/release qualification remains unauthorized |
| A151-08 | PARTIALLY ADDRESSED: fresh human desktop versions/environment and keyboard/native-zoom results recorded | Historical metadata remains absent; new viewport/DPR and manual spacing details not supplied; no inferred AT/device/OS result |
| A151-09 | BINDING MAINTENANCE OBLIGATION: ESLint 9.39.5 unchanged | Preserve bounded exception; review targeted lint-stack changes and no later than January 8, 2027 |


## Reconciliation with the accepted verification inventory

The [original 26-row inventory](m1-5-1-qualification-baseline.md#current-verification-inventory) is preserved. These current dispositions apply only to the stated property/environment; remote and local results remain distinct.

| Requirement ID | Current disposition / evidence added |
| --- | --- |
| Q01 routing/framework ownership | VERIFIED — CURRENT by unchanged source plus fresh route regressions; no new routing layer |
| Q02 static/JS-disabled content | VERIFIED — CURRENT: exact production build, both local engines, all four paragraphs without JS |
| Q03 redirect/invalid/pseudo routes | VERIFIED — CURRENT for sampled inputs: fresh canonical 307/query/404 tests |
| Q04 exact approved copy/metadata | VERIFIED — CURRENT: JS-enabled/disabled exact payload assertions; scope approval unchanged |
| Q05 served HTML/RSC/loaded-script exclusion | VERIFIED — CURRENT for searched/loaded outputs: canonical tests and fresh artifact review |
| Q06 complete public build graph | PARTIALLY VERIFIED for original provenance: retained 25-output build/manifests corroborated by audit; original hash inventory/archive unavailable. Replacement evidence below supplies a new chain of custody |
| Q07 no authored homepage client interaction | VERIFIED — CURRENT source/manifests; measured framework scripts explicitly present |
| Q08 capability/maturity withholding logic | VERIFIED — CURRENT: retained pure/i18n/SSR fixtures, not proof of commercial product release |
| Q09 token integrity | VERIFIED — CURRENT source: unchanged accepted 43-property graph and consumers |
| Q10 contrast/focus/style contexts | VERIFIED — CURRENT for canonical 24 pairing/state checks; synthetic controls remain styling-only |
| Q11 complete reflow/enlarged/spaced usability | PARTIALLY VERIFIED: fresh whole-paragraph geometry, agent screenshot review and automated overrides; physical device/manual spacing gaps remain |
| Q12 native keyboard/skip/focus | VERIFIED — CURRENT for asserted targets and human-reported desktop actions; actual AT combinations unverified |
| Q13 configured automated accessibility | VERIFIED — CURRENT: both engines, zero violations/incomplete, 18 passes; no WCAG conformance inference |
| Q14 forced colors/reduced motion | VERIFIED — CURRENT for browser emulation; genuine OS behavior remains Q19 |
| Q15 development pseudo rendering | UNVERIFIED for the original two-browser execution: original probes/logs unavailable; source-derived expansion and production exclusion were corroborated. New development observations below are separate evidence |
| Q16 human keyboard/zoom/visual evidence | PARTIALLY VERIFIED: new dated maintainer PASS and browser/desktop versions; viewport/DPR and manual spacing details incomplete |
| Q17 D13-01 actual screen reader | UNVERIFIED; no real AT observation |
| Q18 D13-02 physical touch/device | UNVERIFIED; iPhone 13 Pro available but page inaccessible |
| Q19 D13-03 genuine OS contrast | UNVERIFIED; actual theme/environment/result missing |
| Q20 headers/diagnostics | VERIFIED — CURRENT for tested loopback responses; CSP accepted limitations and deployment gate retained |
| Q21 performance/transfer/main thread | UNVERIFIED for original raw measurements: historical printed arithmetic checked, collection scripts/entries/traces unavailable. Replacement laboratory records below are separately inspectable |
| Q22 pinned install/build discipline | PARTIALLY VERIFIED for original local commands: original exit-code logs unavailable; accepted exact-SHA remote CI independently verified. New local command evidence below is separate |
| Q23 Counter live browser interaction | NOT APPLICABLE to current homepage; future client-island restoration obligation binding |
| Q24 Counter screen-reader announcement | NOT APPLICABLE to current homepage; real future status-changing behavior needs appropriate qualification |
| Q25 real languages/RTL/accounts/commerce | NOT APPLICABLE to authorized surface; no implied qualification |
| Q26 live HTTPS/HSTS/edge/release | UNVERIFIED and separately gated; no deployment performed |

## New findings and corrective-work triggers

No substantiated BLOCKER, MAJOR or MINOR application defect was found in the executed scope. Missing manual equipment/access/results are evidence gaps, not observed homepage failures. Their closure or explicit human disposition remains necessary for final qualification decisions.

| ID / severity | Evidence / observed condition | Consequence / minimum next action | Requalification / authorization |
| --- | --- | --- | --- |
| A152-01 — NOTE | `browser-inventory.log`, WebKit launch unavailable on Fedora ARM64 due to missing native dependencies | Fresh local suite covers two engines; retain prior exact-SHA Ubuntu three-engine evidence honestly | Future signed documentation SHA requires unchanged supported Ubuntu 30/30; no host provisioning or CI trigger authorized here |
| A152-02 — NOTE | Maintainer access report and `manual-observations.json`: Safari/iPhone cannot reach current local page; no actual AT/OS contrast result | D13-01–D13-03 remain unverified. Arrange approved private access/operator/environment; collect actual worksheets | Human review must resolve missing evidence explicitly; do not infer PASS or silently renew deferral |
| A152-03 — NOTE | `limited/performance-results.json` and traces: one 95–103ms long task in each limited cold load, framework JS downloaded despite no authored client island | A measured framework cost, not proven interaction failure. Retain full data; investigate only if representative repeat measurements establish material impact | No arbitrary budget/code remedy. Any corrective implementation needs separate M1.5.3 authorization and meaningful requalification |
| A152-04 — NOTE | `/tmp` evidence location and archives/hash inventory | Ephemeral retention can undermine detailed later audit; preserve privately or document loss/relocation | Human retention decision before raw evidence disappears; rerun only under appropriate authorization if necessary |

Potential M1.5.3 triggers are an actual AT/device/contrast failure, reproducible current exposure/rendering/security defect, or persistent materially harmful measured behavior. A hypothesis, missing future feature or isolated metric variation is insufficient. Proposed corrections must identify minimum scope, exact evidence, content/architecture impact and required tests before separate authorization.

Before a first additional public child route, identity `aria-current` must become route-aware, with real eligible destinations and route/metadata/keyboard/accessibility/responsive tests. No child route or additional content is authorized by this checkpoint.

## Remaining human and independent-audit gates

1. Independently audit build/log/trace provenance, metric definitions/cache accounting, complete-output scope and manual-attribution accuracy.
2. Review the supplied desktop PASS observations and remaining metadata limits; obtain any additional manual spacing/whole-page observations required.
3. Establish approved private access for host/device, an actual screen reader/operator and genuine OS contrast environment; complete D13-01–D13-03 or issue an explicit evidence-backed human disposition. These are not renewed deferrals by this report.
4. Preserve private raw evidence and reconcile any real failures into separately authorized corrective work.
5. Review this uncommitted documentation candidate; maintainer performs signed integration and successful exact-SHA supported Ubuntu CI, with all three blocking engines, one worker, zero retries and source cleanliness.
6. Explicit human acceptance remains required. M1.5.2 is not formally accepted; M1.5/M1 remain incomplete.

**M1.5.3/corrective implementation and production deployment/public release remain NOT AUTHORIZED.** No new page, content disclosure, asset, language, capability, commercial claim or release permission has been granted.

## Documentation and repository integrity

Only this new record and current summaries in `AGENTS.md`, `README.md`, `docs/README.md` and `docs/engineering/milestone-1-plan.md` are changed. Historical M1.3/M1.4/M1.5.1 records remain intact. Final validation checked 43 Markdown documents, 392 local inline-link destinations and 116 heading references: no errors, trailing whitespace or missing final newlines. Code fences are excluded; repository reference-style local links are absent. External URL availability is not implied by local validation; the cited baseline CI was retrieved separately. The complete tracked diff and new record were reviewed; `git diff --check` passed and staging is empty.

Initial/final hashes confirm all non-Markdown tracked files, the index, repository Git configuration and HEAD file unchanged; all refs remain identical, with HEAD/main/origin-main still at the accepted baseline and 0/0 relationships. Four tracked Markdown summaries are modified and one new Markdown record is untracked, all unstaged.

The generated inventory including the two root ignored files changed from 563 to 587: 477 original files unchanged, 83 regenerated, three original paths no longer in the current output, 27 added. The original agent reported preservation of all 563 files in `pre-existing-artifacts.tar.gz` and a separate production archive, but both original archives are now unavailable; this preservation claim cannot be independently checked or reconstructed by the replacement run. Excluding the root files, the corresponding inventory is 561 before / 585 after. No unrelated user data was removed. The original unavailable `final-integrity.json` was reported to record zero remaining owned processes.

The original agent reported stopping owned production/development servers and temporary probe browsers. Canonical execution regenerated ignored output; the original private backup and production archive are now unavailable. These permitted execution effects are distinguished from authored source changes. No dependency/system upgrade, destructive cleanup, staging, commit, ref update, GitHub mutation or deployment occurred.

## Evidence availability correction and replacement run — October 9, 2026 (UTC)

The independent audit decision remains **M1.5.2 INDEPENDENT AUDIT — CONDITIONAL PASS, BOUNDED CORRECTIONS REQUIRED**. **A152A-01 — MINOR** identified missing raw qualification evidence and overstated availability. No application defect, evidence falsification or invalid measurement algorithm was established by that finding.

The maintainer subsequently confirmed that the Kinoite VM was restarted before the audit and the original `/tmp/grocery-pos-m152-bxpry6eg` directory became unavailable. This explains the reported loss; the restart itself establishes neither integrity of the missing files nor independent review of them. The auditor verified the original printed performance arithmetic, retained public artifacts and Firefox report, while the original collection scripts, browser repetitions, traces, HAR files, command logs and preservation archives could not be retrieved.

Original statistics and execution chronology above remain historical agent-reported results. Original A151-04/Q21 raw performance is unverified; original A151-05/Q06 build provenance is partial, and original development-probe execution Q15 remains unverified. Replacement collection is newly authorized M1.5.2 evidence recovery, not recovery or independent validation of deleted files. It does not reconstruct the unavailable 563-file pre-original-execution inventory.

### Persistent private replacement storage

Qualification ID: `M152-R1`; run directory: `replacement-20261009T060613Z-n72y10mi`, collected October 9, 2026 (UTC). The actual local location is `~/.local/state/grocery-pos-website/qualification/m1-5-2/replacement-20261009T060613Z-n72y10mi`, where `~` expands to the executing user's home. The private `storage.txt` and `baseline.json` record the expanded path.

The directory is outside Git and temporary storage, on the writable Btrfs home volume, with directory mode 0700 and payload files restricted to the user. This storage is intended to survive a VM restart; restart survival was **not tested**. VM/disk deletion, manual removal and lack of an off-VM backup remain retention limitations. Preserve this directory through follow-up audit and human review. No raw evidence was uploaded.

References below use `M152-R1/` plus a relative filename. A reviewer needs authorized local access to the directory; neither the identifier nor a checksum alone supplies the underlying evidence. `manifest.json` lists qualification/source/environment/method provenance, each payload's relative path, size and SHA-256; `SHA256SUMS` additionally covers that manifest. Neither is an external attestation.

Before requalification, `pre-recovery-artifacts.json` and `pre-recovery-artifacts.tar.gz` preserved all **587 files as found at the start of this replacement run** (including the two ignored root files). This backup includes the retained audited build/browser output; it is not the lost original 563-file backup. `candidate-before/` retains the five existing candidate documents for bounded-diff review.

### Replacement commands, environment and retained evidence

The source remains `e5db9126e57b39aa120004d684f7af78e229fc7b` on `docs/m1-5-2-qualification`; HEAD/main/origin-main are equal, with 0/0 relationships and empty staging. The starting candidate already had four modified tracked Markdown summaries and this untracked record. Application/test/configuration files matched the accepted baseline. No Git integration, source correction, dependency upgrade, system provisioning or deployment occurred.

Execution used Fedora Linux 44 Container Image on aarch64, five exposed Apple cores and 11,911 MiB RAM. The replacement environment initially had approximately 6,124 MiB available, unlike the original recorded 3,372 MiB; host power/load were not isolated. Nix 2.34.7, Node 24.21.0, pnpm 12.9.0, just 1.51.0, Next 16.3.8, React 19.3.0, ReScript 12.3.1 and Playwright 1.64.0 remain unchanged. `environment.json` and `performance-environment.json` retain actual kernel/cgroup/load/runtime details; no mobile-hardware equivalence is inferred.

| Replacement execution | UTC window / result | Retained evidence |
| --- | --- | --- |
| `nix develop --command pnpm install --frozen-lockfile` | 06:07:30–06:07:31; Exit 0; frozen installation | `frozen-install.log`; `commands.json` |
| `nix develop --command just check` | 06:07:31–06:08:00; Exit 0; lint/format, 17/17 fixtures, 7/7 supervisor, typecheck/build and Chromium 10/10 | `just-check.log`; `commands.json` |
| `nix develop --command just test-e2e --project=firefox` | 06:08:00–06:08:09; Exit 0; Firefox 10/10 | `firefox.log`; `commands.json` |

One worker and zero browser retries remain unchanged. `canonical-chromium/` and `canonical-firefox/` separately preserve each engine's report and attachments. This is fresh **20/20 local** browser execution, not local 30/30. The replacement runtime probe again launched Chromium 156.0.8078.4 and Firefox 157.0; WebKit launch failed on missing native host dependencies. `browser-inventory.json` and its log retain the actual diagnostic. No OS packages were installed.

The accepted [Ubuntu baseline main run 37884329332](https://github.com/adarj/grocery-pos-website/actions/runs/37884329332) remains prior exact-SHA three-engine evidence. No workflow was triggered, no new Ubuntu qualification is claimed, and the eventual signed documentation commit still needs its own unchanged supported Ubuntu 30/30 and source-cleanliness gate.

| Evidence group | Relative files / reproducible method |
| --- | --- |
| Baseline, environment, storage | `baseline.json`, `environment.json`, `storage.txt`, `pre-recovery-artifacts.json` and archive |
| Commands / reports | `run-quality.py`, `commands.json`, three canonical logs, `canonical-chromium/`, `canonical-firefox/` |
| Build / exposure | `artifact-audit.py`, `artifact-audit.json`, `qualified-production-artifacts.tar.gz`, `public-http-checks.json` |
| Runtime / geometry / axe | `browser-inventory.cjs` and JSON/log; `render-probe.cjs`, `production-results.json`, full `axe-chromium.json`/`axe-firefox.json`, `production-*-320.png`/`production-*-1440.png` |
| Development pseudo | `pseudo-results.json`, `pseudo-*-320.png`/`pseudo-*-1440.png`, `development-probe.log` and `development-execution.json` |
| Performance collection | `performance.cjs`, `performance-environment.json`, `performance.log`; each profile's `cold-1.json`…`cold-5.json` and `warm-1.json`…`warm-5.json` |
| Underlying runtime records | Corresponding `*-trace.json`; five cold HARs and `warm.har` per profile, plus `primer.json`; warm HAR includes the priming navigation |
| Recalculation / lifecycle / integrity | `derive-statistics.py`, `derive-statistics.log`, `performance-statistics.json`, twenty `*-derived.json`; `cache-accounting.cjs`/JSON/log and `cache-accounting-execution.json`; `production-execution.json`, `development-execution.json`, `final-integrity.json`, `validation.json`, `manifest.json`, `SHA256SUMS` |

### Replacement build, public output and pseudo observations

Fresh build ID: `-WX5Ydb68SNwkbGOcvG79`, produced by the logged `just check` production build. It differs from the historical `AcWqkZgAYoIcgHaRz-HXI`. The new inventory independently contains **25 public-output files**, **639,945 on-disk bytes**; equal count/size does not imply identical files or build identity.


The artifact inventory preserves hashes of the prerender/route/app-path manifests, all static outputs and identified rendered HTML/RSC/text/segments, plus three client-reference manifests. It records static `/en` and framework error pages, no prerendered pseudo page, eight unique framework client modules and zero authored application client entries. The same eight literal qualification-data needles yielded zero public-file hits. Twenty-nine private server maps, zero public maps and no discovery outputs were inventoried. Bounded HTTP checks returned 404 for production pseudo/invalid language, sitemap/robots and the two sampled server-map URLs. These are defined output/HTTP checks, not universal secret or hosting guarantees.

Exact approved paragraphs/headings/metadata and two actual links matched again; no P02–P08 expansion, CTA, asset or public child route appeared. Framework JavaScript remains real; Counter/qualification fixtures are outside the public application graph. The fresh output conclusions match the prior audit's scoped observations.

Actual `next dev --hostname 127.0.0.1 --port 3101` served `/en-XA`. New JS-disabled Chromium/Firefox probes checked all four expanded sections, Introduction label, identity/skip names and destination, title/description, `lang=en-XA`, LTR and `noindex, nofollow`. Each engine passed five widths and the 320px 200%-font/text-spacing case, complete paragraph/heading/identity bounds and named skip/identity/main keyboard traversal. Unsupported development `/zz` was 404; production pseudo exclusion was separately tested. The source-derived paragraph lengths 290/453/375/293 agree with the observed strings but are not a substitute for the saved browser results. No real second language/RTL support is claimed.

Fresh production probes covered every main paragraph/heading and identity at the same widths, enlarged/spaced layout and JS-disabled focus sequence. Full tagged axe results again recorded zero violations, zero incomplete rules and 18 passes in both engines. These are automated observations, not new human, physical-device or screen-reader results.

### Replacement performance methods and raw statistics

The new collector reconstructs the documented settings, not the lost original script. Loopback uses no CPU/network slowdown; limited uses CDP latency 150ms, download 200,000 bytes/s, upload 93,750 bytes/s and CPU rate 4. Actual CDP settings are recorded per sample. Chromium 156.0.8078.4 was headless at 1440×900, DPR 1 and default 100% zoom, using local HTTP.

There are five cold and five warm navigations per profile. Cold creates a new context/page with HTTP cache disabled. Warm primes one context for one second after load, keeps HTTP cache enabled, then opens a **new page for each measured navigation within that context**. This measures warm HTTP cache with page startup, not guaranteed renderer/JIT reuse. DNS/OS/server caches and host background load remain uncontrolled. Both profiles include HAR/CDP/observer/tracing overhead; no physical low-end-phone equivalence or field performance claim follows.

Buffered observers are installed before navigation. Each raw sample retains navigation time origin, paint entry, every LCP candidate/element, visibility history, shifts/recent-input flags, long tasks, resources, requests and CDP counters. Observation ends at least ten seconds after load, without scheduled user input. Python recalculation checks the sole navigation URL/start=0, equal observer/navigation time origins, visible page history, selected FCP and last LCP entries, and timing bounds. CLS is independently derived from saved eligible shifts using maximum session windows (new window at a gap of at least one second or duration beyond five seconds). Every observed CLS is zero.

`derive-statistics.py --read-only` recalculates from the twenty raw records and traces without writing files; its normal mode generated the retained statistics and derived records. No sample failed or was excluded; no observer/request/page error was recorded. All variation is retained without a post hoc outlier filter. In particular, the first loopback cold paint at 100ms and loopback warm 64ms observation remain in the statistics.

| New condition | FCP raw ms | LCP raw ms | Median / min–max / range ms | CLS raw / median |
| --- | --- | --- | --- | --- |
| Loopback Cold | 100, 36, 28, 32, 28 | 100, 36, 28, 32, 28 | 32 / 28–100 / 72 | 0, 0, 0, 0, 0 / 0 |
| Loopback Warm | 32, 32, 64, 32, 44 | 32, 32, 64, 32, 44 | 32 / 32–64 / 32 | 0, 0, 0, 0, 0 / 0 |
| Limited Cold | 392, 376, 380, 400, 376 | 392, 376, 380, 400, 376 | 380 / 376–400 / 24 | 0, 0, 0, 0, 0 / 0 |
| Limited Warm | 244, 224, 212, 212, 224 | 244, 224, 212, 212, 224 | 224 / 212–244 / 32 | 0, 0, 0, 0, 0 / 0 |

FCP and LCP are equal in these new records; distinct underlying entries and the final selected LCP paragraph are retained. This is directly inspectable now, unlike the historical equality assertion.

Trace accounting selects the navigationStart matching the measured URL/frame, its process's named CrRendererMain thread, and the navigation-relative observation window. It unions complete RunTask intervals and separately unions nested/overlapping EvaluateScript, FunctionCall and RunMicrotasks intervals, clipping to that window. It excludes other renderer processes and incomplete/B/E-only events. These are selected instrumented elapsed-event durations, not exhaustive CPU/engine accounting; raw CDP counters are retained without misleading cross-navigation deltas.

| New condition (five each) | Renderer tasks: raw ms; median; min–max | Selected scripts: raw ms; median; min–max |
| --- | --- | --- |
| Loopback Cold | 117.012, 64.466, 58.231, 77.230, 61.451; 64.466; 58.231–117.012 | 44.806, 32.506, 32.311, 42.954, 30.241; 32.506; 30.241–44.806 |
| Loopback Warm | 61.409, 63.784, 69.288, 62.977, 73.444; 63.784; 61.409–73.444 | 34.590, 35.589, 36.433, 36.061, 38.014; 36.061; 34.590–38.014 |
| Limited Cold | 266.589, 289.139, 291.158, 279.866, 282.817; 282.817; 266.589–291.158 | 159.524, 184.061, 174.893, 152.133, 168.574; 168.574; 152.133–184.061 |
| Limited Warm | 275.471, 234.569, 250.465, 227.730, 234.618; 234.618; 227.730–275.471 | 169.319, 148.250, 157.932, 139.541, 144.816; 148.250; 139.541–169.319 |

### Replacement request, transfer and long-task accounting

Network categories use actual CDP response resource type/MIME and URL correlation, not initiator type alone: a preloaded script may have Resource Timing initiator `link`. Every sample contains seven request starts/IDs, no redirects/failures, and only `http://127.0.0.1:3102`. Cache-served requests still count.

| New condition, both profiles | HTML received | CSS received | JS received | Total received per navigation |
| --- | ---: | ---: | ---: | ---: |
| Cold, ten observations | 3,542 | 2,178 | 137,974 | 143,694 |
| Warm, ten observations | 826 | 0 | 0 | 826 |

These are browser CDP loadingFinished encodedDataLength observations, not on-disk bytes or packet-level Ethernet/TLS accounting. Per-response headers/status/cache indicators and the final counts are retained. Historical cold 143,695 / warm 827 figures remain unchanged above; the replacement differs by one byte and does not establish that the historical capture was wrong.

Cold Resource Timing uses its distinct accounting: HTML encoded/decoded body 2,600/9,358; CSS 1,320/4,437; five JS bodies 133,538/453,506. Its cold transferSize sum is 139,558 bytes, not the CDP received total. Warm HTML transferSize is 300 and cached CSS/JS transferSize is zero; encoded/decoded cached body sizes remain populated. The twenty-sample CDP/HAR responses expose cache-merged status 200, zero new warm HTML body bytes and 826 received bytes; they do not directly retain responseReceivedExtraInfo wire statuses. A separate network-only supplement (cache-accounting.cjs/JSON/log) captured that extra event for one primed same-page navigation, confirming actual HTTP 304 revalidation on this build. It is supplementary accounting evidence, not a replacement performance sample. Headers/browser accounting/cache behavior explain why these models must remain separate; raw records, not build sizes, support the transfer observations.

Limited cold long tasks were 104, 114, 112, 96 and 107ms; limited warm long tasks were 109, 94, 99, 86 and 92ms. Loopback samples recorded none. This fresh method observes framework startup work even with warm HTTP cache; it does not measure interaction latency or demonstrate a real-device accessibility/performance defect. No authored application hydration was added.

Exploratory historical/new paint medians are cold loopback 36→32, warm loopback 24→32, limited cold 376→380 and limited warm 200→224ms. New warm renderer/script costs also differ materially from the printed historical values. Original collector/trace semantics cannot be reconstructed, available memory/load changed, and the replacement's new-page warm policy is explicit; **no strict like-for-like regression or improvement conclusion is justified**. No Lighthouse score, field INP/CWV certification, arbitrary mandatory budget or source optimization is introduced.

### Current obligation reconciliation and finding proposal

| Obligation | Replacement disposition / retained gate |
| --- | --- |
| A151-01 / D13-01 | **DEFERRED, UNVERIFIED — M1.5**; no actual screen-reader observations supplied; Counter announcements remain N/A for the current homepage only |
| A151-02 / D13-02 | **DEFERRED, UNVERIFIED — M1.5**; identified iPhone 13 Pro is not test execution; approved private access and actual touch observations still needed |
| A151-03 / D13-03 | **DEFERRED, UNVERIFIED — M1.5**; genuine OS theme/operator results absent; emulation cannot close it |
| A151-04 | Replacement laboratory baseline collected with inspectable raw records, method, statistics and traces; current evidence proposed for follow-up verification, not field/device/deployment performance |
| A151-05 | Replacement exact-build logs, manifests, public inventory/hashes, HTTP checks and archive collected; original missing preservation claim remains unverified; scoped negative scan only |
| A151-06 | Binding future gate unchanged: before next real application client island restore applicable production-browser hydration, activation, state-update, keyboard and retained-focus tests; Counter SSR is not hydration |
| A151-07 | Accepted CSP inline allowances unchanged; header/diagnostic tests pass; edge HTTPS/HSTS, hosting and release separately gated |
| A151-08 | Original human Firefox/Chrome keyboard/native-zoom reports keep their attribution and viewport/DPR/JS-state/manual-spacing limits; no new manual PASS supplied |
| A151-09 | ESLint 9.39.5 bounded exception and January 8, 2027 review deadline unchanged |

A152-01 local WebKit limitation and A152-02 manual access/environment gaps remain. A152-03's historical long-task figures remain reported-only; new startup tasks above are a laboratory NOTE, not a correction authorization. A152-04's retention risk now has a disk-backed private location, while off-VM backup/restart-survival limitations remain.

**A152A-01 proposed disposition: CORRECTION IMPLEMENTED; RESOLUTION SUBJECT TO INDEPENDENT READ-ONLY FOLLOW-UP AUDIT.** The loss is documented, current availability assertions are corrected, affected original classifications are downgraded, and new records are retained separately. This implementation pass does not declare the audit finding definitively resolved or rewrite the original conditional decision.

Current replacement evidence supports Q06/Q15/Q21/Q22 and the local technical assertions to the stated build/browser/method scope; Q11/Q16 remain partial and Q17–Q19 unverified. Independent audit must inspect payloads and hashes, reproduce calculations and judge collection semantics. No new substantiated application defect was identified and no M1.5.3 work was performed.

All owned production/development server runs and probe browsers were terminated; lifecycle records, including cache-accounting-execution.json, show zero remaining live owned server-group processes. Final source/Git/generated and private-file integrity are recorded below and in the manifest.

M1.5.2 remains UNDER REVIEW, NOT ACCEPTED. M1.5/M1 remain incomplete. All manual worksheets remain applicable; no automatic renewed deferral or WCAG-conformance claim is made. Other substantive assertions/P02–P08 remain withheld. The route-aware identity safeguard remains mandatory before a first additional public child route. **M1.5.3, application corrections and production deployment/public release remain NOT AUTHORIZED.**

### Replacement validation, preservation and remaining review gates

Documentation validation found **43 Markdown documents, 393 local links and 117 heading references**, with no missing local destination/anchor, trailing-whitespace or final-newline error. External URL availability was not comprehensively rechecked. `git diff --check` passed. Only this canonical qualification document changed during evidence recovery; the four pre-existing modified tracked summaries remain byte-identical to their starting candidate copies. Tracked application, tests, configuration, dependencies and assets are unchanged; staging remains empty, with unchanged refs, Git index, HEAD and configuration.

The generated/build/report inventory changed from **587 to 593 files** through authorized execution: 484 unchanged, 100 regenerated, three removed old-build manifest paths and nine added files. The private pre-recovery archive retains all 587 starting files with matching hashes, and the fresh production archive retains all 25 inventoried public outputs with matching hashes. This preserves the replacement-run starting state, not the unavailable original 563-file backup. `final-generated-artifacts.json` and `final-integrity.json` identify the exact paths and hashes. All owned servers/probes were stopped; no listener remained on the used loopback ports.

Replacement payloads are readable in the private directory, with SHA-256/size inventory in `manifest.json` and independently checked `SHA256SUMS`; files are mode 0600 and directories 0700. Preservation does not assert tested restart survival or an off-VM backup. Follow-up audit requires authorized access to those actual files, verification of hashes and read-only recalculation from the raw records. A checksum alone cannot close A152A-01.

Remaining gates are independent read-only follow-up audit, genuine D13 manual observations or an explicit maintainer decision about each missing environment, human review/integration, successful exact-SHA supported Ubuntu CI for the future signed documentation commit (17 fixtures, seven supervisor regressions and unchanged 30/30 three-engine gate, one worker, zero retries), and explicit checkpoint acceptance. No source correction, M1.5.3 execution, new public disclosure or deployment is authorized.
