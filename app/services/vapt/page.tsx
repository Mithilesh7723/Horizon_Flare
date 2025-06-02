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
  Shield,
  Search,
  Lock,
  AlertTriangle,
  CheckCircle,
  Globe,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  FileText,
  Award,
  Target,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "VAPT Services - Horizon Flare | Vulnerability Assessment & Penetration Testing India",
  description:
    "Professional VAPT services in India. Comprehensive vulnerability assessment, penetration testing, and security audits for web applications, networks, and mobile apps.",
  keywords:
    "VAPT services India, penetration testing India, vulnerability assessment, security audit, ethical hacking services, cybersecurity testing, web app security testing",
}

export default function VAPTServicesPage() {
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
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-red-900 via-orange-900 to-slate-900">
          <div className="absolute inset-0 tech-pattern opacity-30" />
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <FloatingElements />
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-orange-500/20" />

          <div className="container relative">
            <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in text-white">
              <Badge variant="outline" className="border-red-400/50 text-red-400 bg-red-400/10">
                <Shield className="w-4 h-4 mr-2" />
                VAPT Services
              </Badge>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Advanced Security
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                  Testing & Audits
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive Vulnerability Assessment and Penetration Testing services to identify, assess, and
                remediate security vulnerabilities before attackers do.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-left">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                >
                  <Link href="#get-quote">
                    <Shield className="w-5 h-5 mr-2" />
                    Get Free Security Audit
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300 bg-cyan-400/10"
                >
                  <Link href="#services">
                    <Search className="w-5 h-5 mr-2" />
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
                <div className="text-4xl md:text-5xl font-bold text-red-400 mb-2">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-gray-300">Security Audits Completed</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                  <AnimatedCounter end={10000} suffix="+" />
                </div>
                <div className="text-gray-300">Vulnerabilities Found</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={99} suffix="%" />
                </div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  <AnimatedCounter end={24} suffix="/7" />
                </div>
                <div className="text-gray-300">Support Available</div>
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
                Our <GradientText>VAPT Services</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security testing across all your digital assets
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Web Application Testing",
                  description: "Comprehensive testing of web applications for OWASP Top 10 and beyond",
                  features: [
                    "SQL Injection Testing",
                    "XSS Vulnerability Assessment",
                    "Authentication Bypass",
                    "Business Logic Flaws",
                  ],
                  color: "from-blue-800 to-indigo-600",
                  bgColor: "from-blue-900/60 to-indigo-800/60",
                },
                {
                  icon: Monitor,
                  title: "Network Penetration Testing",
                  description: "In-depth network security assessment and infrastructure testing",
                  features: ["Network Scanning", "Service Enumeration", "Privilege Escalation", "Lateral Movement"],
                  color: "from-cyan-800 to-teal-600",
                  bgColor: "from-cyan-900/60 to-teal-800/60",
                },
                {
                  icon: Smartphone,
                  title: "Mobile App Security",
                  description: "Security testing for iOS and Android applications",
                  features: ["Static Code Analysis", "Dynamic Testing", "API Security", "Data Storage Security"],
                  color: "from-indigo-800 to-purple-600",
                  bgColor: "from-indigo-900/60 to-purple-800/60",
                },
                {
                  icon: Cloud,
                  title: "Cloud Security Assessment",
                  description: "Security evaluation of cloud infrastructure and configurations",
                  features: ["AWS/Azure/GCP Audit", "Container Security", "IAM Assessment", "Configuration Review"],
                  color: "from-teal-800 to-emerald-600",
                  bgColor: "from-teal-900/60 to-emerald-800/60",
                },
                {
                  icon: Database,
                  title: "Database Security Testing",
                  description: "Comprehensive database security assessment and hardening",
                  features: ["Access Control Review", "Privilege Escalation", "Data Encryption", "Backup Security"],
                  color: "from-blue-800 to-sky-600",
                  bgColor: "from-blue-900/60 to-sky-800/60",
                },
                {
                  icon: Lock,
                  title: "API Security Testing",
                  description: "Thorough testing of REST and GraphQL APIs for security vulnerabilities",
                  features: ["Authentication Testing", "Authorization Bypass", "Rate Limiting", "Data Validation"],
                  color: "from-indigo-600 to-violet-400",
                  bgColor: "from-indigo-900/60 to-violet-800/60",
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
                    <CardTitle className="text-white group-hover:text-orange-400 transition-colors">
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

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <GradientText>Testing Process</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to comprehensive security testing
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Reconnaissance",
                  description: "Information gathering and target analysis",
                  icon: Search,
                  color: "from-red-500 to-amber-500",
                },
                {
                  step: "02",
                  title: "Vulnerability Assessment",
                  description: "Automated and manual vulnerability identification",
                  icon: AlertTriangle,
                  color: "from-amber-500 to-yellow-400",
                },
                {
                  step: "03",
                  title: "Exploitation",
                  description: "Controlled exploitation to validate vulnerabilities",
                  icon: Target,
                  color: "from-blue-600 to-cyan-400",
                },
                {
                  step: "04",
                  title: "Reporting",
                  description: "Detailed report with remediation recommendations",
                  icon: FileText,
                  color: "from-emerald-600 to-teal-400",
                },
              ].map((process, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-xl transition-all duration-300 bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="text-4xl font-bold text-white/20 mb-4">{process.step}</div>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${process.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <process.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-white group-hover:text-orange-400 transition-colors">
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

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-15" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <GradientText>Pricing Plans</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to suit your security testing needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Basic VAPT",
                  price: "₹25,000",
                  period: "per assessment",
                  description: "Perfect for small applications and startups",
                  features: [
                    "Web Application Testing",
                    "Basic Network Scan",
                    "OWASP Top 10 Assessment",
                    "Executive Summary Report",
                    "Email Support",
                  ],
                  popular: false,
                  color: "from-blue-700 to-cyan-600",
                },
                {
                  name: "Professional VAPT",
                  price: "₹75,000",
                  period: "per assessment",
                  description: "Comprehensive testing for growing businesses",
                  features: [
                    "Complete Web App Testing",
                    "Network Penetration Testing",
                    "API Security Testing",
                    "Detailed Technical Report",
                    "Remediation Guidance",
                    "Phone Support",
                    "Re-testing Included",
                  ],
                  popular: true,
                  color: "from-orange-500 to-red-500",
                },
                {
                  name: "Enterprise VAPT",
                  price: "₹1,50,000",
                  period: "per assessment",
                  description: "Advanced testing for large organizations",
                  features: [
                    "Full Infrastructure Testing",
                    "Mobile App Security",
                    "Cloud Security Assessment",
                    "Social Engineering Testing",
                    "Compliance Reporting",
                    "24/7 Support",
                    "Quarterly Re-assessments",
                    "On-site Consultation",
                  ],
                  popular: false,
                  color: "from-purple-500 to-pink-500",
                },
              ].map((plan, index) => (
                <Card
                  key={index}
                  className={`relative group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/5 border backdrop-blur-sm animate-scale-in ${
                    plan.popular ? "border-orange-400 scale-105" : "border-white/10"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                    <CardDescription className="text-gray-300">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 transition-all duration-300 text-white`}
                      asChild
                    >
                      <Link href="/contact">Get Started</Link>
                    </Button>
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
                  Get Your <GradientText>Free Quote</GradientText>
                </h2>
                <p className="text-xl text-gray-300">
                  Tell us about your security testing requirements and get a customized quote
                </p>
              </div>
              <Card className="shadow-2xl border-0 bg-white/10 backdrop-blur-lg border border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">VAPT Service Request</CardTitle>
                  <CardDescription className="text-gray-300">
                    Provide details about your application or infrastructure for accurate pricing
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
                      <label htmlFor="services" className="text-sm font-medium mb-2 block text-white">
                        Services Required *
                      </label>
                      <select
                        id="services"
                        className="w-full p-2 border rounded-md bg-white/10 border-white/20 text-white"
                        required
                      >
                        <option value="" className="text-black">
                          Select services
                        </option>
                        <option value="web-app" className="text-black">
                          Web Application Testing
                        </option>
                        <option value="network" className="text-black">
                          Network Penetration Testing
                        </option>
                        <option value="mobile" className="text-black">
                          Mobile App Security
                        </option>
                        <option value="cloud" className="text-black">
                          Cloud Security Assessment
                        </option>
                        <option value="api" className="text-black">
                          API Security Testing
                        </option>
                        <option value="comprehensive" className="text-black">
                          Comprehensive VAPT
                        </option>
                      </select>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="timeline" className="text-sm font-medium mb-2 block text-white">
                          Preferred Timeline
                        </label>
                        <select
                          id="timeline"
                          className="w-full p-2 border rounded-md bg-white/10 border-white/20 text-white"
                        >
                          <option value="" className="text-black">
                            Select timeline
                          </option>
                          <option value="urgent" className="text-black">
                            ASAP (1-2 weeks)
                          </option>
                          <option value="normal" className="text-black">
                            Normal (2-4 weeks)
                          </option>
                          <option value="flexible" className="text-black">
                            Flexible (1-2 months)
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
                          <option value="25k-50k" className="text-black">
                            ₹25,000 - ₹50,000
                          </option>
                          <option value="50k-1l" className="text-black">
                            ₹50,000 - ₹1,00,000
                          </option>
                          <option value="1l-2l" className="text-black">
                            ₹1,00,000 - ₹2,00,000
                          </option>
                          <option value="above-2l" className="text-black">
                            Above ₹2,00,000
                          </option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="details" className="text-sm font-medium mb-2 block text-white">
                        Project Details *
                      </label>
                      <Textarea
                        id="details"
                        placeholder="Describe your application/infrastructure, number of pages/endpoints, technology stack, compliance requirements, etc."
                        rows={4}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Shield className="w-4 h-4 mr-2" />
                      Get Free Quote
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
                Professional VAPT services to secure your digital assets and protect against cyber threats.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-orange-400">VAPT Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                    Web Application Testing
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                    Network Penetration Testing
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                    Mobile App Security
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                    Cloud Security Assessment
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-blue-400">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Security Blog
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">
                    Security Training
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
              <Badge variant="outline" className="border-orange-400 text-orange-400 bg-orange-400/10">
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
