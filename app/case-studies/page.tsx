import type { Metadata } from "next"
import CaseStudiesPage from "./case-studies-page"

export const metadata: Metadata = {
  title: "Case Studies - Real-World Success Stories | Horizon Flare",
  description:
    "Explore our case studies to see how Horizon Flare has helped businesses in India with cybersecurity, VAPT, and web development challenges.",
  keywords:
    "cybersecurity case studies, VAPT success stories, web development projects India, Horizon Flare clients",
}

export default function CaseStudies() {
  return <CaseStudiesPage />
}
