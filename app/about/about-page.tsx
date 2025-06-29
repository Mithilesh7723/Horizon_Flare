"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Code, Users, Award, Globe, Brain, Rocket, Target, Eye, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import LayoutWrapper from "@/components/layout-wrapper"

export default function AboutPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, type: "spring", stiffness: 80 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                About Horizon Flare
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-8 font-light max-w-4xl mx-auto">
              Pioneering the future of cybersecurity and digital innovation in India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <p className="text-xl text-white/70 mb-6 leading-relaxed">
                Founded with the vision to bridge the gap between cutting-edge technology and real-world applications,
                Horizon Flare has emerged as India's premier innovation powerhouse. We are an MSME certified company
                dedicated to transforming ideas into impactful digital solutions.
              </p>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                Our multidisciplinary team combines expertise in cybersecurity, web development, research, and education
                technology. We've been at the forefront of digital transformation, helping businesses and institutions
                secure their future while embracing innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                {["Innovation", "Security", "Excellence", "Impact"].map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300"
                  >
                    {value}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Globe, title: "Global Reach", desc: "Serving clients worldwide" },
                    { icon: Brain, title: "AI-Powered", desc: "Leveraging artificial intelligence" },
                    { icon: Shield, title: "Security First", desc: "Zero-compromise approach" },
                    { icon: Rocket, title: "Future Ready", desc: "Next-gen technologies" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                    >
                      <item.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                      <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Foundation
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              The principles that guide our journey and define our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Mission",
                description:
                  "To empower organizations with cutting-edge cybersecurity solutions and innovative technologies that protect, enhance, and transform their digital presence.",
                gradient: "from-red-500 to-orange-500",
              },
              {
                icon: Eye,
                title: "Vision",
                description:
                  "To be India's leading innovation powerhouse, setting global standards in cybersecurity and digital transformation while fostering a secure digital ecosystem.",
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                icon: Heart,
                title: "Values",
                description:
                  "Integrity, Innovation, Excellence, and Impact. We believe in ethical practices, continuous learning, and creating meaningful solutions that make a difference.",
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-white/30 transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} bg-opacity-20 flex items-center justify-center mx-auto mb-4`}
                      >
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Expertise
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              A diverse team of experts passionate about cybersecurity, innovation, and digital transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Cybersecurity Experts",
                description:
                  "Certified professionals with extensive experience in threat assessment, penetration testing, and security architecture.",
                count: "15+",
              },
              {
                icon: Code,
                title: "Developers",
                description:
                  "Full-stack developers proficient in modern technologies, cloud platforms, and secure coding practices.",
                count: "20+",
              },
              {
                icon: Brain,
                title: "AI Researchers",
                description:
                  "Data scientists and AI specialists working on cutting-edge machine learning and automation solutions.",
                count: "8+",
              },
              {
                icon: Users,
                title: "Consultants",
                description:
                  "Business and technology consultants helping organizations navigate digital transformation challenges.",
                count: "12+",
              },
            ].map((expertise, index) => (
              <motion.div
                key={expertise.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto mb-4">
                    <expertise.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{expertise.count}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{expertise.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{expertise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Recognition */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Certifications & Recognition
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by industry leaders and government bodies
            </p>
          </motion.div>

          <div className="backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  icon: Award,
                  title: "MSME Certified",
                  description:
                    "Officially recognized by the Ministry of Micro, Small and Medium Enterprises, Government of India",
                },
                {
                  icon: Shield,
                  title: "ISO Compliant",
                  description:
                    "Following international standards for information security management and quality assurance",
                },
                {
                  icon: Globe,
                  title: "Industry Recognition",
                  description: "Featured in leading cybersecurity publications and recognized by industry associations",
                },
              ].map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <cert.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-white mb-3">{cert.title}</h3>
                  <p className="text-white/60 leading-relaxed">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Work With Us?
              </span>
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Join our mission to create a more secure and innovative digital future. Let's build something amazing
              together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0 px-10 py-7 text-lg font-semibold"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/careers">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 hover:bg-white/10 hover:border-white/50 px-10 py-7 text-lg font-semibold bg-white/5 backdrop-blur-xl"
                >
                  Join Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
