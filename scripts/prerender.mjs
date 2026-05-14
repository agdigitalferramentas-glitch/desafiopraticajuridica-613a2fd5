#!/usr/bin/env node
// Prerender: sobe o worker SSR via wrangler dev, captura HTML das rotas,
// salva como arquivos estáticos em dist/client/. Para uso em build Docker.
import { spawn } from "node:child_process";
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

const ROUTES = ["/", "/djp0526-obg"];
const PORT = 8787;
const OUT_DIR = "dist/client";

function fileForRoute(route) {
  if (route === "/") return join(OUT_DIR, "index.html");
  return join(OUT_DIR, route.replace(/^\//, ""), "index.html");
}

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok || res.status === 404) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Servidor não respondeu em ${url} dentro de ${timeoutMs}ms`);
}

async function main() {
  console.log("[prerender] Subindo wrangler dev...");
  const wrangler = spawn(
    "npx",
    [
      "wrangler",
      "dev",
      "--port",
      String(PORT),
      "--ip",
      "127.0.0.1",
      "--log-level",
      "warn",
    ],
    { stdio: ["ignore", "inherit", "inherit"], env: { ...process.env } },
  );

  const cleanup = () => {
    try {
      wrangler.kill("SIGTERM");
    } catch {}
  };
  process.on("exit", cleanup);
  process.on("SIGINT", () => {
    cleanup();
    process.exit(1);
  });

  try {
    await waitForServer(`http://127.0.0.1:${PORT}/`, 60000);
    console.log("[prerender] Servidor pronto. Capturando rotas...");

    for (const route of ROUTES) {
      const url = `http://127.0.0.1:${PORT}${route}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Falha em ${route}: HTTP ${res.status}`);
      }
      const html = await res.text();
      const out = fileForRoute(route);
      mkdirSync(dirname(out), { recursive: true });
      writeFileSync(out, html);
      console.log(`  ✓ ${route} → ${out} (${(html.length / 1024).toFixed(1)} KB)`);
    }

    console.log("[prerender] Concluído.");
  } finally {
    cleanup();
  }
}

main().catch((err) => {
  console.error("[prerender] Erro:", err);
  process.exit(1);
});
