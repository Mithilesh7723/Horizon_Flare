"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Shield,
  Globe,
  Smartphone,
  Wifi,
  Users,
  FileText,
  CheckCircle,
  ArrowRight,
  Target,
  Search,
  AlertTriangle,
  Lock,
  Eye,
  Zap,
} from "lucide-react"
import LayoutWrapper from "@/components/layout-wrapper"
import { useState } from "react";

export default function VAPTPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    details: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const vaptServices = [
    {
      icon: Globe,
      title: "Web Application Testing",
      description:
        "Comprehensive security testing of web applications to identify vulnerabilities like SQL injection, XSS, and authentication flaws.",
      features: [
        "OWASP Top 10 Testing",
        "Authentication & Authorization",
        "Input Validation Testing",
        "Session Management",
        "Business Logic Flaws",
        "API Security Testing",
      ],
      price: "Starting from ₹25,000",
    },
    {
      icon: Target,
      title: "Network Penetration Testing",
      description:
        "In-depth testing of network infrastructure to identify security weaknesses and potential entry points.",
      features: [
        "External Network Testing",
        "Internal Network Assessment",
        "Firewall Configuration Review",
        "Network Segmentation",
        "Wireless Network Testing",
        "VPN Security Assessment",
      ],
      price: "Starting from ₹35,000",
    },
    {
      icon: Smartphone,
      title: "Mobile Application Testing",
      description: "Security assessment of mobile applications across iOS and Android platforms.",
      features: [
        "Static Code Analysis",
        "Dynamic Testing",
        "Runtime Analysis",
        "Data Storage Security",
        "Communication Security",
        "Platform-specific Testing",
      ],
      price: "Starting from ₹20,000",
    },
    {
      icon: Wifi,
      title: "Wireless Security Assessment",
      description: "Evaluation of wireless network security including WiFi, Bluetooth, and other wireless protocols.",
      features: [
        "WiFi Security Testing",
        "Bluetooth Assessment",
        "Wireless Protocol Analysis",
        "Rogue Access Point Detection",
        "Encryption Analysis",
        "Access Control Testing",
      ],
      price: "Starting from ₹15,000",
    },
    {
      icon: Users,
      title: "Social Engineering Testing",
      description: "Human-factor security testing including phishing simulations and physical security assessments.",
      features: [
        "Phishing Simulations",
        "Vishing Campaigns",
        "Physical Security Testing",
        "USB Drop Tests",
        "Tailgating Assessment",
        "Security Awareness Evaluation",
      ],
      price: "Starting from ₹30,000",
    },
    {
      icon: FileText,
      title: "Compliance Testing",
      description: "Security assessments aligned with industry standards and regulatory requirements.",
      features: [
        "ISO 27001 Assessment",
        "PCI DSS Compliance",
        "GDPR Compliance",
        "HIPAA Assessment",
        "SOX Compliance",
        "Custom Framework Testing",
      ],
      price: "Starting from ₹40,000",
    },
  ]

  const methodology = [
    {
      phase: "01",
      title: "Planning & Reconnaissance",
      description: "Define scope, gather intelligence, and understand the target environment.",
      activities: ["Scope definition", "Information gathering", "Target enumeration", "Attack surface mapping"],
    },
    {
      phase: "02",
      title: "Scanning & Enumeration",
      description: "Identify live systems, open ports, and available services.",
      activities: ["Port scanning", "Service enumeration", "Vulnerability scanning", "Network mapping"],
    },
    {
      phase: "03",
      title: "Vulnerability Assessment",
      description: "Identify and classify security vulnerabilities in the target systems.",
      activities: ["Automated scanning", "Manual testing", "Vulnerability validation", "Risk assessment"],
    },
    {
      phase: "04",
      title: "Exploitation",
      description: "Attempt to exploit identified vulnerabilities to demonstrate real-world impact.",
      activities: ["Exploit development", "Privilege escalation", "Lateral movement", "Data extraction"],
    },
    {
      phase: "05",
      title: "Post-Exploitation",
      description: "Assess the extent of compromise and potential business impact.",
      activities: ["System enumeration", "Data access assessment", "Persistence testing", "Impact analysis"],
    },
    {
      phase: "06",
      title: "Reporting",
      description: "Comprehensive documentation of findings with remediation recommendations.",
      activities: ["Executive summary", "Technical findings", "Risk ratings", "Remediation roadmap"],
    },
  ]

  const deliverables = [
    {
      icon: FileText,
      title: "Executive Summary",
      description: "High-level overview of security posture for management and stakeholders.",
    },
    {
      icon: Search,
      title: "Detailed Technical Report",
      description: "Comprehensive technical findings with proof-of-concept exploits.",
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment Matrix",
      description: "Prioritized list of vulnerabilities with business impact analysis.",
    },
    {
      icon: Lock,
      title: "Remediation Recommendations",
      description: "Step-by-step guidance for fixing identified security issues.",
    },
    {
      icon: Eye,
      title: "Compliance Mapping",
      description: "Alignment of findings with relevant compliance frameworks.",
    },
    {
      icon: Zap,
      title: "Retesting Report",
      description: "Validation of remediation efforts and security improvements.",
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
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/30 to-orange-500/30 border border-red-400/50 mb-8 backdrop-blur-xl shadow-2xl shadow-red-500/20">
              <Shield className="w-5 h-5 text-red-400" />
              <span className="text-base font-medium text-red-300">VAPT Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-red-300 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Vulnerability Assessment & Penetration Testing
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-8 font-light max-w-4xl mx-auto">
              Comprehensive security testing to identify and mitigate vulnerabilities before attackers do
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
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Our VAPT Services
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Comprehensive security testing across all attack vectors and platforms
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {vaptServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-red-400/30 transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-8 h-8 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-white/70 leading-relaxed mb-4">{service.description}</p>
                        <div className="text-lg font-semibold text-orange-400">{service.price}</div>
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

      {/* Methodology Section */}
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
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Our VAPT Methodology
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              A proven six-phase approach that ensures comprehensive security assessment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodology.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-red-400/30 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                        {phase.phase}
                      </div>
                      <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                    </div>
                    <p className="text-white/70 mb-4 leading-relaxed">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center text-sm text-white/60">
                          <div className="w-2 h-2 rounded-full bg-red-400 mr-3 flex-shrink-0" />
                          {activity}
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

      {/* Deliverables Section */}
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
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                What You'll Receive
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Comprehensive documentation and actionable insights to improve your security posture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deliverables.map((deliverable, index) => (
              <motion.div
                key={deliverable.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto mb-4 group-hover:border-red-400/50 transition-all duration-300">
                    <deliverable.icon className="w-8 h-8 text-red-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{deliverable.title}</h3>
                <p className="text-white/60 leading-relaxed">{deliverable.description}</p>
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
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Get Your Security Assessment
              </span>
            </h2>
            <p className="text-xl text-white/60">
              Ready to identify and fix security vulnerabilities? Contact us for a customized VAPT proposal.
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
                {/* --- VAPT Email Form Logic --- */}
                <form
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setSubmissionStatus("submitting");
                    try {
                      const response = await fetch("/api/send", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          name: formData.name,
                          email: formData.email,
                          company: formData.company,
                          phone: formData.phone,
                          service: `VAPT Service: ${formData.service}`,
                          message: formData.details,
                        }),
                      });
                      if (response.ok) {
                        setSubmissionStatus("success");
                        setFormData({ name: "", email: "", company: "", phone: "", service: "", details: "" });
                      } else {
                        setSubmissionStatus("error");
                      }
                    } catch {
                      setSubmissionStatus("error");
                    }
                  }}
                >
                  {submissionStatus === "success" && (
                    <div className="p-4 bg-green-500/20 border border-green-500/50 text-green-300 rounded-lg">
                      <p className="font-bold">Request Sent Successfully!</p>
                      <p>Thank you for your interest. Our team will contact you soon.</p>
                    </div>
                  )}
                  {submissionStatus === "error" && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg">
                      <p className="font-bold">Submission Failed</p>
                      <p>Something went wrong. Please try again or contact info@horizonflare.in.</p>
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Name *</label>
                      <Input
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Email *</label>
                      <Input
                        type="email"
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        placeholder="your@email.com"
                        required
                        value={formData.email}
                        onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Company</label>
                      <Input
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={e => setFormData(f => ({ ...f, company: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Phone</label>
                      <Input
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">VAPT Service Required *</label>
                    <select
                      className="w-full p-3 bg-white/5 backdrop-blur-xl border border-white/20 rounded-md text-white focus:border-red-400/50 focus:outline-none focus:ring-2 focus:ring-red-400/20 transition-all duration-300 appearance-none cursor-pointer hover:bg-white/10"
                      required
                      value={formData.service}
                      onChange={e => setFormData(f => ({ ...f, service: e.target.value }))}
                    >
                      <option value="" className="bg-gray-900 text-white">Select VAPT service</option>
                      <option value="Web Application Testing" className="bg-gray-900 text-white">Web Application Testing</option>
                      <option value="Network Penetration Testing" className="bg-gray-900 text-white">Network Penetration Testing</option>
                      <option value="Mobile Application Testing" className="bg-gray-900 text-white">Mobile Application Testing</option>
                      <option value="Wireless Security Assessment" className="bg-gray-900 text-white">Wireless Security Assessment</option>
                      <option value="Social Engineering Testing" className="bg-gray-900 text-white">Social Engineering Testing</option>
                      <option value="Compliance Testing" className="bg-gray-900 text-white">Compliance Testing</option>
                      <option value="Comprehensive VAPT" className="bg-gray-900 text-white">Comprehensive VAPT</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Project Details</label>
                    <Textarea
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40 min-h-[120px]"
                      placeholder="Tell us about your infrastructure, timeline, and specific requirements..."
                      value={formData.details}
                      onChange={e => setFormData(f => ({ ...f, details: e.target.value }))}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0"
                    disabled={submissionStatus === "submitting"}
                  >
                    {submissionStatus === "submitting" ? "Submitting..." : "Request VAPT Proposal"}
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
