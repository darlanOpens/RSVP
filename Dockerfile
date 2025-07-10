# Use uma imagem base Node.js
FROM node:18-alpine AS base

# Definir o diretório de trabalho
WORKDIR /app

# Instalar o pnpm globalmente
RUN npm install -g pnpm

# Estágio de dependências
FROM base AS deps
WORKDIR /app

# Copiar arquivos de manifesto de dependência
COPY package.json pnpm-lock.yaml ./

# Instalar dependências de produção
RUN pnpm install --prod

# Estágio de build
FROM base AS builder
WORKDIR /app

# Copiar dependências do estágio anterior
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Construir a aplicação Next.js
RUN pnpm build

# Estágio de produção
FROM base AS runner
WORKDIR /app

# Definir o ambiente para produção
ENV NODE_ENV=production

# Copiar o build da aplicação do estágio de build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expor a porta que a aplicação Next.js usa
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["pnpm", "start"] 