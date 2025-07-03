# Identidade Visual - E.L.G.A.

## Visão Geral

A identidade visual do evento **E.L.G.A. — Experience-Led Growth Academy** foi desenvolvida com base em um conceito **moderno e premium**, construído em torno de elementos metálicos dourados sobre um fundo escuro, com tipografia sans-serif contemporânea e uma chave antiga como símbolo principal.

## Elementos Principais

### 1. Paleta de Cores

- **Fundo Escuro**: `#0D0B05` - Um marrom quase preto que proporciona elegância e sofisticação
- **Dourado Primário**: `#C8A75D` - Tom dourado claro para destaques principais
- **Dourado Médio**: `#977640` - Tom dourado médio para elementos secundários
- **Dourado Escuro**: `#604618` - Tom dourado profundo para sombras e detalhes
- **Accent Quente**: `#DFC27A` - Tom dourado suave para acentos sutis
- **Texto sobre Escuro**: `#F5E8C8` - Tom dourado muito claro para textos pequenos

### 2. Tipografia Moderna

#### Display (Títulos Principais)
- **Fonte**: Plus Jakarta Sans (sans-serif moderna e premium)
- **Peso**: 800 (ExtraBold)
- **Espaçamento**: 0.05em (mais apertado para look moderno)
- **Transformação**: UPPERCASE
- **Separador**: ◆ (diamante dourado entre palavras)
- **Estilo**: Clean, tecnológico e contemporâneo

#### Corpo e Subtítulos
- **Fonte**: Plus Jakarta Sans
- **Pesos**: 400-700 (Regular a Bold)
- **Uso**: Textos descritivos, subtítulos e conteúdo geral
- **Características**: Legibilidade excelente, moderna e profissional

#### Características da Jakarta Plus Sans
- Fonte geométrica moderna com toques humanísticos
- Ótima legibilidade em telas
- Suporte completo para caracteres especiais
- Design contemporâneo que transmite inovação e profissionalismo

### 3. Elementos Visuais

#### Chave Vintage
- Elemento central da identidade (contraste moderno-vintage)
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

#### Sombra de Texto Premium
```css
text-shadow: 0 2px 4px rgba(0,0,0,0.3);
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

## Diretrizes de Uso Moderno

### Hierarquia Tipográfica
- **H1**: Jakarta Sans 800, 48-64px, Dourado metálico, UPPERCASE
- **H2**: Jakarta Sans 700, 32-48px, Dourado primário
- **H3**: Jakarta Sans 600, 24-32px, Dourado médio
- **Body**: Jakarta Sans 400, 16-18px, Texto claro

### Contraste
- Sempre use elementos dourados sobre o fundo escuro
- Mantenha a luminosidade dos elementos metálicos
- Use pesos de fonte apropriados para garantir legibilidade

### Escalonamento
- Mantenha a proporção entre a chave e o texto principal
- Reduza proporcionalmente os separadores de diamante
- Use spacing consistente (8px, 16px, 24px, 32px)

### Fundos Alternativos
- Se necessário, use apenas tons escuros dessaturados (#101820 - #182024)
- Evite fundos claros que quebrem a atmosfera premium

### Restrições
- Não use outras famílias de fonte além da Jakarta Plus Sans
- Não altere o espaçamento das letras da fonte display drasticamente
- Mantenha a simplicidade e modernidade do design

## Como Aplicar

1. **Títulos Principais**: Use a classe `font-display` com `text-metallic-gradient`
2. **Textos Dourados**: Use as variáveis de cor definidas (`text-[#C8A75D]`, etc.)
3. **Fundos**: Mantenha sempre o `bg-[#0D0B05]` como base
4. **Efeitos**: Aplique `text-shadow-luxury` em títulos importantes
5. **Pesos de fonte**: Use 400 (regular), 600 (semibold), 700 (bold), 800 (extrabold)

## Filosofia de Design Atualizada

### Moderno Premium
- Combinação de tipografia contemporânea com elementos vintage selecionados
- Limpeza visual com foco na legibilidade
- Uso estratégico de efeitos metálicos

### Tecnológico Elegante
- Sans-serif para transmitir inovação e modernidade
- Mantém sofisticação através da paleta dourada premium
- Balance entre funcionalidade e beleza

### Profissionalismo
- Tipografia clara para comunicação efetiva
- Hierarquia visual bem definida
- Consistência em todos os elementos

## Manutenção

Para manter a consistência visual moderna:
- Sempre consulte este documento antes de fazer alterações
- Use exclusivamente Jakarta Plus Sans para toda tipografia
- Mantenha a hierarquia visual estabelecida
- Preserve a elegância e modernidade da identidade
- Evite adicionar fontes adicionais que quebrem a consistência 