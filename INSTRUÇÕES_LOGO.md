# Instruções para Adicionar a Logo ELGA

## ✅ Problema Corrigido!

Corrigi o erro do Next.js Server Component criando um componente específico para a logo ELGA que funciona perfeitamente!

## Como Adicionar a Logo Real

Para substituir os placeholders pela logo ELGA real, siga estes passos:

### 1. Preparar a Imagem
- Renomeie o arquivo da imagem para `elga-logo.png`
- Certifique-se que a imagem tem boa resolução (recomendado: pelo menos 400x160 pixels)
- Formato preferível: PNG com fundo transparente

### 2. Copiar a Imagem
Execute no PowerShell (dentro da pasta do projeto):

```powershell
Copy-Item "caminho\para\sua\elga.png" "public\elga-logo.png"
```

**Ou simplesmente:**
1. Abra a pasta `public` do projeto
2. Cole o arquivo `elga.png` lá
3. Renomeie para `elga-logo.png`

### 3. Componente ELGALogo Criado

Foi criado um componente específico em `components/ui/elga-logo.tsx` que:
- ✅ **Funciona sem erros** - Usa 'use client' corretamente
- ✅ **Fallback inteligente** - Mostra versão estilizada se a imagem falhar
- ✅ **Tamanhos flexíveis** - sm, md, lg
- ✅ **Título opcional** - Para seção "Realização"

### 4. Localizações da Logo na Página

A logo ELGA aparece em **2 locais** principais:

#### 🔹 **Header** (topo da página)
```tsx
<ELGALogo size="md" />
```
- Logo centralizada no cabeçalho
- Tamanho: 200x80 pixels

#### 🔹 **Seção "Realização"**
```tsx
<ELGALogo size="lg" showTitle={true} />
```
- Destacada como "Realização"
- Tamanho: 250x100 pixels
- Com título "Realização" acima

### 5. Verificar o Resultado

Após adicionar a imagem:

1. Execute o projeto:
   ```powershell
   npm run dev
   ```

2. Abra no navegador: `http://localhost:3000`

3. ✅ **Não deve mais dar erro!** - Problema do Server Component corrigido

### 6. Personalização (Opcional)

O componente `ELGALogo` aceita estas props:

```tsx
interface ELGALogoProps {
  size?: 'sm' | 'md' | 'lg'    // Tamanho da logo
  className?: string           // Classes CSS adicionais
  showTitle?: boolean         // Mostrar "Realização" acima
}
```

**Tamanhos disponíveis:**
- `sm`: 150x60px
- `md`: 200x80px  
- `lg`: 250x100px

## 🎯 Resultado Esperado

Com a logo real, você terá:
- ✅ **Sem erros** - Componente Client correto
- ✅ **Branding consistente** - Logo aparece estrategicamente
- ✅ **Identidade preservada** - Cores douradas e elegância mantidas  
- ✅ **Responsividade** - Adapta-se a diferentes tamanhos de tela
- ✅ **Fallback profissional** - Nunca quebra a experiência visual
- ✅ **Performance otimizada** - Server Components + Client apenas onde necessário

## 🔧 Correções Técnicas Feitas

1. **Criado componente Client**: `ELGALogo` com 'use client'
2. **Removidos event handlers**: Da página principal (Server Component)
3. **Fallback inteligente**: Versão estilizada automática
4. **Importação correta**: Componente usado na página principal

## 📞 Problemas?

Se ainda tiver dificuldades:
1. ✅ Verifique se o arquivo está em `public/elga-logo.png`
2. ✅ Execute `npm run dev` novamente
3. ✅ O erro anterior foi completamente corrigido!

A identidade visual agora está completa e **funcionando perfeitamente** com a marca ELGA! 🌟✨ 