#!/usr/bin/env node
// Post-build: gera dist/client/index.html (SPA shell) com meta tags,
// GTM e AGMetrics pixel hardcoded. Detecta o bundle e CSS via tamanho/heurística.
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const CLIENT_DIR = "dist/client";
const ASSETS_DIR = join(CLIENT_DIR, "assets");
const SITE_URL = "https://desafiopraticajuridica.lovable.app";
const OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/9eb8314f-b5a8-4d6f-a0b7-0c3d0569ff52";

const files = readdirSync(ASSETS_DIR);

// Encontra o bundle principal: maior index-*.js que NÃO importa de outro index-*.js
const indexJs = files.filter((f) => /^index-.*\.js$/.test(f));
let entryJs = null;
let entrySize = 0;
for (const f of indexJs) {
  const p = join(ASSETS_DIR, f);
  const head = readFileSync(p, "utf8").slice(0, 200);
  const importsAnotherIndex = /from\s*["']\.\/index-/.test(head);
  if (importsAnotherIndex) continue;
  const size = statSync(p).size;
  if (size > entrySize) {
    entrySize = size;
    entryJs = f;
  }
}
if (!entryJs) throw new Error("Não encontrei o entry JS em dist/client/assets");

const cssFile = files.find((f) => /^styles-.*\.css$/.test(f));
if (!cssFile) throw new Error("Não encontrei CSS em dist/client/assets");

const TITLE = "Desafio Prática Jurídica | Niu Cursos + Impacta";
const DESC =
  "Landing page for a legal practice AI challenge, featuring event details and registration.";

const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${TITLE}</title>
    <meta name="description" content="${DESC}" />
    <link rel="canonical" href="${SITE_URL}/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${TITLE}" />
    <meta property="og:description" content="${DESC}" />
    <meta property="og:url" content="${SITE_URL}/" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${TITLE}" />
    <meta name="twitter:description" content="${DESC}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="stylesheet" href="/assets/${cssFile}" />
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TZP989S');</script>
    <!-- End Google Tag Manager -->
    <script type="module" crossorigin src="/assets/${entryJs}"></script>
  </head>
  <body>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TZP989S" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <div id="root"></div>
    <!-- AGMetrics Pixel -->
    <script src="https://iwrrijemxtudyakmhajk.supabase.co/functions/v1/tracking-pixel?pid=4a4c2aff-3657-4ed9-8e36-f11a6d70db12&track=all"></script>
  </body>
</html>
`;

writeFileSync(join(CLIENT_DIR, "index.html"), html);
console.log(`[build-static] Gerado dist/client/index.html`);
console.log(`  entry: assets/${entryJs} (${(entrySize / 1024).toFixed(1)} KB)`);
console.log(`  css:   assets/${cssFile}`);
