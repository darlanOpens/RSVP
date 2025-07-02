# Script de Atualização - React 19, Next.js 15 e Dependências Modernas
# Executar no PowerShell: .\upgrade-dependencies.ps1

Write-Host "🚀 Iniciando atualização para React 19, Next.js 15 e dependências modernas..." -ForegroundColor Green

# Verificar se está em um repositório Git
if (-not (Test-Path ".git")) {
    Write-Host "⚠️  Aviso: Não detectado repositório Git. Recomendado criar backup manual do projeto." -ForegroundColor Yellow
} else {
    Write-Host "📁 Criando branch para atualização..." -ForegroundColor Cyan
    git checkout -b feature/upgrade-dependencies
}

# Backup do package.json
Write-Host "💾 Criando backup do package.json..." -ForegroundColor Cyan
Copy-Item "package.json" "package.json.backup"

# Limpar cache e dependências antigas
Write-Host "🧹 Limpando cache e dependências antigas..." -ForegroundColor Cyan

if (Get-Command "pnpm" -ErrorAction SilentlyContinue) {
    Write-Host "Usando PNPM..." -ForegroundColor Yellow
    pnpm store prune
    Remove-Item "pnpm-lock.yaml" -ErrorAction SilentlyContinue
} else {
    Write-Host "Usando NPM..." -ForegroundColor Yellow
    npm cache clean --force
    Remove-Item "package-lock.json" -ErrorAction SilentlyContinue
}

Remove-Item "node_modules" -Recurse -Force -ErrorAction SilentlyContinue

# Instalar novas dependências
Write-Host "📦 Instalando dependências atualizadas..." -ForegroundColor Cyan
if (Get-Command "pnpm" -ErrorAction SilentlyContinue) {
    pnpm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "⚠️  Erro na instalação. Tentando com --force..." -ForegroundColor Yellow
        pnpm install --force
    }
} else {
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "⚠️  Erro na instalação. Tentando com --force..." -ForegroundColor Yellow
        npm install --force
    }
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dependências instaladas com sucesso!" -ForegroundColor Green
} else {
    Write-Host "❌ Erro na instalação das dependências." -ForegroundColor Red
    Write-Host "📄 Consulte o arquivo UPGRADE_PLAN.md para solução de problemas." -ForegroundColor Yellow
    exit 1
}

# Executar codemods
Write-Host "🔄 Executando codemods de migração..." -ForegroundColor Cyan

Write-Host "   Executando React 19 migration..." -ForegroundColor Yellow
npx codemod@latest react/19/migration-recipe --dry

$confirm = Read-Host "Aplicar migrations do React 19? (y/N)"
if ($confirm -eq "y" -or $confirm -eq "Y") {
    npx codemod@latest react/19/migration-recipe
}

Write-Host "   Executando Next.js 15 migration..." -ForegroundColor Yellow
npx @next/codemod@canary upgrade latest

# Verificar instalação
Write-Host "🔍 Verificando instalação..." -ForegroundColor Cyan

Write-Host "Testando build..." -ForegroundColor Yellow
if (Get-Command "pnpm" -ErrorAction SilentlyContinue) {
    pnpm build
} else {
    npm run build
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build realizado com sucesso!" -ForegroundColor Green
} else {
    Write-Host "⚠️  Problemas detectados no build. Verifique os logs acima." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "📋 RESUMO DA ATUALIZAÇÃO:" -ForegroundColor Green
Write-Host "   • React: 19.0.0 (estável)" -ForegroundColor White
Write-Host "   • Next.js: 15.2.5 (estável)" -ForegroundColor White  
Write-Host "   • react-day-picker: 9.7.0 (compatível com date-fns 4.x)" -ForegroundColor White
Write-Host "   • Todas as dependências do Radix UI atualizadas" -ForegroundColor White

Write-Host ""
Write-Host "📝 PRÓXIMOS PASSOS:" -ForegroundColor Yellow
Write-Host "   1. Verifique o arquivo UPGRADE_PLAN.md para mudanças manuais necessárias" -ForegroundColor White
Write-Host "   2. Execute 'pnpm dev' ou 'npm run dev' para testar em desenvolvimento" -ForegroundColor White
Write-Host "   3. Teste todos os componentes de calendário/data" -ForegroundColor White
Write-Host "   4. Verifique se há erros de TypeScript ou hidratação" -ForegroundColor White

if (Test-Path "package.json.backup") {
    Write-Host ""
    Write-Host "💾 Backup salvo em: package.json.backup" -ForegroundColor Cyan
    Write-Host "   Para reverter: Copy-Item 'package.json.backup' 'package.json'" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "✨ Atualização concluída! Confira o UPGRADE_PLAN.md para detalhes." -ForegroundColor Green 