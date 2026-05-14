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

# Build do TanStack Start + prerender + cópia estática para dist/
RUN npm run build

# =========================
# Stage 2: Nginx estático
# =========================
FROM nginx:1.27-alpine AS runner

# Remove config default
RUN rm /etc/nginx/conf.d/default.conf

# Copia config customizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia HTML prerenderizado + assets (CSS, JS, imagens)
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
