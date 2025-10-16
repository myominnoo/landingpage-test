export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "sayshot",
    "description": "AI-Powered Meeting Intelligence Platform that transforms meetings with transcription, summarization, and collaboration tools.",
    "url": "https://sayshot.com",
    "logo": "https://sayshot.com/images/idevibelogo.png",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/sayshot",
      "https://linkedin.com/company/sayshot"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Innovation Drive",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94105",
      "addressCountry": "US"
    }
  }

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "sayshot",
    "description": "AI-powered meeting intelligence platform for transcription, summarization, and collaboration",
    "url": "https://sayshot.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I change my plan at any time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated and reflected in your next billing cycle."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free trial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer a 14-day free trial for all plans. No credit card required to get started."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
