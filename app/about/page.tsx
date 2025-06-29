import type { Metadata } from "next"
import AboutPage from "./about-page"

export const metadata: Metadata = {
  title: "About Horizon Flare - India's Leading Cybersecurity & Innovation Company",
  description:
    "Learn about Horizon Flare's journey as India's premier MSME certified cybersecurity and innovation company. Our mission, vision, and commitment to digital transformation.",
  keywords:
    "about horizon flare, cybersecurity company India, MSME certified, innovation company, digital transformation",
}

export default function About() {
  return <AboutPage />
}
