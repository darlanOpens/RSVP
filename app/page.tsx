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
              <h1 className="font-display text-2xl lg:text-5xl text-metallic-gradient text-shadow-luxury">
               Transformando Atendimento em Receita
              </h1>
              <p className="text-2xl lg:text-3xl text-[#F5E8C8] font-light tracking-wide">
                Experience-Led Growth Academy
              </p>
                              <p className="text-lg text-[#DFC27A] max-w-3xl mx-auto leading-relaxed mt-8">
                Hub de mentoria premium da Opens. Conduzido por Douglas Conrad, criador do Método Experience-Led Growth, 
                o programa reúne clientes selecionados em sessões exclusivas de 60 minutos ao vivo para revelar estratégias 
                que convertem o atendimento em receita previsível.
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
                <Clock className="w-5 h-5 text-[#C8A75D]" />
                <span className="font-semibold">60 minutos ao vivo</span>
              </div>
              <span className="text-[#C8A75D]">◆</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C8A75D]" />
                <span className="font-semibold">Google Meet/Zoom</span>
              </div>
              <span className="text-[#C8A75D]">◆</span>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#C8A75D]" />
                <span className="font-semibold">Clientes Selecionados</span>
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

      {/* Seção Clientes de Sucesso - Design Premium */}
      <section className="py-24 border-t border-[#604618] relative overflow-hidden">
        {/* Background decorativo elegante */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 30%, rgba(200, 167, 93, 0.4) 0%, transparent 60%)`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          {/* Header Premium */}
          <div className="text-center mb-20">
            <Badge className="bg-[#C8A75D]/10 text-[#C8A75D] border-[#C8A75D]/30 mb-8 px-6 py-2">
              <Star className="w-4 h-4 mr-2" />
              Histórias de Sucesso
              <Star className="w-4 h-4 ml-2" />
            </Badge>
            
            <h2 className="font-display text-4xl lg:text-5xl text-metallic-gradient text-shadow-luxury leading-tight max-w-4xl mx-auto">
              Conheça as metodologias que levaram<br />
              <span className="text-[#C8A75D]">sucesso a essas empresas</span>
            </h2>
            
            {/* Linha decorativa */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-16 h-1 bg-metallic-gradient rounded-full"></div>
              <Diamond className="w-4 h-4 text-[#C8A75D]" />
              <div className="w-16 h-1 bg-metallic-gradient rounded-full"></div>
            </div>
          </div>
          
          {/* Grid Premium 4x2 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-7xl mx-auto mb-16">
            {clientLogos.map((client, index) => (
              <div
                key={client.name}
                className="group cursor-pointer flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards ${index * 0.1}s`,
                }}
              >
                {/* Logo container */}
                <div className="w-full relative transform transition-transform duration-300 group-hover:scale-105">
                  <div className="relative bg-gradient-to-br from-[#977640]/10 to-[#604618]/5 p-1 rounded-2xl border border-[#C8A75D]/20 group-hover:border-[#C8A75D]/60 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#C8A75D]/20">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg w-full h-40 overflow-hidden">
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

                {/* Text content */}
                <div className="mt-4 w-full">
                  <div className="bg-[#0D0B05]/50 backdrop-blur-sm rounded-lg p-3 border border-[#C8A75D]/30 group-hover:border-[#C8A75D]/50 transition-colors duration-300">
                    <h3 className="font-display text-base text-[#C8A75D] font-bold text-center mb-1">
                      {client.name.toUpperCase()}
                    </h3>
                    <p className="text-[#DFC2A] text-xs text-center">
                      Transformação Comprovada
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section Premium */}
          <div className="text-center max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#C8A75D]/10 to-[#977640]/5 p-10 rounded-3xl border border-[#C8A75D]/30 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="bg-metallic-gradient text-[#0D0B05] px-4 py-2 rounded-full font-display text-sm font-bold">
                  RESULTADOS REAIS
                </div>
              </div>
              
              <p className="text-[#DFC27A] text-xl leading-relaxed mb-8">
                Empresas de diferentes segmentos que <span className="text-[#C8A75D] font-semibold">multiplicaram sua receita</span> 
                através das metodologias exclusivas do <span className="text-metallic-gradient font-bold">Experience-Led Growth</span>.
              </p>
              
              {/* Estatísticas impressionantes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#0D0B05]/30 p-4 rounded-xl border border-[#C8A75D]/20">
                  <div className="text-metallic-gradient font-display text-2xl font-bold">+150%</div>
                  <p className="text-[#DFC27A] text-sm">Crescimento médio de receita</p>
                </div>
                <div className="bg-[#0D0B05]/30 p-4 rounded-xl border border-[#C8A75D]/20">
                  <div className="text-metallic-gradient font-display text-2xl font-bold">ROI 3:1</div>
                  <p className="text-[#DFC27A] text-sm">Retorno sobre investimento</p>
                </div>
                <div className="bg-[#0D0B05]/30 p-4 rounded-xl border border-[#C8A75D]/20">
                  <div className="text-metallic-gradient font-display text-2xl font-bold">90 dias</div>
                  <p className="text-[#DFC27A] text-sm">Tempo médio para resultados</p>
                </div>
              </div>
              
              <Button className="bg-metallic-gradient hover:opacity-90 text-[#0D0B05] px-10 py-4 font-display font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 text-lg">
                <Award className="w-5 h-5 mr-2" />
                Ver Casos Detalhados
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Materiais Exclusivos - Design Refinado */}
      <section className="py-24 border-t border-[#604618]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl text-metallic-gradient mb-12">
                Materiais <span className="text-[#C8A75D]">◆</span> Exclusivos
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[#C8A75D] to-[#977640] p-3 rounded">
                    <TrendingUp className="h-6 w-6 text-[#0D0B05]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#C8A75D] mb-2">Slides ELG Premium</h3>
                    <p className="text-[#DFC27A] leading-relaxed">
                      Acesso aos slides exclusivos do Método Experience-Led Growth utilizados durante a masterclass.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[#C8A75D] to-[#977640] p-3 rounded">
                    <Users className="h-6 w-6 text-[#0D0B05]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#C8A75D] mb-2">Workbook Resumido</h3>
                    <p className="text-[#DFC27A] leading-relaxed">
                      Guia prático em PDF com exercícios e frameworks para aplicação imediata em sua empresa.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[#C8A75D] to-[#977640] p-3 rounded">
                    <Target className="h-6 w-6 text-[#0D0B05]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[#C8A75D] mb-2">Guia de Próximas Ações</h3>
                    <p className="text-[#DFC27A] leading-relaxed">
                      Roteiro estruturado com os próximos passos para implementar o método em sua organização.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-[#977640]/20 to-[#604618]/20 border-[#C8A75D]/50">
                <CardContent className="p-8">
                  <Award className="w-12 h-12 text-[#C8A75D] mb-4" />
                  <h3 className="font-display text-xl text-[#C8A75D] mb-2">Acesso por 7 Dias</h3>
                  <p className="text-[#DFC27A]">Replay exclusivo disponível por uma semana para revisão do conteúdo.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-[#977640]/20 to-[#604618]/20 border-[#C8A75D]/50">
                <CardContent className="p-8">
                  <Sparkles className="w-12 h-12 text-[#C8A75D] mb-4" />
                  <h3 className="font-display text-xl text-[#C8A75D] mb-2">Comunidade VIP</h3>
                  <p className="text-[#DFC27A]">Acesso exclusivo à comunidade de clientes Opens para networking contínuo.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Benefícios E.L.G.A. */}
      <section className="py-24 border-t border-[#604618] relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 70% 50%, rgba(200, 167, 93, 0.3) 0%, transparent 50%)`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl text-metallic-gradient mb-8 text-shadow-luxury">
              Benefícios que <span className="text-[#C8A75D]">◆</span> Brilham
            </h2>
            <div className="w-32 h-1 bg-metallic-gradient mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mentoria Assinatura */}
            <div className="bg-gradient-to-br from-[#977640]/10 to-[#604618]/10 p-8 rounded-xl border border-[#C8A75D]/30 hover:border-[#C8A75D] transition-all group">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-metallic-gradient p-3 rounded">
                  <Crown className="w-8 h-8 text-[#0D0B05]" />
                </div>
                <h3 className="font-display text-2xl text-[#C8A75D]">Mentoria Assinatura</h3>
              </div>
              <p className="text-[#DFC27A] leading-relaxed text-lg">
                Receba <span className="text-[#C8A75D] font-semibold">insights inéditos direto da fonte</span> do 
                Método Experience-Led Growth. Acesso exclusivo às estratégias mais avançadas do mercado.
              </p>
            </div>

            {/* Aplicação Imediata */}
            <div className="bg-gradient-to-br from-[#977640]/10 to-[#604618]/10 p-8 rounded-xl border border-[#C8A75D]/30 hover:border-[#C8A75D] transition-all group">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-metallic-gradient p-3 rounded">
                  <Zap className="w-8 h-8 text-[#0D0B05]" />
                </div>
                <h3 className="font-display text-2xl text-[#C8A75D]">Aplicação Imediata</h3>
              </div>
              <p className="text-[#DFC27A] leading-relaxed text-lg">
                <span className="text-[#C8A75D] font-semibold">Ferramentas práticas</span> para ativar já no dia seguinte. 
                Metodologias testadas que geram resultados mensuráveis em sua empresa.
              </p>
            </div>

            {/* Networking Exclusivo */}
            <div className="bg-gradient-to-br from-[#977640]/10 to-[#604618]/10 p-8 rounded-xl border border-[#C8A75D]/30 hover:border-[#C8A75D] transition-all group">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-metallic-gradient p-3 rounded">
                  <Users className="w-8 h-8 text-[#0D0B05]" />
                </div>
                <h3 className="font-display text-2xl text-[#C8A75D]">Networking Exclusivo</h3>
              </div>
              <p className="text-[#DFC27A] leading-relaxed text-lg">
                <span className="text-[#C8A75D] font-semibold">Compartilhe conquistas e desafios</span> com pares de 
                alto calibre. Conecte-se com líderes que transformam experiência em crescimento.
              </p>
            </div>
          </div>

          {/* Estrutura das Sessões */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#C8A75D]/10 to-[#977640]/10 p-8 rounded-xl border border-[#C8A75D]/30">
              <h3 className="font-display text-3xl text-metallic-gradient text-center mb-8">Estrutura das Sessões</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-metallic-gradient text-[#0D0B05] px-6 py-3 rounded-full font-display text-2xl font-bold mb-4 inline-block">
                    40 min
                  </div>
                  <h4 className="font-display text-xl text-[#C8A75D] mb-2">Masterclass</h4>
                  <p className="text-[#DFC27A]">Conteúdo exclusivo com Douglas Conrad revelando estratégias avançadas</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-metallic-gradient text-[#0D0B05] px-6 py-3 rounded-full font-display text-2xl font-bold mb-4 inline-block">
                    20 min
                  </div>
                  <h4 className="font-display text-xl text-[#C8A75D] mb-2">Q&A VIP</h4>
                  <p className="text-[#DFC27A]">Sessão exclusiva de perguntas e respostas para clientes selecionados</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#0D0B05]/30 rounded-lg border-l-4 border-[#C8A75D] text-center">
                <p className="text-[#F5E8C8] text-lg font-medium">
                  <span className="font-display text-[#C8A75D]">Formato:</span> Live privada • 
                  <span className="font-display text-[#C8A75D]"> Acesso:</span> Via landing page + confirmação • 
                  <span className="font-display text-[#C8A75D]"> Follow-up:</span> Replay fechado por 7 dias
                </p>
              </div>
            </div>
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
              E<span className="text-[#C8A75D]">◆</span>L<span className="text-[#C8A75D]">◆</span>G<span className="text-[#C8A75D]">◆</span>A
            </div>
            <p className="text-[#DFC27A] text-lg leading-relaxed">
              Hub de mentoria premium onde líderes visionários se conectam para transformar a experiência do cliente 
              em legado de crescimento através do Método Experience-Led Growth.
            </p>
            <div className="pt-8">
              <Button
                size="lg"
                className="bg-metallic-gradient hover:opacity-90 text-[#0D0B05] px-12 py-6 text-lg font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105"
              >
                Confirme sua Participação
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
