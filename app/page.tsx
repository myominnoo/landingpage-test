'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import { useTheme } from "@/lib/theme-context"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBriefPopupVisible, setIsBriefPopupVisible] = useState(true)
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={`min-h-screen bg-[#FEFCF8] dark:bg-[#0F1419] text-[#2D5A27] dark:text-[#E8F5E8] transition-colors duration-300 ${inter.className}`}>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#2D5A27] dark:bg-[#4A7C59] text-white px-4 py-2 rounded-md z-50 transition-all"
      >
        Skip to main content
      </a>
      <style jsx global>{`
        @keyframes slideDown {
          from {
          opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .mobile-menu-enter {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-4 md:py-6 md:px-8 bg-gradient-to-r from-white/90 via-white/80 to-white/90 dark:from-[#0F1419]/90 dark:via-[#0F1419]/80 dark:to-[#0F1419]/90 backdrop-blur-md border-b border-white/20 dark:border-[#2A3441]/30 shadow-lg shadow-black/5 dark:shadow-black/20">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
        <div className="relative">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-[#FFD700] dark:bg-[#FFD700] rounded-full flex items-center justify-center">
            <span className="text-[#2D5A27] dark:text-[#2D5A27] font-bold text-sm md:text-lg">s</span>
          </div>
          <div className="absolute -top-1 -right-1 bg-[#FFD700] dark:bg-[#FFD700] text-[#2D5A27] dark:text-[#2D5A27] text-xs px-1.5 py-0.5 rounded-full font-medium">
            beta
          </div>
        </div>
        <div>
          <h1 className="text-lg md:text-2xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] transition-colors">sayshot</h1>
          <p className="text-xs md:text-sm text-[#666666] dark:text-[#A0A0A0] -mt-1 hidden sm:block transition-colors">BACKED BY GOOGLE FOR STARTUPS</p>
        </div>
      </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link href="/pricing" className="text-[#666666] dark:text-[#A0A0A0] hover:text-[#2D5A27] dark:hover:text-[#E8F5E8] transition-colors">
            Pricing
          </Link>
          <Link href="/about" className="text-[#666666] dark:text-[#A0A0A0] hover:text-[#2D5A27] dark:hover:text-[#E8F5E8] transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-[#666666] dark:text-[#A0A0A0] hover:text-[#2D5A27] dark:hover:text-[#E8F5E8] transition-colors">
            Contact
        </Link>
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="p-2 text-[#666666] dark:text-[#A0A0A0] hover:text-[#2D5A27] dark:hover:text-[#E8F5E8] hover:bg-[#F0F0F0] dark:hover:bg-[#1A2332] rounded-md transition-colors"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <Button 
            variant="outline" 
            className="border-[#2D5A27] dark:border-[#4A7C59] text-[#2D5A27] dark:text-[#E8F5E8] bg-transparent dark:bg-transparent hover:bg-[#2D5A27] dark:hover:bg-[#4A7C59] hover:text-white transition-colors"
          >
            Log In
          </Button>
          <Button className="bg-[#2D5A27] dark:bg-[#4A7C59] text-white hover:bg-[#1e3d1a] dark:hover:bg-[#3A6B47] transition-colors">
            Invite Only
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <Button className="bg-[#2D5A27] dark:bg-[#4A7C59] text-white hover:bg-[#1e3d1a] dark:hover:bg-[#3A6B47] text-sm px-3 py-1.5">
            Invite Only
          </Button>
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="p-2 text-[#2D5A27] dark:text-[#E8F5E8] hover:bg-[#F0F0F0] dark:hover:bg-[#1A2332] rounded-md transition-colors"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            className="p-2 text-[#2D5A27] dark:text-[#E8F5E8] hover:bg-[#F0F0F0] dark:hover:bg-[#1A2332] rounded-md transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {mounted && isMobileMenuOpen && (
        <div className="lg:hidden fixed top-16 md:top-20 left-0 right-0 z-40 bg-gradient-to-r from-white/95 via-white/90 to-white/95 dark:from-[#0F1419]/95 dark:via-[#0F1419]/90 dark:to-[#0F1419]/95 backdrop-blur-md border-t border-white/20 dark:border-[#2A3441]/30 shadow-lg shadow-black/10 dark:shadow-black/30 mobile-menu-enter">
          <nav className="px-4 py-4 space-y-4" role="navigation" aria-label="Mobile navigation">
            <Link 
              href="/pricing" 
              className="block text-[#666666] dark:text-[#A0A0A0] hover:text-[#2D5A27] dark:hover:text-[#E8F5E8] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="block text-[#666666] dark:text-[#A0A0A0] hover:text-[#2D5A27] dark:hover:text-[#E8F5E8] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block text-[#666666] dark:text-[#A0A0A0] hover:text-[#2D5A27] dark:hover:text-[#E8F5E8] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
              <Button 
              variant="outline" 
              className="w-full border-[#2D5A27] dark:border-[#4A7C59] text-[#2D5A27] dark:text-[#E8F5E8] bg-transparent dark:bg-transparent hover:bg-[#2D5A27] dark:hover:bg-[#4A7C59] hover:text-white mt-4 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log In
              </Button>
          </nav>
        </div>
      )}

      <main id="main-content" className="pt-20 md:pt-24" role="main">
        {/* Social Proof Banner */}
        <section className="flex justify-center mb-6 md:mb-8 px-4" aria-label="Social proof">
          <div className="bg-[#FFD700] dark:bg-[#FFD700] px-4 md:px-6 py-2 md:py-3 rounded-lg flex items-center gap-2 max-w-full">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-[#2D5A27] dark:bg-[#2D5A27] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-[#FFD700] dark:text-[#FFD700] text-xs font-bold">W</span>
            </div>
            <span className="text-[#2D5A27] dark:text-[#2D5A27] font-medium text-sm md:text-base text-center">
              8 out of 10 clients and freelancers use sayshot.
            </span>
          </div>
        </section>

        {/* Hero Section */}
        <section className="text-center py-8 md:py-16 px-4 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 md:mb-6 leading-tight transition-colors">
            Never miss an important point in your meetings.
          </h1>
          <p className="text-lg md:text-xl text-[#666666] dark:text-[#A0A0A0] mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed transition-colors">
            We help you collaborate & write effective highlights, summaries or briefs, leveraging the power of AI.
          </p>
          <Button className="bg-[#2D5A27] dark:bg-[#4A7C59] text-white hover:bg-[#1e3d1a] dark:hover:bg-[#3A6B47] text-base md:text-lg px-6 md:px-8 py-2.5 md:py-3 w-full sm:w-auto transition-colors">
            Invite Only
          </Button>
        </section>

        {/* Backer Section */}
        <div className="text-center py-6 md:py-8 px-4">
          <p className="text-[#666666] dark:text-[#A0A0A0] text-xs md:text-sm transition-colors">
            Backed by: LAUNCH+ paddle Google for Startups
          </p>
                      </div>

        {/* Features Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-[#F8F9FA] dark:bg-[#1A2332] transition-colors">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                AI-Powered Meeting Intelligence
              </h2>
              <p className="text-lg md:text-xl text-[#666666] dark:text-[#A0A0A0] max-w-3xl mx-auto transition-colors">
                Transform your meetings into actionable insights with our advanced AI technology
              </p>
                    </div>
                    
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-[#0F1419] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] dark:border-[#2A3441]">
                <div className="w-12 h-12 bg-[#FFD700] dark:bg-[#FFD700] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#2D5A27] dark:text-[#2D5A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                <h3 className="text-xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                  Smart Summaries
                </h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] leading-relaxed transition-colors">
                  Get instant, comprehensive summaries of your meetings with key points, decisions, and action items highlighted.
                </p>
                      </div>

              <div className="bg-white dark:bg-[#0F1419] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] dark:border-[#2A3441]">
                <div className="w-12 h-12 bg-[#FFD700] dark:bg-[#FFD700] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#2D5A27] dark:text-[#2D5A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                    </div>
                <h3 className="text-xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                  Real-time Transcription
                </h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] leading-relaxed transition-colors">
                  Advanced speech recognition captures every word with 99% accuracy, even in noisy environments.
                </p>
                  </div>

              <div className="bg-white dark:bg-[#0F1419] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] dark:border-[#2A3441]">
                <div className="w-12 h-12 bg-[#FFD700] dark:bg-[#FFD700] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#2D5A27] dark:text-[#2D5A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                    </div>
                <h3 className="text-xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                  Action Items
                </h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] leading-relaxed transition-colors">
                  Automatically extract and organize action items with assigned owners and due dates.
                          </p>
                        </div>

              <div className="bg-white dark:bg-[#0F1419] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] dark:border-[#2A3441]">
                <div className="w-12 h-12 bg-[#FFD700] dark:bg-[#FFD700] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#2D5A27] dark:text-[#2D5A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                  Team Collaboration
                </h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] leading-relaxed transition-colors">
                  Share insights and collaborate with your team through integrated sharing and commenting features.
                </p>
                      </div>

              <div className="bg-white dark:bg-[#0F1419] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] dark:border-[#2A3441]">
                <div className="w-12 h-12 bg-[#FFD700] dark:bg-[#FFD700] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#2D5A27] dark:text-[#2D5A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                        </div>
                <h3 className="text-xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                  Analytics & Insights
                </h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] leading-relaxed transition-colors">
                  Track meeting patterns, productivity metrics, and engagement levels with detailed analytics.
                </p>
                      </div>

              <div className="bg-white dark:bg-[#0F1419] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] dark:border-[#2A3441]">
                <div className="w-12 h-12 bg-[#FFD700] dark:bg-[#FFD700] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#2D5A27] dark:text-[#2D5A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                  Enterprise Security
                </h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] leading-relaxed transition-colors">
                  Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards.
                          </p>
                        </div>
                      </div>
                    </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                How It Works
              </h2>
              <p className="text-lg md:text-xl text-[#666666] dark:text-[#A0A0A0] max-w-3xl mx-auto transition-colors">
                Get started in minutes with our simple 3-step process
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2D5A27] dark:bg-[#4A7C59] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 transition-colors">
                  1
                </div>
                <h3 className="text-xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                  Join Your Meeting
                </h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] leading-relaxed transition-colors">
                  Simply invite sayshot to your Zoom, Teams, or Google Meet session. No downloads required.
                </p>
                      </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#2D5A27] dark:bg-[#4A7C59] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 transition-colors">
                  2
                    </div>
                <h3 className="text-xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                  AI Does the Work
                </h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] leading-relaxed transition-colors">
                  Our AI transcribes, analyzes, and extracts key insights in real-time during your meeting.
                </p>
                  </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#2D5A27] dark:bg-[#4A7C59] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 transition-colors">
                  3
                </div>
                <h3 className="text-xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                  Get Your Brief
                </h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] leading-relaxed transition-colors">
                  Receive a comprehensive brief with summaries, action items, and insights within minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-[#F8F9FA] dark:bg-[#1A2332] transition-colors">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                What Our Users Say
              </h2>
              <p className="text-lg md:text-xl text-[#666666] dark:text-[#A0A0A0] max-w-3xl mx-auto transition-colors">
                Join thousands of professionals who trust sayshot for their meeting intelligence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-[#0F1419] p-8 rounded-xl shadow-lg border border-[#E5E5E5] dark:border-[#2A3441] transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#FFD700] dark:bg-[#FFD700] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#2D5A27] dark:text-[#2D5A27] font-bold text-lg">S</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D5A27] dark:text-[#E8F5E8] transition-colors">Sarah Chen</h4>
                    <p className="text-sm text-[#666666] dark:text-[#A0A0A0] transition-colors">Product Manager, TechCorp</p>
                  </div>
                </div>
                <p className="text-[#666666] dark:text-[#A0A0A0] leading-relaxed transition-colors">
                  &ldquo;sayshot has revolutionized how we handle meetings. The AI summaries are incredibly accurate and save us hours every week.&rdquo;
                </p>
              </div>

              <div className="bg-white dark:bg-[#0F1419] p-8 rounded-xl shadow-lg border border-[#E5E5E5] dark:border-[#2A3441] transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#FFD700] dark:bg-[#FFD700] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#2D5A27] dark:text-[#2D5A27] font-bold text-lg">M</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D5A27] dark:text-[#E8F5E8] transition-colors">Michael Rodriguez</h4>
                    <p className="text-sm text-[#666666] dark:text-[#A0A0A0] transition-colors">CEO, StartupXYZ</p>
                  </div>
                </div>
                <p className="text-[#666666] dark:text-[#A0A0A0] leading-relaxed transition-colors">
                  &ldquo;The action item extraction is a game-changer. We never miss follow-ups anymore, and our team productivity has increased by 40%.&rdquo;
                </p>
              </div>

              <div className="bg-white dark:bg-[#0F1419] p-8 rounded-xl shadow-lg border border-[#E5E5E5] dark:border-[#2A3441] transition-colors">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#FFD700] dark:bg-[#FFD700] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#2D5A27] dark:text-[#2D5A27] font-bold text-lg">A</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D5A27] dark:text-[#E8F5E8] transition-colors">Alex Thompson</h4>
                    <p className="text-sm text-[#666666] dark:text-[#A0A0A0] transition-colors">Consultant, McKinsey</p>
                  </div>
                </div>
                <p className="text-[#666666] dark:text-[#A0A0A0] leading-relaxed transition-colors">
                  &ldquo;The real-time transcription is incredibly accurate, even with multiple speakers. It&apos;s become an essential tool for our client meetings.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg md:text-xl text-[#666666] dark:text-[#A0A0A0] max-w-3xl mx-auto transition-colors">
                Choose the plan that fits your team&apos;s needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-[#0F1419] p-8 rounded-xl shadow-lg border border-[#E5E5E5] dark:border-[#2A3441] transition-colors">
                <h3 className="text-2xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-2 transition-colors">Starter</h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] mb-6 transition-colors">Perfect for individuals</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] transition-colors">$29</span>
                  <span className="text-[#666666] dark:text-[#A0A0A0] transition-colors">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-[#666666] dark:text-[#A0A0A0] transition-colors">
                    <svg className="w-5 h-5 text-[#2D5A27] dark:text-[#4A7C59] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Up to 10 meetings/month
                  </li>
                  <li className="flex items-center text-[#666666] dark:text-[#A0A0A0] transition-colors">
                    <svg className="w-5 h-5 text-[#2D5A27] dark:text-[#4A7C59] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    AI summaries & transcripts
                  </li>
                  <li className="flex items-center text-[#666666] dark:text-[#A0A0A0] transition-colors">
                    <svg className="w-5 h-5 text-[#2D5A27] dark:text-[#4A7C59] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Action item extraction
                  </li>
                </ul>
                <Button className="w-full bg-[#2D5A27] dark:bg-[#4A7C59] text-white hover:bg-[#1e3d1a] dark:hover:bg-[#3A6B47] transition-colors">
                  Get Started
                </Button>
              </div>

              <div className="bg-white dark:bg-[#0F1419] p-8 rounded-xl shadow-lg border-2 border-[#2D5A27] dark:border-[#4A7C59] relative transition-colors">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#2D5A27] dark:bg-[#4A7C59] text-white px-4 py-1 rounded-full text-sm font-medium transition-colors">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-2 transition-colors">Professional</h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] mb-6 transition-colors">Perfect for small teams</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] transition-colors">$79</span>
                  <span className="text-[#666666] dark:text-[#A0A0A0] transition-colors">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-[#666666] dark:text-[#A0A0A0] transition-colors">
                    <svg className="w-5 h-5 text-[#2D5A27] dark:text-[#4A7C59] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Up to 50 meetings/month
                  </li>
                  <li className="flex items-center text-[#666666] dark:text-[#A0A0A0] transition-colors">
                    <svg className="w-5 h-5 text-[#2D5A27] dark:text-[#4A7C59] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Everything in Starter
                  </li>
                  <li className="flex items-center text-[#666666] dark:text-[#A0A0A0] transition-colors">
                    <svg className="w-5 h-5 text-[#2D5A27] dark:text-[#4A7C59] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Team collaboration
                  </li>
                  <li className="flex items-center text-[#666666] dark:text-[#A0A0A0] transition-colors">
                    <svg className="w-5 h-5 text-[#2D5A27] dark:text-[#4A7C59] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Advanced analytics
                  </li>
                </ul>
                <Button className="w-full bg-[#2D5A27] dark:bg-[#4A7C59] text-white hover:bg-[#1e3d1a] dark:hover:bg-[#3A6B47] transition-colors">
                  Get Started
                </Button>
              </div>

              <div className="bg-white dark:bg-[#0F1419] p-8 rounded-xl shadow-lg border border-[#E5E5E5] dark:border-[#2A3441] transition-colors">
                <h3 className="text-2xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-2 transition-colors">Enterprise</h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] mb-6 transition-colors">For large organizations</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] transition-colors">$199</span>
                  <span className="text-[#666666] dark:text-[#A0A0A0] transition-colors">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-[#666666] dark:text-[#A0A0A0] transition-colors">
                    <svg className="w-5 h-5 text-[#2D5A27] dark:text-[#4A7C59] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited meetings
                  </li>
                  <li className="flex items-center text-[#666666] dark:text-[#A0A0A0] transition-colors">
                    <svg className="w-5 h-5 text-[#2D5A27] dark:text-[#4A7C59] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Everything in Professional
                  </li>
                  <li className="flex items-center text-[#666666] dark:text-[#A0A0A0] transition-colors">
                    <svg className="w-5 h-5 text-[#2D5A27] dark:text-[#4A7C59] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom integrations
                  </li>
                  <li className="flex items-center text-[#666666] dark:text-[#A0A0A0] transition-colors">
                    <svg className="w-5 h-5 text-[#2D5A27] dark:text-[#4A7C59] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Priority support
                  </li>
                </ul>
                <Button className="w-full bg-[#2D5A27] dark:bg-[#4A7C59] text-white hover:bg-[#1e3d1a] dark:hover:bg-[#3A6B47] transition-colors">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Example Brief Box - Mobile Version */}
        {isBriefPopupVisible && (
          <div className="block md:hidden px-4 pb-8">
            <div className="bg-[#F5F5F5] dark:bg-[#1A2332] border border-[#CCCCCC] dark:border-[#2A3441] rounded-lg p-4 transition-colors relative">
              <button
                onClick={() => setIsBriefPopupVisible(false)}
                aria-label="Close brief popup"
                className="absolute top-2 right-2 p-1 text-[#666666] dark:text-[#A0A0A0] hover:text-[#2D5A27] dark:hover:text-[#E8F5E8] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="text-[#666666] dark:text-[#A0A0A0] text-sm space-y-1 transition-colors pr-6">
                <p className="font-medium">Brief: Fintech Consumer Strategy Alignment</p>
                <p>Objective: realign FinLeap&apos;s brand to</p>
                <p>reflect its new consumer-focused</p>
                <p>direction.</p>
              </div>
            </div>
          </div>
        )}

        {/* Example Brief Box - Desktop Version */}
        {isBriefPopupVisible && (
          <div className="hidden md:block fixed bottom-8 left-8 z-40">
            <div className="bg-[#F5F5F5] dark:bg-[#1A2332] border border-[#CCCCCC] dark:border-[#2A3441] rounded-lg p-4 max-w-xs transition-colors relative shadow-lg">
              <button
                onClick={() => setIsBriefPopupVisible(false)}
                aria-label="Close brief popup"
                className="absolute top-2 right-2 p-1 text-[#666666] dark:text-[#A0A0A0] hover:text-[#2D5A27] dark:hover:text-[#E8F5E8] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="text-[#666666] dark:text-[#A0A0A0] text-sm space-y-1 transition-colors pr-6">
                <p className="font-medium">Brief: Fintech Consumer Strategy Alignment</p>
                <p>Objective: realign FinLeap&apos;s brand to</p>
                <p>reflect its new consumer-focused</p>
                <p>direction.</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#2D5A27] dark:bg-[#0F1419] text-white py-16 px-4 md:px-8 transition-colors">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#FFD700] rounded-full flex items-center justify-center">
                  <span className="text-[#2D5A27] font-bold text-lg">s</span>
                </div>
                <h3 className="text-2xl font-bold">sayshot</h3>
          </div>
              <p className="text-[#B8C5B8] dark:text-[#A0A0A0] mb-6 max-w-md leading-relaxed">
                Transform your meetings into actionable insights with AI-powered transcription, summarization, and collaboration tools.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-[#4A7C59] dark:bg-[#2A3441] rounded-lg flex items-center justify-center hover:bg-[#3A6B47] dark:hover:bg-[#1A2332] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
                <a href="#" className="w-10 h-10 bg-[#4A7C59] dark:bg-[#2A3441] rounded-lg flex items-center justify-center hover:bg-[#3A6B47] dark:hover:bg-[#1A2332] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
                <a href="#" className="w-10 h-10 bg-[#4A7C59] dark:bg-[#2A3441] rounded-lg flex items-center justify-center hover:bg-[#3A6B47] dark:hover:bg-[#1A2332] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Product</h4>
              <ul className="space-y-4">
                <li><a href="#features" className="text-[#B8C5B8] dark:text-[#A0A0A0] hover:text-white transition-colors">Features</a></li>
                <li><a href="/pricing" className="text-[#B8C5B8] dark:text-[#A0A0A0] hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-[#B8C5B8] dark:text-[#A0A0A0] hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="text-[#B8C5B8] dark:text-[#A0A0A0] hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-[#B8C5B8] dark:text-[#A0A0A0] hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="/about" className="text-[#B8C5B8] dark:text-[#A0A0A0] hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-[#B8C5B8] dark:text-[#A0A0A0] hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-[#B8C5B8] dark:text-[#A0A0A0] hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-[#B8C5B8] dark:text-[#A0A0A0] hover:text-white transition-colors">Press</a></li>
                <li><a href="/contact" className="text-[#B8C5B8] dark:text-[#A0A0A0] hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#4A7C59] dark:border-[#2A3441] pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#B8C5B8] dark:text-[#A0A0A0] text-sm mb-4 md:mb-0">
              © 2024 sayshot. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-[#B8C5B8] dark:text-[#A0A0A0] hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#B8C5B8] dark:text-[#A0A0A0] hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-[#B8C5B8] dark:text-[#A0A0A0] hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}