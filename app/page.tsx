"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Code,
  Lightbulb,
  GraduationCap,
  ArrowRight,
  Lock,
  Rocket,
  Users,
  Award,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import LayoutWrapper from "@/components/layout-wrapper"

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-32">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 100 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 border border-cyan-400/50 backdrop-blur-xl shadow-lg shadow-cyan-500/20">
              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Award className="w-4 h-4 text-cyan-400" />
              </motion.div>
              <span className="text-sm font-medium text-cyan-300">MSME Certified</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-1.5 h-1.5 rounded-full bg-cyan-400"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4, type: "spring", stiffness: 80 }}
            className="text-5xl md:text-7xl font-black mb-8 leading-none"
          >
            <motion.span
              className="bg-gradient-to-r from-cyan-300 via-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent bg-[length:200%_200%]"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              style={{ backgroundImage: "linear-gradient(45deg, #67e8f9, #a855f7, #ec4899, #fb923c, #67e8f9)" }}
            >
              India&apos;s Innovation Powerhouse
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-8"
          >
            <motion.p
              className="text-3xl md:text-4xl text-white/90 mb-4 font-light tracking-wide"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Igniting Ideas, Powering Impact
            </motion.p>
            <div className="flex justify-center">
              <motion.div
                className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 2, delay: 1.2 }}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Transforming the digital landscape through cutting-edge cybersecurity, innovative web development,
            groundbreaking research, and revolutionary educational technology solutions that shape tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 border-0 px-10 py-7 text-lg font-semibold shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Explore Services
                  </motion.span>
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 hover:bg-white/10 hover:border-white/50 hover:text-white px-10 py-7 text-lg font-semibold bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="cursor-pointer group"
              onClick={() => scrollToSection("services")}
            >
              <div className="p-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 group-hover:border-cyan-400/50 transition-all duration-300">
                <ChevronDown className="w-6 h-6 text-white/60 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Comprehensive solutions that drive innovation and secure your digital future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "VAPT Services",
                description:
                  "Advanced vulnerability assessment and penetration testing to safeguard your digital assets with military-grade security.",
                href: "/services/vapt",
                gradient: "from-red-500 via-orange-500 to-yellow-500",
                features: ["Vulnerability Assessment", "Penetration Testing", "Security Audits", "Compliance"],
              },
              {
                icon: Code,
                title: "Web Development",
                description:
                  "Cutting-edge web applications built with modern technologies, AI integration, and performance optimization.",
                href: "/services/development",
                gradient: "from-cyan-500 via-blue-500 to-indigo-500",
                features: ["Full-Stack Development", "API Integration", "Cloud Deployment", "Performance Optimization"],
              },
              {
                icon: GraduationCap,
                title: "Training Programs",
                description:
                  "Comprehensive cybersecurity and development training programs for individuals and organizations.",
                href: "/services/training",
                gradient: "from-green-500 via-emerald-500 to-teal-500",
                features: ["Ethical Hacking", "Cybersecurity Courses", "Corporate Training", "Certification Prep"],
              },
              {
                icon: Lightbulb,
                title: "Innovation Lab",
                description:
                  "Research and development lab for breakthrough technologies, AI solutions, and disruptive innovations.",
                href: "/innovation-lab",
                gradient: "from-purple-500 via-pink-500 to-rose-500",
                features: ["R&D Projects", "Prototype Development", "Tech Consulting", "Innovation Strategy"],
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 100, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -15,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="group perspective-1000"
              >
                <Link href={service.href}>
                  <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-white/30 transition-all duration-500 shadow-2xl hover:shadow-2xl transform-gpu cursor-pointer">
                    <CardContent className="p-8 relative overflow-hidden">
                      <motion.div className="relative mb-6" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center relative overflow-hidden group-hover:border-white/40 transition-all duration-300">
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                          />
                          <motion.div
                            animate={{
                              rotate: [0, 2, -2, 0],
                              scale: [1, 1.05, 1],
                            }}
                            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                            className="relative z-10"
                          >
                            <service.icon className="w-8 h-8 text-white drop-shadow-lg" />
                          </motion.div>
                        </div>
                      </motion.div>

                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                        {service.title}
                      </h3>

                      <p className="text-white/70 mb-6 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                        {service.description}
                      </p>

                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm text-white/60 group-hover:text-white/70 transition-colors duration-300"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 mr-3 shadow-sm" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-12"
          >
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Projects Delivered", icon: Rocket },
                { number: "50+", label: "Security Audits", icon: Lock },
                { number: "100+", label: "Happy Clients", icon: Users },
                { number: "25+", label: "Awards Won", icon: Award },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="mb-4">
                    <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Transform Your Digital Future?
              </span>
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Join hundreds of satisfied clients who trust Horizon Flare for their cybersecurity and development needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0 px-10 py-7 text-lg font-semibold"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 hover:bg-white/10 hover:border-white/50 hover:text-white px-10 py-7 text-lg font-semibold bg-white/5 backdrop-blur-xl"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
