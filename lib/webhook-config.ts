/**
 * Configurações centralizadas de webhooks
 * Valores podem ser definidos através de variáveis de ambiente
 */

// Configurações dos Webhooks
export const WEBHOOK_CONFIG = {
  // Webhook do formulário principal de RSVP
  RSVP: {
    URL: process.env.WEBHOOK_RSVP_URL || "https://n8n.opens.com.br/webhook/hubspot-form",
    FORM_ID: "ELGA",
    FORM_TITLE: "ELGA",
  },
  
  // Webhook do formulário de pré-seleção
  NEWSLETTER: {
    URL: process.env.WEBHOOK_NEWSLETTER_URL || "https://n8n.opens.com.br/webhook/pre-selecao-form",
    FORM_ID: "PRE_SELECAO",
    FORM_TITLE: "Pré-seleção ELGA",
  },
  
  // Webhook do formulário de contato (terceiro formulário se necessário)
  CONTACT: {
    URL: process.env.WEBHOOK_CONTACT_URL || "https://n8n.opens.com.br/webhook/contact-form",
    FORM_ID: "CONTACT",
    FORM_TITLE: "Contato ELGA",
  },
} as const;

// Tipos para TypeScript
export type WebhookType = keyof typeof WEBHOOK_CONFIG;
export type WebhookPayload = {
  email: string;
  form_id: string;
  form_title: string;
  name?: string;
  message?: string;
};

/**
 * Função utilitária para enviar dados para webhook via API route
 * Agora usa a API route interna que tem acesso às variáveis de ambiente
 */
export async function sendToWebhook(
  webhookType: WebhookType,
  payload: Omit<WebhookPayload, 'form_id' | 'form_title'>
): Promise<Response> {
  const debug = process.env.NEXT_PUBLIC_DEBUG_WEBHOOKS === 'true'
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
  const apiUrl = `${basePath}/api/webhook`

  if (debug) {
    // eslint-disable-next-line no-console
    console.log(`🚀 Enviando ${webhookType} para API route:`, payload)
  }

  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: webhookType,
      ...payload,
    }),
  });
}
