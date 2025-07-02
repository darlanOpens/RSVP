# Identidade Visual - CX IN HOUSE

## Visão Geral

A identidade visual do evento **CX IN HOUSE** foi desenvolvida com base em um conceito luxuoso e vintage-acadêmico, construído em torno de elementos metálicos dourados sobre um fundo escuro, incorporando uma chave antiga como símbolo principal.

## Elementos Principais

### 1. Paleta de Cores

- **Fundo Escuro**: `#0D0B05` - Um marrom quase preto que proporciona elegância e sofisticação
- **Dourado Primário**: `#C8A75D` - Tom dourado claro para destaques principais
- **Dourado Médio**: `#977640` - Tom dourado médio para elementos secundários
- **Dourado Escuro**: `#604618` - Tom dourado profundo para sombras e detalhes
- **Accent Quente**: `#DFC27A` - Tom dourado suave para acentos sutis
- **Texto sobre Escuro**: `#F5E8C8` - Tom dourado muito claro para textos pequenos

### 2. Tipografia

#### Display (Títulos Principais)
- **Fonte**: Cinzel (fonte serifada de alto contraste)
- **Peso**: 900 (Black)
- **Espaçamento**: 0.08em
- **Transformação**: UPPERCASE
- **Separador**: ◆ (diamante dourado entre palavras)

#### Corpo
- **Fonte**: Cormorant Garamond (serifada elegante)
- **Pesos**: 300-700
- **Uso**: Textos descritivos e conteúdo geral

### 3. Elementos Visuais

#### Chave Vintage
- Elemento central da identidade
- Posicionada horizontalmente como background sutil
- Renderizada com gradiente metálico dourado
- Opacidade reduzida para não competir com o conteúdo

#### Separadores de Diamante (◆)
- Utilizados entre elementos de texto
- Proporção: 8% da altura das letras maiúsculas
- Cor: Dourado primário (#C8A75D)

### 4. Efeitos Especiais

#### Gradiente Metálico
```css
background: linear-gradient(135deg, #F3DFA0 0%, #C8A75D 40%, #977640 70%, #604618 100%);
```

#### Sombra de Texto Luxuosa
```css
text-shadow: 0 4px 8px rgba(0,0,0,0.4);
```

## Componentes Personalizados Criados

### 1. LuxuryButton
Botão com visual metálico e efeitos hover elegantes
```tsx
import { LuxuryButton } from "@/components/ui/luxury-button"

<LuxuryButton size="lg">Texto do Botão</LuxuryButton>
```

### 2. DiamondSeparator
Componente para exibir o separador de diamante
```tsx
import { DiamondSeparator } from "@/components/ui/diamond-separator"

<DiamondSeparator size="md" />
```

## Diretrizes de Uso

### Contraste
- Sempre use elementos dourados sobre o fundo escuro
- Mantenha a luminosidade dos elementos metálicos

### Escalonamento
- Mantenha a proporção entre a chave e o texto principal
- Reduza proporcionalmente os separadores de diamante

### Fundos Alternativos
- Se necessário, use apenas tons escuros dessaturados (#101820 - #182024)
- Evite fundos claros que quebrem a atmosfera luxuosa

### Restrições
- Não recolora os elementos metálicos
- Não altere o espaçamento das letras da fonte display
- Evite adicionar gráficos decorativos adicionais

## Como Aplicar

1. **Títulos Principais**: Use a classe `font-display` com `text-metallic-gradient`
2. **Textos Dourados**: Use as variáveis de cor definidas (`text-[#C8A75D]`, etc.)
3. **Fundos**: Mantenha sempre o `bg-[#0D0B05]` como base
4. **Efeitos**: Aplique `text-shadow-luxury` em títulos importantes

## Manutenção

Para manter a consistência visual:
- Sempre consulte este documento antes de fazer alterações
- Use os componentes personalizados criados
- Mantenha a hierarquia visual estabelecida
- Preserve a elegância e sofisticação da identidade 