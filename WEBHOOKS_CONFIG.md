# Configuração de Webhooks via Variáveis de Ambiente

Este documento explica como configurar os webhooks dos formulários através de variáveis de ambiente no EasyPanel.

## ✅ Formulários Configurados

1. **Formulário Principal de RSVP** - `app/page.tsx`
2. **Formulário de Pré-seleção** - `app/email-nao-encontrado/page.tsx`
3. **Formulário de Contato** - (Preparado para futuro uso)

## 🔧 Variáveis de Ambiente no EasyPanel

### Configuração Obrigatória

No painel do EasyPanel, configure apenas essas 3 variáveis de ambiente:

```bash
# Webhook do formulário de RSVP (OBRIGATÓRIO)
WEBHOOK_RSVP_URL=https://n8n.opens.com.br/webhook/hubspot-form

# Webhook do formulário de pré-seleção (OBRIGATÓRIO) 
WEBHOOK_NEWSLETTER_URL=https://n8n.opens.com.br/webhook/pre-selecao-form

# Webhook do formulário de contato (OPCIONAL - para uso futuro)
WEBHOOK_CONTACT_URL=https://n8n.opens.com.br/webhook/contact-form
```



## 📋 Passo a Passo para Configurar no EasyPanel

1. **Acesse o painel do EasyPanel**
2. **Navegue até seu projeto RSVP**
3. **Vá para a seção "Environment Variables" ou "Variáveis de Ambiente"**
4. **Adicione apenas as 3 URLs de webhook listadas acima**
5. **Salve as configurações**
6. **Reinicie/redeploy o projeto para aplicar as mudanças**

> **✅ Simples assim!** Apenas 3 variáveis e você está pronto.

## 🎯 Valores Padrão (Fallback)

Se as variáveis não forem configuradas, o sistema usará os valores padrão:

- **WEBHOOK_RSVP_URL**: `https://n8n.opens.com.br/webhook/hubspot-form`
- **WEBHOOK_NEWSLETTER_URL**: `https://n8n.opens.com.br/webhook/pre-selecao-form`
- **WEBHOOK_CONTACT_URL**: `https://n8n.opens.com.br/webhook/contact-form`

## 🔄 Como Trocar os Webhooks

Para trocar qualquer webhook:

1. **Altere a variável correspondente no EasyPanel**
2. **Reinicie o projeto**
3. **Teste o formulário para confirmar o funcionamento**

### Exemplo de Troca:
```bash
# Antes
WEBHOOK_RSVP_URL=https://n8n.opens.com.br/webhook/hubspot-form

# Depois (novo webhook)
WEBHOOK_RSVP_URL=https://meu-novo-webhook.com/api/rsvp
```

## 📝 Estrutura dos Dados Enviados

### Formulário de RSVP
```json
{
  "email": "usuario@exemplo.com",
  "form_id": "ELGA",
  "form_title": "ELGA"
}
```

### Formulário de Pré-seleção
```json
{
  "email": "usuario@exemplo.com",
  "name": "Nome do Usuário",
  "form_id": "PRE_SELECAO",
  "form_title": "Pré-seleção ELGA"
}
```

### Formulário de Contato (Futuro)
```json
{
  "email": "usuario@exemplo.com",
  "name": "Nome do Usuário",
  "message": "Mensagem do usuário",
  "form_id": "CONTACT",
  "form_title": "Contato ELGA"
}
```

## 🚀 Benefícios desta Implementação

- ✅ **Configuração super simples**: Apenas 3 URLs de webhook
- ✅ **Flexibilidade total**: Troque webhooks sem alterar código
- ✅ **Ambiente específico**: Diferentes webhooks para dev/prod
- ✅ **Configuração centralizada**: Tudo no EasyPanel
- ✅ **Fallback seguro**: Valores padrão se não configurado
- ✅ **TypeScript**: Tipagem completa para segurança
- ✅ **API Routes**: Variáveis de ambiente seguras no servidor
- ✅ **Debug integrado**: Endpoint para verificar configurações

## 🔍 Debug e Troubleshooting

### Verificar se as variáveis estão sendo lidas
Acesse: `https://seu-dominio.com/api/debug`

Esse endpoint mostra:
- Se as variáveis de ambiente estão definidas
- Quais valores estão sendo usados
- Status da configuração

### Problema: Formulário não envia
**Solução**: 
1. Verifique o console do navegador para logs detalhados
2. Acesse `/api/debug` para verificar as variáveis
3. Confirme se as URLs dos webhooks estão corretas no EasyPanel

### Problema: Erro 404 no webhook
**Solução**: Verifique se a URL do webhook está correta e acessível

### Problema: Variáveis não estão sendo lidas
**Solução**: 
1. Confirme que não há aspas extras nas variáveis de ambiente
2. Reinicie o projeto após alterar as variáveis
3. Use `/api/debug` para verificar
