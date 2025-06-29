"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MessageSquare, Globe, Linkedin, Twitter, Github, Calendar, MapPin, Clock } from "lucide-react"
import LayoutWrapper from "@/components/layout-wrapper"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })

  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmissionStatus("submitting")

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmissionStatus("success")
        setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "" })
      } else {
        setSubmissionStatus("error")
      }
    } catch (error) {
      console.error("Submission error:", error)
      setSubmissionStatus("error")
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "General inquiries and information",
      contact: "info@horizonflare.in",
      action: "mailto:info@horizonflare.in",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+91 77229 62509",
      action: "tel:+917722962509",
    },
    {
      icon: Mail,
      title: "Support Email",
      description: "Get technical support for our services",
      contact: "support@horizonflare.in",
      action: "mailto:support@horizonflare.in",
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a consultation by filling out the form below",
      contact: "Open Form",
      action: "#contact-form",
    },
  ]

  const offices = [
    {
      city: "Headquarters",
      address: "Bhopal, Madhya Pradesh, India - 462001",
      phone: "+91 77229 62509",
      email: "info@horizonflare.in",
      hours: "Mon-Fri: 9 AM - 6 PM IST",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/company/horizonflare",
      followers: "5K+ followers",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/horizonflare",
      followers: "3K+ followers",
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/horizonflare",
      followers: "Open Source Projects",
    },
    {
      icon: Globe,
      name: "Blog",
      url: "/blog",
      followers: "Latest Insights",
    },
  ]

  const faqs = [
    {
      question: "How quickly can you start a VAPT assessment?",
      answer:
        "We can typically begin VAPT assessments within 1-2 weeks of project confirmation, depending on the scope and our current capacity.",
    },
    {
      question: "Do you provide 24/7 support for security incidents?",
      answer:
        "Yes, we offer 24/7 incident response services for our enterprise clients. Contact us to learn more about our support packages.",
    },
    {
      question: "What certifications do your security experts hold?",
      answer:
        "Our team holds industry-leading certifications including CISSP, CEH, OSCP, CISM, and various cloud security certifications.",
    },
    {
      question: "Can you work with our existing security tools?",
      answer:
        "We integrate with most popular security tools and can work within your existing security infrastructure.",
    },
    {
      question: "Do you offer training for our internal team?",
      answer:
        "Yes, we provide comprehensive cybersecurity training programs that can be customized for your team's specific needs and skill levels.",
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
              <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-8 font-light max-w-4xl mx-auto">
              Ready to secure your digital future? Let's discuss how we can help protect and enhance your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
                How Can We Help?
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Choose the best way to reach us and we'll get back to you as soon as possible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const isInternalLink = method.action.startsWith("#")

              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <a
                    href={method.action}
                    target={isInternalLink ? "_self" : "_blank"}
                    rel={isInternalLink ? "" : "noopener noreferrer"}
                    className="h-full flex"
                  >
                    <Card className="bg-white/5 backdrop-blur-2xl border-white/10 h-full flex flex-col hover:border-cyan-400/30 transition-all duration-500 w-full">
                      <CardContent className="p-8 flex flex-col items-center text-center flex-grow">
                        <div className="p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 mb-6">
                          <method.icon className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                        <p className="text-white/60 mb-6 flex-grow">{method.description}</p>
                        <p className="font-semibold text-cyan-300">{method.contact}</p>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-32 px-6 relative z-10 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Send Us a Message
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/5 backdrop-blur-2xl border-white/10">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {submissionStatus === "success" && (
                    <div className="p-4 bg-green-500/20 border border-green-500/50 text-green-300 rounded-lg">
                      <p className="font-bold">Message Sent Successfully!</p>
                      <p>Thank you for reaching out. We will get back to you shortly.</p>
                    </div>
                  )}
                  {submissionStatus === "error" && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg">
                      <p className="font-bold">Submission Failed</p>
                      <p>Something went wrong. Please try again or contact us directly at info@horizonflare.in.</p>
                    </div>
                  )}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Company/Organization
                      </label>
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                      Service Interest
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-white/20">
                        <SelectItem value="vapt">VAPT Services</SelectItem>
                        <SelectItem value="development">Web Development</SelectItem>
                        <SelectItem value="training">Training Programs</SelectItem>
                        <SelectItem value="innovation">Innovation Lab</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400 resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 border-0 py-6 text-lg font-semibold"
                  >
                    {submissionStatus === "submitting" ? "Submitting..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
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
                Our Offices
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Visit us at our offices across India or connect with us remotely
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-white/30 transition-all duration-500">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">{office.city}</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                        <p className="text-white/70">{office.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <p className="text-white/70">{office.phone}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <p className="text-white/70">{office.email}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <p className="text-white/70">{office.hours}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
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
                Connect With Us
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Follow us on social media for the latest updates and insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-white/5 backdrop-blur-2xl border-white/10 hover:border-cyan-400/30 transition-all duration-500 cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <social.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold text-white mb-2">{social.name}</h3>
                    <p className="text-white/60 text-sm">{social.followers}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-2xl border-white/10">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-white mb-4">{faq.question}</h3>
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
