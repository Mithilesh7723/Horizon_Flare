import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { FloatingElements } from "@/components/ui/floating-elements"
import { GradientText } from "@/components/ui/gradient-text"
import {
  Shield,
  Code,
  GraduationCap,
  Lightbulb,
  CheckCircle,
  Award,
  Users,
  Target,
  ArrowRight,
  Lock,
  Brain,
  Rocket,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Horizon Flare - India's Leading Student-Led Cybersecurity & Innovation Studio | VAPT, Web Dev, Training",
  description:
    "Student-led cybersecurity company offering VAPT services, secure web development, ethical hacking courses, and innovation lab collaborations across India. MSME certified.",
  keywords:
    "VAPT services India, cybersecurity company India, cybersecurity courses India, innovation lab India, student tech projects India, ethical hacking training, web development security, penetration testing",
}

export default function HomePage() {
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
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 animate-pulse-glow"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="absolute inset-0 tech-pattern opacity-30" />
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <FloatingElements />
          <div className="absolute inset-0 hero-bg opacity-20" />

          <div className="container relative">
            <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in text-white">
              <Badge
                variant="outline"
                className="mb-4 border-orange-400/50 text-orange-400 bg-orange-400/10 animate-scale-in"
              >
                <Award className="w-4 h-4 mr-2" />
                MSME Certified • Student-Led Innovation
              </Badge>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Igniting Ideas.
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                  Powering Impact.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                India's most innovative student-led cybersecurity and technology studio. We secure digital futures,
                empower the next generation, and build solutions that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-left">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                >
                  <Link href="/contact">
                    <Shield className="w-5 h-5 mr-2" />
                    Get Free Security Audit
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 bg-blue-400/10"
                >
                  <Link href="/courses">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Explore Courses
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  asChild
                  className="text-cyan-400 hover:text-orange-400 hover:bg-cyan-400/10 border-2 border-cyan-500/50 hover:border-orange-500/50 rounded-md px-4 py-2 transition-all duration-300"
                >
                  <Link href="/innovation-lab">
                    <Lightbulb className="w-5 h-5 mr-2" />
                    Join Innovation Lab
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 animate-slide-in-right">
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-400">Security Audits</div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                    <AnimatedCounter end={1000} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-400">Students Trained</div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-400">Innovation Projects</div>
                </div>
                <div className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                    <AnimatedCounter end={99} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden"
        >
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our <GradientText>Services</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity and innovation solutions designed for the digital age
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "VAPT & Cybersecurity",
                  description:
                    "Advanced vulnerability assessment and penetration testing with AI-powered threat detection.",
                  features: [
                    "Web Application Testing",
                    "Network Security Audit",
                    "Compliance Assessment",
                    "24/7 Monitoring",
                  ],
                  link: "/services/vapt",
                  gradient: "from-red-500 to-orange-500",
                  delay: "0s",
                  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
                },
                {
                  icon: Code,
                  title: "Secure Development",
                  description: "Build bulletproof applications with security-first development practices.",
                  features: ["Secure Web Apps", "API Security", "DevSecOps", "Code Review"],
                  link: "/services/development",
                  gradient: "from-blue-500 to-cyan-500",
                  delay: "0.2s",
                  image:
                    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center",
                },
                {
                  icon: GraduationCap,
                  title: "Cybersecurity Training",
                  description: "Industry-leading training programs with hands-on labs and real-world scenarios.",
                  features: ["Ethical Hacking", "VAPT Certification", "Live Labs", "Career Support"],
                  link: "/services/training",
                  gradient: "from-green-500 to-emerald-500",
                  delay: "0.4s",
                  image:
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation Studio",
                  description: "Collaborative space for breakthrough technologies and social impact projects.",
                  features: ["R&D Projects", "Tech Incubation", "Social Impact", "Student Mentorship"],
                  link: "/innovation-lab",
                  gradient: "from-purple-500 to-pink-500",
                  delay: "0.6s",
                  image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop&crop=center",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/10 backdrop-blur-md border border-white/20 animate-scale-in`}
                  style={{ animationDelay: service.delay }}
                >
                  <div className="image-container h-48 mb-4 rounded-t-lg overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="image-fit"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors text-white">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-gray-300">{service.description}</CardDescription>
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
                    <Button
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      asChild
                    >
                      <Link href={service.link}>
                        Learn More{" "}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800">
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Why <GradientText>Horizon Flare</GradientText>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another tech company. We're the future of cybersecurity innovation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Certified Excellence",
                  desc: "Industry-certified experts with proven track records",
                  color: "text-yellow-400",
                  image:
                    "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=300&h=200&fit=crop&crop=center",
                },
                {
                  icon: Rocket,
                  title: "Innovation First",
                  desc: "Cutting-edge solutions powered by latest technologies",
                  color: "text-blue-400",
                  image:
                    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop&crop=center",
                },
                {
                  icon: Target,
                  title: "India-Focused",
                  desc: "Deep understanding of local challenges and opportunities",
                  color: "text-green-400",
                  image:
                    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&h=200&fit=crop&crop=center",
                },
                {
                  icon: Brain,
                  title: "Student-Led",
                  desc: "Fresh perspectives driving breakthrough innovations",
                  color: "text-purple-400",
                  image:
                    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop&crop=center",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-center group animate-fade-in hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="image-container h-32 mb-4 rounded-t-lg overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="image-fit"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className={`w-10 h-10 ${item.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-15" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                What Our <GradientText>Clients Say</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted by organizations across India for our expertise and innovation
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mx-auto max-w-4xl">
              {[
                {
                  name: "Rajesh Kumar",
                  role: "Small Business Owner",
                  content:
                    "Horizon Flare helped secure our e-commerce website after we experienced a data breach. Their team was professional and thorough, identifying vulnerabilities we never knew existed. Highly recommended!",
                  rating: 5,
                  image: "/avatars/male-avatar-1.png",
                },
                {
                  name: "Amit Singh",
                  role: "IT Manager, Tech Startup",
                  content:
                    "The secure development training provided by Horizon Flare was excellent. Our development team now implements security best practices from day one. Their expertise has been invaluable to our company.",
                  rating: 5,
                  image: "/avatars/male-avatar-2.png",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="image-container w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="image-fit rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-300">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-blue-500/20" />
          <FloatingElements />
          <div className="container relative text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Ready to Secure Your Future?</h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto animate-slide-in-left">
              Join thousands of students and organizations who trust Horizon Flare for their cybersecurity needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              >
                <Link href="/contact">
                  <Shield className="w-5 h-5 mr-2" />
                  Start Your Journey
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Link href="/about">
                  <Users className="w-5 h-5 mr-2" />
                  Learn About Us
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
              <p className="text-gray-300 text-sm leading-relaxed">
                Igniting ideas and powering impact through innovative cybersecurity solutions and student-led
                innovation.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://linkedin.com/company/horizonflare"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com/horizonflare"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
                <Link
                  href="https://instagram.com/horizonflare"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </div>
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
              <h3 className="font-semibold mb-4 text-green-400">Company</h3>
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
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Horizon Flare. All rights reserved. |
              <Link href="mailto:info@horizonflare.in" className="hover:text-orange-400 transition-colors ml-1">
                info@horizonflare.in
              </Link>{" "}
              |
              <a href="tel:+917722962509" className="hover:text-green-400 transition-colors ml-1">
                +917722962509
              </a>{" "}
              |
              <Link href="https://horizonflare.in" className="hover:text-blue-400 transition-colors ml-1">
                horizonflare.in
              </Link>
            </p>
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
