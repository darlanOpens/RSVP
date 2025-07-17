'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ELGALogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showTitle?: boolean
}

export function ELGALogo({ size = 'md', className = '', showTitle = false }: ELGALogoProps) {
  const [imageError, setImageError] = useState(false)
  
  const dimensions = {
    sm: { width: 150, height: 60 },
    md: { width: 200, height: 80 },
    lg: { width: 250, height: 100 }
  }
  
  const { width, height } = dimensions[size]
  
  const handleImageError = () => {
    setImageError(true)
  }

  if (imageError) {
    return (
      <div className={`flex items-center gap-3 px-6 py-3 border-2 border-[#C8A75D] bg-[#977640]/10 rounded ${className}`}>
        <svg width="40" height="20" viewBox="0 0 40 20" fill="currentColor" className="text-[#C8A75D]">
          <path d="M5 10 L30 10 M30 10 Q35 10 35 7 Q35 4 32 4 Q29 4 29 7 L29 8 M32 7 Q32 6 31 6 Q30 6 30 7" 
                stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="5" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
        <span className="font-display text-2xl text-metallic-gradient tracking-wider">ELGA</span>
      </div>
    )
  }

  return (
    <div className={className}>
      {showTitle && (
        <p className="text-[#DFC27A] text-sm uppercase tracking-wide mb-4 text-center">Realização</p>
      )}
      <Image
        src="/elga/elga-logo.png"
        alt="ELGA Logo"
        width={width}
        height={height}
        className="filter drop-shadow-lg"
        onError={handleImageError}
        priority
      />
    </div>
  )
} 