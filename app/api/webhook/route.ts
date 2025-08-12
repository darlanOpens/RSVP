import { NextRequest, NextResponse } from 'next/server';

// Configurações dos webhooks (servidor-side)
const WEBHOOK_CONFIG = {
  RSVP: {
    URL: process.env.WEBHOOK_RSVP_URL || "https://n8n.opens.com.br/webhook/hubspot-form",
    FORM_ID: "ELGA",
    FORM_TITLE: "ELGA",
  },
  NEWSLETTER: {
    URL: process.env.WEBHOOK_NEWSLETTER_URL || "https://n8n.opens.com.br/webhook/pre-selecao-form",
    FORM_ID: "PRE_SELECAO", 
    FORM_TITLE: "Pré-seleção ELGA",
  },
  CONTACT: {
    URL: process.env.WEBHOOK_CONTACT_URL || "https://n8n.opens.com.br/webhook/contact-form",
    FORM_ID: "CONTACT",
    FORM_TITLE: "Contato ELGA",
  },
} as const;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, ...payload } = body;

    // Validar tipo de webhook
    if (!type || !WEBHOOK_CONFIG[type as keyof typeof WEBHOOK_CONFIG]) {
      return NextResponse.json(
        { error: "Tipo de webhook inválido" },
        { status: 400 }
      );
    }

    const config = WEBHOOK_CONFIG[type as keyof typeof WEBHOOK_CONFIG];
    
    // Preparar payload completo
    const fullPayload = {
      ...payload,
      form_id: config.FORM_ID,
      form_title: config.FORM_TITLE,
    };

    console.log(`📤 Enviando para webhook ${type}:`, {
      url: config.URL,
      payload: fullPayload
    });

    // Enviar para o webhook
    const response = await fetch(config.URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fullPayload),
    });

    const data = await response.json();

    console.log(`📨 Resposta do webhook ${type}:`, {
      status: response.status,
      ok: response.ok,
      data
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Erro ao processar webhook", details: data },
        { status: response.status }
      );
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error("❌ Erro na API de webhook:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
