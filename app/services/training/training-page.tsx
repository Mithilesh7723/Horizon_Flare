"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  GraduationCap,
  Users,
  Clock,
  Target,
  Shield,
  Code,
  CheckCircle,
  ArrowRight,
  Calendar,
  MapPin,
  Star,
  Laptop,
  Globe,
  BadgeIcon as Certificate,
} from "lucide-react"
import LayoutWrapper from "@/components/layout-wrapper"
import { useState } from "react";

export default function TrainingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    experience: "",
    service: "",
    details: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const trainingPrograms = [
    {
      icon: Shield,
      title: "Ethical Hacking Fundamentals",
      description: "Comprehensive introduction to ethical hacking and penetration testing methodologies.",
      duration: "40 hours",
      level: "Beginner to Intermediate",
      mode: "Online & Offline",
      modules: [
        "Introduction to Cybersecurity",
        "Network Security Basics",
        "Web Application Security",
        "Vulnerability Assessment",
        "Basic Penetration Testing",
        "Security Tools & Techniques",
      ],
      certifications: ["CEH Preparation", "Course Completion Certificate"],
      price: "₹15,000",
    },
    {
      icon: Target,
      title: "Advanced Penetration Testing",
      description: "Advanced techniques for professional penetration testers and security consultants.",
      duration: "60 hours",
      level: "Intermediate to Advanced",
      mode: "Online & Offline",
      modules: [
        "Advanced Network Penetration",
        "Web Application Exploitation",
        "Mobile Security Testing",
        "Wireless Security Assessment",
        "Social Engineering",
        "Report Writing & Communication",
      ],
      certifications: ["OSCP Preparation", "Advanced Certificate"],
      price: "₹25,000",
    },
    {
      icon: Code,
      title: "Secure Coding Practices",
      description: "Learn to write secure code and implement security best practices in development.",
      duration: "30 hours",
      level: "Intermediate",
      mode: "Online & Offline",
      modules: [
        "Secure Development Lifecycle",
        "Common Vulnerabilities",
        "Input Validation & Sanitization",
        "Authentication & Authorization",
        "Cryptography Implementation",
        "Security Testing Integration",
      ],
      certifications: ["Secure Coding Certificate", "OWASP Training"],
      price: "₹12,000",
    },
    {
      icon: Users,
      title: "Corporate Security Training",
      description: "Customized security awareness and technical training for organizations.",
      duration: "Customizable",
      level: "All Levels",
      mode: "On-site & Online",
      modules: [
        "Security Awareness",
        "Phishing Prevention",
        "Password Security",
        "Data Protection",
        "Incident Response",
        "Compliance Training",
      ],
      certifications: ["Corporate Training Certificate", "Compliance Certificates"],
      price: "₹50,000+",
    },
    {
      icon: Globe,
      title: "Cloud Security Specialist",
      description: "Comprehensive training on cloud security across AWS, Azure, and Google Cloud.",
      duration: "45 hours",
      level: "Intermediate to Advanced",
      mode: "Online & Offline",
      modules: [
        "Cloud Security Fundamentals",
        "AWS Security Services",
        "Azure Security Center",
        "Google Cloud Security",
        "Container Security",
        "DevSecOps Practices",
      ],
      certifications: ["Cloud Security Certificate", "Vendor-specific Prep"],
      price: "₹20,000",
    },
    {
      icon: Certificate,
      title: "Certification Bootcamp",
      description: "Intensive preparation for major cybersecurity certifications.",
      duration: "Variable",
      level: "All Levels",
      mode: "Online & Offline",
      modules: [
        "CEH Preparation",
        "CISSP Study Guide",
        "OSCP Training",
        "CompTIA Security+",
        "CISM Preparation",
        "Mock Exams & Practice",
      ],
      certifications: ["Industry Certifications", "Bootcamp Completion"],
      price: "₹18,000",
    },
  ]

  const upcomingBatches = [
    {
      course: "Ethical Hacking Fundamentals",
      startDate: "January 15, 2025",
      duration: "6 weeks",
      mode: "Online",
      seats: "25",
      available: "8",
    },
    {
      course: "Advanced Penetration Testing",
      startDate: "February 1, 2025",
      duration: "8 weeks",
      mode: "Hybrid",
      seats: "20",
      available: "12",
    },
    {
      course: "Secure Coding Practices",
      startDate: "January 22, 2025",
      duration: "4 weeks",
      mode: "Online",
      seats: "30",
      available: "15",
    },
    {
      course: "Cloud Security Specialist",
      startDate: "February 8, 2025",
      duration: "6 weeks",
      mode: "Online",
      seats: "25",
      available: "18",
    },
  ]

  const instructors = [
    {
      name: "Rajesh Kumar",
      title: "Senior Security Consultant",
      experience: "12+ years",
      certifications: ["CISSP", "CEH", "OSCP"],
      specialization: "Penetration Testing & Network Security",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Amit Patel",
      title: "Cloud Security Architect",
      experience: "10+ years",
      certifications: ["CCSP", "AWS Security", "Azure Security"],
      specialization: "Cloud Security & DevSecOps",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const testimonials = [
    {
      name: "Vikash Singh",
      role: "Security Analyst at TechCorp",
      content:
        "The ethical hacking course at Horizon Flare was exceptional. The hands-on labs and real-world scenarios prepared me perfectly for my current role.",
      rating: 5,
      course: "Ethical Hacking Fundamentals",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sneha Reddy",
      role: "Lead Developer at Innovate Inc.",
      content:
        "The secure coding practices course transformed how I approach development. The instructors are industry experts with practical experience.",
      rating: 5,
      course: "Secure Coding Practices",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Arjun Mehta",
      role: "Penetration Tester",
      content:
        "Advanced penetration testing course gave me the skills to excel in my career. The OSCP preparation was particularly valuable.",
      rating: 5,
      course: "Advanced Penetration Testing",
    },
  ]

  const features = [
    {
      icon: Laptop,
      title: "Hands-on Labs",
      description: "Practice in real-world scenarios with dedicated lab environments",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of practical experience",
    },
    {
      icon: Certificate,
      title: "Industry Certifications",
      description: "Preparation for globally recognized cybersecurity certifications",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Weekend and evening batches to accommodate working professionals",
    },
    {
      icon: Globe,
      title: "Online & Offline",
      description: "Choose from online, offline, or hybrid learning modes",
    },
    {
      icon: Target,
      title: "Job Assistance",
      description: "Career guidance and job placement assistance for course graduates",
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
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/30 border border-green-400/50 mb-8 backdrop-blur-xl shadow-2xl shadow-green-500/20">
              <GraduationCap className="w-5 h-5 text-green-400" />
              <span className="text-base font-medium text-green-300">Training Programs</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Cybersecurity Training
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-8 font-light max-w-4xl mx-auto">
              Master cybersecurity skills with hands-on training from industry experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
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
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Training Programs
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Comprehensive cybersecurity training designed for professionals at every level
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-green-400/30 transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <program.icon className="w-8 h-8 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                        <p className="text-white/70 leading-relaxed mb-4">{program.description}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-green-400" />
                            <span className="text-white/60">{program.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-green-400" />
                            <span className="text-white/60">{program.level}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-green-400" />
                            <span className="text-white/60">{program.mode}</span>
                          </div>
                          <div className="text-lg font-semibold text-green-400">{program.price}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Course Modules:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {program.modules.map((module, idx) => (
                          <li key={idx} className="flex items-center text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {module}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Certifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.certifications.map((cert, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Batches */}
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
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Upcoming Batches
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Join our next training sessions and advance your cybersecurity career
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingBatches.map((batch, index) => (
              <motion.div
                key={batch.course}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-green-400/30 transition-all duration-500">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4">{batch.course}</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-green-400" />
                        <span className="text-white/70">Starts: {batch.startDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-green-400" />
                        <span className="text-white/70">Duration: {batch.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-green-400" />
                        <span className="text-white/70">Mode: {batch.mode}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-green-400" />
                        <span className="text-white/70">
                          Available: {batch.available}/{batch.seats}
                        </span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 border border-white/20 hover:border-green-400/50 transition-all duration-300">
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
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
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Why Choose Our Training?
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Experience the difference with our comprehensive and practical approach to cybersecurity education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto mb-4 group-hover:border-green-400/50 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
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
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Expert Instructors
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Learn from industry professionals with real-world experience and proven expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-green-400/30 transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <img
                        src={instructor.image || "/placeholder.svg"}
                        alt={instructor.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-green-400/30"
                      />
                      <h3 className="text-xl font-bold text-white mb-2">{instructor.name}</h3>
                      <p className="text-green-400 font-semibold mb-1">{instructor.title}</p>
                      <p className="text-white/60 text-sm">{instructor.experience} Experience</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-3">Certifications:</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {instructor.certifications.map((cert, idx) => (
                          <span key={idx} className="px-2 py-1 rounded bg-green-500/20 text-green-300 text-xs">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Specialization:</h4>
                      <p className="text-white/70 text-sm">{instructor.specialization}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Student Success Stories
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Hear from our graduates who have successfully advanced their cybersecurity careers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-green-400/30 transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-white/70 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-green-400 text-sm mb-1">{testimonial.role}</p>
                      <p className="text-white/60 text-xs">Course: {testimonial.course}</p>
                    </div>
                  </CardContent>
                </Card>
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
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Enroll in Training
              </span>
            </h2>
            <p className="text-xl text-white/60">
              Ready to advance your cybersecurity career? Get in touch to learn more about our training programs.
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
                      <label className="block text-sm font-medium text-white/70 mb-2">Phone</label>
                      <Input
                        className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">Experience Level</label>
                      <select className="w-full p-3 bg-white/5 backdrop-blur-xl border border-white/20 rounded-md text-white focus:border-green-400/50 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300 appearance-none cursor-pointer hover:bg-white/10">
                        <option value="" className="bg-gray-900 text-white">
                          Select experience level
                        </option>
                        <option value="beginner" className="bg-gray-900 text-white">
                          Beginner
                        </option>
                        <option value="intermediate" className="bg-gray-900 text-white">
                          Intermediate
                        </option>
                        <option value="advanced" className="bg-gray-900 text-white">
                          Advanced
                        </option>
                        <option value="expert" className="bg-gray-900 text-white">
                          Expert
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Training Program *</label>
                    <select
                      className="w-full p-3 bg-white/5 backdrop-blur-xl border border-white/20 rounded-md text-white focus:border-green-400/50 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-300 appearance-none cursor-pointer hover:bg-white/10"
                      required
                    >
                      <option value="" className="bg-gray-900 text-white">
                        Select training program
                      </option>
                      <option value="ethical-hacking" className="bg-gray-900 text-white">
                        Ethical Hacking Fundamentals
                      </option>
                      <option value="advanced-pentest" className="bg-gray-900 text-white">
                        Advanced Penetration Testing
                      </option>
                      <option value="secure-coding" className="bg-gray-900 text-white">
                        Secure Coding Practices
                      </option>
                      <option value="corporate" className="bg-gray-900 text-white">
                        Corporate Security Training
                      </option>
                      <option value="cloud-security" className="bg-gray-900 text-white">
                        Cloud Security Specialist
                      </option>
                      <option value="certification" className="bg-gray-900 text-white">
                        Certification Bootcamp
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Additional Information</label>
                    <Textarea
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/40 min-h-[120px]"
                      placeholder="Tell us about your background, goals, and any specific requirements..."
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 border-0"
                  >
                    Request Training Information
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
