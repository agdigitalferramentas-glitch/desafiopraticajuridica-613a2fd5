// @lovable.dev/vite-tanstack-config already includes the following â do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this â wrangler.jsonc main alone is insufficient.
export default defineConfig({
  vite: {
    preview: {
      allowedHosts: true,
    },
  },
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      routes: ["/", "/djp0526-obg"],
    },
    pages: [
      { path: "/", prerender: { enabled: true } },
      { path: "/djp0526-obg", prerender: { enabled: true } },
    ],
  },
});
