import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ELGALogo } from "@/components/ui/elga-logo"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function EmailNotFoundPage() {
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
          Mas não se preocupe! O E.L.G.A. é um evento exclusivo e queremos garantir que você tenha a oportunidade de participar de futuras edições. Para não perder a chance, inscreva-se em nossa newsletter e receba atualizações sobre os próximos eventos.
        </p>

        <Card className="bg-surface-card border-primary/20 p-8 rounded-lg max-w-md mx-auto text-left">
          <CardContent className="p-0 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-primary font-semibold">Nome</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                className="font-sans bg-transparent border-primary text-text-high placeholder:text-primary/70 h-12 px-4 text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary font-semibold">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="Seu melhor e-mail"
                className="font-sans bg-transparent border-primary text-text-high placeholder:text-primary/70 h-12 px-4 text-base"
              />
            </div>
            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary-dark text-background-dark px-8 py-3 text-base font-semibold uppercase tracking-widest"
            >
              Inscrever-se na Newsletter
            </Button>
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