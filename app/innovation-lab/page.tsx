import type { Metadata } from "next"
import InnovationLabPage from "./innovation-lab-page"

export const metadata: Metadata = {
  title: "Innovation Lab - R&D and Technology Innovation | Horizon Flare",
  description:
    "Horizon Flare's Innovation Lab: Cutting-edge research and development in AI, cybersecurity, and emerging technologies. Prototype development and technology consulting services.",
  keywords:
    "innovation lab India, R&D services, technology innovation, AI research, prototype development, technology consulting",
}

export default function InnovationLab() {
  return <InnovationLabPage />
}
