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
  Lightbulb,
  Rocket,
  Brain,
  Users,
  Target,
  Award,
  Zap,
  Globe,
  Heart,
  TrendingUp,
  Database,
  Shield,
  Smartphone,
  Cloud,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Innovation Lab - Horizon Flare | Student-Led Technology Innovation & Research",
  description:
    "Join Horizon Flare's Innovation Lab for cutting-edge research, social impact projects, and breakthrough technology development. Collaborate with students and experts.",
}

export default function InnovationLabPage() {
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
            <Link href="/innovation-lab" className="text-sm font-medium text-primary">
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
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 tech-pattern opacity-30" />
          <FloatingElements />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20" />

          <div className="container relative">
            <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in text-white">
              <Badge variant="outline" className="border-purple-400/50 text-purple-400 bg-purple-400/10">
                <Lightbulb className="w-4 h-4 mr-2" />
                Innovation Lab
              </Badge>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  Where Ideas
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                  Become Reality
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Join India's most innovative student-led technology lab. Collaborate on breakthrough projects, develop
                cutting-edge solutions, and create technology that makes a real difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-left">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                >
                  <Link href="#apply">
                    <Rocket className="w-5 h-5 mr-2" />
                    Apply to Join
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300 bg-cyan-400/10"
                >
                  <Link href="#projects">
                    <Brain className="w-5 h-5 mr-2" />
                    View Projects
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
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-gray-300">Active Projects</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">
                  <AnimatedCounter end={200} suffix="+" />
                </div>
                <div className="text-gray-300">Student Innovators</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <div className="text-gray-300">Industry Partners</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  <AnimatedCounter end={25} suffix="+" />
                </div>
                <div className="text-gray-300">Solutions Deployed</div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What We <GradientText>Create</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From cybersecurity innovations to social impact solutions, our lab is where the future takes shape
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Cybersecurity Research",
                  description: "Advanced threat detection, AI-powered security tools, and next-gen protection systems",
                  color: "from-red-500 to-orange-500",
                },
                {
                  icon: Brain,
                  title: "AI & Machine Learning",
                  description: "Intelligent systems for automation, prediction, and decision-making across industries",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: Globe,
                  title: "Social Impact Tech",
                  description: "Technology solutions addressing education, healthcare, and environmental challenges",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Innovation",
                  description: "Next-generation mobile apps and IoT solutions for smart cities and communities",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Cloud,
                  title: "Cloud & DevOps",
                  description: "Scalable cloud architectures and automated deployment solutions",
                  color: "from-indigo-500 to-purple-500",
                },
                {
                  icon: Database,
                  title: "Data Science",
                  description: "Big data analytics, visualization tools, and predictive modeling platforms",
                  color: "from-yellow-500 to-orange-500",
                },
              ].map((area, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/10 backdrop-blur-md border border-white/20 animate-scale-in h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors text-white text-xl">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section
          id="projects"
          className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 relative overflow-hidden"
        >
          <div className="absolute inset-0 tech-pattern opacity-15" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Current <GradientText>Projects</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore some of the groundbreaking projects our students are working on
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Threat Detection",
                  description:
                    "Machine learning system that identifies and responds to cybersecurity threats in real-time",
                  status: "In Development",
                  team: "6 Students",
                  tech: ["Python", "TensorFlow", "Docker"],
                  image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&crop=center",
                },
                {
                  title: "Smart Campus Security",
                  description:
                    "IoT-based security system for educational institutions with facial recognition and access control",
                  status: "Testing Phase",
                  team: "8 Students",
                  tech: ["IoT", "Computer Vision", "React"],
                  image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop&crop=center",
                },
                {
                  title: "Rural Healthcare Platform",
                  description: "Telemedicine platform connecting rural patients with urban healthcare providers",
                  status: "Deployed",
                  team: "10 Students",
                  tech: ["React Native", "Node.js", "MongoDB"],
                  image:
                    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop&crop=center",
                },
                {
                  title: "Blockchain Voting System",
                  description: "Secure, transparent voting platform using blockchain technology for student elections",
                  status: "In Development",
                  team: "5 Students",
                  tech: ["Blockchain", "Solidity", "Web3"],
                  image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop&crop=center",
                },
                {
                  title: "Environmental Monitoring",
                  description: "IoT sensors network for real-time air quality and pollution monitoring in cities",
                  status: "Pilot Testing",
                  team: "7 Students",
                  tech: ["IoT", "Data Analytics", "Python"],
                  image:
                    "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=400&h=250&fit=crop&crop=center",
                },
                {
                  title: "Cybersecurity Training VR",
                  description: "Virtual reality platform for immersive cybersecurity training and simulation",
                  status: "Prototype",
                  team: "9 Students",
                  tech: ["Unity", "VR", "C#"],
                  image:
                    "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=250&fit=crop&crop=center",
                },
              ].map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in h-full flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant={project.status === "Deployed" ? "default" : "secondary"} className="text-xs">
                        {project.status}
                      </Badge>
                      <span className="text-sm text-gray-400">{project.team}</span>
                    </div>
                    <CardTitle className="mb-3 group-hover:text-primary transition-colors text-white text-lg line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="mb-4 text-gray-300 text-sm flex-1 line-clamp-3">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs border-primary/50 text-primary bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Join */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How to <GradientText>Join</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to be part of something extraordinary? Here's how you can join our innovation lab
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Apply Online",
                  description: "Submit your application with your project ideas and technical background",
                  icon: Target,
                },
                {
                  step: "02",
                  title: "Technical Interview",
                  description: "Showcase your skills and passion for innovation in a technical discussion",
                  icon: Users,
                },
                {
                  step: "03",
                  title: "Project Assignment",
                  description: "Get matched with a project team based on your interests and expertise",
                  icon: Rocket,
                },
                {
                  step: "04",
                  title: "Start Innovating",
                  description: "Begin working on cutting-edge projects with mentorship and resources",
                  icon: Zap,
                },
              ].map((step, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in h-full"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="text-4xl font-bold text-white/20 mb-4">{step.step}</div>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors text-white text-lg">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section
          id="apply"
          className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden"
        >
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Apply to <GradientText>Join</GradientText>
                </h2>
                <p className="text-xl text-gray-300">
                  Ready to turn your ideas into reality? Apply now to join our innovation lab
                </p>
              </div>
              <Card className="shadow-2xl border-0 bg-white/10 backdrop-blur-lg border border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Innovation Lab Application</CardTitle>
                  <CardDescription className="text-gray-300">
                    Tell us about yourself and your project ideas. We're looking for passionate innovators!
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
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          placeholder="+91 98765 43210"
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="education" className="text-sm font-medium mb-2 block text-white">
                          Current Education *
                        </label>
                        <select
                          id="education"
                          className="w-full p-2 border rounded-md bg-white/10 border-white/20 text-white"
                          required
                        >
                          <option value="" className="text-black">
                            Select your level
                          </option>
                          <option value="undergraduate" className="text-black">
                            Undergraduate
                          </option>
                          <option value="graduate" className="text-black">
                            Graduate
                          </option>
                          <option value="postgraduate" className="text-black">
                            Postgraduate
                          </option>
                          <option value="professional" className="text-black">
                            Working Professional
                          </option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="experience" className="text-sm font-medium mb-2 block text-white">
                          Technical Experience
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
                      <label htmlFor="skills" className="text-sm font-medium mb-2 block text-white">
                        Technical Skills *
                      </label>
                      <Input
                        id="skills"
                        placeholder="e.g., Python, React, Machine Learning, Cybersecurity"
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="interests" className="text-sm font-medium mb-2 block text-white">
                        Areas of Interest *
                      </label>
                      <select
                        id="interests"
                        className="w-full p-2 border rounded-md bg-white/10 border-white/20 text-white"
                        required
                      >
                        <option value="" className="text-black">
                          Select primary interest
                        </option>
                        <option value="cybersecurity" className="text-black">
                          Cybersecurity Research
                        </option>
                        <option value="ai-ml" className="text-black">
                          AI & Machine Learning
                        </option>
                        <option value="social-impact" className="text-black">
                          Social Impact Tech
                        </option>
                        <option value="mobile" className="text-black">
                          Mobile Innovation
                        </option>
                        <option value="cloud" className="text-black">
                          Cloud & DevOps
                        </option>
                        <option value="data-science" className="text-black">
                          Data Science
                        </option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="projectIdea" className="text-sm font-medium mb-2 block text-white">
                        Project Idea *
                      </label>
                      <Textarea
                        id="projectIdea"
                        placeholder="Describe a project idea you'd like to work on or a problem you'd like to solve..."
                        rows={4}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="motivation" className="text-sm font-medium mb-2 block text-white">
                        Why do you want to join? *
                      </label>
                      <Textarea
                        id="motivation"
                        placeholder="Tell us what motivates you to innovate and how you hope to contribute..."
                        rows={3}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Submit Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-15" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Join Our <GradientText>Lab</GradientText>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                More than just a workspace - it's a launchpad for your career and ideas
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Expert Mentorship",
                  description: "Learn from industry professionals and experienced researchers",
                  color: "text-yellow-400",
                },
                {
                  icon: Users,
                  title: "Collaborative Environment",
                  description: "Work with like-minded innovators from diverse backgrounds",
                  color: "text-blue-400",
                },
                {
                  icon: Rocket,
                  title: "Cutting-Edge Resources",
                  description: "Access to latest tools, technologies, and development platforms",
                  color: "text-purple-400",
                },
                {
                  icon: TrendingUp,
                  title: "Career Opportunities",
                  description: "Direct pathways to internships and job placements",
                  color: "text-green-400",
                },
                {
                  icon: Globe,
                  title: "Real-World Impact",
                  description: "Work on projects that solve actual problems and help communities",
                  color: "text-red-400",
                },
                {
                  icon: Heart,
                  title: "Funding Support",
                  description: "Access to grants and funding for promising projects",
                  color: "text-pink-400",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors text-white text-lg">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <FloatingElements />
          <div className="container relative text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Ready to Innovate?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto animate-slide-in-left">
              Join hundreds of students who are already building the future. Your next breakthrough starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 border-0 text-white"
              >
                <Link href="#apply">
                  <Rocket className="w-5 h-5 mr-2" />
                  Apply Now
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
                <Image src="/logo.jpg" alt="Horizon Flare Logo" width={32} height={32} className="rounded-lg" />
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
