import type { Metadata } from 'next'
import './globals.css'
import { TwentyFirstToolbar } from '@21st-extension/toolbar-next'
import { ReactPlugin } from '@21st-extension/react'

export const metadata: Metadata = {
  title: 'E.L.G.A. — Experience-Led Growth Academy',
  description: 'Hub de mentoria premium da Opens. Conduzido por Douglas Conrad, o programa reúne clientes selecionados em sessões exclusivas para revelar estratégias que convertem atendimento em receita previsível.',
  keywords: 'experience-led growth, elga, opens, douglas conrad, mentoria premium, customer experience, receita previsível, growth academy',
  authors: [{ name: 'E.L.G.A. — Experience-Led Growth Academy' }],
  openGraph: {
    title: 'E.L.G.A. — Experience-Led Growth Academy',
    description: 'Hub de mentoria premium da Opens. Transforme sua experiência de cliente em legado de crescimento.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <TwentyFirstToolbar config={{ plugins: [ReactPlugin] }} />
      </body>
    </html>
  )
}
