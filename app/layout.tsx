import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://horizonflare.in"),
  title: "Horizon Flare - India's Innovation Powerhouse | Cybersecurity & Web Development",
  description:
    "Leading cybersecurity, web development, and innovation services in India. MSME certified company offering VAPT, penetration testing, ethical hacking training, and cutting-edge technology solutions in Bhopal, Bangalore, and Pune.",
  keywords: [
    "cybersecurity India",
    "VAPT services",
    "penetration testing",
    "web development company India",
    "ethical hacking training Bhopal",
    "innovation lab India",
    "MSME certified IT company",
    "top cybersecurity company in Bhopal",
    "web development Bangalore",
    "penetration testing Pune",
    "Horizon Flare",
  ],
  authors: [{ name: "Horizon Flare", url: "https://horizonflare.in" }],
  creator: "Horizon Flare",
  publisher: "Horizon Flare",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://horizonflare.in",
    siteName: "Horizon Flare",
    title: "Horizon Flare - India's Innovation Powerhouse | Cybersecurity & Web Development",
    description:
      "Leading cybersecurity, web development, and innovation services in India. MSME certified company offering VAPT, penetration testing, ethical hacking training, and cutting-edge technology solutions.",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Horizon Flare - Cybersecurity and Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon Flare - India's Innovation Powerhouse | Cybersecurity & Web Development",
    description:
      "Top-tier cybersecurity, web development, and innovation services in India. MSME certified, specializing in VAPT, ethical hacking training, and more.",
    images: ["/twitter-image.png"], 
    creator: "@horizonflare", 
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  generator: 'v0.dev'
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Horizon Flare",
  url: "https://horizonflare.in",
  logo: "https://horizonflare.in/logo.png", 
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-77229-62509",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["en"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bhopal",
    addressLocality: "Madhya Pradesh",
    postalCode: "462001",
    addressCountry: "IN",
  },
  sameAs: [
    "https://twitter.com/horizonflare", 
    "https://linkedin.com/company/horizonflare",
  ],
  description:
    "Leading cybersecurity, web development, and innovation services in India. MSME certified company offering VAPT, penetration testing, ethical hacking training, and cutting-edge technology solutions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  )
}
