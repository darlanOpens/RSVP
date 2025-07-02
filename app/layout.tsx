import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CX IN HOUSE - Experiência do Cliente como Centro de Receita',
  description: 'Evento exclusivo sobre Customer Experience. Descubra estratégias avançadas para transformar CX em receita recorrente.',
  keywords: 'customer experience, cx, experiência do cliente, receita recorrente, evento cx, cx in house',
  authors: [{ name: 'CX IN HOUSE' }],
  openGraph: {
    title: 'CX IN HOUSE - Experiência do Cliente como Centro de Receita',
    description: 'Evento exclusivo sobre Customer Experience. Descubra estratégias avançadas para transformar CX em receita recorrente.',
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
      <body>{children}</body>
    </html>
  )
}
