import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { FloatingElements } from "@/components/ui/floating-elements"
import { GradientText } from "@/components/ui/gradient-text"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Shield,
  GraduationCap,
  Lightbulb,
  Users,
  ArrowRight,
  Send,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Contact Us - Horizon Flare | Get in Touch for Cybersecurity Solutions",
  description:
    "Contact Horizon Flare for cybersecurity services, training programs, or innovation lab collaborations. Reach us at contact@horizonflare.in or call us.",
}

export default function ContactPage() {
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
            <Link href="/services" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/courses" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
              Courses
            </Link>
            <Link
              href="/innovation-lab"
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
            >
              Innovation Lab
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-primary">
              Contact
            </Link>
          </nav>
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 text-white"
          >
            <Link href="#contact-form">Get Started</Link>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          <div className="absolute inset-0 tech-pattern opacity-30" />
          <FloatingElements />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20" />

          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in text-white">
              <Badge variant="outline" className="border-blue-400/50 text-blue-400 bg-blue-400/10">
                <MessageSquare className="w-4 h-4 mr-2" />
                Get in Touch
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                  Let's Build
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Something Amazing
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to secure your digital future? Have a project idea? Want to join our innovation lab? We're here to
                help you every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-15" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card className="text-center group hover:shadow-xl transition-all duration-300 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 h-full">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-blue-400 transition-colors text-white">Call Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-300">Ready to talk? Give us a call</p>
                  <p className="font-semibold text-lg text-white">
                    <a href="tel:+917722962509" className="hover:text-blue-400 transition-colors">+917722962509</a>
                  </p>
                  <p className="text-sm text-gray-400">Mon-Fri, 9AM-6PM IST</p>
                </CardContent>
              </Card>

              <Card
                className="text-center group hover:shadow-xl transition-all duration-300 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 h-full"
                style={{ animationDelay: "0.2s" }}
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-orange-400 transition-colors text-white">Email Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-300">Send us an email anytime</p>
                  <div className="space-y-1">
                    <p className="font-semibold text-white">
                      <a href="mailto:contact@horizonflare.in" className="hover:text-orange-400 transition-colors">contact@horizonflare.in</a>
                    </p>
                    <p className="text-sm text-gray-300">
                      <a href="mailto:info@horizonflare.in" className="hover:text-orange-400 transition-colors">info@horizonflare.in</a>
                    </p>
                    <p className="text-sm text-gray-300">
                      <a href="mailto:support@horizonflare.in" className="hover:text-orange-400 transition-colors">support@horizonflare.in</a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="text-center group hover:shadow-xl transition-all duration-300 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 h-full"
                style={{ animationDelay: "0.4s" }}
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-green-400 transition-colors text-white">Visit Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-gray-300">Come say hello at our office</p>
                  <p className="font-semibold text-white">Bhopal, Madhya Pradesh</p>
                  <p className="text-sm text-gray-400">India - 462001</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Contact Options */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Security Consultation",
                  description: "Get expert advice on your cybersecurity needs",
                  action: "Book Free Audit",
                  link: "#contact-form",
                  color: "from-red-500 to-orange-500",
                },
                {
                  icon: GraduationCap,
                  title: "Training Inquiry",
                  description: "Learn about our cybersecurity courses",
                  action: "Explore Courses",
                  link: "/courses",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation Lab",
                  description: "Join our student innovation community",
                  action: "Apply Now",
                  link: "/innovation-lab",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: Users,
                  title: "Partnership",
                  description: "Collaborate with us on projects",
                  action: "Partner With Us",
                  link: "#contact-form",
                  color: "from-green-500 to-emerald-500",
                },
              ].map((option, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 animate-scale-in h-full flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4 flex-1">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors text-white">
                      {option.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-300 flex-1">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full border-primary/50 text-primary hover:bg-primary hover:text-white"
                    >
                      <Link href={option.link}>
                        {option.action} <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section
          id="contact-form"
          className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden"
        >
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Send Us a <GradientText>Message</GradientText>
                </h2>
                <p className="text-xl text-gray-300">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card className="shadow-2xl border-0 bg-white/10 backdrop-blur-lg border border-white/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Get in Touch</CardTitle>
                    <CardDescription className="text-gray-300">
                      Tell us about your project, questions, or how we can help you
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="text-sm font-medium mb-2 block text-white">
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            required
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="text-sm font-medium mb-2 block text-white">
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            required
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="text-sm font-medium mb-2 block text-white">
                            Email *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
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
                        <label htmlFor="company" className="text-sm font-medium mb-2 block text-white">
                          Company/Organization
                        </label>
                        <Input
                          id="company"
                          placeholder="Your company name"
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="text-sm font-medium mb-2 block text-white">
                          Service Interest *
                        </label>
                        <select
                          id="service"
                          className="w-full p-2 border rounded-md bg-white/10 border-white/20 text-white"
                          required
                        >
                          <option value="" className="text-black">
                            Select a service
                          </option>
                          <option value="vapt" className="text-black">
                            VAPT & Cybersecurity
                          </option>
                          <option value="development" className="text-black">
                            Secure Web Development
                          </option>
                          <option value="training" className="text-black">
                            Cybersecurity Training
                          </option>
                          <option value="innovation" className="text-black">
                            Innovation Lab
                          </option>
                          <option value="consultation" className="text-black">
                            General Consultation
                          </option>
                          <option value="partnership" className="text-black">
                            Partnership
                          </option>
                          <option value="other" className="text-black">
                            Other
                          </option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="text-sm font-medium mb-2 block text-white">
                          Project Budget (Optional)
                        </label>
                        <select
                          id="budget"
                          className="w-full p-2 border rounded-md bg-white/10 border-white/20 text-white"
                        >
                          <option value="" className="text-black">
                            Select budget range
                          </option>
                          <option value="under-50k" className="text-black">
                            Under ₹50,000
                          </option>
                          <option value="50k-1l" className="text-black">
                            ₹50,000 - ₹1,00,000
                          </option>
                          <option value="1l-5l" className="text-black">
                            ₹1,00,000 - ₹5,00,000
                          </option>
                          <option value="5l-10l" className="text-black">
                            ₹5,00,000 - ₹10,00,000
                          </option>
                          <option value="above-10l" className="text-black">
                            Above ₹10,00,000
                          </option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="text-sm font-medium mb-2 block text-white">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project, requirements, or questions..."
                          rows={5}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Additional Information */}
                <div className="space-y-8">
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <Clock className="w-5 h-5 text-orange-400" />
                        Business Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between text-gray-300">
                        <span>Monday - Friday</span>
                        <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Saturday</span>
                        <span className="font-semibold text-white">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Sunday</span>
                        <span className="text-gray-400">Closed</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-4">
                        * Emergency support available 24/7 for existing clients
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-md border border-white/20">
                    <CardHeader>
                      <CardTitle className="text-white">Quick Response</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">Email responses within 2-4 hours</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">Phone consultations same day</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">Project proposals within 48 hours</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/10 backdrop-blur-md border border-white/20">
                    <CardHeader>
                      <CardTitle className="text-white">Follow Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex space-x-4">
                        <Link
                          href="https://linkedin.com/company/horizonflare"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </Link>
                        <Link
                          href="https://twitter.com/horizonflare"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </Link>
                        <Link
                          href="https://instagram.com/horizonflare"
                          className="text-pink-400 hover:text-pink-300 transition-colors"
                        >
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </Link>
                      </div>
                      <p className="text-sm text-gray-400 mt-4">Stay updated with our latest projects and insights</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-15" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked <GradientText>Questions</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Quick answers to common questions about our services and processes
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "How quickly can you start a security audit?",
                  answer:
                    "We can typically begin a VAPT assessment within 2-3 business days of project confirmation, depending on the scope and complexity.",
                },
                {
                  question: "Do you offer training for beginners?",
                  answer:
                    "Yes! Our courses are designed for all skill levels, from complete beginners to advanced professionals looking to specialize in cybersecurity.",
                },
                {
                  question: "What makes your innovation lab unique?",
                  answer:
                    "Our lab combines student energy with industry expertise, focusing on real-world problems and providing mentorship, resources, and funding opportunities.",
                },
                {
                  question: "Can you work with remote teams?",
                  answer:
                    "We're experienced in remote collaboration and can work with teams across India and internationally using modern communication tools.",
                },
                {
                  question: "What industries do you serve?",
                  answer:
                    "We work with startups, educational institutions, healthcare, fintech, e-commerce, and government organizations across various sectors.",
                },
                {
                  question: "Do you provide ongoing support?",
                  answer:
                    "Yes, we offer comprehensive post-project support, including monitoring, updates, and consultation to ensure continued security and performance.",
                },
              ].map((faq, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors text-white">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
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
                Igniting ideas and powering impact through innovative cybersecurity solutions and student-led
                innovation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-orange-400">Services</h3>
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
                  <Link href="/innovation-lab" className="text-gray-300 hover:text-white transition-colors">
                    Innovation Lab
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-blue-400">Resources</h3>
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
              <h3 className="font-semibold mb-4 text-green-400">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="mailto:info@horizonflare.in" className="text-gray-300 hover:text-white transition-colors">
                    info@horizonflare.in
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:support@horizonflare.in"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    support@horizonflare.in
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:contact@horizonflare.in"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    contact@horizonflare.in
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
                <Shield className="w-3 h-3 mr-1" />
                MSME Certified
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
