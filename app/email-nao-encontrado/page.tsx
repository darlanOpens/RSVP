"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ELGALogo } from "@/components/ui/elga-logo"
import Link from "next/link"
import { ArrowLeft, Loader2, CheckCircle } from "lucide-react"
import { sendToWebhook } from "@/lib/webhook-config"

export default function EmailNotFoundPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleNewsletterSubmit = async () => {
    if (!name.trim() || !email.trim()) {
      return
    }

    setIsLoading(true)
    try {
      const response = await sendToWebhook("NEWSLETTER", {
        email: email,
        name: name,
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true)
      } else {
        console.error("Erro ao confirmar pré-seleção")
      }

    } catch (error) {
      console.error("Erro ao enviar dados da pré-seleção:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-text-high flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <ELGALogo size="md" />
        </div>

        <h1 className="font-display text-4xl lg:text-6xl text-text-high font-bold tracking-wide uppercase leading-tight">
          Ops, seu e-mail não foi encontrado na lista
        </h1>

        <p className="font-sans text-xl lg:text-2xl text-primary font-light max-w-3xl mx-auto">
          Este evento possui <span className="font-semibold">ingressos limitados</span> e, infelizmente, o e-mail inserido não está em nossa lista de convidados.
        </p>
        
        <p className="font-sans text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
          Mas não se preocupe! Entre na nossa <span className="font-semibold text-primary">pré-seleção</span> e garanta prioridade nas próximas edições. Candidatos pré-selecionados recebem convites antecipados e têm acesso garantido aos eventos futuros.
        </p>

        <Card className="bg-surface-card border-primary/20 p-8 rounded-lg max-w-md mx-auto text-left">
          <CardContent className="p-0 space-y-6">
            {isSuccess ? (
              <div className="text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <h3 className="font-display text-2xl text-primary font-bold">Pré-seleção Confirmada!</h3>
                <p className="font-sans text-text-muted">
                  Parabéns! Você agora está na nossa pré-seleção e terá <strong className="text-primary">prioridade</strong> para as próximas edições.
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary font-semibold">Nome</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                    className="font-sans bg-transparent border-primary text-text-high placeholder:text-primary/70 h-12 px-4 text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary font-semibold">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    className="font-sans bg-transparent border-primary text-text-high placeholder:text-primary/70 h-12 px-4 text-base"
                  />
                </div>
                <Button
                  size="lg"
                  onClick={handleNewsletterSubmit}
                  disabled={isLoading || !name.trim() || !email.trim()}
                  className="w-full bg-primary hover:bg-primary-dark text-background-dark px-8 py-3 text-base font-semibold uppercase tracking-widest"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Confirmando pré-seleção...
                    </>
                  ) : (
                    "Entrar na Pré-seleção"
                  )}
                </Button>
              </>
            )}
          </CardContent>
        </Card>

        <div className="font-sans text-text-muted text-sm space-y-4">
          <p>
            Se você acredita que houve um engano ou deseja mais informações sobre o evento, entre em contato conosco para verificar os detalhes e, se possível, garantir sua participação.
          </p>
          <p>
            <span className="font-semibold text-primary">Contato para suporte:</span>{" "}
            <a href="mailto:contato@opens.com.br" className="hover:underline">
              contato@opens.com.br
            </a>
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