import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeWrapper } from "@/components/theme-wrapper";
import { StructuredData } from "@/components/structured-data";
import { Analytics } from "@/components/analytics";
import { ServiceWorker } from "@/components/service-worker";
import { PerformanceMonitor } from "@/components/performance-monitor";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1
}

export const metadata: Metadata = {
  title: {
    default: "sayshot - AI-Powered Meeting Intelligence Platform",
    template: "%s | sayshot"
  },
  description: "Transform your meetings with AI-powered transcription, summarization, and collaboration tools. Never miss important points, extract action items, and boost team productivity.",
  keywords: [
    "meeting transcription",
    "AI meeting assistant",
    "meeting summaries",
    "action items",
    "team collaboration",
    "meeting intelligence",
    "productivity tools",
    "AI-powered meetings"
  ],
  authors: [{ name: "sayshot team" }],
  creator: "sayshot",
  publisher: "sayshot",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sayshot.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sayshot.com',
    title: 'sayshot - AI-Powered Meeting Intelligence Platform',
    description: 'Transform your meetings with AI-powered transcription, summarization, and collaboration tools. Never miss important points, extract action items, and boost team productivity.',
    siteName: 'sayshot',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'sayshot - AI-Powered Meeting Intelligence Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'sayshot - AI-Powered Meeting Intelligence Platform',
    description: 'Transform your meetings with AI-powered transcription, summarization, and collaboration tools.',
    images: ['/images/twitter-image.jpg'],
    creator: '@sayshot',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/images/idevibelogo.png",
        type: "image/png",
        sizes: "32x32"
      },
      {
        url: "/images/idevibelogo.png",
        type: "image/png",
        sizes: "16x16"
      }
    ],
    apple: [
      {
        url: "/images/idevibelogo.png",
        type: "image/png",
        sizes: "180x180"
      }
    ],
    shortcut: [{ url: "/images/idevibelogo.png" }],
    other: [
      {
        rel: "icon",
        url: "/images/idevibelogo.png",
      },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/idevibelogo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/idevibelogo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/idevibelogo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} bg-[#FEFCF8] dark:bg-[#0F1419] transition-colors duration-300`}>
        <StructuredData />
        <Analytics />
        <ServiceWorker />
        <PerformanceMonitor />
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
