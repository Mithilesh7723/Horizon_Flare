import type { Metadata } from "next"
import BlogPage from "./blog-page"

export const metadata: Metadata = {
  title: "Blog - Insights on Cybersecurity & Technology | Horizon Flare",
  description:
    "Read the latest articles and insights from the Horizon Flare team on cybersecurity, VAPT, web development, and technology trends in India.",
  keywords:
    "cybersecurity blog, technology blog India, ethical hacking articles, web development insights, Horizon Flare blog",
}

export default function Blog() {
  return <BlogPage />
}
