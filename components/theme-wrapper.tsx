'use client'

import { ThemeProvider } from '@/lib/theme-context'
import { useEffect, useState } from 'react'

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
