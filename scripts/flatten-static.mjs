#!/usr/bin/env node
// Copia a saída estática de dist/client para dist/ para hosts que publicam
// automaticamente a pasta dist como raiz pública.
import { cpSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const CLIENT_DIR = "dist/client";
const PUBLIC_DIR = "dist";

if (!existsSync(CLIENT_DIR)) {
  throw new Error(`Pasta ${CLIENT_DIR} não encontrada. Execute o build antes.`);
}

for (const entry of readdirSync(CLIENT_DIR)) {
  cpSync(join(CLIENT_DIR, entry), join(PUBLIC_DIR, entry), {
    recursive: true,
    force: true,
  });
}

console.log(`[static] Arquivos de ${CLIENT_DIR} copiados para ${PUBLIC_DIR}.`);