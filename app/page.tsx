"use client"

import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, TrendingUp, Target, Sparkles, Award, Diamond, Star, Crown, Zap, Loader2 } from "lucide-react"
import { NEXT_MEETING_LABEL } from "@/components/ui/next-meeting"
import Image from "next/image"
import { ELGALogo } from "@/components/ui/elga-logo"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { sendToWebhook } from "@/lib/webhook-config"

// Componente separado que usa useSearchParams
function EventLandingPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailFromUrl, setIsEmailFromUrl] = useState(false)

  useEffect(() => {
    const emailFromUrl = searchParams.get('emailconf')
    if (emailFromUrl) {
      setEmail(emailFromUrl)
      setIsEmailFromUrl(true)
    }
  }, [searchParams])
  
  const clientLogos = [
    { name: "Studio Z", filename: "Estudio-Z.png", bgColor: "bg-gradient-to-br from-gray-800 to-black" },
    { name: "Estrela", filename: "Estrela.png", bgColor: "bg-gradient-to-br from-red-500 to-red-700" },
    { name: "Havan", filename: "Havan.png", bgColor: "bg-gradient-to-br from-blue-600 to-blue-800" },
    { name: "SICOB", filename: "SICOB.png", bgColor: "bg-gradient-to-br from-emerald-500 to-green-700" },
    { name: "Superlógica", filename: "Superlogica.png", bgColor: "bg-gradient-to-br from-blue-500 to-blue-700" },
    { name: "USIMINAS", filename: "USIMINAS.png", bgColor: "bg-gradient-to-br from-green-600 to-emerald-800" },
    { name: "CustomerX", filename: "Customerx.png", bgColor: "bg-gradient-to-br from-purple-600 to-indigo-800" },
    { name: "Nextar", filename: "Nextar.png", bgColor: "bg-gradient-to-br from-rose-500 to-red-600" },
  ]

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const response = await sendToWebhook("RSVP", {
        email: email,
      });

      const data = await response.json();

      if (response.ok && data.success && data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        router.push("/presenca-confirmada");
      }

    } catch (error) {
      console.error("Erro ao enviar o formulário:", error)
      router.push("/presenca-confirmada")
    } finally {
      setIsLoading(false)
    }
  }

  // Data/hora do próximo encontro (vinda do componente utilitário)
  const nextMeetingLabel = NEXT_MEETING_LABEL

  return (
    <div className="min-h-screen bg-background">
      {/* Header removido */}

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen">
        <Image
          src="/elga/background.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 object-left md:object-right"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="relative z-10 container mx-auto px-6 md:px-8 flex flex-col min-h-screen">
          <div className="flex-grow flex items-center justify-center">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full max-w-7xl">
              {/* Lado Esquerdo: Conteúdo */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:col-span-6 w-full">
                <div className="mb-6">
                  <ELGALogo size="md" />
                </div>
                <div className="mb-6">
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-primary">
                    <div className="flex items-center gap-2 px-3 py-1 border border-primary rounded-full">
                      <MapPin className="w-4 h-4" />
                      <span className="font-sans text-sm font-semibold">Online</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 border border-primary rounded-full">
                      <Clock className="w-4 h-4" />
                      <span className="font-sans text-sm font-semibold">1h</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 border border-primary rounded-full">
                      <span className="font-sans text-sm font-semibold">Google Meet</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-start justify-center lg:justify-start gap-2 text-primary">
                    <Calendar className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="font-sans text-base md:text-lg font-semibold leading-tight">
                      próximo encontro: {nextMeetingLabel}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 w-full">
                  <p className="font-sans text-base md:text-lg lg:text-xl text-text-muted leading-relaxed mt-4 max-w-2xl mx-auto lg:mx-0">
                    Bate papo ao vivo com Douglas Conrad, Criador do método ELG, e diversos especialistas do mercado, sobre a sua área de atendimento e como destravá-la — casos reais, papo interativo, personalizado para você.
                  </p>
                </div>

                <div className="mt-10 w-full max-w-2xl">
                  {isEmailFromUrl ? (
                    <div className="text-center bg-background/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-primary/30">
                      <p className="font-sans text-base md:text-lg text-text-high mb-4 break-words">
                        Olá, identificamos seu email como <strong className="text-primary break-all">{email}</strong>
                      </p>
                      <Button
                        size="lg"
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="w-full bg-primary hover:bg-primary-dark text-background-dark px-4 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold uppercase tracking-wide md:tracking-widest"
                      >
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 md:h-6 md:w-6 animate-spin" /> : "Confirmar Presença"}
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col sm:flex-row gap-4 p-1">
                      <div className="flex-1 min-w-0">
                        <Input
                          type="email"
                          placeholder="E-mail de acesso"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={isLoading}
                          className="w-full font-sans bg-transparent border-primary text-text-high placeholder:text-primary/70 h-14 px-6 text-lg focus:border-primary/80 focus:ring-primary/80 rounded-lg"
                        />
                      </div>
                      <div className="flex-shrink-0">
                        <Button
                          size="lg"
                          onClick={handleSubmit}
                          disabled={isLoading}
                          className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-background-dark px-8 py-4 h-14 text-base font-semibold uppercase tracking-widest transition-all duration-150 ease-in-out hover:scale-105 shadow-lg rounded-lg"
                        >
                          {isLoading ? (
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          ) : (
                            "Continuar"
                          )}
                        </Button>
                      </div>
                    </div>
                  )}
                  <p className="font-sans text-xs text-primary/70 text-center mt-3">
                    vagas limitadas
                  </p>
                </div>

                {/* Data movida para os chips do topo usando NextMeeting */}
              </div>
              
              {/* Lado Direito: Espaço reservado para imagem futura */}
              <div className="hidden lg:block">
                {/* Espaço para imagem */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apelo Central */}
      <section className="py-24 border-t border-primary/20 bg-surface-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h2 className="font-display text-4xl md:text-5xl text-text-high font-bold tracking-wide leading-tight">
              Traga os desafios que hoje travam seu atendimento
            </h2>
            <p className="font-sans text-lg md:text-xl text-text-muted leading-relaxed">
              Nessa conversa, diversos especialistas em Experience-led Growth do mercado entram no tema com você, com exemplos do dia a dia e o que está funcionando agora no mercado.
            </p>
          </div>
        </div>
      </section>

      {/* O que é */}
      <section className="py-24 border-t border-primary/20 bg-background-dark">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h2 className="font-display text-4xl text-text-high font-bold tracking-wide uppercase mb-12">
              O que é
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="bg-primary p-4 rounded-lg w-16 h-16 mx-auto flex items-center justify-center">
                  <Users className="w-8 h-8 text-background-dark" />
                </div>
                <p className="font-sans text-text-muted text-lg">
                  Bate-papo guiado por Douglas Conrad
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-primary p-4 rounded-lg w-16 h-16 mx-auto flex items-center justify-center">
                  <Target className="w-8 h-8 text-background-dark" />
                </div>
                <p className="font-sans text-text-muted text-lg">
                  Casos reais dos participantes
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-primary p-4 rounded-lg w-16 h-16 mx-auto flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-background-dark" />
                </div>
                <p className="font-sans text-text-muted text-lg">
                  Resumo pós-evento para membros ELGA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 'Para quem' removida por solicitação */}

      {/* Como funciona (seção dedicada) */}
      <section className="py-24 border-t border-primary/20 bg-background-dark">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl text-text-high font-bold tracking-wide mb-12">
              Como funciona
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div
              className="bg-surface-card/20 p-6 rounded-lg border border-primary/20 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60"
              style={{ animation: `fadeInUp 0.6s ease-out 0s forwards` }}
            >
              <div className="bg-primary text-background-dark px-4 py-1.5 rounded-full font-sans font-semibold tracking-wide text-sm md:text-base inline-block mb-3">
                10′
              </div>
              <div className="font-display text-xl text-text-high">Abertura</div>
              <p className="font-sans text-sm text-text-muted mt-2">Boas-vindas e alinhamento rápido do encontro.</p>
            </div>
            <div
              className="bg-surface-card/20 p-6 rounded-lg border border-primary/20 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60"
              style={{ animation: `fadeInUp 0.6s ease-out 0.05s forwards` }}
            >
              <div className="bg-primary text-background-dark px-4 py-1.5 rounded-full font-sans font-semibold tracking-wide text-sm md:text-base inline-block mb-3">
                15′
              </div>
              <div className="font-display text-xl text-text-high">O que funciona agora</div>
              <p className="font-sans text-sm text-text-muted mt-2">Panorama do que está performando no mercado.</p>
            </div>
            <div
              className="p-6 rounded-lg border border-primary/60 text-center bg-primary/10 ring-1 ring-primary shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{ animation: `fadeInUp 0.6s ease-out 0.1s forwards` }}
            >
              <div className="bg-primary text-background-dark px-4 py-1.5 rounded-full font-sans font-semibold tracking-wide text-sm md:text-base inline-block mb-3">
                25′
              </div>
              <div className="font-display text-2xl text-text-high">Hot seats</div>
              <p className="font-sans text-sm text-text-muted mt-2">Participantes trazem casos ao vivo para diagnóstico e ajustes práticos.</p>
            </div>
            <div
              className="bg-surface-card/20 p-6 rounded-lg border border-primary/20 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60"
              style={{ animation: `fadeInUp 0.6s ease-out 0.15s forwards` }}
            >
              <div className="bg-primary text-background-dark px-4 py-1.5 rounded-full font-sans font-semibold tracking-wide text-sm md:text-base inline-block mb-3">
                15′
              </div>
              <div className="font-display text-xl text-text-high">Táticas</div>
              <p className="font-sans text-sm text-text-muted mt-2">Checklist prático para testar imediatamente.</p>
            </div>
            <div
              className="bg-surface-card/20 p-6 rounded-lg border border-primary/20 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60"
              style={{ animation: `fadeInUp 0.6s ease-out 0.2s forwards` }}
            >
              <div className="bg-primary text-background-dark px-4 py-1.5 rounded-full font-sans font-semibold tracking-wide text-sm md:text-base inline-block mb-3">
                5′
              </div>
              <div className="font-display text-xl text-text-high">Próximos passos</div>
              <p className="font-sans text-sm text-text-muted mt-2">Resumo e direcionamentos para depois do encontro.</p>
            </div>
          </div>

          <div className="mt-10 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg border-l-4 border-primary bg-background-dark/40">
              <p className="font-sans text-text-high text-lg">
                <span className="text-primary font-bold">Hot seats</span> são o coração do encontro: 2–3 casos no centro da conversa, com orientação direta e exemplos do que funciona agora.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quem conduz */}
      <section className="py-24 border-t border-primary/20 bg-background-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Lado Esquerdo: Conteúdo */}
            <div className="text-left space-y-8">
              <div>
                <h2 className="font-display text-4xl md:text-5xl text-text-high font-bold tracking-wide leading-tight mb-4">
                  Quem conduz
                </h2>
                <p className="font-sans text-lg text-text-muted">
                  Bate-papo ao vivo com <strong className="text-primary">Douglas Conrad</strong>, criador do método ELG, com participação de <strong className="text-primary">especialistas convidados</strong> do mercado.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="font-display text-2xl text-primary font-bold tracking-wide">Douglas Conrad</h3>
                  <p className="font-sans text-text-muted">Mentor do ELGA. Atua diariamente com operações de Atendimento e CX orientadas a receita.</p>
                  <p className="font-sans text-text-muted"><strong className="text-primary">Estilo:</strong> ouvir primeiro, ir direto ao ponto, exemplos reais — sem slides.</p>
                  <p className="font-sans text-text-muted"><strong className="text-primary">Foco:</strong> transformar conversas em resultados mensuráveis: respostas mais rápidas, ofertas mais claras e passagens que fecham venda.</p>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-2xl text-primary font-bold tracking-wide">Especialistas convidados</h3>
                  <ul className="font-sans text-text-muted space-y-2">
                    <li className="flex items-start gap-2"><Users className="w-5 h-5 text-primary mt-0.5" /><span>Executivos de CX, CS, Operações e Vendas com prática de campo.</span></li>
                    <li className="flex items-start gap-2"><Sparkles className="w-5 h-5 text-primary mt-0.5" /><span>Convidados variam por edição, conforme os temas trazidos.</span></li>
                    <li className="flex items-start gap-2"><TrendingUp className="w-5 h-5 text-primary mt-0.5" /><span>Discussão focada no que funciona agora no mercado.</span></li>
                  </ul>
                </div>
              </div>

              <div className="inline-block bg-background-dark/30 p-6 rounded-lg border-l-4 border-primary">
                <p className="font-sans text-text-high leading-relaxed font-medium max-w-2xl">
                  "Conversa franca, exemplos do dia a dia e ajustes práticos para a sua realidade."
                </p>
              </div>
            </div>

            {/* Lado Direito: Imagem com Efeito */}
            <div className="relative flex justify-center items-center h-[500px]">
              {/* Moldura de Linhas */}
              <div className="absolute w-full h-full border-2 border-primary/30 rounded-lg -rotate-3"></div>
              <div className="absolute w-full h-full border-2 border-primary/30 rounded-lg rotate-3"></div>

              {/* Retângulo Dourado */}
              <div className="absolute left-0 w-2/3 h-4/5 bg-primary z-10 rounded-lg shadow-2xl"></div>

              {/* Imagem */}
              <div className="relative z-20 w-full h-full">
                <Image
                  src="/elga/douglas_conrad.png"
                  alt="Douglas Conrad"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* É Gratuito */}
      <section className="py-24 border-t border-primary/20 bg-surface-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h2 className="font-display text-4xl text-text-high font-bold tracking-wide uppercase">
              É Gratuito
            </h2>
            <div className="space-y-6">
              <div className="bg-background-dark/30 p-8 rounded-lg">
                <p className="font-sans text-lg text-text-muted leading-relaxed mb-4">
                  <strong className="text-primary">Sem custo.</strong> O ELGA Talks é uma iniciativa do ELGA para apoiar lideranças de atendimento.
                </p>
                <p className="font-sans text-lg text-text-muted leading-relaxed">
                  <strong className="text-primary">Sem pitch.</strong> Durante a conversa não há oferta comercial — é foco em casos e prática.
                </p>
              </div>
              <p className="font-sans text-base text-text-muted">
                Se fizer sentido depois, você pode conhecer melhor o ELGA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgência e Escassez */}
      <section className="py-24 border-t border-primary/20 bg-background-dark">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="bg-primary/10 p-8 rounded-lg border border-primary/30">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-2xl text-primary font-bold tracking-wide uppercase">
                    Vagas Limitadas
                  </h3>
                </div>
                <p className="font-sans text-lg text-text-muted leading-relaxed">
                  Capacidade da sala limitada. Assim que preencher, encerramos as confirmações desta edição.
                </p>
                <p className="font-sans text-base text-text-muted leading-relaxed">
                  Confirme seu interesse agora para receber o link do encontro.
                </p>
                <p className="font-sans text-sm text-text-muted/80 leading-relaxed">
                  Se as vagas desta edição se esgotarem, você será avisado sobre a próxima sessão ou poderá receber o resumo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-24 border-t border-primary/20 bg-surface-card/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            <h2 className="font-display text-4xl md:text-5xl text-text-high font-bold tracking-wide uppercase leading-tight">
              ELGA Talks
            </h2>
            <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed">
              Traga seu desafio de atendimento. Vamos conversar sobre o que funciona agora no mercado — 
              sem slides, sem buzzword, só prática.
            </p>
            <div className="pt-6 md:pt-8">
              <Button
                size="lg"
                onClick={handleSubmit}
                disabled={isLoading}
                className="bg-primary hover:bg-primary-dark text-background-dark px-8 py-3 md:px-10 md:py-4 text-sm md:text-base font-semibold uppercase tracking-widest transition-all duration-150 ease-in-out hover:scale-105 shadow-lg"
              >
                {isLoading ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : "Continuar para confirmação"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Componente de fallback para loading
function EventLandingPageFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <ELGALogo size="md" />
        <div className="mt-8">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
          <p className="mt-4 text-text-muted">Carregando...</p>
        </div>
      </div>
    </div>
  )
}

// Componente principal exportado com Suspense
export default function EventLandingPage() {
  return (
    <Suspense fallback={<EventLandingPageFallback />}>
      <EventLandingPageContent />
    </Suspense>
  )
}
