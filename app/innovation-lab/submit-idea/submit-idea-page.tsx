"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Lightbulb, Users, Target, ArrowRight } from "lucide-react"
import LayoutWrapper from "@/components/layout-wrapper"
import { useState } from "react"

export default function SubmitIdeaPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    problem: "",
    solution: "",
    impact: "",
    target: "",
    technology: "",
    timeline: "",
    resources: "",
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    experience: "",
    collaboration: false,
    funding: false,
    opensource: false,
  })

  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus("submitting");
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.organization,
          service: `Innovation Lab: Idea Submission`,
          message: `Title: ${formData.title}\nCategory: ${formData.category}\nDescription: ${formData.description}\nProblem: ${formData.problem}\nSolution: ${formData.solution}\nImpact: ${formData.impact}\nTarget: ${formData.target}\nTechnology: ${formData.technology}\nTimeline: ${formData.timeline}\nResources: ${formData.resources}\nRole: ${formData.role}\nExperience: ${formData.experience}\nCollaboration: ${formData.collaboration}\nFunding: ${formData.funding}\nOpen Source: ${formData.opensource}`
        }),
      });
      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({
          title: "",
          category: "",
          description: "",
          problem: "",
          solution: "",
          impact: "",
          target: "",
          technology: "",
          timeline: "",
          resources: "",
          name: "",
          email: "",
          phone: "",
          organization: "",
          role: "",
          experience: "",
          collaboration: false,
          funding: false,
          opensource: false,
        });
      } else {
        setSubmissionStatus("error");
      }
    } catch {
      setSubmissionStatus("error");
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const categories = [
    "Healthcare Solutions",
    "Education Technology",
    "Environmental Solutions",
    "Social Impact",
    "Smart Cities",
    "Financial Inclusion",
    "Agriculture Technology",
    "Transportation",
    "Energy & Sustainability",
    "Other",
  ]

  const timelines = ["3-6 months", "6-12 months", "1-2 years", "2+ years", "Flexible"]

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
              <span className="text-base font-medium text-purple-300">Submit Your Idea</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Share Your Innovation
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-8 font-light max-w-4xl mx-auto">
              Have an idea that can solve real-world problems? Submit it to our Innovation Lab and let's bring it to
              life together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Idea Submission Form
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Fill out the form below with as much detail as possible. Our expert panel will review your submission and
              get back to you within 5 business days.
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
                  {/* Idea Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <Lightbulb className="w-6 h-6 text-purple-400" />
                      Idea Information
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="title" className="block text-sm font-medium text-white mb-2">
                          Idea Title *
                        </label>
                        <Input
                          id="title"
                          type="text"
                          required
                          value={formData.title}
                          onChange={(e) => handleInputChange("title", e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                          placeholder="Give your idea a compelling title"
                        />
                      </div>

                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-white mb-2">
                          Category *
                        </label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => handleInputChange("category", value)}
                        >
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-white/20">
                            {categories.map((category) => (
                              <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-white mb-2">
                          Brief Description *
                        </label>
                        <Textarea
                          id="description"
                          required
                          rows={4}
                          value={formData.description}
                          onChange={(e) => handleInputChange("description", e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 resize-none"
                          placeholder="Provide a brief overview of your idea (2-3 sentences)"
                        />
                      </div>

                      <div>
                        <label htmlFor="problem" className="block text-sm font-medium text-white mb-2">
                          Problem Statement *
                        </label>
                        <Textarea
                          id="problem"
                          required
                          rows={4}
                          value={formData.problem}
                          onChange={(e) => handleInputChange("problem", e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 resize-none"
                          placeholder="What real-world problem does your idea solve?"
                        />
                      </div>

                      <div>
                        <label htmlFor="solution" className="block text-sm font-medium text-white mb-2">
                          Proposed Solution *
                        </label>
                        <Textarea
                          id="solution"
                          required
                          rows={6}
                          value={formData.solution}
                          onChange={(e) => handleInputChange("solution", e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 resize-none"
                          placeholder="Describe your solution in detail. How does it work?"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="impact" className="block text-sm font-medium text-white mb-2">
                            Expected Impact *
                          </label>
                          <Textarea
                            id="impact"
                            required
                            rows={4}
                            value={formData.impact}
                            onChange={(e) => handleInputChange("impact", e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 resize-none"
                            placeholder="What impact will your solution have?"
                          />
                        </div>
                        <div>
                          <label htmlFor="target" className="block text-sm font-medium text-white mb-2">
                            Target Audience *
                          </label>
                          <Textarea
                            id="target"
                            required
                            rows={4}
                            value={formData.target}
                            onChange={(e) => handleInputChange("target", e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 resize-none"
                            placeholder="Who will benefit from your solution?"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="technology" className="block text-sm font-medium text-white mb-2">
                            Technology Stack
                          </label>
                          <Textarea
                            id="technology"
                            rows={3}
                            value={formData.technology}
                            onChange={(e) => handleInputChange("technology", e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 resize-none"
                            placeholder="What technologies would you use?"
                          />
                        </div>
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium text-white mb-2">
                            Development Timeline
                          </label>
                          <Select
                            value={formData.timeline}
                            onValueChange={(value) => handleInputChange("timeline", value)}
                          >
                            <SelectTrigger className="bg-white/10 border-white/20 text-white">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-white/20">
                              {timelines.map((timeline) => (
                                <SelectItem key={timeline} value={timeline}>
                                  {timeline}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="resources" className="block text-sm font-medium text-white mb-2">
                          Resources Needed
                        </label>
                        <Textarea
                          id="resources"
                          rows={3}
                          value={formData.resources}
                          onChange={(e) => handleInputChange("resources", e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 resize-none"
                          placeholder="What resources, funding, or support would you need?"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <Users className="w-6 h-6 text-purple-400" />
                      Personal Information
                    </h3>
                    <div className="space-y-6">
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
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
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
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div>
                          <label htmlFor="organization" className="block text-sm font-medium text-white mb-2">
                            Organization/Institution
                          </label>
                          <Input
                            id="organization"
                            type="text"
                            value={formData.organization}
                            onChange={(e) => handleInputChange("organization", e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                            placeholder="University, Company, NGO, etc."
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="role" className="block text-sm font-medium text-white mb-2">
                            Your Role/Position
                          </label>
                          <Input
                            id="role"
                            type="text"
                            value={formData.role}
                            onChange={(e) => handleInputChange("role", e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                            placeholder="Student, Developer, Researcher, etc."
                          />
                        </div>
                        <div>
                          <label htmlFor="experience" className="block text-sm font-medium text-white mb-2">
                            Relevant Experience
                          </label>
                          <Input
                            id="experience"
                            type="text"
                            value={formData.experience}
                            onChange={(e) => handleInputChange("experience", e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                            placeholder="Years of experience in relevant field"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Preferences */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <Target className="w-6 h-6 text-purple-400" />
                      Collaboration Preferences
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="collaboration"
                          checked={formData.collaboration}
                          onCheckedChange={(checked) => handleInputChange("collaboration", checked as boolean)}
                          className="border-white/20 data-[state=checked]:bg-purple-500"
                        />
                        <label htmlFor="collaboration" className="text-white">
                          I'm open to collaborating with other innovators and teams
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="funding"
                          checked={formData.funding}
                          onCheckedChange={(checked) => handleInputChange("funding", checked as boolean)}
                          className="border-white/20 data-[state=checked]:bg-purple-500"
                        />
                        <label htmlFor="funding" className="text-white">
                          I'm interested in funding opportunities for this idea
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="opensource"
                          checked={formData.opensource}
                          onCheckedChange={(checked) => handleInputChange("opensource", checked as boolean)}
                          className="border-white/20 data-[state=checked]:bg-purple-500"
                        />
                        <label htmlFor="opensource" className="text-white">
                          I'm willing to make this an open-source project
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0 py-6 text-lg font-semibold"
                  >
                    Submit Your Idea
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                What Happens Next?
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Review Process",
                description:
                  "Our expert panel reviews your submission within 5 business days, evaluating feasibility, impact potential, and innovation.",
              },
              {
                step: "2",
                title: "Initial Feedback",
                description:
                  "We'll contact you with initial feedback and next steps. Selected ideas move to the development phase.",
              },
              {
                step: "3",
                title: "Collaboration Begins",
                description:
                  "If selected, we'll help you form a team, provide resources, and start building your solution together.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-2xl border-white/10 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
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
