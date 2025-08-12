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
 * Função utilitária para enviar dados para webhook
 */
export async function sendToWebhook(
  webhookType: WebhookType,
  payload: Omit<WebhookPayload, 'form_id' | 'form_title'>
): Promise<Response> {
  const config = WEBHOOK_CONFIG[webhookType];
  
  const fullPayload: WebhookPayload = {
    ...payload,
    form_id: config.FORM_ID,
    form_title: config.FORM_TITLE,
  };

  return fetch(config.URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fullPayload),
  });
}
