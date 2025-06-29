import type { Metadata } from "next"
import TrainingPage from "./training-page"

export const metadata: Metadata = {
  title: "Cybersecurity Training & Ethical Hacking Courses | Horizon Flare",
  description:
    "Professional cybersecurity training programs in India. Ethical hacking courses, corporate training, certification preparation, and hands-on labs by industry experts.",
  keywords:
    "cybersecurity training India, ethical hacking courses, corporate training, certification preparation, hands-on labs, security training",
}

export default function Training() {
  return <TrainingPage />
}
