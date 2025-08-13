"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ELGALogo } from "@/components/ui/elga-logo"
import Link from "next/link"
import { ArrowLeft, Loader2, CheckCircle } from "lucide-react"
import { toast } from "sonner"
import { getPreSelecaoEmail, getPreSelecaoWebhookUrl, clearPreSelecaoWebhookUrl } from "@/lib/client-storage"

export default function PreSelecaoPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [webhookUrl, setWebhookUrl] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
  })

  useEffect(() => {
    // Verificar se existe webhook_url da pré-seleção no sessionStorage
    const savedWebhookUrl = getPreSelecaoWebhookUrl()
    if (savedWebhookUrl) {
      setWebhookUrl(savedWebhookUrl)
    }
    // Pré-preencher email salvo a partir do primeiro formulário
    const savedEmail = getPreSelecaoEmail()
    if (savedEmail) {
      setFormData(prev => ({ ...prev, email: savedEmail }))
    }
  }, [])

  const handleInputChange = (id: string, value: string) => {
    // Aplica máscara de telefone quando o campo for `phone`
    if (id === 'phone') {
      value = maskPhone(value)
    }
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  function maskPhone(value: string): string {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    if (digits.length <= 10) {
      // (XX) XXXX-XXXX
      return digits
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
    }
    // (XX) 9XXXX-XXXX
    return digits
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      if (!webhookUrl) {
        toast.error('Link de continuação indisponível. Volte e confirme sua presença novamente.')
        return
      }

      // Usar um proxy server-side para evitar CORS ao chamar a resumeUrl do n8n
      const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
      const response = await fetch(`${basePath}/api/wait-resume`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resumeUrl: webhookUrl, payload: formData }),
      })
      // Limpar o webhook_url usado
      clearPreSelecaoWebhookUrl()

      const data = await response.json()

      if (!response.ok) {
        console.error("Erro no envio:", data)
        toast.error('Não foi possível enviar seus dados. Tente novamente.')
        return
      }

      // Não redireciona. Exibe toast de sucesso e some com o formulário
      toast.success('Dados enviados com sucesso!')
      setIsSubmitted(true)

    } catch (error) {
      console.error("Erro ao enviar o formulário:", error)
      // Manter na mesma página para o usuário tentar novamente
    } finally {
      setIsLoading(false)
    }
  }

  const copy = {
    title: "Pré-seleção",
    lead1:
      "Estamos finalizando as presenças do E.L.G.A. Algumas confirmações adicionais serão liberadas por seleção.",
    lead2:
      "Quer participar? Apresente-se agora. Leva menos de 1 minuto. Nossa curadoria é contínua e as confirmações extras são limitadas.",
    cta: "Entrar na pré-seleção",
    disclaimer1:
      "Fique atento! Se aprovado, você receberá um contato do nosso time!",
    disclaimer2:
      "Seus dados são usados apenas para a avaliação de presença.",
    supportIntro:
      "Se você acredita que houve um engano ou deseja mais informações sobre o evento, entre em contato conosco para verificar os detalhes e, se possível, garantir sua participação.",
    supportTitle: "Contato para suporte:",
    supportEmail: "contato@opens.com.br",
    comoFuncionaTitle: "Como funciona",
    comoFuncionaText:
      "Nossa equipe valida as últimas presenças ao longo do dia. Se o seu perfil se encaixar nesta edição, confirmaremos por e-mail e WhatsApp.",
    tempoTitle: "Tempo & exclusividade",
    tempoText:
      "As confirmações adicionais são raras e saem rápido — envie sua apresentação agora.",
  }

  const formFields: Array<{
    id: string
    label: string
    type: string
    placeholder: string
    autoComplete?: string
    inputMode?: string
  }> = [
    {
      id: "name",
      label: "Nome",
      type: "text",
      placeholder: "Seu nome completo",
      autoComplete: "name",
    },
    {
      id: "email",
      label: "E-mail",
      type: "email",
      placeholder: "Seu melhor e-mail",
      autoComplete: "email",
    },
    {
      id: "phone",
      label: "Telefone",
      type: "tel",
      placeholder: "(XX) 9XXXX-XXXX",
      autoComplete: "tel",
      inputMode: "tel",
    },
    {
      id: "company",
      label: "Empresa",
      type: "text",
      placeholder: "Nome da empresa",
      autoComplete: "organization",
    },
    {
      id: "role",
      label: "Cargo",
      type: "text",
      placeholder: "Seu cargo/função",
      autoComplete: "organization-title",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-text-high flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <ELGALogo size="md" />
        </div>

        <h1 className="font-display text-4xl lg:text-6xl text-text-high font-bold tracking-wide uppercase leading-tight">
          {copy.title}
        </h1>

        <p className="font-sans text-xl lg:text-2xl text-primary font-light max-w-3xl mx-auto">
          {copy.lead1}
        </p>
        <p className="font-sans text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
          {copy.lead2}
        </p>

        <Card className="bg-surface-card border-primary/20 p-8 rounded-lg max-w-md mx-auto text-left">
          <CardContent className="p-0 space-y-6">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <p className="font-sans text-lg text-text-high">Recebemos seus dados. Obrigado!</p>
              </div>
            ) : (
              <>
                {formFields.map((field) => (
                  <div className="space-y-2" key={field.id}>
                    <Input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      inputMode={field.inputMode as any}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      disabled={isLoading}
                      className="font-sans bg-transparent border-primary text-text-high placeholder:text-primary/70 h-12 px-4 text-base"
                    />
                  </div>
                ))}
                <Button
                  size="lg"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary-dark text-background-dark px-8 py-3 text-base font-semibold uppercase tracking-widest"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    copy.cta
                  )}
                </Button>
              </>
            )}
          </CardContent>
        </Card>

        <div className="font-sans text-text-muted text-sm space-y-2">
          <p>{copy.disclaimer1}</p>
          <p>{copy.disclaimer2}</p>
        </div>

        <div className="text-left max-w-3xl mx-auto space-y-6">
          <div className="space-y-2">
            <h3 className="font-display text-xl text-text-high">{copy.comoFuncionaTitle}</h3>
            <p className="font-sans text-text-muted">{copy.comoFuncionaText}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-display text-xl text-text-high">{copy.tempoTitle}</h3>
            <p className="font-sans text-text-muted">{copy.tempoText}</p>
          </div>
        </div>

        <div className="font-sans text-text-muted text-sm space-y-4">
          <p>{copy.supportIntro}</p>
          <p>
            <span className="font-semibold text-primary">{copy.supportTitle}</span>{" "}
            <a href={`mailto:${copy.supportEmail}`} className="hover:underline">
              {copy.supportEmail}
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


