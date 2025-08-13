import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    environment: {
      WEBHOOK_RSVP_URL: process.env.WEBHOOK_RSVP_URL || 'NÃO DEFINIDA',
    },
    message: 'Debug das variáveis de ambiente'
  });
}
