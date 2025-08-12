import type { Metadata } from 'next'
import { Inter as FontSans, Playfair_Display as FontDisplay } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { TwentyFirstToolbar } from '@21st-extension/toolbar-next'
import { ReactPlugin } from '@21st-extension/react'
import { cn } from '@/lib/utils'
import GTMProvider from '@/components/gtm-provider'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontDisplay = FontDisplay({
  subsets: ['latin'],
  variable: '--font-display',
})

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
  const enableSilence =
    process.env.NODE_ENV === 'production' ||
    process.env.NEXT_PUBLIC_SILENCE_GTM_LOGS === 'true' ||
    process.env.NEXT_PUBLIC_SILENCE_ANALYTICS_LOGS === 'true'
  const enableToolbar = process.env.NEXT_PUBLIC_ENABLE_TOOLBAR === 'true'

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable, fontDisplay.variable)}>
        {enableSilence && (
          <Script id="silence-analytics-logs" strategy="beforeInteractive">{`(function(){try{function s(a){var b="";for(var i=0;i<a.length;i++){try{b+=typeof a[i]==='string'?a[i]:JSON.stringify(a[i])}catch(e){b+=String(a[i])}b+=' '}b=b.toLowerCase();var p=[/start script ok/i,/processing commands/i,/processing data layer push/i,/processing gtag command/i,/loaded existing client id/i,/sending event/i,/request parameters/i,/sending rich request/i,/gtm\.historychange/i,/tag fired/i,/gtm-/i,/googletagmanager/i,/gtag\.js/i,/fbevents\.js/i,/meta pixel/i,/duplicate pixel id/i,/duplicate container installation/i,/stape\.io\/g\/collect/i,/_dbg=1/i,/ecid:/i,/tag_exp:/i,/gtm_auth/i,/gtm_preview/i,/widget:/i,/manager\.opens\.com\.br/i];for(var j=0;j<p.length;j++){if(p[j].test(b))return true}return false}var c=window.console;if(!c)return;['log','info','debug','warn','group','groupCollapsed','error'].forEach(function(m){var o=c[m];if(!o)return;c[m]=function(){if(s(arguments))return;o.apply(c,arguments)}});window.addEventListener('error',function(e){try{var msg=(e&&e.message)||'';if(/postmessage.*target origin provided/i.test(msg)){e.preventDefault();return false}}catch(_){}},true);window.addEventListener('unhandledrejection',function(e){try{var r=e&&e.reason;if(r&&typeof r.message==='string'&&/postmessage.*target origin provided/i.test(r.message)){e.preventDefault();return false}}catch(_){}},true);}catch(e){}})();`}</Script>
        )}
        <GTMProvider />
        {children}
        {enableToolbar ? <TwentyFirstToolbar config={{ plugins: [ReactPlugin] }} /> : null}
      </body>
    </html>
  )
}
