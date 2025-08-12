"use client"

import { useEffect } from "react"
import TagManager from "react-gtm-module"

export default function GTMProvider(): null {
  useEffect(() => {
    const gtmId = process.env.NEXT_PUBLIC_GTM_ID
    const isProduction = process.env.NODE_ENV === "production"

    if (!isProduction || !gtmId) {
      return
    }

    const auth = process.env.NEXT_PUBLIC_GTM_AUTH
    const preview = process.env.NEXT_PUBLIC_GTM_PREVIEW

    TagManager.initialize(
      auth && preview
        ? { gtmId, auth, preview }
        : { gtmId }
    )
  }, [])

  return null
}


