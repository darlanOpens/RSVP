import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, TrendingUp, Target, Sparkles, Award, Diamond, Star, Crown, Zap } from "lucide-react"
import Image from "next/image"
import { ELGALogo } from "@/components/ui/elga-logo"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function EventLandingPage() {
  const clientLogos = [
    { name: "Studio Z", filename: "Estudio-Z.png", bgColor: "bg-gradient-to-br from-gray-800 to-black" },
    { name: "Estrela", filename: "Estrela.png", bgColor: "bg-gradient-to-br from-red-500 to-red-700" },
    { name: "Havan", filename: "Havan.png", bgColor: "bg-gradient-to-br from-blue-600 to-blue-800" },
    { name: "SICOB", filename: "SICOB.png", bgColor: "bg-gradient-to-br from-emerald-500 to-green-700" },
    { name: "Superlógica", filename: "Superlogica.png", bgColor: "bg-gradient-to-br from-blue-500 to-blue-700" },
    { name: "USEMINAS", filename: "USEMINAS.png", bgColor: "bg-gradient-to-br from-green-600 to-emerald-800" },
    { name: "CustomerX", filename: "Customerx.png", bgColor: "bg-gradient-to-br from-purple-600 to-indigo-800" },
    { name: "Nextar", filename: "Nextar.png", bgColor: "bg-gradient-to-br from-rose-500 to-red-600" },
  ]

  return (
    <div className="min-h-screen bg-[#0D0B05]">
      {/* Header com Logo ELGA */}
      <header className="relative z-10 p-6">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <ELGALogo size="md" />
          </div>
        </div>
      </header>

      {/* Hero Section com design luxuoso */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Efeito de textura sutil */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(200, 167, 93, 0.1) 35px, rgba(200, 167, 93, 0.1) 70px)`,
          }}></div>
        </div>
        
        {/* Elemento da chave vintage como background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/vintage-key.svg"
            alt=""
            width={800}
            height={300}
            className="opacity-20"
            style={{ filter: 'blur(1px)' }}
          />
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
            {/* Badge Luxuoso */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-6 py-2 border border-[#C8A75D] text-[#C8A75D] text-sm font-semibold tracking-[0.2em] uppercase">
                <Diamond className="w-4 h-4" />
                Evento Exclusivo
                <Diamond className="w-4 h-4" />
              </span>
            </div>

            {/* Título Principal com Tipografia Luxuosa */}
            <div className="space-y-6 max-w-5xl">
              <h1 className="font-display text-6xl lg:text-8xl text-metallic-gradient text-shadow-luxury">
                CX <span className="text-[#C8A75D]">◆</span> IN <span className="text-[#C8A75D]">◆</span> HOUSE
              </h1>
              <p className="text-2xl lg:text-3xl text-[#F5E8C8] font-light tracking-wide">
                Experiência do Cliente como Centro de Receita
              </p>
              <p className="text-lg text-[#DFC27A] max-w-3xl mx-auto leading-relaxed mt-8">
                Descubra as estratégias mais avançadas para transformar a experiência do cliente em seu principal
                motor de crescimento e receita recorrente.
              </p>
            </div>

            {/* CTA Elegante */}
            <div className="mt-12 space-y-4 w-full max-w-md">
              <Input
                type="email"
                placeholder="Digite seu e-mail"
                className="bg-transparent border-[#977640] text-[#F5E8C8] placeholder:text-[#977640] h-14 px-6 text-lg focus:border-[#C8A75D] focus:ring-[#C8A75D]"
              />
              <Button
                size="lg"
                className="w-full bg-metallic-gradient hover:opacity-90 text-[#0D0B05] px-8 py-6 text-lg font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105"
              >
                Confirme sua Presença
              </Button>
            </div>

            {/* Detalhes do Evento em Linha */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[#DFC27A]">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#C8A75D]" />
                <span className="font-semibold">21 de Novembro</span>
              </div>
              <span className="text-[#C8A75D]">◆</span>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#C8A75D]" />
                <span className="font-semibold">16h30 - 21h30</span>
              </div>
              <span className="text-[#C8A75D]">◆</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C8A75D]" />
                <span className="font-semibold">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Douglas Conrad - Mentor Principal */}
      <section className="py-24 border-t border-[#604618] relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(200, 167, 93, 0.3) 0%, transparent 50%)`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Lado Esquerdo - Foto */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Moldura decorativa */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#C8A75D] via-[#977640] to-[#C8A75D] rounded-lg opacity-20 blur-sm"></div>
                <div className="relative">
                  <Image
                    src="/douglas_conrad.png"
                    alt="Douglas Conrad - Mentor Principal"
                    width={400}
                    height={500}
                    className="rounded-lg shadow-2xl shadow-[#C8A75D]/20"
                    priority
                  />
                  {/* Badge de Mentor */}
                  <div className="absolute -top-4 -right-4 bg-metallic-gradient text-[#0D0B05] px-4 py-2 rounded-full font-display text-sm font-bold flex items-center gap-2 shadow-lg">
                    <Crown className="w-4 h-4" />
                    MENTOR
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito - Conteúdo */}
            <div className="space-y-8">
              {/* Título da Seção */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C8A75D]/50 text-[#C8A75D] text-sm font-semibold tracking-wider uppercase mb-6 rounded">
                  <Star className="w-4 h-4" />
                  Mentor Principal
                  <Star className="w-4 h-4" />
                </div>
                <h2 className="font-display text-5xl text-metallic-gradient text-shadow-luxury mb-4">
                  Douglas Conrad
                </h2>
                <p className="text-xl text-[#C8A75D] font-semibold mb-2">
                  Criador do Método Experience-Led Growth
                </p>
                <p className="text-lg text-[#DFC27A]">
                  Mentor do G4 Educação
                </p>
              </div>

              {/* Descrição do E.L.G.A. */}
              <div className="bg-gradient-to-br from-[#977640]/10 to-[#604618]/10 p-8 rounded-xl border border-[#C8A75D]/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-metallic-gradient p-2 rounded">
                    <Zap className="w-6 h-6 text-[#0D0B05]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#C8A75D]">Sobre o E.L.G.A.</h3>
                </div>
                
                <p className="text-[#DFC27A] leading-relaxed text-lg mb-6">
                  <strong className="text-[#C8A75D]">E.L.G.A.</strong> é o hub de mentoria premium da Opens. 
                  Conduzido por Douglas Conrad, o programa reúne clientes selecionados em sessões exclusivas de 
                  <span className="text-[#C8A75D] font-semibold"> 60 minutos ao vivo</span>.
                </p>
                
                <p className="text-[#DFC27A] leading-relaxed text-lg mb-6">
                  A cada edição, Douglas revela <span className="text-[#C8A75D] font-semibold">estratégias que convertem 
                  o atendimento em receita previsível</span> — unindo tecnologia, processos e desenvolvimento humano.
                </p>
                
                <div className="bg-[#0D0B05]/30 p-6 rounded-lg border-l-4 border-[#C8A75D]">
                  <p className="text-[#F5E8C8] leading-relaxed font-medium">
                    "Participe, mergulhe em diálogos de alto nível e transforme sua experiência de cliente em 
                    <span className="text-metallic-gradient font-bold"> legado de crescimento</span>."
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-[#C8A75D]/20 to-[#977640]/20 p-4 rounded-lg border border-[#C8A75D]/30">
                  <h4 className="font-display text-[#C8A75D] font-semibold mb-2">Sessões Exclusivas</h4>
                  <p className="text-[#DFC27A] text-sm">60 minutos ao vivo com clientes selecionados</p>
                </div>
                <div className="bg-gradient-to-r from-[#C8A75D]/20 to-[#977640]/20 p-4 rounded-lg border border-[#C8A75D]/30">
                  <h4 className="font-display text-[#C8A75D] font-semibold mb-2">Receita Previsível</h4>
                  <p className="text-[#DFC27A] text-sm">Estratégias que convertem atendimento em resultados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Cases de Sucesso */}
      <section className="py-32 border-t border-[#604618] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl lg:text-6xl text-metallic-gradient mb-8 text-shadow-luxury leading-tight">
              Conheça as metodologias que levaram
            </h2>
            <h2 className="font-display text-5xl lg:text-6xl text-metallic-gradient mb-10 text-shadow-luxury leading-tight">
              sucesso a essas empresas
            </h2>
            <div className="w-32 h-1 bg-metallic-gradient mx-auto rounded-full"></div>
          </div>
          
          {/* Grid superior com 4 empresas */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-6xl mx-auto">
            {clientLogos.slice(0, 4).map((client) => (
              <div key={client.name} className="group">
                <div className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl ${client.bgColor}`} style={{ aspectRatio: '16/10' }}>
                  {/* Gradiente de overlay para melhor contraste */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40"></div>
                  
                  {/* Logo centralizado */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <Image
                      src={`/clientes_logo/${client.filename}`}
                      alt={client.name}
                      width={200}
                      height={100}
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                      style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}
                    />
                  </div>
                  
                  {/* Efeito de brilho no hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-full group-hover:-translate-x-full animate-[shimmer_1.5s_ease-in-out]"></div>
                </div>
                
                {/* Nome da empresa */}
                <h3 className="mt-4 text-center font-display text-xl text-[#C8A75D] font-bold tracking-wider">
                  {client.name.toUpperCase()}
                </h3>
              </div>
            ))}
          </div>
          
          {/* Grid inferior com 4 empresas */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {clientLogos.slice(4, 8).map((client) => (
              <div key={client.name} className="group">
                <div className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl ${client.bgColor}`} style={{ aspectRatio: '16/10' }}>
                  {/* Gradiente de overlay para melhor contraste */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40"></div>
                  
                  {/* Logo centralizado */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <Image
                      src={`/clientes_logo/${client.filename}`}
                      alt={client.name}
                      width={200}
                      height={100}
                      className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                      style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}
                    />
                  </div>
                  
                  {/* Efeito de brilho no hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-full group-hover:-translate-x-full animate-[shimmer_1.5s_ease-in-out]"></div>
                </div>
                
                {/* Nome da empresa */}
                <h3 className="mt-4 text-center font-display text-xl text-[#C8A75D] font-bold tracking-wider">
                  {client.name.toUpperCase()}
                </h3>
              </div>
            ))}
          </div>
          
          {/* Texto de apoio */}
          <div className="text-center mt-16">
            <p className="text-[#DFC27A] text-xl max-w-4xl mx-auto leading-relaxed">
              Empresas que transformaram suas operações e aumentaram significativamente a receita através de 
              <span className="text-[#C8A75D] font-semibold"> estratégias avançadas de Customer Experience</span>
            </p>
          </div>
        </div>
      </section>

      {/* Seção Apoiadores com Design Elegante */}
      <section className="py-20 border-y border-[#604618]">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-12">
            <h2 className="font-display text-3xl text-metallic-gradient tracking-wider">
              Apoiadores <span className="text-[#C8A75D]">◆</span> Parceiros
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center">
              {/* Logo ELGA destacada como organizadora */}
              <div className="md:col-span-5 flex justify-center mb-8">
                <div className="text-center">
                  <ELGALogo size="lg" showTitle={true} />
                </div>
              </div>
              
              {/* Parceiros */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex justify-center opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-32 h-16 bg-[#977640]/20 rounded flex items-center justify-center">
                    <span className="text-[#C8A75D] font-display text-sm">PARCEIRO {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Por Que Participar - Design Refinado */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl text-metallic-gradient mb-12">
                Por Que <span className="text-[#C8A75D]">◆</span> Participar
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[#C8A75D] to-[#977640] p-3 rounded">
                    <TrendingUp className="h-6 w-6 text-[#0D0B05]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#C8A75D] mb-2">Estratégias Comprovadas</h3>
                    <p className="text-[#DFC27A] leading-relaxed">
                      Aprenda metodologias testadas por empresas líderes de mercado para aumentar receita através da
                      experiência do cliente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[#C8A75D] to-[#977640] p-3 rounded">
                    <Users className="h-6 w-6 text-[#0D0B05]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#C8A75D] mb-2">Networking Qualificado</h3>
                    <p className="text-[#DFC27A] leading-relaxed">
                      Conecte-se com líderes e especialistas em CX de empresas de diversos segmentos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[#C8A75D] to-[#977640] p-3 rounded">
                    <Target className="h-6 w-6 text-[#0D0B05]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#C8A75D] mb-2">Cases Práticos</h3>
                    <p className="text-[#DFC27A] leading-relaxed">
                      Conheça cases reais de transformação e os resultados obtidos pelas empresas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-[#977640]/20 to-[#604618]/20 border-[#C8A75D]/50">
                <CardContent className="p-8">
                  <Award className="w-12 h-12 text-[#C8A75D] mb-4" />
                  <h3 className="font-display text-xl text-[#C8A75D] mb-2">Certificado Exclusivo</h3>
                  <p className="text-[#DFC27A]">Receba certificado digital com selo de excelência em Customer Experience.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-[#977640]/20 to-[#604618]/20 border-[#C8A75D]/50">
                <CardContent className="p-8">
                  <Sparkles className="w-12 h-12 text-[#C8A75D] mb-4" />
                  <h3 className="font-display text-xl text-[#C8A75D] mb-2">Material Premium</h3>
                  <p className="text-[#DFC27A]">Acesso a conteúdos exclusivos e frameworks utilizados pelos palestrantes.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section - Design Luxuoso */}
      <section className="py-24 border-y border-[#604618]">
        <div className="container mx-auto px-6">
          <div className="text-center text-[#F5E8C8] mb-16">
            <h2 className="font-display text-4xl text-metallic-gradient mb-4">
              Palestrantes <span className="text-[#C8A75D]">◆</span> Painelistas
            </h2>
            <p className="text-[#DFC27A] text-lg">Especialistas renomados em Customer Experience</p>
          </div>

          {/* Main Speakers */}
          <div className="mb-16">
            <h3 className="font-display text-2xl text-[#C8A75D] text-center mb-12 tracking-wider">Palestrantes Principais</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { name: "Douglas Oliveira", role: "Diretor de CX", company: "TechCorp" },
                { name: "Mariana Santos", role: "Head of Customer Success", company: "InnovaCorp" },
              ].map((speaker, i) => (
                <Card key={i} className="bg-gradient-to-br from-[#977640]/10 to-[#604618]/10 border-[#C8A75D]/30 overflow-hidden hover:border-[#C8A75D] transition-all">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-[#C8A75D] to-[#977640] p-1">
                        <div className="w-full h-full rounded-full bg-[#0D0B05] flex items-center justify-center">
                          <span className="font-display text-3xl text-[#C8A75D]">{speaker.name.charAt(0)}</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="font-display text-xl text-[#C8A75D] mb-2">{speaker.name}</h4>
                    <p className="text-[#DFC27A] mb-1">{speaker.role}</p>
                    <p className="text-[#977640] text-sm">{speaker.company}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Panelists */}
          <div>
            <h3 className="font-display text-2xl text-[#C8A75D] text-center mb-12 tracking-wider">Painelistas</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { name: "Ana Carolina", role: "Customer Experience Manager", company: "RetailPlus" },
                { name: "Roberto Silva", role: "VP of Customer Operations", company: "ServicePro" },
                { name: "Juliana Costa", role: "CX Strategy Director", company: "DigitalFirst" },
              ].map((panelist, i) => (
                <Card key={i} className="bg-gradient-to-br from-[#977640]/10 to-[#604618]/10 border-[#C8A75D]/30 overflow-hidden hover:border-[#C8A75D] transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <div className="w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-[#C8A75D] to-[#977640] p-1">
                        <div className="w-full h-full rounded-full bg-[#0D0B05] flex items-center justify-center">
                          <span className="font-display text-2xl text-[#C8A75D]">{panelist.name.charAt(0)}</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="font-display text-lg text-[#C8A75D] mb-1">{panelist.name}</h4>
                    <p className="text-[#DFC27A] text-sm mb-1">{panelist.role}</p>
                    <p className="text-[#977640] text-xs">{panelist.company}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section - Design Elegante */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-metallic-gradient mb-4">
              Programação <span className="text-[#C8A75D]">◆</span> Agenda
            </h2>
            <p className="text-[#DFC27A] text-lg">Uma jornada transformadora em Customer Experience</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                time: "16h30",
                title: "Transformando Experiência em Resultados",
                description:
                  "Metodologias práticas para converter investimentos em CX em receita mensurável e sustentável.",
              },
              {
                time: "17h30",
                title: "Como Construir uma Área de CX do Zero",
                description:
                  "Estratégias para estruturar uma área de Customer Experience focada em geração de receita recorrente.",
              },
              {
                time: "18h30",
                title: "Do Backstage à Protagonista",
                description:
                  "Cases de transformação onde CX se tornou protagonista estratégico nas empresas multinacionais.",
              },
              {
                time: "19h30",
                title: "Encerramento & Networking",
                description: "Momento exclusivo de conexões e troca de experiências entre os participantes.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-6 group">
                <div className="bg-metallic-gradient text-[#0D0B05] px-6 py-3 rounded font-display text-sm min-w-[100px] text-center">
                  {item.time}
                </div>
                <div className="flex-1 border-l-2 border-[#604618] pl-6 group-hover:border-[#C8A75D] transition-colors">
                  <h3 className="font-display text-xl text-[#C8A75D] mb-2">{item.title}</h3>
                  <p className="text-[#DFC27A]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Design Majestoso */}
      <section className="py-24 border-t border-[#604618]">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-display text-3xl text-[#C8A75D]">
              Prepare-se para <span className="text-metallic-gradient">◆</span> Transformar
            </h2>
            <div className="font-display text-5xl text-metallic-gradient text-shadow-luxury">
              CX <span className="text-[#C8A75D]">◆</span> IN <span className="text-[#C8A75D]">◆</span> HOUSE
            </div>
            <p className="text-[#DFC27A] text-lg leading-relaxed">
              Um encontro exclusivo onde líderes visionários se conectam para transformar a Experiência do Cliente 
              no verdadeiro centro de receita das empresas.
            </p>
            <div className="pt-8">
              <Button
                size="lg"
                className="bg-metallic-gradient hover:opacity-90 text-[#0D0B05] px-12 py-6 text-lg font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105"
              >
                Reserve Seu Lugar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
