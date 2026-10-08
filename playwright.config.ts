import { defineConfig, devices } from "@playwright/test";

// Inherited XDG_DATA_DIRS broke WebKit GSettings lookup on Linux CI; omit it only
// from browser children. Isolation: https://github.com/adarj/grocery-pos-website/actions/runs/37719629240
const webkitLaunchEnvironment =
  process.platform === "linux" && process.env.CI
    ? Object.fromEntries(
        Object.entries(process.env).filter(
          ([key, value]) => key !== "XDG_DATA_DIRS" && value !== undefined,
        ),
      )
    : undefined;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  workers: 1,
  retries: 0,
  reporter: [["list"], ["html", { open: "never" }]],
  timeout: 30_000,
  use: {
    baseURL: "http://127.0.0.1:3100",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
        ...(webkitLaunchEnvironment
          ? { launchOptions: { env: webkitLaunchEnvironment } }
          : {}),
      },
    },
  ],
  webServer: {
    command: "pnpm run start --port 3100",
    url: "http://127.0.0.1:3100",
    reuseExistingServer: false,
    timeout: 30_000,
  },
});
