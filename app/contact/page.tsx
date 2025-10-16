'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Inter } from 'next/font/google'
import { useTheme } from "@/lib/theme-context"
import { useState } from 'react'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function ContactPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
          <Link href="/about" className="text-[#666666] dark:text-[#A0A0A0] hover:text-[#2D5A27] dark:hover:text-[#E8F5E8] transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-[#2D5A27] dark:text-[#E8F5E8] font-medium">
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
              className="block text-[#2D5A27] dark:text-[#E8F5E8] font-medium py-2"
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
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-[#666666] dark:text-[#A0A0A0] mb-8 max-w-3xl mx-auto leading-relaxed transition-colors">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-6 transition-colors">
                  Send us a message
                </h2>
                <p className="text-lg text-[#666666] dark:text-[#A0A0A0] mb-8 leading-relaxed transition-colors">
                  Fill out the form and we&apos;ll get back to you within 24 hours. For urgent matters, 
                  please call our support line.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2D5A27] dark:text-[#E8F5E8] mb-2 transition-colors">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E5E5] dark:border-[#2A3441] rounded-lg bg-white dark:bg-[#0F1419] text-[#2D5A27] dark:text-[#E8F5E8] focus:outline-none focus:ring-2 focus:ring-[#2D5A27] dark:focus:ring-[#4A7C59] transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2D5A27] dark:text-[#E8F5E8] mb-2 transition-colors">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E5E5] dark:border-[#2A3441] rounded-lg bg-white dark:bg-[#0F1419] text-[#2D5A27] dark:text-[#E8F5E8] focus:outline-none focus:ring-2 focus:ring-[#2D5A27] dark:focus:ring-[#4A7C59] transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#2D5A27] dark:text-[#E8F5E8] mb-2 transition-colors">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#E5E5E5] dark:border-[#2A3441] rounded-lg bg-white dark:bg-[#0F1419] text-[#2D5A27] dark:text-[#E8F5E8] focus:outline-none focus:ring-2 focus:ring-[#2D5A27] dark:focus:ring-[#4A7C59] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#2D5A27] dark:text-[#E8F5E8] mb-2 transition-colors">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-[#E5E5E5] dark:border-[#2A3441] rounded-lg bg-white dark:bg-[#0F1419] text-[#2D5A27] dark:text-[#E8F5E8] focus:outline-none focus:ring-2 focus:ring-[#2D5A27] dark:focus:ring-[#4A7C59] transition-colors"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#2D5A27] dark:bg-[#4A7C59] text-white hover:bg-[#1e3d1a] dark:hover:bg-[#3A6B47] transition-colors"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#2D5A27] dark:text-[#E8F5E8] mb-6 transition-colors">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#FFD700] dark:bg-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#2D5A27] dark:text-[#2D5A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2D5A27] dark:text-[#E8F5E8] transition-colors">Email</h4>
                        <p className="text-[#666666] dark:text-[#A0A0A0] transition-colors">hello@sayshot.com</p>
                        <p className="text-[#666666] dark:text-[#A0A0A0] transition-colors">support@sayshot.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#FFD700] dark:bg-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#2D5A27] dark:text-[#2D5A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2D5A27] dark:text-[#E8F5E8] transition-colors">Phone</h4>
                        <p className="text-[#666666] dark:text-[#A0A0A0] transition-colors">+1 (555) 123-4567</p>
                        <p className="text-[#666666] dark:text-[#A0A0A0] transition-colors">Mon-Fri 9AM-6PM PST</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#FFD700] dark:bg-[#FFD700] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#2D5A27] dark:text-[#2D5A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2D5A27] dark:text-[#E8F5E8] transition-colors">Office</h4>
                        <p className="text-[#666666] dark:text-[#A0A0A0] transition-colors">123 Innovation Drive</p>
                        <p className="text-[#666666] dark:text-[#A0A0A0] transition-colors">San Francisco, CA 94105</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F8F9FA] dark:bg-[#1A2332] p-6 rounded-xl transition-colors">
                  <h4 className="font-semibold text-[#2D5A27] dark:text-[#E8F5E8] mb-3 transition-colors">
                    Quick Response Times
                  </h4>
                  <ul className="space-y-2 text-sm text-[#666666] dark:text-[#A0A0A0] transition-colors">
                    <li>• General inquiries: 24 hours</li>
                    <li>• Technical support: 4 hours</li>
                    <li>• Enterprise sales: 2 hours</li>
                    <li>• Emergency support: 1 hour</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
