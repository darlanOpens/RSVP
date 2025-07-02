# 📋 Plano de Atualização - React 19, Next.js 15 e Dependências Modernas

## 🎯 Objetivo
Atualizar o projeto para as versões mais modernas e estáveis:
- **React 19.0.0** (estável desde dezembro 2024)
- **Next.js 15.2.5** (última versão estável)
- **react-day-picker 9.7.0** (compatível com date-fns 4.x)

## 🚀 Passo-a-Passo da Atualização

### 1. Backup e Preparação
```bash
# Criar uma branch para a atualização
git checkout -b feature/upgrade-dependencies

# Fazer backup do package.json atual
cp package.json package.json.backup
```

### 2. Limpar Cache e Node Modules
```bash
# Limpar cache do npm/pnpm
npm cache clean --force
# ou se estiver usando pnpm:
# pnpm store prune

# Remover node_modules e lockfile
rm -rf node_modules
rm pnpm-lock.yaml
```

### 3. Instalar Dependências Atualizadas
```bash
# Instalar as novas dependências
pnpm install

# Ou forçar a instalação se houver conflitos:
pnpm install --force
```

### 4. Executar Codemods de Migração

#### React 19 Migration
```bash
# Executar o codemod oficial do React 19
npx codemod@latest react/19/migration-recipe
```

#### Next.js 15 Migration
```bash
# Executar o codemod oficial do Next.js 15
npx @next/codemod@canary upgrade latest
```

### 5. Atualizações Manuais Necessárias

#### react-day-picker v9 (Breaking Changes)
Se você estiver usando react-day-picker, algumas mudanças são necessárias:

**Antes (v8):**
```tsx
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

<DayPicker
  mode="single"
  selected={selected}
  onSelect={setSelected}
/>
```

**Depois (v9):**
```tsx
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css'; // Caminho do CSS mudou

<DayPicker
  mode="single" 
  selected={selected}
  onSelect={setSelected}
  // Agora é obrigatório ter onSelect quando mode está definido
/>
```

### 6. Verificar Typescript e APIs Assíncronas

#### Next.js 15 - APIs Assíncronas (Breaking Change)
Algumas APIs agora são assíncronas:

**Antes:**
```tsx
import { cookies, headers } from 'next/headers';

export function MyComponent() {
  const cookieStore = cookies();
  const headersList = headers();
}
```

**Depois:**
```tsx
import { cookies, headers } from 'next/headers';

export async function MyComponent() {
  const cookieStore = await cookies();
  const headersList = await headers();
}
```

### 7. Testar a Aplicação
```bash
# Executar em modo desenvolvimento
pnpm dev

# Verificar build de produção
pnpm build
pnpm start

# Executar linting
pnpm lint
```

## 🔍 Principais Mudanças

### React 19
- ✅ Suporte nativo para Web Components
- ✅ Melhor handling de refs
- ✅ Performance improvements
- ✅ New hooks: `useActionState`, `useOptimistic`

### Next.js 15  
- ✅ Suporte completo ao React 19
- ✅ Turbopack estável para desenvolvimento
- ✅ Melhor caching semântico
- ✅ APIs assíncronas (breaking change)
- ✅ Static Route Indicator

### react-day-picker v9
- ✅ Compatibilidade com date-fns 4.x
- ✅ Melhor performance
- ✅ APIs mais consistentes
- ✅ Melhor acessibilidade

## ⚠️ Possíveis Problemas e Soluções

### Erro: "Accessing element.ref was removed"
**Solução:** Isso é resolvido automaticamente com o codemod do React 19.

### Erro de hidratação com react-day-picker
**Solução:** Usar dynamic import para componentes que dependem do calendário:
```tsx
import dynamic from 'next/dynamic';

const DatePicker = dynamic(() => import('./DatePicker'), {
  ssr: false
});
```

### TypeScript errors
**Solução:** As novas versões têm tipagens atualizadas. Execute:
```bash
pnpm dlx typescript@latest --init
```

## 📦 Dependências Atualizadas

| Pacote | Versão Anterior | Nova Versão | Status |
|--------|----------------|-------------|--------|
| react | ^19 | ^19.0.0 | ✅ Estável |
| react-dom | ^19 | ^19.0.0 | ✅ Estável |
| next | 15.2.4 | ^15.2.5 | ✅ Estável |
| react-day-picker | 8.10.1 | ^9.7.0 | ✅ Estável |
| date-fns | 4.1.0 | ^4.1.0 | ✅ Mantido |

## ✅ Checklist Final

- [ ] Backup criado
- [ ] Dependencies instaladas sem erros
- [ ] Codemods executados
- [ ] App roda em desenvolvimento (`pnpm dev`)
- [ ] Build de produção funciona (`pnpm build`)
- [ ] Componentes de calendário funcionam
- [ ] Testes passam (se existirem)
- [ ] Deploy de teste realizado

## 🆘 Em Caso de Problemas

Se encontrar erros após mais de 3 tentativas:

1. **Restaurar backup:**
   ```bash
   git checkout package.json.backup
   pnpm install
   ```

2. **Comunicar o problema** com detalhes dos erros específicos

3. **Alternativa temporária:** Downgrade do date-fns para v3:
   ```bash
   pnpm add date-fns@^3.6.0
   ```

---

**Nota:** Este plano segue as melhores práticas recomendadas pelos maintainers do React, Next.js e react-day-picker. 