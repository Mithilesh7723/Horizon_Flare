import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FloatingElements } from "@/components/ui/floating-elements"
import { GradientText } from "@/components/ui/gradient-text"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import {
  Target,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Building,
  Users,
  Clock,
  Award,
  Zap,
  Globe,
  Database,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Case Studies - Horizon Flare | Real-World Cybersecurity Success Stories",
  description:
    "Explore our cybersecurity case studies showcasing successful VAPT assessments, secure development projects, and innovation lab achievements across various industries.",
  keywords:
    "cybersecurity case studies, VAPT success stories, secure development projects, penetration testing results, cybersecurity consulting India",
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Platform Security Overhaul",
      client: "TechMart India",
      industry: "E-commerce",
      challenge: "Critical vulnerabilities in payment processing and user data protection",
      solution: "Comprehensive VAPT assessment and secure development practices implementation",
      results: [
        "99.9% reduction in security vulnerabilities",
        "PCI DSS compliance achieved",
        "Zero security incidents post-implementation",
        "40% improvement in customer trust metrics",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      duration: "3 months",
      teamSize: "8 experts",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      featured: true,
      category: "VAPT & Development",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Banking Mobile App Security Assessment",
      client: "SecureBank Ltd",
      industry: "Financial Services",
      challenge: "Mobile banking app vulnerabilities and regulatory compliance requirements",
      solution: "Mobile application penetration testing and security hardening",
      results: [
        "100% OWASP Mobile Top 10 compliance",
        "RBI security guidelines adherence",
        "50% faster security audit processes",
        "Enhanced customer confidence",
      ],
      technologies: ["React Native", "Biometric Auth", "Encryption"],
      duration: "2 months",
      teamSize: "5 experts",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
      category: "Mobile Security",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Healthcare Data Protection Initiative",
      client: "MediCare Systems",
      industry: "Healthcare",
      challenge: "HIPAA compliance and patient data security in cloud infrastructure",
      solution: "Cloud security assessment and data protection framework implementation",
      results: [
        "HIPAA compliance certification",
        "Zero data breaches in 18 months",
        "30% reduction in security overhead",
        "Improved patient data access controls",
      ],
      technologies: ["AWS", "Kubernetes", "Encryption", "IAM"],
      duration: "4 months",
      teamSize: "10 experts",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
      category: "Cloud Security",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "EdTech Platform Innovation Lab Project",
      client: "LearnTech Solutions",
      industry: "Education Technology",
      challenge: "Building secure, scalable online learning platform for 100K+ students",
      solution: "Student-led development with security-first approach and innovation lab collaboration",
      results: [
        "Successfully launched to 150K+ users",
        "99.8% uptime achievement",
        "Zero security incidents",
        "Award-winning student innovation project",
      ],
      technologies: ["Next.js", "Python", "MongoDB", "Docker"],
      duration: "6 months",
      teamSize: "12 students + 3 mentors",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
      category: "Innovation Lab",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Government Portal Security Enhancement",
      client: "State Government IT Dept",
      industry: "Government",
      challenge: "Legacy system vulnerabilities and citizen data protection",
      solution: "Comprehensive security audit and modernization roadmap",
      results: [
        "95% vulnerability reduction",
        "ISO 27001 compliance achieved",
        "Improved citizen service delivery",
        "Enhanced public trust in digital services",
      ],
      technologies: ["Java", "Oracle", "Linux", "Security Frameworks"],
      duration: "5 months",
      teamSize: "15 experts",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&crop=center",
      category: "Enterprise Security",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      title: "Startup Security Foundation Program",
      client: "Multiple Startups",
      industry: "Technology Startups",
      challenge: "Building security culture and practices in early-stage companies",
      solution: "Security training program and consultation for 20+ startups",
      results: [
        "100% of startups achieved basic security compliance",
        "80% reduction in common vulnerabilities",
        "Security-aware development culture established",
        "Faster investor due diligence processes",
      ],
      technologies: ["Various", "Security Tools", "Training Platforms"],
      duration: "Ongoing",
      teamSize: "6 trainers",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&crop=center",
      category: "Training & Consultation",
      color: "from-yellow-500 to-orange-500",
    },
  ]

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
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-900">
          <div className="absolute inset-0 tech-pattern opacity-30" />
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <FloatingElements />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-transparent to-teal-500/20" />

          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in text-white">
              <Badge variant="outline" className="border-emerald-400/50 text-emerald-400 bg-emerald-400/10">
                <Target className="w-4 h-4 mr-2" />
                Case Studies
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
                  Real Results,
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Real Impact
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover how we've helped organizations across India strengthen their cybersecurity posture and build
                innovative solutions that drive business success.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-15" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="grid md:grid-cols-4 gap-8 text-white">
              <div className="text-center group animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                  <AnimatedCounter end={100} suffix="+" />
                </div>
                <div className="text-gray-300">Successful Projects</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  <AnimatedCounter end={99} suffix="%" />
                </div>
                <div className="text-gray-300">Success Rate</div>
              </div>
              <div className="text-center group animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                  <AnimatedCounter end={15} suffix="+" />
                </div>
                <div className="text-gray-300">Industries Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <GradientText>Featured Success Story</GradientText>
              </h2>
            </div>

            {caseStudies
              .filter((study) => study.featured)
              .map((study) => (
                <Card
                  key={study.id}
                  className="max-w-6xl mx-auto group hover:shadow-2xl transition-all duration-500 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="image-container h-96 lg:h-auto rounded-l-lg overflow-hidden">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        width={600}
                        height={400}
                        className="image-fit"
                      />
                      <Badge className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                        Featured
                      </Badge>
                    </div>
                    <CardContent className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="outline" className="border-blue-400 text-blue-400 bg-blue-400/10">
                          {study.category}
                        </Badge>
                        <Badge variant="outline" className="border-emerald-400 text-emerald-400 bg-emerald-400/10">
                          {study.industry}
                        </Badge>
                      </div>
                      <CardTitle className="text-3xl mb-4 group-hover:text-emerald-400 transition-colors text-white">
                        {study.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 text-lg mb-6">
                        <strong className="text-white">Challenge:</strong> {study.challenge}
                      </CardDescription>
                      <CardDescription className="text-gray-300 text-lg mb-6">
                        <strong className="text-white">Solution:</strong> {study.solution}
                      </CardDescription>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Clock className="w-4 h-4" />
                          {study.duration}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-300">
                          <Users className="w-4 h-4" />
                          {study.teamSize}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        asChild
                        className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white w-fit"
                      >
                        <Link href={`/case-studies/${study.id}`}>
                          View Full Case Study <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-15" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                All <GradientText>Case Studies</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our portfolio of successful cybersecurity projects across various industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies
                .filter((study) => !study.featured)
                .map((study, index) => (
                  <Card
                    key={study.id}
                    className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/10 backdrop-blur-md border border-white/20 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="image-container h-48 rounded-t-lg overflow-hidden">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        width={400}
                        height={250}
                        className="image-fit"
                      />
                      <Badge className={`absolute top-3 left-3 bg-gradient-to-r ${study.color} text-white text-xs`}>
                        {study.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Building className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300">{study.industry}</span>
                      </div>
                      <CardTitle className="text-xl mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2 text-white">
                        {study.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 mb-4 line-clamp-2">{study.challenge}</CardDescription>
                      <div className="space-y-2 mb-4">
                        <h4 className="text-sm font-semibold text-emerald-400">Key Results:</h4>
                        <ul className="space-y-1">
                          {study.results.slice(0, 2).map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between">
                        <Button variant="ghost" size="sm" asChild className="text-emerald-400 hover:text-white p-0">
                          <Link href={`/case-studies/${study.id}`}>
                            Read More <ArrowRight className="w-3 h-3 ml-1" />
                          </Link>
                        </Button>
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          {study.duration}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <GradientText>Industries We Serve</GradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expertise spans across multiple industries, delivering tailored cybersecurity solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Financial Services",
                  icon: Building,
                  projects: 15,
                  color: "from-green-500 to-emerald-500",
                  image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center",
                },
                {
                  name: "Healthcare",
                  icon: Shield,
                  projects: 12,
                  color: "from-blue-500 to-cyan-500",
                  image:
                    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop&crop=center",
                },
                {
                  name: "E-commerce",
                  icon: Globe,
                  projects: 20,
                  color: "from-purple-500 to-pink-500",
                  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop&crop=center",
                },
                {
                  name: "Education",
                  icon: Users,
                  projects: 18,
                  color: "from-orange-500 to-red-500",
                  image:
                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop&crop=center",
                },
                {
                  name: "Government",
                  icon: Award,
                  projects: 8,
                  color: "from-indigo-500 to-purple-500",
                  image:
                    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=300&h=200&fit=crop&crop=center",
                },
                {
                  name: "Technology",
                  icon: Zap,
                  projects: 25,
                  color: "from-yellow-500 to-orange-500",
                  image:
                    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop&crop=center",
                },
                {
                  name: "Manufacturing",
                  icon: Database,
                  projects: 10,
                  color: "from-teal-500 to-cyan-500",
                  image:
                    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=300&h=200&fit=crop&crop=center",
                },
                {
                  name: "Startups",
                  icon: TrendingUp,
                  projects: 30,
                  color: "from-pink-500 to-red-500",
                  image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=200&fit=crop&crop=center",
                },
              ].map((industry, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="image-container h-32 mb-4 rounded-t-lg overflow-hidden">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.name}
                      width={300}
                      height={200}
                      className="image-fit"
                    />
                  </div>
                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-white group-hover:text-emerald-400 transition-colors">
                      {industry.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-sm">
                      <span className="font-semibold text-emerald-400">{industry.projects}+</span> successful projects
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-900 via-teal-900 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <FloatingElements />
          <div className="container relative text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Ready to Be Our Next Success Story?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto animate-slide-in-left">
              Let's discuss how we can help strengthen your cybersecurity posture and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              >
                <Link href="/contact">
                  <Target className="w-5 h-5 mr-2" />
                  Start Your Project
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <Link href="/services">
                  <Shield className="w-5 h-5 mr-2" />
                  View Our Services
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
                Delivering real results through innovative cybersecurity solutions and student-led innovation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-emerald-400">Success Stories</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/case-studies?industry=fintech"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Financial Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies?industry=healthcare"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies?industry=ecommerce"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    E-commerce
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies?industry=government"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Government
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-teal-400">Our Services</h3>
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
                    Security Training
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
              <h3 className="font-semibold mb-4 text-blue-400">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="mailto:contact@horizonflare.in"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    contact@horizonflare.in
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
              <Badge variant="outline" className="border-emerald-400 text-emerald-400 bg-emerald-400/10">
                <Target className="w-3 h-3 mr-1" />
                Proven Results
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
