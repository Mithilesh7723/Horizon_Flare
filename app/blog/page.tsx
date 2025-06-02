import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { FloatingElements } from "@/components/ui/floating-elements"
import { GradientText } from "@/components/ui/gradient-text"
import { BookOpen, Calendar, User, ArrowRight, Search, Clock, Eye, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Blog - Horizon Flare | Cybersecurity Insights & Tech Innovation",
  description:
    "Stay updated with the latest cybersecurity trends, development insights, and innovation stories from Horizon Flare's expert team and student community.",
  keywords:
    "cybersecurity blog, tech innovation blog, VAPT insights, secure development tips, student tech stories, cybersecurity trends India",
}

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "The Future of AI in Cybersecurity: Opportunities and Challenges",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing cybersecurity defense mechanisms and the new challenges it brings.",
    content: "As we advance into 2024, artificial intelligence continues to reshape the cybersecurity landscape...",
    author: "Arjun Sharma",
    date: "2024-01-15",
    readTime: "8 min read",
    views: 1250,
    comments: 23,
    category: "AI & Security",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&crop=center",
    featured: true,
  }

  const blogPosts = [
    {
      id: 2,
      title: "Top 10 OWASP Vulnerabilities Every Developer Should Know",
      excerpt: "A comprehensive guide to the most critical web application security risks and how to prevent them.",
      author: "Priya Patel",
      date: "2024-01-12",
      readTime: "6 min read",
      views: 890,
      comments: 15,
      category: "Web Security",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&h=300&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Building Secure APIs: Best Practices for 2024",
      excerpt: "Essential security measures every API developer should implement to protect against modern threats.",
      author: "Rahul Kumar",
      date: "2024-01-10",
      readTime: "7 min read",
      views: 756,
      comments: 12,
      category: "API Security",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&crop=center",
    },
    {
      id: 4,
      title: "Student Innovation Spotlight: Smart Campus Security System",
      excerpt: "How our innovation lab students built an IoT-based security system for educational institutions.",
      author: "Sneha Reddy",
      date: "2024-01-08",
      readTime: "5 min read",
      views: 623,
      comments: 18,
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop&crop=center",
    },
    {
      id: 5,
      title: "Zero Trust Architecture: Implementation Guide",
      excerpt: "Step-by-step approach to implementing zero trust security model in your organization.",
      author: "Arjun Sharma",
      date: "2024-01-05",
      readTime: "9 min read",
      views: 1100,
      comments: 27,
      category: "Enterprise Security",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop&crop=center",
    },
    {
      id: 6,
      title: "Mobile App Security Testing: A Complete Checklist",
      excerpt: "Comprehensive security testing checklist for iOS and Android applications.",
      author: "Priya Patel",
      date: "2024-01-03",
      readTime: "6 min read",
      views: 445,
      comments: 9,
      category: "Mobile Security",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop&crop=center",
    },
    {
      id: 7,
      title: "Cloud Security Misconfigurations: Common Pitfalls",
      excerpt: "Identifying and fixing the most common cloud security misconfigurations in AWS, Azure, and GCP.",
      author: "Rahul Kumar",
      date: "2024-01-01",
      readTime: "8 min read",
      views: 789,
      comments: 14,
      category: "Cloud Security",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop&crop=center",
    },
  ]

  const categories = [
    { name: "All Posts", count: 25, active: true },
    { name: "Web Security", count: 8 },
    { name: "Mobile Security", count: 5 },
    { name: "Cloud Security", count: 6 },
    { name: "AI & Security", count: 3 },
    { name: "Innovation", count: 3 },
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
            <Link href="/blog" className="text-sm font-medium text-primary">
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
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
          <div className="absolute inset-0 tech-pattern opacity-30" />
          <div className="absolute inset-0 cyber-grid opacity-20" />
          <FloatingElements />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20" />

          <div className="container relative">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in text-white">
              <Badge variant="outline" className="border-purple-400/50 text-purple-400 bg-purple-400/10">
                <BookOpen className="w-4 h-4 mr-2" />
                Tech Blog
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                  Insights &
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Stay ahead with the latest cybersecurity trends, development insights, and innovation stories from our
                expert team and student community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-left">
                <div className="relative max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search articles..."
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-15" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="text-center mb-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <GradientText>Featured Article</GradientText>
              </h2>
            </div>
            <Card className="max-w-6xl mx-auto group hover:shadow-2xl transition-all duration-500 bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden rounded-l-lg">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4 border-purple-400 text-purple-400 bg-purple-400/10">
                    {featuredPost.category}
                  </Badge>
                  <CardTitle className="text-3xl mb-4 group-hover:text-purple-400 transition-colors text-white">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </CardDescription>
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      asChild
                      className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                    >
                      <Link href={`/blog/${featuredPost.id}`}>
                        Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {featuredPost.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {featuredPost.comments}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-20" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar */}
              <div className="lg:w-1/4">
                <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white sticky top-24">
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {categories.map((category, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                              category.active ? "bg-purple-500/20 text-purple-400" : "hover:bg-white/10 text-gray-300"
                            }`}
                          >
                            <span>{category.name}</span>
                            <Badge variant="outline" className="text-xs border-white/20">
                              {category.count}
                            </Badge>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:w-3/4">
                <div className="text-white mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Latest <GradientText>Articles</GradientText>
                  </h2>
                  <p className="text-gray-300">Discover insights from our cybersecurity experts and innovators</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <Card
                      key={post.id}
                      className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white/10 backdrop-blur-md border border-white/20 animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={500}
                          height={300}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <Badge className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <CardTitle className="text-xl mb-3 group-hover:text-purple-400 transition-colors line-clamp-2 text-white">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Button variant="ghost" size="sm" asChild className="text-purple-400 hover:text-white p-0">
                            <Link href={`/blog/${post.id}`}>
                              Read More <ArrowRight className="w-3 h-3 ml-1" />
                            </Link>
                          </Button>
                          <div className="flex items-center gap-3 text-xs text-gray-400">
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {post.views}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                  <Button
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                  >
                    Load More Articles
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-800 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 tech-pattern opacity-15" />
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container relative">
            <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 text-white">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Stay <GradientText>Updated</GradientText>
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Get the latest cybersecurity insights, development tips, and innovation stories delivered to your
                  inbox
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  Join 1000+ professionals who trust our insights. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
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
                Sharing knowledge and insights to build a more secure digital future.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-purple-400">Popular Topics</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog?category=web-security" className="text-gray-300 hover:text-white transition-colors">
                    Web Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog?category=mobile-security"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Mobile Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog?category=cloud-security"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Cloud Security
                  </Link>
                </li>
                <li>
                  <Link href="/blog?category=innovation" className="text-gray-300 hover:text-white transition-colors">
                    Innovation Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-blue-400">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">
                    Training Courses
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                    Case Studies
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
              <h3 className="font-semibold mb-4 text-green-400">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="mailto:info@horizonflare.in" className="text-gray-300 hover:text-white transition-colors">
                    info@horizonflare.in
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
              <Badge variant="outline" className="border-purple-400 text-purple-400 bg-purple-400/10">
                <BookOpen className="w-3 h-3 mr-1" />
                Tech Blog
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
