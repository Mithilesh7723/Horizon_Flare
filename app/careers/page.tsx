import { redirect } from 'next/navigation';
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Careers - Horizon Flare | Job Opportunities",
  description: "Explore career opportunities at Horizon Flare. We're redirecting you to our contact form.",
}

export default function CareersPage() {
  // Redirect to contact page
  redirect('/contact');
}
