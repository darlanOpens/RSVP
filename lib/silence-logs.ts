type ConsoleMethod = (...args: unknown[]) => void

function shouldSilenceGtmMessage(args: unknown[]): boolean {
  const serialized = args
    .map((arg) => {
      try {
        if (typeof arg === "string") return arg
        return JSON.stringify(arg)
      } catch {
        return String(arg)
      }
    })
    .join(" ")
    .toLowerCase()

  // Heurística para mensagens comuns do GTM/Gtag em modo debug/preview
  const patterns: RegExp[] = [
    /processing commands/,
    /processing data layer push/,
    /processing gtag command/,
    /loaded existing client id/,
    /sending event/,
    /request parameters/,
    /sending rich request/,
    /gtm\.historychange/,
    /gtag/,
    /googletagmanager/,
  ]

  return patterns.some((re) => re.test(serialized))
}

export function silenceGtmConsole(enable: boolean): void {
  if (!enable || typeof window === "undefined") return

  const originalLog: ConsoleMethod = console.log.bind(console)
  const originalInfo: ConsoleMethod = console.info?.bind(console) ?? originalLog
  const originalDebug: ConsoleMethod = console.debug?.bind(console) ?? originalLog
  const originalWarn: ConsoleMethod = console.warn?.bind(console) ?? originalLog
  const originalGroup: ConsoleMethod = console.group?.bind(console) ?? originalLog
  const originalGroupCollapsed: ConsoleMethod = console.groupCollapsed?.bind(console) ?? originalLog

  console.log = (...args: unknown[]) => {
    if (shouldSilenceGtmMessage(args)) return
    originalLog(...args)
  }

  console.info = (...args: unknown[]) => {
    if (shouldSilenceGtmMessage(args)) return
    originalInfo(...args)
  }

  console.debug = (...args: unknown[]) => {
    if (shouldSilenceGtmMessage(args)) return
    originalDebug(...args)
  }

  console.warn = (...args: unknown[]) => {
    if (shouldSilenceGtmMessage(args)) return
    originalWarn(...args)
  }

  console.group = (...args: unknown[]) => {
    if (shouldSilenceGtmMessage(args)) return
    originalGroup(...args)
  }

  console.groupCollapsed = (...args: unknown[]) => {
    if (shouldSilenceGtmMessage(args)) return
    originalGroupCollapsed(...args)
  }
}


