import type { Metadata } from "next"
import DevelopmentPage from "./development-page"

export const metadata: Metadata = {
  title: "Secure Web Development Services - Full Stack Development | Horizon Flare",
  description:
    "Professional web development services with security-first approach. Full-stack development, API integration, cloud deployment, and performance optimization by expert developers.",
  keywords:
    "web development India, secure web development, full stack development, API development, cloud deployment, React development",
}

export default function Development() {
  return <DevelopmentPage />
}
