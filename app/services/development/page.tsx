import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FloatingElements } from "@/components/ui/floating-elements"
import { GradientText } from "@/components/ui/gradient-text"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import {
  Code,
  Shield,
  Database,
  Cloud,
  Smartphone,
  Globe,
  CheckCircle,
  Users,
  Award,
  Rocket,
  Monitor,
  GitBranch,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Secure Development Services - Horizon Flare | Security-First Web & Mobile Development",
  description:
    "Professional secure development services in India. Build bulletproof web applications, mobile apps, and APIs with security-first development practices and DevSecOps.",
  keywords:
    "secure web development India, DevSecOps services, secure mobile app development, API security development, security-first development, secure coding practices",
}

export default function DevelopmentServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Horizon Flare Logo" width={80} height={80} className="rounded-lg" />
            <span className="text-2xl font-bold -ml-2">
              <GradientText splitColors={true}>Horizon Flare</GradientText>
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-primary">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/courses" className="text-sm font-medium hover:text-primary transition-colors">
              Courses
            </Link>
            <Link href="/innovation-lab" className="text-sm font-medium hover:text-primary transition-colors">
              Innovation Lab
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90"
          >
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-900 to-slate-900">
          <div className="absolute inset-0 tech-pattern opacity-30" />
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <FloatingElements />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-cyan-500/20" />

          <div className="container relative">
            <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in text-white">
              <Badge variant="outline" className="border-blue-400/50 text-blue-400 bg-blue-400/10">
                <Code className="w-4 h-4 mr-2" />
                Secure Development
              </Badge>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                  Security-First
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Development
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Build bulletproof applications with our security-first development approach. From web apps to mobile
                solutions, we integrate security at every stage of development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-left">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                >
                  <Link href="#get-quote">
                    <Code className="w-5 h-5 mr-2" />
                    Start Your Project
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition-all duration-300 bg-orange-400/10"
                >
                  <Link href="#services">
                    <Shield className="w-5 h-5 mr-2" />
                    View Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-15" />
          <div className="container relative">
            <div className="grid md:grid-cols-4 gap-8 text-white">
              <div className="text-center group animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={200} suffix="+" />
                </div>
                <div className="text-gray-300">Secure Applications Built</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  <AnimatedCounter end={99} suffix="%" />
                </div>
                <div className="text-gray-300">Security Score</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                  <AnimatedCounter end={24} suffix="/7" />
                </div>
                <div className="text-gray-300">Development Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section
          id="services"
          className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
        >
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <GradientText>Development Services</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive secure development solutions for modern businesses
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Secure Web Applications",
                  description: "Full-stack web development with security built-in from the ground up",
                  features: [
                    "React/Next.js Development",
                    "Secure Authentication",
                    "API Security",
                    "Performance Optimization",
                  ],
                  color: "from-blue-500 to-cyan-500",
                  bgColor: "from-blue-900/20 to-cyan-900/20",
                },
                {
                  icon: Smartphone,
                  title: "Mobile App Development",
                  description: "Native and cross-platform mobile apps with enterprise-grade security",
                  features: ["iOS & Android Apps", "React Native", "Secure Data Storage", "Biometric Authentication"],
                  color: "from-purple-500 to-pink-500",
                  bgColor: "from-purple-900/20 to-pink-900/20",
                },
                {
                  icon: Database,
                  title: "API Development",
                  description: "RESTful and GraphQL APIs with comprehensive security measures",
                  features: ["REST API Development", "GraphQL Implementation", "Rate Limiting", "OAuth Integration"],
                  color: "from-green-500 to-emerald-500",
                  bgColor: "from-green-900/20 to-emerald-900/20",
                },
                {
                  icon: Cloud,
                  title: "Cloud-Native Solutions",
                  description: "Scalable cloud applications with modern DevOps practices",
                  features: ["AWS/Azure/GCP", "Microservices", "Container Security", "Auto-scaling"],
                  color: "from-orange-500 to-red-500",
                  bgColor: "from-orange-900/20 to-red-900/20",
                },
                {
                  icon: GitBranch,
                  title: "DevSecOps Implementation",
                  description: "Integrate security into your development pipeline",
                  features: ["CI/CD Pipelines", "Automated Testing", "Security Scanning", "Deployment Automation"],
                  color: "from-indigo-500 to-purple-500",
                  bgColor: "from-indigo-900/20 to-purple-900/20",
                },
                {
                  icon: Monitor,
                  title: "Legacy System Modernization",
                  description: "Upgrade and secure your existing applications",
                  features: [
                    "Code Refactoring",
                    "Security Hardening",
                    "Performance Improvement",
                    "Technology Migration",
                  ],
                  color: "from-yellow-500 to-orange-500",
                  bgColor: "from-yellow-900/20 to-orange-900/20",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${service.bgColor} border border-white/10 animate-scale-in backdrop-blur-sm`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <GradientText>Technology Stack</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use cutting-edge technologies to build secure, scalable applications
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  category: "Frontend",
                  technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
                  icon: Monitor,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  category: "Backend",
                  technologies: ["Node.js", "Python", "Java", "Go", "PostgreSQL"],
                  icon: Database,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  category: "Mobile",
                  technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"],
                  icon: Smartphone,
                  color: "from-purple-500 to-pink-500",
                },
                {
                  category: "Cloud & DevOps",
                  technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
                  icon: Cloud,
                  color: "from-orange-500 to-red-500",
                },
              ].map((stack, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-xl transition-all duration-300 bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${stack.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stack.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                      {stack.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {stack.technologies.map((tech, idx) => (
                        <li key={idx} className="text-gray-300 text-sm">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-15" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <GradientText>Development Process</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures security, quality, and timely delivery
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Requirements analysis and security planning",
                  icon: Users,
                },
                {
                  step: "02",
                  title: "Design",
                  description: "Secure architecture and UI/UX design",
                  icon: Monitor,
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Secure coding with continuous testing",
                  icon: Code,
                },
                {
                  step: "04",
                  title: "Testing",
                  description: "Comprehensive security and functionality testing",
                  icon: Shield,
                },
                {
                  step: "05",
                  title: "Deployment",
                  description: "Secure deployment and ongoing monitoring",
                  icon: Rocket,
                },
              ].map((process, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-xl transition-all duration-300 bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="text-3xl font-bold text-white/20 mb-2">{process.step}</div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <process.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-white group-hover:text-cyan-400 transition-colors text-lg">
                      {process.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">{process.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section
          id="get-quote"
          className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
        >
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Start Your <GradientText>Project</GradientText>
                </h2>
                <p className="text-xl text-gray-300">
                  Tell us about your development needs and get a customized proposal
                </p>
              </div>
              <Card className="shadow-2xl border-0 bg-white/10 backdrop-blur-lg border border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Development Project Request</CardTitle>
                  <CardDescription className="text-gray-300">
                    Share your project requirements for a detailed proposal and timeline
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium mb-2 block text-white">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium mb-2 block text-white">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="text-sm font-medium mb-2 block text-white">
                          Company *
                        </label>
                        <Input
                          id="company"
                          placeholder="Your Company"
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="text-sm font-medium mb-2 block text-white">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          placeholder="+91 98765 43210"
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="projectType" className="text-sm font-medium mb-2 block text-white">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        className="w-full p-2 border rounded-md bg-white/10 border-white/20 text-white"
                        required
                      >
                        <option value="" className="text-black">
                          Select project type
                        </option>
                        <option value="web-app" className="text-black">
                          Web Application
                        </option>
                        <option value="mobile-app" className="text-black">
                          Mobile Application
                        </option>
                        <option value="api" className="text-black">
                          API Development
                        </option>
                        <option value="cloud" className="text-black">
                          Cloud Solution
                        </option>
                        <option value="modernization" className="text-black">
                          Legacy Modernization
                        </option>
                        <option value="full-stack" className="text-black">
                          Full-Stack Solution
                        </option>
                      </select>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="timeline" className="text-sm font-medium mb-2 block text-white">
                          Project Timeline
                        </label>
                        <select
                          id="timeline"
                          className="w-full p-2 border rounded-md bg-white/10 border-white/20 text-white"
                        >
                          <option value="" className="text-black">
                            Select timeline
                          </option>
                          <option value="1-3months" className="text-black">
                            1-3 months
                          </option>
                          <option value="3-6months" className="text-black">
                            3-6 months
                          </option>
                          <option value="6-12months" className="text-black">
                            6-12 months
                          </option>
                          <option value="ongoing" className="text-black">
                            Ongoing project
                          </option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="text-sm font-medium mb-2 block text-white">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          className="w-full p-2 border rounded-md bg-white/10 border-white/20 text-white"
                        >
                          <option value="" className="text-black">
                            Select budget
                          </option>
                          <option value="1l-5l" className="text-black">
                            ₹1,00,000 - ₹5,00,000
                          </option>
                          <option value="5l-10l" className="text-black">
                            ₹5,00,000 - ₹10,00,000
                          </option>
                          <option value="10l-25l" className="text-black">
                            ₹10,00,000 - ₹25,00,000
                          </option>
                          <option value="above-25l" className="text-black">
                            Above ₹25,00,000
                          </option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="requirements" className="text-sm font-medium mb-2 block text-white">
                        Project Requirements *
                      </label>
                      <Textarea
                        id="requirements"
                        placeholder="Describe your project requirements, features needed, target audience, technology preferences, etc."
                        rows={4}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Code className="w-4 h-4 mr-2" />
                      Get Project Proposal
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 tech-pattern opacity-10" />
        <div className="container py-16 relative">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image src="/logo.png" alt="Horizon Flare Logo" width={32} height={32} className="rounded-lg" />
                <span className="text-xl font-bold">Horizon Flare</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Building secure, scalable applications with cutting-edge technology and security-first approach.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-blue-400">Development Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                    Web Applications
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                    API Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                    Cloud Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-cyan-400">Technologies</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                    React & Next.js
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                    Node.js & Python
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                    React Native
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                    Cloud Platforms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-green-400">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="mailto:contact@horizonflare.in"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    contact@horizonflare.in
                  </Link>
                </li>
                <li>
                  <Link href="tel:+919876543210" className="text-gray-300 hover:text-white transition-colors">
                    +91 98765 43210
                  </Link>
                </li>
                <li>
                  <Link href="https://horizonflare.in" className="text-gray-300 hover:text-white transition-colors">
                    horizonflare.in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Horizon Flare. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Badge variant="outline" className="border-blue-400 text-blue-400 bg-blue-400/10">
                <Award className="w-3 h-3 mr-1" />
                MSME Certified
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
