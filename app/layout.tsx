import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { OrganizationSchema, LocalBusinessSchema, ServiceSchema } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://horizonflare.in"),
  title: {
    default: "Horizon Flare | Igniting Ideas. Powering Impact. | Top Cybersecurity & Innovation Studio in India",
    template: "%s | Horizon Flare - Cybersecurity & Innovation",
  },
  description:
    "Horizon Flare is India's premier innovation studio & cybersecurity company based in Bhopal, Madhya Pradesh, creating practical, scalable tech solutions for real-world problems. Offering professional VAPT, secure development, ethical hacking courses across Delhi, Mumbai, and all India.",
  keywords:
    "Horizon Flare, HorizonFlare, horizon flare,horizonflare,Horizon Flare India, cybersecurity company India, VAPT services India, penetration testing India, ethical hacking India, cybersecurity courses India, secure web development, innovation lab India, student tech projects India, cybersecurity Bhopal, Madhya Pradesh cybersecurity, cybersecurity training Bhopal, Mumbai cybersecurity, Delhi security testing, tech innovation India, startup incubation India, ethical hacking Hyderabad, cloud security assessment Chennai, API security testing Pune, technology solutions NCR, IT security services Kolkata, web application firewall Gujarat, network security Ahmedabad",
  authors: [{ name: "Horizon Flare Team" }],
  creator: "Horizon Flare",
  publisher: "Horizon Flare",
  robots: "index, follow",
  alternates: {
    canonical: "https://horizonflare.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://horizonflare.in",
    siteName: "Horizon Flare",
    title: "Horizon Flare | Igniting Ideas. Powering Impact.",
    description:
      "Horizon Flare is an innovation studio focused on creating practical, scalable tech solutions for real-world problems across India. Leading in cybersecurity, VAPT, and secure development.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Horizon Flare - Cybersecurity & Innovation Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon Flare | Igniting Ideas. Powering Impact.",
    description:
      "India's top innovation studio & cybersecurity company creating practical, scalable tech solutions for businesses and organizations across the country.",
    images: ["/banner.png"],
    creator: "@HorizonFlare",
    site: "@HorizonFlare",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#000000" }],
  generator: "Next.js"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <ServiceSchema />
        <link rel="canonical" href="https://horizonflare.in" />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Bhopal" />
        <meta name="geo.position" content="23.2599;77.4126" />
        <meta name="ICBM" content="23.2599, 77.4126" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
