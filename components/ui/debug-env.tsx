"use client"

export function DebugEnv() {
  if (process.env.NODE_ENV === 'production') {
    return null // Não mostrar em produção
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg text-xs max-w-sm z-50">
      <h3 className="font-bold mb-2">Debug - Variáveis de Ambiente:</h3>
      <div className="space-y-1">
        <div>
          <strong>NEXT_PUBLIC_NEXT_MEETING_DATE:</strong> {process.env.NEXT_PUBLIC_NEXT_MEETING_DATE || 'não definida'}
        </div>
        <div>
          <strong>NEXT_PUBLIC_NEXT_MEETING_TIME:</strong> {process.env.NEXT_PUBLIC_NEXT_MEETING_TIME || 'não definida'}
        </div>
        <div>
          <strong>NEXT_PUBLIC_NEXT_MEETING_ISO:</strong> {process.env.NEXT_PUBLIC_NEXT_MEETING_ISO || 'não definida'}
        </div>
        <div>
          <strong>NEXT_PUBLIC_NEXT_MEETING_TZ:</strong> {process.env.NEXT_PUBLIC_NEXT_MEETING_TZ || 'não definida'}
        </div>
      </div>
    </div>
  )
}
