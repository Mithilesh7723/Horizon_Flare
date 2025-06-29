"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Code, GraduationCap, ArrowRight, CheckCircle, Users, Clock, Award } from "lucide-react"
import Link from "next/link"
import LayoutWrapper from "@/components/layout-wrapper"

export default function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: "VAPT Services",
      description: "Comprehensive security testing to identify vulnerabilities before attackers do.",
      gradient: "from-red-500 via-orange-500 to-yellow-500",
      features: [
        "Network Penetration Testing",
        "Web Application Testing",
        "Mobile App Security",
        "Compliance Auditing",
      ],
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Secure, scalable web applications built with modern technologies.",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      features: ["Full-Stack Development", "API Development", "Cloud Deployment", "Security Implementation"],
    },
    {
      icon: GraduationCap,
      title: "Training Programs",
      description: "Cybersecurity and development training for individuals and organizations.",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      features: ["Ethical Hacking Courses", "Corporate Training", "Certification Prep", "Hands-on Labs"],
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We begin with a comprehensive analysis of your requirements, current infrastructure, and security posture.",
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description:
        "Our experts develop a customized strategy and detailed project plan tailored to your specific needs.",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "We execute the plan with precision, maintaining constant communication and adhering to best practices.",
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Rigorous testing ensures all deliverables meet the highest standards of quality and security.",
    },
    {
      step: "05",
      title: "Delivery & Support",
      description: "We deliver comprehensive results with detailed documentation and ongoing support.",
    },
  ]

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
                Our Services
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-8 font-light max-w-4xl mx-auto">
              Comprehensive cybersecurity and technology solutions designed to protect and empower your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
                What We Offer
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              End-to-end solutions that secure, enhance, and transform your digital presence
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-white/30 transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} bg-opacity-20 flex items-center justify-center flex-shrink-0`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-white/70 leading-relaxed">{service.description}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Cute Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/services/vapt">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500/20 to-orange-500/20 hover:from-red-500/30 hover:to-orange-500/30 border border-red-400/30 hover:border-red-400/50 transition-all duration-300 group"
              >
                <Shield className="w-5 h-5 mr-2 text-red-400 group-hover:scale-110 transition-transform" />
                Explore VAPT Services
              </Button>
            </Link>
            <Link href="/services/development">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <Code className="w-5 h-5 mr-2 text-cyan-400 group-hover:scale-110 transition-transform" />
                Explore Development
              </Button>
            </Link>
            <Link href="/services/training">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 border border-green-400/30 hover:border-green-400/50 transition-all duration-300 group"
              >
                <GraduationCap className="w-5 h-5 mr-2 text-green-400 group-hover:scale-110 transition-transform" />
                Explore Training
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
                Our Process
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-500 opacity-30"></div>

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <div className="flex-1">
                    <Card className="bg-white/5 backdrop-blur-2xl border-white/10 hover:border-white/30 transition-all duration-500">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                            {step.step}
                          </div>
                          <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-white/70 leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot for large screens */}
                  <div className="hidden lg:block w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 border-4 border-black z-10"></div>

                  <div className="flex-1 lg:block hidden"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
                Why Choose Horizon Flare?
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Experience the difference of working with India's premier cybersecurity and innovation company
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "55+ certified professionals with extensive industry experience",
                stat: "55+",
              },
              {
                icon: Clock,
                title: "Proven Track Record",
                description: "500+ successful projects delivered on time and within budget",
                stat: "500+",
              },
              {
                icon: Award,
                title: "Industry Recognition",
                description: "MSME certified with multiple industry awards and certifications",
                stat: "25+",
              },
              {
                icon: Shield,
                title: "Security First",
                description: "Zero-compromise approach to security with 100% client satisfaction",
                stat: "100%",
              },
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto mb-4 group-hover:border-cyan-400/50 transition-all duration-300">
                    <advantage.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{advantage.stat}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
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
                Ready to Secure Your Future?
              </span>
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Let's discuss how our services can protect and enhance your digital infrastructure. Get a free
              consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0 px-10 py-7 text-lg font-semibold"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
