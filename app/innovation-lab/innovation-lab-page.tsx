"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Lightbulb,
  Users,
  Heart,
  Leaf,
  GraduationCap,
  Building,
  CheckCircle,
  ArrowRight,
  Target,
  Globe,
  Handshake,
  Zap,
  BookOpen,
  Award,
} from "lucide-react"
import Link from "next/link"
import LayoutWrapper from "@/components/layout-wrapper"

export default function InnovationLabPage() {
  const focusAreas = [
    {
      icon: Heart,
      title: "Healthcare Solutions",
      description: "Developing accessible healthcare technologies for rural and underserved communities.",
      projects: [
        "Telemedicine platforms for remote areas",
        "Low-cost diagnostic tools",
        "Health monitoring apps",
        "Medical supply chain optimization",
      ],
      impact: "Reaching 50,000+ patients in rural areas",
      status: "Active Projects: 8",
    },
    {
      icon: GraduationCap,
      title: "Education Technology",
      description: "Creating innovative learning solutions to bridge the digital divide in education.",
      projects: [
        "Offline learning platforms",
        "Interactive educational games",
        "Teacher training tools",
        "Student assessment systems",
      ],
      impact: "Supporting 25,000+ students",
      status: "Active Projects: 12",
    },
    {
      icon: Leaf,
      title: "Environmental Solutions",
      description: "Building technology solutions to address climate change and environmental challenges.",
      projects: [
        "Air quality monitoring systems",
        "Waste management platforms",
        "Water purification technologies",
        "Renewable energy solutions",
      ],
      impact: "Monitoring 100+ locations",
      status: "Active Projects: 6",
    },
    {
      icon: Users,
      title: "Social Impact",
      description: "Developing platforms that connect communities and solve social challenges.",
      projects: [
        "Community support networks",
        "Skill development platforms",
        "Local business marketplaces",
        "Volunteer coordination systems",
      ],
      impact: "Connecting 15,000+ community members",
      status: "Active Projects: 10",
    },
    {
      icon: Building,
      title: "Smart Cities",
      description: "Creating practical solutions for urban challenges and improving city life.",
      projects: [
        "Traffic management systems",
        "Public transport optimization",
        "Citizen service portals",
        "Emergency response platforms",
      ],
      impact: "Deployed in 5 cities",
      status: "Active Projects: 7",
    },
    {
      icon: Handshake,
      title: "Financial Inclusion",
      description: "Building accessible financial tools for underbanked populations.",
      projects: [
        "Microfinance platforms",
        "Digital payment solutions",
        "Financial literacy apps",
        "Small business loan systems",
      ],
      impact: "Serving 30,000+ users",
      status: "Active Projects: 5",
    },
  ]

  const whoCanJoin = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "University students, researchers, and young innovators with fresh ideas",
      benefits: ["Mentorship programs", "Funding opportunities", "Skill development", "Industry exposure"],
    },
    {
      icon: Users,
      title: "Individuals",
      description: "Passionate individuals with innovative solutions to real-world problems",
      benefits: ["Technical support", "Team collaboration", "Resource access", "Implementation guidance"],
    },
    {
      icon: Heart,
      title: "NGOs",
      description: "Non-profit organizations working on social and environmental causes",
      benefits: ["Technology solutions", "Capacity building", "Partnership opportunities", "Impact scaling"],
    },
    {
      icon: Building,
      title: "Government",
      description: "Government agencies looking to implement citizen-centric solutions",
      benefits: ["Policy integration", "Public-private partnerships", "Citizen engagement", "Digital governance"],
    },
  ]

  const successStories = [
    {
      title: "Rural Health Connect",
      description:
        "A telemedicine platform connecting rural patients with urban doctors, reducing travel time and costs.",
      initiator: "Medical Student from AIIMS",
      impact: "Served 5,000+ patients in 50 villages",
      technology: "Mobile App, Video Calling, AI Diagnosis",
      timeline: "6 months development",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "EduBridge",
      description: "Offline-first educational platform providing quality content to students without internet access.",
      initiator: "NGO working in tribal areas",
      impact: "Reached 10,000+ students in remote areas",
      technology: "Progressive Web App, Offline Storage",
      timeline: "8 months development",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "WasteWise",
      description: "Smart waste management system helping cities optimize collection routes and reduce costs.",
      initiator: "Environmental Engineering Student",
      impact: "Deployed in 3 cities, 30% cost reduction",
      technology: "IoT Sensors, Route Optimization, Mobile App",
      timeline: "10 months development",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Submit Your Idea",
      description: "Share your innovative solution to a real-world problem through our online platform.",
    },
    {
      step: "02",
      title: "Idea Evaluation",
      description: "Our expert panel reviews your idea for feasibility, impact potential, and innovation.",
    },
    {
      step: "03",
      title: "Team Formation",
      description: "We help you build a diverse team with complementary skills and expertise.",
    },
    {
      step: "04",
      title: "Development Phase",
      description: "Access our resources, mentorship, and technical support to build your solution.",
    },
    {
      step: "05",
      title: "Testing & Validation",
      description: "Test your solution with real users and validate its effectiveness in solving the problem.",
    },
    {
      step: "06",
      title: "Launch & Scale",
      description: "Deploy your solution and scale its impact with ongoing support and partnerships.",
    },
  ]

  const resources = [
    {
      icon: BookOpen,
      title: "Technical Mentorship",
      description: "Expert guidance from industry professionals and academic researchers",
    },
    {
      icon: Zap,
      title: "Development Resources",
      description: "Access to development tools, cloud platforms, and testing environments",
    },
    {
      icon: Award,
      title: "Funding Support",
      description: "Seed funding, grants, and connections to investors for promising projects",
    },
    {
      icon: Globe,
      title: "Network Access",
      description: "Connect with like-minded innovators, potential partners, and industry experts",
    },
    {
      icon: Target,
      title: "Market Validation",
      description: "Support in testing and validating your solution with real users and stakeholders",
    },
    {
      icon: Handshake,
      title: "Partnership Opportunities",
      description: "Connections with NGOs, government agencies, and corporations for implementation",
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
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/50 mb-8 backdrop-blur-xl shadow-2xl shadow-purple-500/20">
              <Lightbulb className="w-5 h-5 text-purple-400" />
              <span className="text-base font-medium text-purple-300">Innovation Lab</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Solving Real-World Problems
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-8 font-light max-w-4xl mx-auto">
              Where students, individuals, NGOs, and governments collaborate to create practical solutions for everyday
              challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/innovation-lab/submit-idea">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0 px-10 py-7 text-lg font-semibold"
                >
                  Submit Your Idea
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/innovation-lab/join">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 hover:bg-white/10 hover:border-white/50 px-10 py-7 text-lg font-semibold bg-white/5 backdrop-blur-xl"
                >
                  Join as Collaborator
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Areas We Focus On
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Real-world challenges that need innovative, practical solutions to improve lives and communities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-purple-400/30 transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                        <area.icon className="w-8 h-8 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{area.title}</h3>
                        <p className="text-white/70 leading-relaxed mb-4">{area.description}</p>
                        <div className="flex justify-between items-center text-sm mb-4">
                          <span className="text-green-400">{area.impact}</span>
                          <span className="text-purple-400">{area.status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Current Projects:</h4>
                      <ul className="space-y-2">
                        {area.projects.map((project, idx) => (
                          <li key={idx} className="flex items-center text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {project}
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

      {/* Who Can Join */}
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Who Can Join?
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Our innovation lab is open to everyone with a passion for solving real-world problems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whoCanJoin.map((participant, index) => (
              <motion.div
                key={participant.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-purple-400/30 transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto mb-4 group-hover:border-purple-400/50 transition-all duration-300">
                        <participant.icon className="w-8 h-8 text-purple-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{participant.title}</h3>
                    <p className="text-white/60 mb-6 leading-relaxed">{participant.description}</p>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">What You Get:</h4>
                      <ul className="space-y-2">
                        {participant.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-white/60">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
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

      {/* Success Stories */}
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Real solutions created by our community that are making a difference in people's lives
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-purple-400/30 transition-all duration-500 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative overflow-hidden">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{story.title}</h3>
                    <p className="text-white/70 mb-4 leading-relaxed">{story.description}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/60">Initiated by:</span>
                        <span className="text-purple-400">{story.initiator}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/60">Impact:</span>
                        <span className="text-green-400">{story.impact}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-white/60">Timeline:</span>
                        <span className="text-cyan-400">{story.timeline}</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-white/60 text-sm mb-2">Technology Used:</p>
                      <p className="text-white/80 text-sm">{story.technology}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              A simple process to turn your innovative ideas into real-world solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-purple-400/30 transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-white/70 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Resources & Support
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Everything you need to bring your innovative ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto mb-4 group-hover:border-purple-400/50 transition-all duration-300">
                    <resource.icon className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{resource.title}</h3>
                <p className="text-white/60 leading-relaxed">{resource.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Make a Difference?
              </span>
            </h2>
            <p className="text-xl text-white/60 mb-12">
              Join our community of innovators and help solve real-world problems that matter. Your idea could be the
              next breakthrough solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/innovation-lab/submit-idea">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0 px-10 py-7 text-lg font-semibold"
                >
                  Submit Your Idea
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/innovation-lab/join">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 hover:bg-white/10 hover:border-white/50 px-10 py-7 text-lg font-semibold bg-white/5 backdrop-blur-xl"
                >
                  Join as Collaborator
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
