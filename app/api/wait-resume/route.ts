import { NextRequest, NextResponse } from 'next/server'

// Proxy server-side para chamar a resumeUrl do n8n e evitar CORS no navegador
export async function POST(request: NextRequest) {
  try {
    const { resumeUrl, payload } = await request.json()

    if (!resumeUrl || typeof resumeUrl !== 'string') {
      return NextResponse.json({ error: 'resumeUrl inválida' }, { status: 400 })
    }

    // Lista branca simples para evitar SSRF
    const allowedPrefixes = (process.env.N8N_RESUME_ALLOWED_PREFIXES || 'https://n8n.opens.com.br/webhook-waiting/,https://n8n.opens.com.br/webhook/')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)

    const isAllowed = allowedPrefixes.some((prefix) => resumeUrl.startsWith(prefix))
    if (!isAllowed) {
      return NextResponse.json({ error: 'resumeUrl não permitida' }, { status: 400 })
    }

    const n8nResponse = await fetch(resumeUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload || {}),
    })

    const responseText = await n8nResponse.text()
    let parsed: unknown
    try {
      parsed = JSON.parse(responseText)
    } catch {
      parsed = { raw: responseText }
    }

    return NextResponse.json(
      { ok: n8nResponse.ok, status: n8nResponse.status, data: parsed },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao repassar para n8n' }, { status: 500 })
  }
}


