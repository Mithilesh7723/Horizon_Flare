import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { FloatingElements } from "@/components/ui/floating-elements"
import { GradientText } from "@/components/ui/gradient-text"
import { Users, Target, Award, Heart, Globe, Lightbulb, Shield, TrendingUp, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us - Horizon Flare | Student-Led Cybersecurity Innovation",
  description:
    "Learn about Horizon Flare's mission to revolutionize cybersecurity through student-led innovation, training, and social impact projects across India.",
}

export default function AboutPage() {
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
            <Link href="/about" className="text-sm font-medium text-primary">
              About
            </Link>
            <Link href="/courses" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">
              Courses
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
            className="bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <FloatingElements />
          <div className="absolute inset-0 tech-pattern opacity-30" />
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20" />
          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in text-white">
              <Badge variant="outline" className="border-purple-400/50 text-purple-400 bg-purple-400/10">
                <Heart className="w-4 h-4 mr-2" />
                Our Story
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <GradientText>Igniting Ideas.</GradientText>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Powering Impact.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                We're not just building a company—we're building the future of cybersecurity through student innovation,
                social impact, and technological excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-15" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-slide-in-left text-white">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Our <GradientText>Mission</GradientText>
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    To democratize cybersecurity education and innovation across India, empowering students and
                    organizations with cutting-edge security solutions while fostering a culture of ethical hacking and
                    responsible technology development.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Our <GradientText>Vision</GradientText>
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    To become India's most trusted student-led cybersecurity ecosystem, where innovation meets impact,
                    and where the next generation of security professionals are nurtured to protect our digital future.
                  </p>
                </div>
              </div>
              <div className="relative animate-slide-in-right">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop&crop=center"
                  alt="Team collaboration"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <GradientText>Values</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Security First",
                  description:
                    "We believe security should be built-in, not bolted-on. Every solution we create prioritizes protection and privacy.",
                  color: "from-red-500 to-orange-500",
                },
                {
                  icon: Users,
                  title: "Student Empowerment",
                  description:
                    "We're committed to nurturing the next generation of cybersecurity professionals through hands-on learning and mentorship.",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description:
                    "We constantly push boundaries, exploring new technologies and methodologies to solve complex security challenges.",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: Heart,
                  title: "Social Impact",
                  description:
                    "Technology should serve humanity. We focus on projects that create positive change in society.",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: Globe,
                  title: "Accessibility",
                  description:
                    "Quality cybersecurity education and services should be accessible to everyone, regardless of background.",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  icon: Target,
                  title: "Excellence",
                  description:
                    "We maintain the highest standards in everything we do, from training programs to security assessments.",
                  color: "from-indigo-500 to-purple-500",
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white/10 backdrop-blur-md border border-white/20 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors text-white">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-15" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Our <GradientText>Team</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Passionate students and professionals working together to secure the digital future
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Mithilesh Tiwari",
                  role: "Founder & CEO",
                  image: "/avatars/male-avatar-3.png",
                  bio: "Cybersecurity visionary leading Horizon Flare's mission to revolutionize the industry.",
                  email: "founder@horizonflare.in",
                  skills: ["Ethical Hacking", "VAPT", "Leadership"],
                },
                {
                  name: "Krishankant Silawat",
                  role: "Co-founder & CTO",
                  image: "/avatars/male-avatar-4.png",
                  bio: "Technology expert specializing in secure development and cutting-edge cybersecurity solutions.",
                  email: "CTO@horizonflare.in",
                  skills: ["Web Development", "DevSecOps", "Security"],
                },
              ].map((member, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="relative mx-auto mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={120}
                        height={120}
                        className="rounded-full mx-auto group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors text-white">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-orange-400 font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-sm text-gray-300">{member.bio}</p>
                    <a href={`mailto:${member.email}`} className="text-primary hover:text-orange-400 transition-colors">
                      {member.email}
                    </a>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs border-primary/50 text-primary bg-primary/10"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <GradientText>Achievements</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Milestones that mark our journey of innovation and impact
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center group animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-gray-300">Security Audits Completed</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                  <AnimatedCounter end={1000} suffix="+" />
                </div>
                <div className="text-gray-300">Students Trained</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-gray-300">Innovation Projects</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                  <AnimatedCounter end={99} suffix="%" />
                </div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>

            {/* Recognition */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "MSME Certified",
                  description: "Officially recognized by the Ministry of MSME, Government of India",
                },
                {
                  icon: Star,
                  title: "Top Rated Training",
                  description: "Consistently rated 4.9/5 by students across all our training programs",
                },
                {
                  icon: TrendingUp,
                  title: "Fastest Growing",
                  description: "Recognized as one of India's fastest-growing student-led tech companies",
                },
              ].map((achievement, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors text-white">
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-orange-500 to-secondary text-white relative overflow-hidden">
          <FloatingElements />
          <div className="absolute inset-0 bg-black/20" />
          <div className="container relative text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Join Our Mission</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto animate-slide-in-left">
              Whether you're a student looking to learn, an organization needing security, or someone passionate about
              innovation—there's a place for you at Horizon Flare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
              <Button size="lg" variant="secondary" asChild className="bg-white text-primary hover:bg-gray-100">
                <Link href="/careers">
                  <Users className="w-5 h-5 mr-2" />
                  Join Our Team
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 transition-colors"
              >
                <Link href="/contact">
                  <Shield className="w-5 h-5 mr-2" />
                  Partner With Us
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
              <p className="text-gray-300 text-sm">
                Igniting ideas and powering impact through innovative cybersecurity solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">Services</h3>
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
                  <Link href="/services/innovation" className="text-gray-300 hover:text-white transition-colors">
                    Innovation Lab
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-primary">Resources</h3>
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
              <h3 className="font-semibold mb-4 text-primary">Company</h3>
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
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Horizon Flare. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Badge variant="outline" className="border-primary text-primary bg-primary/10">
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
