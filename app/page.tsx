"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, TrendingUp, Target, Sparkles, Award, Diamond, Star, Crown, Zap, Loader2 } from "lucide-react"
import Image from "next/image"
import { ELGALogo } from "@/components/ui/elga-logo"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function EventLandingPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
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
      const response = await fetch("https://n8n.opens.com.br/webhook/hubspot-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          form_title: "ELGA",
          form_id: "ELGA",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success && data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        router.push("/email-nao-encontrado");
      }

    } catch (error) {
      console.error("Erro ao enviar o formulário:", error)
      router.push("/email-nao-encontrado")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header removido */}

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Image
          src="/background.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="flex justify-center mb-12">
            <ELGALogo size="md" />
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Lado Esquerdo: Conteúdo */}
            <div className="flex flex-col items-start text-left">
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-1 border border-primary text-primary text-sm font-semibold uppercase tracking-wider">
                  <Diamond className="w-4 h-4" />
                  Evento Exclusivo para convidados
                </span>
              </div>

              <div className="space-y-6 max-w-xl">
                <h1 className="font-display text-5xl lg:text-7xl text-text-high font-bold tracking-wide uppercase leading-tight">
                  Transformando Atendimento em Receita
                </h1>
                <p className="font-sans text-1xl lg:text-2xl text-primary font-light">
                  Experience-Led Growth Academy
                </p>
                <p className="font-sans text-lg text-text-muted leading-relaxed mt-8">
                  Hub de mentoria premium da Opens. Conduzido por Douglas Conrad, criador do Método Experience-Led Growth, 
                  o programa reúne clientes selecionados em sessões exclusivas de 60 minutos ao vivo.
                </p>
              </div>

              <div className="mt-12 space-y-4 w-full max-w-md">
                <Input
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="font-sans bg-transparent border-primary text-text-high placeholder:text-primary/70 h-14 px-6 text-lg focus:border-primary/80 focus:ring-primary/80"
                />
                <Button
                  size="lg"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary-dark text-background-dark px-8 py-4 text-lg font-semibold uppercase tracking-widest transition-all duration-150 ease-in-out hover:scale-105 shadow-lg"
                >
                  {isLoading ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : "Confirme sua Presença"}
                </Button>
              </div>

              <div className="mt-16 flex flex-wrap items-center gap-8 text-primary">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-sans font-semibold">60 minutos</span>
                </div>
                <span className="text-primary/50">◆</span>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-sans font-semibold">Online</span>
                </div>
                <span className="text-primary/50">◆</span>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="font-sans font-semibold">Exclusivo</span>
                </div>
              </div>
            </div>
            
            {/* Lado Direito: Espaço reservado para imagem futura */}
            <div className="hidden lg:block">
              {/* Espaço para imagem */}
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre o Mentor e E.L.G.A. */}
      <section className="py-24 border-t border-primary/20 bg-surface-card/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Lado Esquerdo: Conteúdo */}
            <div className="text-left space-y-8">
              <div>
                <h2 className="font-display text-5xl text-text-high font-bold tracking-wide uppercase leading-tight mb-4">
                  Douglas Conrad
                </h2>
                <p className="font-sans text-xl text-primary font-semibold mb-2">
                  Criador do Método Experience-Led Growth
                </p>
                <p className="font-sans text-lg text-text-muted">
                  Mentor do G4 Educação
                </p>
              </div>
              <p className="font-sans text-text-muted leading-relaxed text-lg">
                <strong className="text-primary">E.L.G.A.</strong> é o hub de mentoria premium da Opens. 
                Conduzido por Douglas Conrad, o programa reúne clientes selecionados para revelar estratégias 
                que convertem o atendimento em receita previsível — unindo tecnologia, processos e desenvolvimento humano.
              </p>
              <div className="inline-block bg-background-dark/30 p-6 rounded-lg border-l-4 border-primary">
                <p className="font-sans text-text-high leading-relaxed font-medium max-w-2xl">
                  "Participe e transforme sua experiência de cliente em 
                  <span className="text-primary font-bold"> legado de crescimento</span>."
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
                  src="/douglas_conrad.png"
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

      {/* Seção Clientes de Sucesso */}
      <section className="py-24 border-t border-primary/20 bg-background-dark">
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl text-text-high font-bold tracking-wide uppercase leading-tight max-w-4xl mx-auto">
              Empresas que Confiam e Transformam
            </h2>
            <p className="font-sans text-lg text-text-muted mt-4">
              Conheça as metodologias que levaram sucesso a essas empresas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 max-w-7xl mx-auto">
            {clientLogos.map((client, index) => (
              <div
                key={client.name}
                className="group cursor-pointer flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards ${index * 0.1}s`,
                }}
              >
                <div className="w-full relative transform transition-transform duration-300 group-hover:scale-105">
                  <div className="relative bg-surface-card/20 p-1 rounded-lg border border-primary/10 group-hover:border-primary/40 transition-all duration-150 ease-in-out">
                    <div className="bg-white/95 backdrop-blur-sm rounded-md shadow-lg w-full h-40 overflow-hidden">
                      <Image
                        src={`/clientes_logo/${client.filename}`}
                        alt={`Logo ${client.name}`}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 w-full">
                  <h3 className="font-sans text-base text-primary font-semibold text-center uppercase tracking-wider">
                    {client.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materiais Exclusivos */}
      <section className="py-24 border-t border-primary/20 bg-surface-card/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl text-text-high font-bold tracking-wide uppercase mb-12">
                Materiais Exclusivos
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-background-dark" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-primary font-bold tracking-wide uppercase mb-2">Slides ELG Premium</h3>
                    <p className="font-sans text-text-muted leading-relaxed">
                      Acesso aos slides exclusivos do Método Experience-Led Growth utilizados durante a masterclass.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Users className="h-6 w-6 text-background-dark" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-primary font-bold tracking-wide uppercase mb-2">Workbook Resumido</h3>
                    <p className="font-sans text-text-muted leading-relaxed">
                      Guia prático em PDF com exercícios e frameworks para aplicação imediata em sua empresa.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Target className="h-6 w-6 text-background-dark" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-primary font-bold tracking-wide uppercase mb-2">Guia de Próximas Ações</h3>
                    <p className="font-sans text-text-muted leading-relaxed">
                      Roteiro estruturado com os próximos passos para implementar o método em sua organização.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-surface-card border-primary/20 p-4">
                <CardContent className="p-0">
                  <Award className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-display text-xl text-primary font-bold tracking-wide uppercase mb-2">Acesso por 7 Dias</h3>
                  <p className="font-sans text-text-muted">Replay exclusivo disponível por uma semana para revisão do conteúdo.</p>
                </CardContent>
              </Card>
              <Card className="bg-surface-card border-primary/20 p-4">
                <CardContent className="p-0">
                  <Sparkles className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-display text-xl text-primary font-bold tracking-wide uppercase mb-2">Comunidade VIP</h3>
                  <p className="font-sans text-text-muted">Acesso exclusivo à comunidade de clientes Opens para networking contínuo.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Benefícios E.L.G.A. */}
      <section className="py-24 border-t border-primary/20 bg-background-dark">
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl text-text-high font-bold tracking-wide uppercase mb-8">
              Benefícios que Brilham
            </h2>
            <div className="w-32 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mentoria Assinatura */}
            <div className="bg-surface-card/20 p-8 rounded-lg border border-primary/20 hover:border-primary transition-all group">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary p-3 rounded-lg">
                  <Crown className="w-8 h-8 text-background-dark" />
                </div>
                <h3 className="font-display text-2xl text-primary font-bold tracking-wide uppercase">Mentoria Assinatura</h3>
              </div>
              <p className="font-sans text-text-muted leading-relaxed text-lg">
                Receba <span className="text-primary font-semibold">insights inéditos direto da fonte</span> do 
                Método Experience-Led Growth. Acesso exclusivo às estratégias mais avançadas do mercado.
              </p>
            </div>

            {/* Aplicação Imediata */}
            <div className="bg-surface-card/20 p-8 rounded-lg border border-primary/20 hover:border-primary transition-all group">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary p-3 rounded-lg">
                  <Zap className="w-8 h-8 text-background-dark" />
                </div>
                <h3 className="font-display text-2xl text-primary font-bold tracking-wide uppercase">Aplicação Imediata</h3>
              </div>
              <p className="font-sans text-text-muted leading-relaxed text-lg">
                <span className="text-primary font-semibold">Ferramentas práticas</span> para ativar já no dia seguinte. 
                Metodologias testadas que geram resultados mensuráveis em sua empresa.
              </p>
            </div>

            {/* Networking Exclusivo */}
            <div className="bg-surface-card/20 p-8 rounded-lg border border-primary/20 hover:border-primary transition-all group">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary p-3 rounded-lg">
                  <Users className="w-8 h-8 text-background-dark" />
                </div>
                <h3 className="font-display text-2xl text-primary font-bold tracking-wide uppercase">Networking Exclusivo</h3>
              </div>
              <p className="font-sans text-text-muted leading-relaxed text-lg">
                <span className="text-primary font-semibold">Compartilhe conquistas e desafios</span> com pares de 
                alto calibre. Conecte-se com líderes que transformam experiência em crescimento.
              </p>
            </div>
          </div>

          {/* Estrutura das Sessões */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-surface-card/20 p-8 rounded-lg border border-primary/20">
              <h3 className="font-display text-3xl text-text-high font-bold tracking-wide uppercase text-center mb-8">Estrutura das Sessões</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-primary text-background-dark px-6 py-3 rounded-full font-display text-2xl font-bold mb-4 inline-block">
                    40 min
                  </div>
                  <h4 className="font-display text-xl text-primary font-bold tracking-wide uppercase mb-2">Masterclass</h4>
                  <p className="font-sans text-text-muted">Conteúdo exclusivo com Douglas Conrad revelando estratégias avançadas</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary text-background-dark px-6 py-3 rounded-full font-display text-2xl font-bold mb-4 inline-block">
                    20 min
                  </div>
                  <h4 className="font-display text-xl text-primary font-bold tracking-wide uppercase mb-2">Q&A VIP</h4>
                  <p className="font-sans text-text-muted">Sessão exclusiva de perguntas e respostas para clientes selecionados</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-background-dark/30 rounded-lg border-l-4 border-primary text-center">
                <p className="font-sans text-text-high text-lg font-medium">
                  <span className="font-display text-primary">Formato:</span> Live privada • 
                  <span className="font-display text-primary"> Acesso:</span> Via landing page + confirmação • 
                  <span className="font-display text-primary"> Follow-up:</span> Replay fechado por 7 dias
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t border-primary/20 bg-surface-card/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-display text-4xl text-primary font-bold tracking-wide uppercase">
              Prepare-se para Transformar
            </h2>
            <div className="font-display text-6xl text-text-high font-bold tracking-wider">
              E.L.G.A.
            </div>
            <p className="font-sans text-text-muted text-lg leading-relaxed">
              Hub de mentoria premium onde líderes visionários se conectam para transformar a experiência do cliente 
              em legado de crescimento através do Método Experience-Led Growth.
            </p>
            <div className="pt-8">
              <Button
                size="lg"
                onClick={handleSubmit}
                disabled={isLoading}
                className="bg-primary hover:bg-primary-dark text-background-dark px-10 py-4 text-lg font-semibold uppercase tracking-widest transition-all duration-150 ease-in-out hover:scale-105 shadow-lg"
              >
                {isLoading ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : "Confirme sua Participação"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
