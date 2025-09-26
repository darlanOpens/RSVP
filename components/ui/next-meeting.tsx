const MONTHS_PT_BR = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
]

function capitalize(word: string): string {
  if (!word) return word
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function formatFromBr(dateBr?: string, timeRaw?: string): string | null {
  if (!dateBr) return null
  const parts = dateBr.split("/")
  if (parts.length !== 3) return null
  const [ddStr, mmStr, yyyyStr] = parts
  const day = parseInt(ddStr, 10)
  const monthIndex = parseInt(mmStr, 10) - 1
  const year = parseInt(yyyyStr, 10)

  if (
    Number.isNaN(day) ||
    Number.isNaN(monthIndex) ||
    Number.isNaN(year) ||
    monthIndex < 0 ||
    monthIndex > 11
  ) {
    return null
  }

  const monthName = capitalize(MONTHS_PT_BR[monthIndex])
  let label = `${String(day).padStart(2, "0")} de ${monthName}`

  if (timeRaw && timeRaw.trim() !== "") {
    const compact = timeRaw.trim()
    const match = compact.match(/^(\d{1,2})(?::|h)?(\d{2})?\s*$/i)
    if (match) {
      const hour = match[1].padStart(2, "0")
      const minutes = match[2]
      if (minutes && minutes !== "00") {
        label += `, às ${hour}h${minutes}`
      } else {
        label += `, às ${hour}h`
      }
    } else {
      label += `, ${compact}`
    }
  }

  return label
}

function formatFromIso(iso?: string, timeZone?: string): string | null {
  if (!iso) return null
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return null

  // Extract day and month long with timezone
  const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
    timeZone: timeZone || "America/Sao_Paulo",
    day: "2-digit",
    month: "long",
  })
  const parts = dateFormatter.formatToParts(date)
  const day = parts.find((p) => p.type === "day")?.value
  const month = parts.find((p) => p.type === "month")?.value
  if (!day || !month) return null

  let label = `${day} de ${capitalize(month)}`

  const timeFormatter = new Intl.DateTimeFormat("pt-BR", {
    timeZone: timeZone || "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
  const time = timeFormatter.format(date) // e.g., "17:00"
  const [hourStr, minuteStr] = time.split(":")
  if (hourStr) {
    if (minuteStr && minuteStr !== "00") {
      label += `, às ${hourStr}h${minuteStr}`
    } else {
      label += `, às ${hourStr}h`
    }
  }

  return label
}

const labelFromIso = formatFromIso(
  process.env.NEXT_PUBLIC_NEXT_MEETING_ISO,
  process.env.NEXT_PUBLIC_NEXT_MEETING_TZ
)

const labelFromBr = formatFromBr(
  process.env.NEXT_PUBLIC_NEXT_MEETING_DATE,
  process.env.NEXT_PUBLIC_NEXT_MEETING_TIME
)

export const NEXT_MEETING_LABEL = labelFromIso ?? labelFromBr ?? "Em breve"

export const DEBATE_THEME = process.env.NEXT_PUBLIC_DEBATE_THEME ?? "Tema a ser definido"

// Convidado especial
export const HAS_SPECIAL_GUEST = process.env.NEXT_PUBLIC_HAS_SPECIAL_GUEST === "true"
export const SPECIAL_GUEST_NAME = process.env.NEXT_PUBLIC_SPECIAL_GUEST_NAME ?? "Convidado Especial"


