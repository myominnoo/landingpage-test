'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export function Analytics() {
  useEffect(() => {
    // Web Vitals monitoring
    if (typeof window !== 'undefined') {
      // Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', (entry as any).processingStart - entry.startTime)
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', (entry as any).value)
          }
        }
      })

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })

      // Cleanup
      return () => observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}
