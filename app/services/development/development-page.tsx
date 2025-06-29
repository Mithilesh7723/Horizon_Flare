"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Code,
  Globe,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Monitor,
  Server,
} from "lucide-react"
import LayoutWrapper from "@/components/layout-wrapper"
import { useState } from "react";

export default function DevelopmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    service: "",
    details: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const developmentServices = [
    {
      icon: Globe,
      title: "Full-Stack Web Development",
      description: "End-to-end web application development with modern frameworks and secure architecture.",
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"],
      features: [
        "Responsive Design",
        "Progressive Web Apps",
        "Real-time Features",
        "API Integration",
        "Database Design",
        "Security Implementation",
      ],
      price: "Starting from ₹50,000",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Development",
      description: "Mobile-optimized web applications that provide native-like experience across all devices.",
      technologies: ["React Native", "Flutter", "PWA", "Ionic", "Cordova", "Native APIs"],
      features: [
        "Cross-platform Compatibility",
        "Offline Functionality",
        "Push Notifications",
        "Device Integration",
        "App Store Deployment",
        "Performance Optimization",
      ],
      price: "Starting from ₹75,000",
    },
    {
      icon: Cloud,
      title: "Cloud-Native Solutions",
      description: "Scalable cloud applications with microservices architecture and DevOps integration.",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
      features: [
        "Microservices Architecture",
        "Auto-scaling",
        "Load Balancing",
        "CI/CD Pipelines",
        "Monitoring & Logging",
        "Disaster Recovery",
      ],
      price: "Starting from ₹1,00,000",
    },
    {
      icon: Database,
      title: "API Development & Integration",
      description: "RESTful and GraphQL APIs with comprehensive documentation and security measures.",
      technologies: ["REST", "GraphQL", "OpenAPI", "JWT", "OAuth", "Webhooks"],
      features: [
        "RESTful API Design",
        "GraphQL Implementation",
        "API Documentation",
        "Rate Limiting",
        "Authentication & Authorization",
        "Third-party Integrations",
      ],
      price: "Starting from ₹30,000",
    },
    {
      icon: Shield,
      title: "Security-First Development",
      description: "Web applications built with security as a core principle, not an afterthought.",
      technologies: ["OWASP", "SSL/TLS", "WAF", "SAST", "DAST", "Security Headers"],
      features: [
        "Secure Coding Practices",
        "Input Validation",
        "Authentication Systems",
        "Data Encryption",
        "Security Testing",
        "Compliance Implementation",
      ],
      price: "Starting from ₹40,000",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "High-performance web applications with advanced optimization techniques.",
      technologies: ["CDN", "Caching", "Compression", "Lazy Loading", "Code Splitting", "PWA"],
      features: [
        "Page Speed Optimization",
        "Image Optimization",
        "Code Minification",
        "Caching Strategies",
        "Bundle Optimization",
        "Core Web Vitals",
      ],
      price: "Starting from ₹25,000",
    },
  ]

  const techStack = [
    {
      category: "Frontend",
      icon: Monitor,
      technologies: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Vue.js", level: 85 },
        { name: "Angular", level: 80 },
        { name: "Svelte", level: 75 },
      ],
    },
    {
      category: "Backend",
      icon: Server,
      technologies: [
        { name: "Node.js", level: 95 },
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "Go", level: 80 },
        { name: "PHP", level: 85 },
        { name: "C#", level: 75 },
      ],
    },
    {
      category: "Database",
      icon: Database,
      technologies: [
        { name: "PostgreSQL", level: 95 },
        { name: "MongoDB", level: 90 },
        { name: "MySQL", level: 88 },
        { name: "Redis", level: 85 },
        { name: "Elasticsearch", level: 80 },
        { name: "GraphQL", level: 85 },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      technologies: [
        { name: "AWS", level: 90 },
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 85 },
        { name: "Azure", level: 80 },
        { name: "Google Cloud", level: 75 },
        { name: "Terraform", level: 80 },
      ],
    },
  ]

  const portfolio = [
    {
      title: "E-commerce Platform",
      description: "Secure multi-vendor marketplace with payment integration and real-time analytics.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      features: ["Multi-vendor support", "Payment gateway", "Real-time chat", "Analytics dashboard"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Healthcare Management System",
      description: "HIPAA-compliant patient management system with secure data storage and telemedicine features.",
      technologies: ["React Native", "Firebase", "WebRTC", "Google Cloud"],
      features: ["Patient records", "Appointment scheduling", "Video consultations", "E-prescribing"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Financial Dashboard",
      description: "Real-time financial analytics platform with advanced security measures.",
      technologies: ["Vue.js", "Java", "MySQL", "Redis", "AWS"],
      features: ["Real-time data", "Advanced charts", "Risk analysis", "Compliance reporting"],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const developmentProcess = [
    {
      phase: "01",
      title: "Discovery & Planning",
      description: "Understanding requirements, defining scope, and creating project roadmap.",
      deliverables: ["Requirements document", "Technical specification", "Project timeline", "Resource allocation"],
    },
    {
      phase: "02",
      title: "Design & Architecture",
      description: "Creating user experience design and technical architecture.",
      deliverables: ["UI/UX designs", "System architecture", "Database design", "API specifications"],
    },
    {
      phase: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance.",
      deliverables: ["Working software", "Test reports", "Code documentation", "Security assessment"],
    },
    {
      phase: "04",
      title: "Deployment & Launch",
      description: "Production deployment with monitoring and performance optimization.",
      deliverables: ["Live application", "Deployment guide", "Monitoring setup", "Performance report"],
    },
    {
      phase: "05",
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and feature enhancements.",
      deliverables: ["Bug fixes", "Feature updates", "Performance monitoring", "Security patches"],
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
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400/50 mb-8 backdrop-blur-xl shadow-2xl shadow-cyan-500/20">
              <Code className="w-5 h-5 text-cyan-400" />
              <span className="text-base font-medium text-cyan-300">Web Development</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Secure Web Development
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-8 font-light max-w-4xl mx-auto">
              Building modern, secure, and scalable web applications that drive business growth
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Development Services
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Comprehensive web development solutions with security and performance at the core
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {developmentServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-cyan-400/30 transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-white/70 leading-relaxed mb-4">{service.description}</p>
                        <div className="text-lg font-semibold text-cyan-400">{service.price}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
        </div>
      </section>

      {/* Tech Stack Section */}
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Our Technology Stack
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Cutting-edge technologies and frameworks for modern web development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-cyan-400/30 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <category.icon className="w-8 h-8 text-cyan-400" />
                      <h3 className="text-xl font-bold text-white">{category.category}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.technologies.map((tech, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-white/70 text-sm">{tech.name}</span>
                            <span className="text-cyan-400 text-sm">{tech.level}%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tech.level}%` }}
                              transition={{ duration: 1, delay: idx * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Showcasing our expertise through successful project implementations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-cyan-400/30 transition-all duration-500 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 rounded bg-cyan-500/20 text-cyan-300 text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-white/60">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Development Process
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              A structured approach that ensures quality, security, and timely delivery
            </p>
          </motion.div>

          <div className="space-y-8">
            {developmentProcess.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className="flex-1">
                  <Card className="bg-white/5 backdrop-blur-2xl border-white/10 hover:border-cyan-400/30 transition-all duration-500">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">
                          {phase.phase}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                      </div>
                      <p className="text-white/70 mb-4 leading-relaxed">{phase.description}</p>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Deliverables:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-center text-sm text-white/60">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Start Your Project
              </span>
            </h2>
            <p className="text-xl text-white/60">
              Ready to build your next web application? Let's discuss your requirements and create something amazing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 backdrop-blur-xl border-white/10">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Name *</label>
                      <Input
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Email *</label>
                      <Input
                        type="email"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Company</label>
                      <Input
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Budget Range</label>
                      <select className="w-full p-3 bg-white/5 backdrop-blur-xl border border-white/20 rounded-md text-white focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 appearance-none cursor-pointer hover:bg-white/10">
                        <option value="" className="bg-gray-900 text-white">
                          Select budget range
                        </option>
                        <option value="25k-50k" className="bg-gray-900 text-white">
                          ₹25,000 - ₹50,000
                        </option>
                        <option value="50k-100k" className="bg-gray-900 text-white">
                          ₹50,000 - ₹1,00,000
                        </option>
                        <option value="100k-250k" className="bg-gray-900 text-white">
                          ₹1,00,000 - ₹2,50,000
                        </option>
                        <option value="250k+" className="bg-gray-900 text-white">
                          ₹2,50,000+
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Development Service *</label>
                    <select
                      className="w-full p-3 bg-white/5 backdrop-blur-xl border border-white/20 rounded-md text-white focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 appearance-none cursor-pointer hover:bg-white/10"
                      required
                    >
                      <option value="" className="bg-gray-900 text-white">
                        Select development service
                      </option>
                      <option value="fullstack" className="bg-gray-900 text-white">
                        Full-Stack Web Development
                      </option>
                      <option value="mobile" className="bg-gray-900 text-white">
                        Mobile-First Development
                      </option>
                      <option value="cloud" className="bg-gray-900 text-white">
                        Cloud-Native Solutions
                      </option>
                      <option value="api" className="bg-gray-900 text-white">
                        API Development & Integration
                      </option>
                      <option value="security" className="bg-gray-900 text-white">
                        Security-First Development
                      </option>
                      <option value="optimization" className="bg-gray-900 text-white">
                        Performance Optimization
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Project Details</label>
                    <Textarea
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40 min-h-[120px]"
                      placeholder="Describe your project requirements, timeline, and any specific features you need..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 border-0"
                  >
                    Request Development Proposal
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
