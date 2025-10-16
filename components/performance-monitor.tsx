'use client'

import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const metric = {
          name: entry.name,
          value: entry.startTime,
          delta: entry.startTime,
          id: entry.name,
          navigationType: entry.entryType,
        }

        // Send to analytics service
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: entry.name,
            value: Math.round(entry.startTime),
            non_interaction: true,
          })
        }

        console.log('Performance Metric:', metric)
      }
    })

    // Observe different types of performance entries
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
    }

    // Monitor page load time
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
      console.log('Page Load Time:', loadTime + 'ms')
      
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'page_load_time', {
          event_category: 'Performance',
          value: loadTime,
          non_interaction: true,
        })
      }
    })

    return () => observer.disconnect()
  }, [])

  return null
}
