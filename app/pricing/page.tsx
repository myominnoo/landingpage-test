'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Inter } from 'next/font/google'
import { useTheme } from "@/lib/theme-context"

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function PricingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

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

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <Link href="/" className="text-[#666666] dark:text-[#A0A0A0] hover:text-[#2D5A27] dark:hover:text-[#E8F5E8] transition-colors">
            Home
          </Link>
          <Link href="/pricing" className="text-[#2D5A27] dark:text-[#E8F5E8] font-medium">
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
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-16 md:top-20 left-0 right-0 z-40 bg-gradient-to-r from-white/95 via-white/90 to-white/95 dark:from-[#0F1419]/95 dark:via-[#0F1419]/90 dark:to-[#0F1419]/95 backdrop-blur-md border-t border-white/20 dark:border-[#2A3441]/30 shadow-lg shadow-black/10 dark:shadow-black/30 mobile-menu-enter">
          <nav className="px-4 py-4 space-y-4" role="navigation" aria-label="Mobile navigation">
            <Link
              href="/"
              className="block text-[#666666] dark:text-[#A0A0A0] hover:text-[#2D5A27] dark:hover:text-[#E8F5E8] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="block text-[#2D5A27] dark:text-[#E8F5E8] font-medium py-2"
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

      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-6 leading-tight transition-colors">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-[#666666] dark:text-[#A0A0A0] mb-8 max-w-3xl mx-auto leading-relaxed transition-colors">
              Choose the plan that fits your team&apos;s needs. No hidden fees, no surprises.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
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
                  <li className="flex items-center text-[#666666] dark:text-[#A0A0A0] transition-colors">
                    <svg className="w-5 h-5 text-[#2D5A27] dark:text-[#4A7C59] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Email support
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
                  <li className="flex items-center text-[#666666] dark:text-[#A0A0A0] transition-colors">
                    <svg className="w-5 h-5 text-[#2D5A27] dark:text-[#4A7C59] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Priority support
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
                    Dedicated support
                  </li>
                  <li className="flex items-center text-[#666666] dark:text-[#A0A0A0] transition-colors">
                    <svg className="w-5 h-5 text-[#2D5A27] dark:text-[#4A7C59] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    SLA guarantee
                  </li>
                </ul>
                <Button className="w-full bg-[#2D5A27] dark:bg-[#4A7C59] text-white hover:bg-[#1e3d1a] dark:hover:bg-[#3A6B47] transition-colors">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-[#F8F9FA] dark:bg-[#1A2332] transition-colors">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] text-center mb-12 transition-colors">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div className="bg-white dark:bg-[#0F1419] p-6 rounded-lg shadow-sm border border-[#E5E5E5] dark:border-[#2A3441] transition-colors">
                <h3 className="text-lg font-semibold text-[#2D5A27] dark:text-[#E8F5E8] mb-3 transition-colors">
                  Can I change my plan at any time?
                </h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] transition-colors">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle.
                </p>
              </div>
              <div className="bg-white dark:bg-[#0F1419] p-6 rounded-lg shadow-sm border border-[#E5E5E5] dark:border-[#2A3441] transition-colors">
                <h3 className="text-lg font-semibold text-[#2D5A27] dark:text-[#E8F5E8] mb-3 transition-colors">
                  Is there a free trial?
                </h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] transition-colors">
                  Yes, we offer a 14-day free trial for all plans. No credit card required to get started.
                </p>
              </div>
              <div className="bg-white dark:bg-[#0F1419] p-6 rounded-lg shadow-sm border border-[#E5E5E5] dark:border-[#2A3441] transition-colors">
                <h3 className="text-lg font-semibold text-[#2D5A27] dark:text-[#E8F5E8] mb-3 transition-colors">
                  What payment methods do you accept?
                </h3>
                <p className="text-[#666666] dark:text-[#A0A0A0] transition-colors">
                  We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
