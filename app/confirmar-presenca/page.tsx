"use client"

import { Button } from "@/components/ui/button"
import { ELGALogo } from "@/components/ui/elga-logo"
import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function ConfirmedPage() {
  return (
    <div className="min-h-screen bg-background text-text-high flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <ELGALogo size="md" />
        </div>

        <div className="space-y-6 flex flex-col items-center">
            {/* Animação de Check */}
            <CheckCircle className="w-24 h-24 text-green-500 animate-pulse" />

            <h1 className="font-display text-4xl lg:text-6xl text-text-high font-bold tracking-wide uppercase leading-tight">
              Presença Confirmada!
            </h1>
            <p className="font-sans text-2xl text-primary font-light">
              Parabéns! Sua vaga está garantida.
            </p>
            <p className="font-sans text-lg text-text-muted max-w-2xl mx-auto">
              Estamos muito felizes em ter você conosco para uma experiência incrível de aprendizado e networking. Você receberá um e-mail com todos os detalhes do evento em breve.
            </p>
        </div>

        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar para a página inicial
        </Link>
      </div>
    </div>
  )
} 