"use client"

import { useEffect } from "react"
import TagManager from "react-gtm-module"

export default function GTMProvider(): null {
  useEffect(() => {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID

    if (!gtmId) {
      if (process.env.NODE_ENV !== "production") {
        // eslint-disable-next-line no-console
        console.warn("GTM: NEXT_PUBLIC_GTM_ID não definido. O Tag Manager não será inicializado.")
      }
      return
    }

    TagManager.initialize({ gtmId })
  }, [])

  return null
}


