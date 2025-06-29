import type { Metadata } from "next"
import VAPTPage from "./vapt-page"

export const metadata: Metadata = {
  title: "VAPT Services - Vulnerability Assessment & Penetration Testing | Horizon Flare",
  description:
    "Professional VAPT services in India. Comprehensive vulnerability assessment and penetration testing for web applications, networks, and mobile apps. MSME certified cybersecurity experts.",
  keywords:
    "VAPT services India, vulnerability assessment, penetration testing, security testing, ethical hacking, cybersecurity audit",
}

export default function VAPT() {
  return <VAPTPage />
}
