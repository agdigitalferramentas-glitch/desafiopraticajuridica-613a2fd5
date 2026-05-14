# =========================
# Stage 1: build + prerender
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

# Instala deps (usa --legacy-peer-deps por causa de algumas libs)
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

# Copia o resto do projeto
COPY . .

# Build do TanStack Start (gera dist/client + dist/server worker)
RUN npm run build

# Prerender: sobe o worker SSR localmente e captura o HTML de cada rota
RUN node scripts/prerender.mjs

# =========================
# Stage 2: Nginx estático
# =========================
FROM nginx:1.27-alpine AS runner

# Remove config default
RUN rm /etc/nginx/conf.d/default.conf

# Copia config customizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia HTML prerenderizado + assets (CSS, JS, imagens)
COPY --from=builder /app/dist/client /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
