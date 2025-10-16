'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
import { useTheme } from "@/lib/theme-context"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={`min-h-screen bg-[#FEFCF8] dark:bg-[#0F1419] text-[#2D5A27] dark:text-[#E8F5E8] transition-colors duration-300 ${inter.className}`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-4 md:py-6 md:px-8 bg-gradient-to-r from-white/90 via-white/80 to-white/90 dark:from-[#0F1419]/90 dark:via-[#0F1419]/80 dark:to-[#0F1419]/90 backdrop-blur-md border-b border-white/20 dark:border-[#2A3441]/30 shadow-lg shadow-black/5 dark:shadow-black/20">
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
          <Link href="/about" className="text-[#2D5A27] dark:text-[#E8F5E8] font-medium">
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
              className="block text-[#2D5A27] dark:text-[#E8F5E8] font-medium py-2"
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

      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-6 leading-tight transition-colors">
              About sayshot
            </h1>
            <p className="text-xl md:text-2xl text-[#666666] dark:text-[#A0A0A0] mb-8 max-w-3xl mx-auto leading-relaxed transition-colors">
              We&apos;re on a mission to transform how teams capture, share, and act on meeting insights.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-6 transition-colors">
                  Our Mission
                </h2>
                <p className="text-lg text-[#666666] dark:text-[#A0A0A0] mb-6 leading-relaxed transition-colors">
                  We believe that every meeting should be productive and every insight should be captured. 
                  Our AI-powered platform helps teams turn conversations into actionable outcomes, 
                  ensuring that no important decision or action item gets lost.
                </p>
                <p className="text-lg text-[#666666] dark:text-[#A0A0A0] leading-relaxed transition-colors">
                  Founded in 2024 and backed by Google for Startups, we&apos;re building the future of 
                  meeting intelligence for teams worldwide.
                </p>
              </div>
              <div className="bg-[#F8F9FA] dark:bg-[#1A2332] p-8 rounded-xl transition-colors">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-2 transition-colors">10K+</div>
                    <div className="text-[#666666] dark:text-[#A0A0A0] transition-colors">Active Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-2 transition-colors">1M+</div>
                    <div className="text-[#666666] dark:text-[#A0A0A0] transition-colors">Meetings Processed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-2 transition-colors">99%</div>
                    <div className="text-[#666666] dark:text-[#A0A0A0] transition-colors">Accuracy Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-2 transition-colors">50+</div>
                    <div className="text-[#666666] dark:text-[#A0A0A0] transition-colors">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-[#F8F9FA] dark:bg-[#1A2332] transition-colors">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                Meet Our Team
              </h2>
              <p className="text-lg text-[#666666] dark:text-[#A0A0A0] max-w-3xl mx-auto transition-colors">
                We&apos;re a diverse team of engineers, designers, and AI researchers passionate about 
                solving real-world problems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-[#0F1419] p-8 rounded-xl shadow-lg text-center transition-colors">
                <div className="w-20 h-20 bg-[#FFD700] dark:bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#2D5A27] dark:text-[#2D5A27] font-bold text-2xl">S</span>
                </div>
                <h3 className="text-xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-2 transition-colors">Sarah Chen</h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] mb-4 transition-colors">CEO & Co-founder</p>
                <p className="text-sm text-[#666666] dark:text-[#A0A0A0] transition-colors">
                  Former Google AI researcher with 10+ years in machine learning and natural language processing.
                </p>
              </div>

              <div className="bg-white dark:bg-[#0F1419] p-8 rounded-xl shadow-lg text-center transition-colors">
                <div className="w-20 h-20 bg-[#FFD700] dark:bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#2D5A27] dark:text-[#2D5A27] font-bold text-2xl">M</span>
                </div>
                <h3 className="text-xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-2 transition-colors">Michael Rodriguez</h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] mb-4 transition-colors">CTO & Co-founder</p>
                <p className="text-sm text-[#666666] dark:text-[#A0A0A0] transition-colors">
                  Ex-Microsoft engineer specializing in real-time systems and scalable architecture.
                </p>
              </div>

              <div className="bg-white dark:bg-[#0F1419] p-8 rounded-xl shadow-lg text-center transition-colors">
                <div className="w-20 h-20 bg-[#FFD700] dark:bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#2D5A27] dark:text-[#2D5A27] font-bold text-2xl">A</span>
                </div>
                <h3 className="text-xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-2 transition-colors">Alex Thompson</h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] mb-4 transition-colors">Head of Product</p>
                <p className="text-sm text-[#666666] dark:text-[#A0A0A0] transition-colors">
                  Former Slack product manager with expertise in collaboration tools and user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                Our Values
              </h2>
              <p className="text-lg text-[#666666] dark:text-[#A0A0A0] max-w-3xl mx-auto transition-colors">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2D5A27] dark:bg-[#4A7C59] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 transition-colors">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                  Focus on Impact
                </h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] leading-relaxed transition-colors">
                  We build features that directly improve productivity and save time for our users.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#2D5A27] dark:bg-[#4A7C59] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 transition-colors">
                  🔒
                </div>
                <h3 className="text-xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                  Privacy First
                </h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] leading-relaxed transition-colors">
                  Your data security and privacy are our top priorities. We&apos;re SOC 2 and GDPR compliant.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#2D5A27] dark:bg-[#4A7C59] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 transition-colors">
                  🚀
                </div>
                <h3 className="text-xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-4 transition-colors">
                  Innovation
                </h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] leading-relaxed transition-colors">
                  We continuously push the boundaries of what&apos;s possible with AI and meeting technology.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
