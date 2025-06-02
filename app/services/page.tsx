import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FloatingElements } from "@/components/ui/floating-elements"
import { GradientText } from "@/components/ui/gradient-text"
import {
  Shield,
  Code,
  GraduationCap,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Zap,
  Lock,
  Search,
  Monitor,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Users,
  BookOpen,
  Award,
  Target,
  Rocket,
  Brain,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Services - Horizon Flare | Cybersecurity, Training & Innovation Solutions",
  description:
    "Comprehensive cybersecurity services including VAPT, secure development, training programs, and innovation lab solutions for organizations across India.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
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
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/courses" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
              Courses
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-red-900 via-orange-900 to-slate-900">
          <FloatingElements />
          <div className="absolute inset-0 tech-pattern opacity-30" />
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-orange-500/20" />
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in text-white">
              <Badge variant="outline" className="border-red-400/50 text-red-400 bg-red-400/10">
                <Zap className="w-4 h-4 mr-2" />
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <GradientText>Comprehensive</GradientText>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Cybersecurity Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                From vulnerability assessments to innovation labs, we provide end-to-end cybersecurity and technology
                solutions tailored for the modern digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-15" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* VAPT Services */}
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-slate-800/80 to-blue-900/80 backdrop-blur-md border border-blue-500/30 animate-slide-in-left">
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-red-400 transition-colors text-white">
                    VAPT & Cybersecurity Services
                  </CardTitle>
                  <CardDescription className="text-base text-gray-300">
                    Advanced vulnerability assessment and penetration testing with AI-powered threat detection and
                    comprehensive security audits.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Globe, text: "Web Application Testing" },
                      { icon: Monitor, text: "Network Security Audit" },
                      { icon: Database, text: "Database Security" },
                      { icon: Cloud, text: "Cloud Security Assessment" },
                      { icon: Smartphone, text: "Mobile App Testing" },
                      { icon: Lock, text: "Compliance Assessment" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <item.icon className="w-4 h-4 text-red-400" />
                        {item.text}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-red-400">What's Included:</h4>
                    <ul className="space-y-2">
                      {[
                        "Comprehensive vulnerability scanning",
                        "Manual penetration testing",
                        "Detailed security reports",
                        "Remediation guidance",
                        "Post-assessment support",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href="/services/vapt">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Development Services */}
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-slate-800/80 to-blue-900/80 backdrop-blur-md border border-blue-500/30 animate-slide-in-right">
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Code className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-blue-400 transition-colors text-white">
                    Secure Development Services
                  </CardTitle>
                  <CardDescription className="text-base text-gray-300">
                    Build bulletproof applications with security-first development practices and modern DevSecOps
                    methodologies.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Globe, text: "Secure Web Apps" },
                      { icon: Database, text: "API Security" },
                      { icon: Cloud, text: "DevSecOps" },
                      { icon: Monitor, text: "Code Review" },
                      { icon: Lock, text: "Security Testing" },
                      { icon: Zap, text: "Performance Optimization" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <item.icon className="w-4 h-4 text-blue-400" />
                        {item.text}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-blue-400">What's Included:</h4>
                    <ul className="space-y-2">
                      {[
                        "Security-first architecture design",
                        "Secure coding practices",
                        "Automated security testing",
                        "CI/CD pipeline integration",
                        "Ongoing security monitoring",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href="/services/development">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Training Services */}
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-slate-800/80 to-blue-900/80 backdrop-blur-md border border-blue-500/30 animate-scale-in">
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-green-400 transition-colors text-white">
                    Cybersecurity Training
                  </CardTitle>
                  <CardDescription className="text-base text-gray-300">
                    Industry-leading training programs with hands-on labs, real-world scenarios, and career support for
                    aspiring cybersecurity professionals.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Shield, text: "Ethical Hacking" },
                      { icon: Search, text: "VAPT Certification" },
                      { icon: Monitor, text: "Live Labs" },
                      { icon: BookOpen, text: "Course Materials" },
                      { icon: Users, text: "Mentorship" },
                      { icon: Award, text: "Career Support" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <item.icon className="w-4 h-4 text-green-400" />
                        {item.text}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-green-400">What's Included:</h4>
                    <ul className="space-y-2">
                      {[
                        "Comprehensive course curriculum",
                        "Hands-on practical labs",
                        "Industry expert instructors",
                        "Certification upon completion",
                        "Job placement assistance",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href="/services/training">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Innovation Lab */}
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-slate-800/80 to-blue-900/80 backdrop-blur-md border border-blue-500/30 animate-fade-in">
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-purple-400 transition-colors text-white">
                    Innovation Studio
                  </CardTitle>
                  <CardDescription className="text-base text-gray-300">
                    Collaborative space for breakthrough technologies, social impact projects, and cutting-edge research
                    in cybersecurity and emerging tech.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Brain, text: "R&D Projects" },
                      { icon: Rocket, text: "Tech Incubation" },
                      { icon: Target, text: "Social Impact" },
                      { icon: Users, text: "Collaboration" },
                      { icon: Lightbulb, text: "Innovation" },
                      { icon: Award, text: "Mentorship" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <item.icon className="w-4 h-4 text-purple-400" />
                        {item.text}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-purple-400">What's Included:</h4>
                    <ul className="space-y-2">
                      {[
                        "Access to cutting-edge technology",
                        "Expert mentorship and guidance",
                        "Collaborative project environment",
                        "Funding opportunities",
                        "Industry partnerships",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <Link href="/innovation-lab">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <GradientText>Process</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to delivering exceptional cybersecurity solutions
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description:
                    "We analyze your current security posture and identify potential vulnerabilities and risks.",
                  icon: Search,
                },
                {
                  step: "02",
                  title: "Planning",
                  description: "We develop a comprehensive strategy tailored to your specific needs and requirements.",
                  icon: Target,
                },
                {
                  step: "03",
                  title: "Implementation",
                  description:
                    "Our expert team executes the plan using industry best practices and cutting-edge tools.",
                  icon: Rocket,
                },
                {
                  step: "04",
                  title: "Monitoring",
                  description:
                    "We provide ongoing support and monitoring to ensure continued security and performance.",
                  icon: Monitor,
                },
              ].map((process, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-slate-800/80 to-blue-900/80 backdrop-blur-md border border-blue-500/30 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="text-4xl font-bold text-white/20 mb-4">{process.step}</div>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <process.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors text-white">
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-orange-500 to-secondary text-white relative overflow-hidden">
          <FloatingElements />
          <div className="absolute inset-0 bg-black/20" />
          <div className="container relative text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto animate-slide-in-left">
              Let's discuss your cybersecurity needs and find the perfect solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
              <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-gray-100">
                <Link href="/contact">
                  <Shield className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 transition-colors"
              >
                <Link href="/courses">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Explore Training
                </Link>
              </Button>
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
              <p className="text-gray-300 text-sm">
                Igniting ideas and powering impact through innovative cybersecurity solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services/vapt" className="text-gray-300 hover:text-white transition-colors">
                    VAPT Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/development" className="text-gray-300 hover:text-white transition-colors">
                    Secure Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/training" className="text-gray-300 hover:text-white transition-colors">
                    Training Programs
                  </Link>
                </li>
                <li>
                  <Link href="/services/innovation" className="text-gray-300 hover:text-white transition-colors">
                    Innovation Lab
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/tools" className="text-gray-300 hover:text-white transition-colors">
                    Security Tools
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Horizon Flare. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Badge variant="outline" className="border-primary text-primary bg-primary/10">
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
