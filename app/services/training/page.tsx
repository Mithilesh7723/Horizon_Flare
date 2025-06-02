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
  GraduationCap,
  Shield,
  Users,
  Award,
  CheckCircle,
  Clock,
  BookOpen,
  Target,
  TrendingUp,
  Star,
  Monitor,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Cybersecurity Training - Horizon Flare | Professional Security Courses & Certification",
  description:
    "Professional cybersecurity training programs in India. Learn ethical hacking, VAPT, secure development with hands-on labs, expert instructors, and job placement support.",
  keywords:
    "cybersecurity training India, ethical hacking course, VAPT training, penetration testing certification, security training programs, cybersecurity education",
}

export default function TrainingPage() {
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
            className="bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 text-white"
          >
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-slate-900">
          <div className="absolute inset-0 tech-pattern opacity-30" />
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <FloatingElements />
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-transparent to-emerald-500/20" />

          <div className="container relative">
            <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in text-white">
              <Badge variant="outline" className="border-green-400/50 text-green-400 bg-green-400/10">
                <GraduationCap className="w-4 h-4 mr-2" />
                Training Programs
              </Badge>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
                  Master Cybersecurity
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Build Your Career
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your career with industry-leading cybersecurity training. Learn from experts, practice in
                real-world labs, and get certified with job placement support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-left">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                >
                  <Link href="#courses">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    View Courses
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300 bg-cyan-400/10"
                >
                  <Link href="#enroll">
                    <Shield className="w-5 h-5 mr-2" />
                    Enroll Now
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
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  <AnimatedCounter end={1000} suffix="+" />
                </div>
                <div className="text-gray-300">Students Trained</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                  <AnimatedCounter end={95} suffix="%" />
                </div>
                <div className="text-gray-300">Job Placement Rate</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-gray-300">Industry Partners</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                  <AnimatedCounter end={4.9} suffix="/5" />
                </div>
                <div className="text-gray-300">Student Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section
          id="courses"
          className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden"
        >
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <GradientText>Training Programs</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity courses designed for all skill levels
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Ethical Hacking Fundamentals",
                  level: "Beginner",
                  duration: "8 Weeks",
                  price: "₹25,000",
                  description: "Learn the basics of ethical hacking and penetration testing",
                  features: [
                    "Network Security Basics",
                    "Vulnerability Assessment",
                    "Basic Penetration Testing",
                    "Security Tools Introduction",
                    "Hands-on Labs",
                  ],
                  image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop&crop=center",
                  color: "from-green-500 to-emerald-500",
                  popular: false,
                },
                {
                  title: "Advanced VAPT Certification",
                  level: "Advanced",
                  duration: "12 Weeks",
                  price: "₹45,000",
                  description: "Comprehensive vulnerability assessment and penetration testing program",
                  features: [
                    "Advanced Penetration Testing",
                    "Web Application Security",
                    "Network Infrastructure Testing",
                    "Report Writing",
                    "Industry Certification",
                  ],
                  image:
                    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop&crop=center",
                  color: "from-blue-500 to-cyan-500",
                  popular: true,
                },
                {
                  title: "Secure Development Bootcamp",
                  level: "Intermediate",
                  duration: "10 Weeks",
                  price: "₹35,000",
                  description: "Learn to build secure applications from the ground up",
                  features: [
                    "Secure Coding Practices",
                    "DevSecOps Implementation",
                    "Code Review Techniques",
                    "Security Testing",
                    "Real-world Projects",
                  ],
                  image:
                    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop&crop=center",
                  color: "from-purple-500 to-pink-500",
                  popular: false,
                },
                {
                  title: "Cloud Security Specialist",
                  level: "Advanced",
                  duration: "8 Weeks",
                  price: "₹40,000",
                  description: "Master cloud security across AWS, Azure, and GCP platforms",
                  features: [
                    "Cloud Architecture Security",
                    "Container Security",
                    "IAM Best Practices",
                    "Compliance Frameworks",
                    "Multi-cloud Security",
                  ],
                  image:
                    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&crop=center",
                  color: "from-indigo-500 to-purple-500",
                  popular: false,
                },
                {
                  title: "Incident Response & Forensics",
                  level: "Advanced",
                  duration: "6 Weeks",
                  price: "₹30,000",
                  description: "Learn to respond to and investigate security incidents",
                  features: [
                    "Incident Response Planning",
                    "Digital Forensics",
                    "Malware Analysis",
                    "Evidence Collection",
                    "Case Studies",
                  ],
                  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=center",
                  color: "from-red-500 to-orange-500",
                  popular: false,
                },
                {
                  title: "Cybersecurity for Managers",
                  level: "Executive",
                  duration: "4 Weeks",
                  price: "₹20,000",
                  description: "Strategic cybersecurity knowledge for business leaders",
                  features: [
                    "Risk Management",
                    "Compliance Requirements",
                    "Security Governance",
                    "Budget Planning",
                    "Team Leadership",
                  ],
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center",
                  color: "from-yellow-500 to-orange-500",
                  popular: false,
                },
              ].map((course, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/10 backdrop-blur-md border animate-scale-in h-full flex flex-col ${
                    course.popular ? "border-orange-400 scale-105" : "border-white/20"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {course.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      Most Popular
                    </Badge>
                  )}
                  <div className="h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="border-green-400/50 text-green-400 bg-green-400/10 text-xs">
                        {course.level}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </div>
                    </div>
                    <CardTitle className="mb-3 group-hover:text-primary transition-colors text-white text-xl line-clamp-2">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="mb-4 text-gray-300 text-sm flex-1 line-clamp-2">
                      {course.description}
                    </CardDescription>
                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {course.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-2xl font-bold text-white">{course.price}</span>
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${course.color} hover:opacity-90 transition-all duration-300 text-white`}
                          asChild
                        >
                          <Link href="#enroll">Enroll Now</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <GradientText>Our Training</GradientText>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Industry-leading training with real-world experience and career support
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "Expert Instructors",
                  description: "Learn from industry professionals with years of real-world experience",
                  color: "text-blue-400",
                },
                {
                  icon: Monitor,
                  title: "Hands-on Labs",
                  description: "Practice in real-world scenarios with our advanced lab environments",
                  color: "text-green-400",
                },
                {
                  icon: Award,
                  title: "Industry Certification",
                  description: "Get recognized certifications that employers value and trust",
                  color: "text-yellow-400",
                },
                {
                  icon: TrendingUp,
                  title: "Job Placement",
                  description: "95% job placement rate with our extensive industry network",
                  color: "text-purple-400",
                },
                {
                  icon: BookOpen,
                  title: "Comprehensive Curriculum",
                  description: "Updated course content covering latest threats and technologies",
                  color: "text-red-400",
                },
                {
                  icon: Target,
                  title: "Personalized Learning",
                  description: "Customized learning paths based on your goals and experience",
                  color: "text-cyan-400",
                },
                {
                  icon: Shield,
                  title: "Real-world Projects",
                  description: "Work on actual security challenges faced by organizations",
                  color: "text-orange-400",
                },
                {
                  icon: Star,
                  title: "Lifetime Support",
                  description: "Ongoing mentorship and career guidance even after graduation",
                  color: "text-pink-400",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors text-white text-lg">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment Form */}
        <section
          id="enroll"
          className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 relative overflow-hidden"
        >
          <div className="absolute inset-0 tech-pattern opacity-15" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Start Your <GradientText>Journey</GradientText>
                </h2>
                <p className="text-xl text-gray-300">
                  Ready to transform your career? Enroll in our cybersecurity training programs today
                </p>
              </div>
              <Card className="shadow-2xl border-0 bg-white/10 backdrop-blur-lg border border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Course Enrollment</CardTitle>
                  <CardDescription className="text-gray-300">
                    Fill out the form below to enroll in our cybersecurity training programs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
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
                    <div className="grid md:grid-cols-2 gap-6">
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
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          placeholder="+91 98765 43210"
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="course" className="text-sm font-medium mb-2 block text-white">
                          Course Interest *
                        </label>
                        <select
                          id="course"
                          className="w-full p-2 border rounded-md bg-white/10 border-white/20 text-white"
                          required
                        >
                          <option value="" className="text-black">
                            Select a course
                          </option>
                          <option value="ethical-hacking" className="text-black">
                            Ethical Hacking Fundamentals
                          </option>
                          <option value="vapt" className="text-black">
                            Advanced VAPT Certification
                          </option>
                          <option value="secure-dev" className="text-black">
                            Secure Development Bootcamp
                          </option>
                          <option value="cloud-security" className="text-black">
                            Cloud Security Specialist
                          </option>
                          <option value="incident-response" className="text-black">
                            Incident Response & Forensics
                          </option>
                          <option value="management" className="text-black">
                            Cybersecurity for Managers
                          </option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="experience" className="text-sm font-medium mb-2 block text-white">
                          Experience Level
                        </label>
                        <select
                          id="experience"
                          className="w-full p-2 border rounded-md bg-white/10 border-white/20 text-white"
                        >
                          <option value="" className="text-black">
                            Select experience level
                          </option>
                          <option value="beginner" className="text-black">
                            Beginner (0-1 years)
                          </option>
                          <option value="intermediate" className="text-black">
                            Intermediate (1-3 years)
                          </option>
                          <option value="advanced" className="text-black">
                            Advanced (3+ years)
                          </option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="background" className="text-sm font-medium mb-2 block text-white">
                        Educational/Professional Background
                      </label>
                      <Input
                        id="background"
                        placeholder="e.g., Computer Science, IT Professional, etc."
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="goals" className="text-sm font-medium mb-2 block text-white">
                        Career Goals *
                      </label>
                      <Textarea
                        id="goals"
                        placeholder="Tell us about your career goals and what you hope to achieve with this training..."
                        rows={4}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Enroll Now
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <FloatingElements />
          <div className="container relative text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Ready to Start Learning?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto animate-slide-in-left">
              Join thousands of professionals who have transformed their careers with our cybersecurity training
              programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300 border-0 text-white"
              >
                <Link href="#enroll">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Enroll Today
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <Link href="/contact">
                  <Users className="w-5 h-5 mr-2" />
                  Contact Us
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
                Empowering the next generation of cybersecurity professionals through world-class training and
                education.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-green-400">Training Programs</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#courses" className="text-gray-300 hover:text-white transition-colors">
                    Ethical Hacking
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-gray-300 hover:text-white transition-colors">
                    VAPT Certification
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-gray-300 hover:text-white transition-colors">
                    Secure Development
                  </Link>
                </li>
                <li>
                  <Link href="#courses" className="text-gray-300 hover:text-white transition-colors">
                    Cloud Security
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-emerald-400">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Security Blog
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="/innovation-lab" className="text-gray-300 hover:text-white transition-colors">
                    Innovation Lab
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                    Our Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-blue-400">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="mailto:training@horizonflare.in"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    training@horizonflare.in
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
              <Badge variant="outline" className="border-green-400 text-green-400 bg-green-400/10">
                <Award className="w-3 h-3 mr-1" />
                Certified Training
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
