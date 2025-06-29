import type { Metadata } from "next"
import ServicesPage from "./services-page"

export const metadata: Metadata = {
  title: "Cybersecurity & Development Services - Horizon Flare India",
  description:
    "Comprehensive cybersecurity services including VAPT, penetration testing, web development, and training programs. MSME certified company serving clients across India.",
  keywords:
    "cybersecurity services India, VAPT services, penetration testing, web development, ethical hacking training, security audits",
}

export default function Services() {
  return <ServicesPage />
}
