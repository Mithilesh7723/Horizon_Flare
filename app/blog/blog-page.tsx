"use client"

import { motion } from "framer-motion"
import { Newspaper, ArrowRight } from "lucide-react"
import LayoutWrapper from "@/components/layout-wrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BlogPage() {
  return (
    <LayoutWrapper>
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-8">
              <Newspaper className="w-12 h-12 text-cyan-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                Our Blog is Coming Soon
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-12 font-light max-w-4xl mx-auto">
              We are preparing something amazing for you. Stay tuned for insightful articles on cybersecurity, development, and technology.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0 px-10 py-7 text-lg font-semibold"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
