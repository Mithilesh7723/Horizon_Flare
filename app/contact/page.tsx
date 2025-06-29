import type { Metadata } from "next"
import ContactPage from "./contact-page"

export const metadata: Metadata = {
  title: "Contact Horizon Flare - Get in Touch for Cybersecurity Services",
  description:
    "Contact Horizon Flare for cybersecurity services, VAPT, web development, and training. Get free consultation from India's leading MSME certified cybersecurity company.",
  keywords:
    "contact horizon flare, cybersecurity consultation, VAPT services contact, get quote, cybersecurity company India",
}

export default function Contact() {
  return <ContactPage />
}
