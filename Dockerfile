# Use uma imagem base Node.js
FROM node:18-alpine AS base

# Definir o diretório de trabalho
WORKDIR /app

# Instalar o pnpm globalmente
RUN npm install -g pnpm

# Estágio de dependências
FROM base AS deps
# Verificar https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine para entender o porque do libc6-compat pode ser necessário.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar arquivos de manifesto de dependência e configuração
COPY package.json pnpm-lock.yaml ./
COPY tsconfig.json next.config.mjs ./

# Instalar todas as dependências (incluindo devDependencies para o build)
RUN pnpm install

# Estágio de build
FROM base AS builder
WORKDIR /app

# Copiar dependências do estágio anterior
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js coleta dados de telemetria completamente anônimos sobre uso geral.
# Saiba mais aqui: https://nextjs.org/telemetry
# Descomente a linha seguinte caso você queira desabilitar a telemetria durante o build.
ENV NEXT_TELEMETRY_DISABLED=1

# Construir a aplicação Next.js
RUN pnpm build

# Estágio de produção
FROM base AS runner
WORKDIR /app

# Definir o ambiente para produção
ENV NODE_ENV=production
# Descomente a linha seguinte caso você queira desabilitar a telemetria durante runtime.
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Definir as permissões corretas para prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copiar automaticamente arquivos de output leveraging output traces
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# server.js é criado por next build a partir do output standalone
CMD ["node", "server.js"] 