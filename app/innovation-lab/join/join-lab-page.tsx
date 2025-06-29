"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, Code, Heart, Building, ArrowRight } from "lucide-react"
import LayoutWrapper from "@/components/layout-wrapper"
import { useState } from "react"

export default function JoinLabPage() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    experience: "",
    skills: "",
    interests: "",
    motivation: "",
    availability: "",
    contribution: "",
    portfolio: "",
    linkedin: "",
    github: "",
    website: "",
    mentorship: false,
    collaboration: false,
    funding: false,
    events: false,
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
          service: `Innovation Lab: Join Application`,
          message: `Type: ${formData.type}\nRole: ${formData.role}\nExperience: ${formData.experience}\nSkills: ${formData.skills}\nInterests: ${formData.interests}\nMotivation: ${formData.motivation}\nAvailability: ${formData.availability}\nContribution: ${formData.contribution}\nPortfolio: ${formData.portfolio}\nLinkedIn: ${formData.linkedin}\nGitHub: ${formData.github}\nWebsite: ${formData.website}\nMentorship: ${formData.mentorship}\nCollaboration: ${formData.collaboration}\nFunding: ${formData.funding}\nEvents: ${formData.events}`
        }),
      });
      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({
          type: "",
          name: "",
          email: "",
          phone: "",
          organization: "",
          role: "",
          experience: "",
          skills: "",
          interests: "",
          motivation: "",
          availability: "",
          contribution: "",
          portfolio: "",
          linkedin: "",
          github: "",
          website: "",
          mentorship: false,
          collaboration: false,
          funding: false,
          events: false,
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

  const participantTypes = [
    { value: "student", label: "Student/Researcher", icon: Users },
    { value: "individual", label: "Individual Innovator", icon: Code },
    { value: "ngo", label: "NGO/Non-Profit", icon: Heart },
    { value: "government", label: "Government Agency", icon: Building },
  ]

  const skillAreas = [
    "Software Development",
    "Data Science & AI",
    "UI/UX Design",
    "Project Management",
    "Business Development",
    "Marketing & Communications",
    "Research & Analysis",
    "Hardware & IoT",
    "Cybersecurity",
    "Mobile Development",
    "Web Development",
    "DevOps & Cloud",
    "Other",
  ]

  const availabilityOptions = [
    "5-10 hours per week",
    "10-20 hours per week",
    "20+ hours per week",
    "Full-time commitment",
    "Project-based",
    "Flexible",
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
              <Users className="w-5 h-5 text-purple-400" />
              <span className="text-base font-medium text-purple-300">Join Innovation Lab</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                Become a Collaborator
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/80 mb-8 font-light max-w-4xl mx-auto">
              Join our community of innovators, mentors, and problem-solvers working together to create solutions that
              matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Participant Types */}
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
              Our innovation lab welcomes diverse perspectives and expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {participantTypes.map((type, index) => (
              <motion.div
                key={type.value}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-purple-400/30 transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <type.icon className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold text-white">{type.label}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
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
                Join Application
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Tell us about yourself and how you'd like to contribute to our innovation community
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
                  {/* Participant Type */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Participant Type</h3>
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-white mb-2">
                        I am joining as a *
                      </label>
                      <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="Select participant type" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-white/20">
                          {participantTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
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
                            Current Role/Position
                          </label>
                          <Input
                            id="role"
                            type="text"
                            value={formData.role}
                            onChange={(e) => handleInputChange("role", e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                            placeholder="Student, Developer, Manager, etc."
                          />
                        </div>
                        <div>
                          <label htmlFor="experience" className="block text-sm font-medium text-white mb-2">
                            Years of Experience
                          </label>
                          <Input
                            id="experience"
                            type="text"
                            value={formData.experience}
                            onChange={(e) => handleInputChange("experience", e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                            placeholder="0-2, 3-5, 5-10, 10+ years"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skills and Expertise */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="skills" className="block text-sm font-medium text-white mb-2">
                          Primary Skills *
                        </label>
                        <Textarea
                          id="skills"
                          required
                          rows={4}
                          value={formData.skills}
                          onChange={(e) => handleInputChange("skills", e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 resize-none"
                          placeholder="List your key skills and areas of expertise"
                        />
                      </div>

                      <div>
                        <label htmlFor="interests" className="block text-sm font-medium text-white mb-2">
                          Areas of Interest *
                        </label>
                        <Textarea
                          id="interests"
                          required
                          rows={3}
                          value={formData.interests}
                          onChange={(e) => handleInputChange("interests", e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 resize-none"
                          placeholder="Which problem areas or technologies interest you most?"
                        />
                      </div>

                      <div>
                        <label htmlFor="motivation" className="block text-sm font-medium text-white mb-2">
                          Why do you want to join? *
                        </label>
                        <Textarea
                          id="motivation"
                          required
                          rows={4}
                          value={formData.motivation}
                          onChange={(e) => handleInputChange("motivation", e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 resize-none"
                          placeholder="What motivates you to join our innovation lab?"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="availability" className="block text-sm font-medium text-white mb-2">
                            Time Availability
                          </label>
                          <Select
                            value={formData.availability}
                            onValueChange={(value) => handleInputChange("availability", value)}
                          >
                            <SelectTrigger className="bg-white/10 border-white/20 text-white">
                              <SelectValue placeholder="Select availability" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-white/20">
                              {availabilityOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label htmlFor="contribution" className="block text-sm font-medium text-white mb-2">
                            How can you contribute?
                          </label>
                          <Input
                            id="contribution"
                            type="text"
                            value={formData.contribution}
                            onChange={(e) => handleInputChange("contribution", e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                            placeholder="Mentoring, Development, Research, etc."
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Portfolio & Links */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Portfolio & Links</h3>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="portfolio" className="block text-sm font-medium text-white mb-2">
                          Portfolio/Resume
                        </label>
                        <Input
                          id="portfolio"
                          type="url"
                          value={formData.portfolio}
                          onChange={(e) => handleInputChange("portfolio", e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                          placeholder="Link to your portfolio or resume"
                        />
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <label htmlFor="linkedin" className="block text-sm font-medium text-white mb-2">
                            LinkedIn Profile
                          </label>
                          <Input
                            id="linkedin"
                            type="url"
                            value={formData.linkedin}
                            onChange={(e) => handleInputChange("linkedin", e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                            placeholder="LinkedIn URL"
                          />
                        </div>
                        <div>
                          <label htmlFor="github" className="block text-sm font-medium text-white mb-2">
                            GitHub Profile
                          </label>
                          <Input
                            id="github"
                            type="url"
                            value={formData.github}
                            onChange={(e) => handleInputChange("github", e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                            placeholder="GitHub URL"
                          />
                        </div>
                        <div>
                          <label htmlFor="website" className="block text-sm font-medium text-white mb-2">
                            Personal Website
                          </label>
                          <Input
                            id="website"
                            type="url"
                            value={formData.website}
                            onChange={(e) => handleInputChange("website", e.target.value)}
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
                            placeholder="Personal website URL"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interests & Preferences */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Interests & Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="mentorship"
                          checked={formData.mentorship}
                          onCheckedChange={(checked) => handleInputChange("mentorship", checked as boolean)}
                          className="border-white/20 data-[state=checked]:bg-purple-500"
                        />
                        <label htmlFor="mentorship" className="text-white">
                          I'm interested in mentoring other innovators
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="collaboration"
                          checked={formData.collaboration}
                          onCheckedChange={(checked) => handleInputChange("collaboration", checked as boolean)}
                          className="border-white/20 data-[state=checked]:bg-purple-500"
                        />
                        <label htmlFor="collaboration" className="text-white">
                          I want to collaborate on existing projects
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
                          I'm interested in funding opportunities
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="events"
                          checked={formData.events}
                          onCheckedChange={(checked) => handleInputChange("events", checked as boolean)}
                          className="border-white/20 data-[state=checked]:bg-purple-500"
                        />
                        <label htmlFor="events" className="text-white">
                          I want to participate in events and workshops
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0 py-6 text-lg font-semibold"
                  >
                    Submit Application
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
                What You'll Get
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">Benefits of joining our innovation community</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mentorship & Guidance",
                description:
                  "Access to industry experts and experienced mentors who will guide your innovation journey.",
              },
              {
                title: "Resource Access",
                description: "Free access to development tools, cloud platforms, and testing environments.",
              },
              {
                title: "Funding Opportunities",
                description: "Connect with investors, grants, and funding programs for promising projects.",
              },
              {
                title: "Networking",
                description: "Build connections with like-minded innovators, potential partners, and industry leaders.",
              },
              {
                title: "Skill Development",
                description: "Participate in workshops, training sessions, and skill-building programs.",
              },
              {
                title: "Impact Creation",
                description: "Work on projects that create real-world impact and solve meaningful problems.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:border-purple-400/30 transition-all duration-500">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-white/70 leading-relaxed">{benefit.description}</p>
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
