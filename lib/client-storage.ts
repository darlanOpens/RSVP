/** Utilitários de storage no cliente, com verificações de ambiente. */

function isBrowser(): boolean {
  return typeof window !== 'undefined'
}

const EMAIL_KEY = 'preSelecaoEmail'
const WEBHOOK_KEY = 'preSelecaoWebhookUrl'

export function savePreSelecaoEmail(email: string): void {
  try {
    if (!isBrowser()) return
    window.localStorage.setItem(EMAIL_KEY, email)
  } catch {
    // silencioso
  }
}

export function getPreSelecaoEmail(): string | null {
  try {
    if (!isBrowser()) return null
    return window.localStorage.getItem(EMAIL_KEY)
  } catch {
    return null
  }
}

export function clearPreSelecaoEmail(): void {
  try {
    if (!isBrowser()) return
    window.localStorage.removeItem(EMAIL_KEY)
  } catch {
    // silencioso
  }
}

export function savePreSelecaoWebhookUrl(url: string): void {
  try {
    if (!isBrowser()) return
    window.sessionStorage.setItem(WEBHOOK_KEY, url)
  } catch {
    // silencioso
  }
}

export function getPreSelecaoWebhookUrl(): string | null {
  try {
    if (!isBrowser()) return null
    return window.sessionStorage.getItem(WEBHOOK_KEY)
  } catch {
    return null
  }
}

export function clearPreSelecaoWebhookUrl(): void {
  try {
    if (!isBrowser()) return
    window.sessionStorage.removeItem(WEBHOOK_KEY)
  } catch {
    // silencioso
  }
}


