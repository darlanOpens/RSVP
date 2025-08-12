"use client"

import { useEffect } from "react"
import TagManager from "react-gtm-module"
import { silenceGtmConsole } from "@/lib/silence-logs"

export default function GTMProvider(): null {
  useEffect(() => {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID
    const isProduction = process.env.NODE_ENV === "production"

    // Silencia logs verbosos do GTM/GA caso habilitado por env
    const silenceLogs = process.env.NEXT_PUBLIC_SILENCE_GTM_LOGS === "true" || isProduction
    silenceGtmConsole(silenceLogs)

    if (!isProduction || !gtmId) {
      return
    }

    // Só permite auth/preview quando explicitamente habilitado
    const allowPreview = process.env.NEXT_PUBLIC_GTM_ALLOW_PREVIEW === "true"
    const auth = allowPreview ? process.env.NEXT_PUBLIC_GTM_AUTH : undefined
    const preview = allowPreview ? process.env.NEXT_PUBLIC_GTM_PREVIEW : undefined

    TagManager.initialize(
      auth && preview
        ? { gtmId, auth, preview }
        : { gtmId }
    )
  }, [])

  return null
}


