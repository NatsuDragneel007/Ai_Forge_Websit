'use client'

import { metadata } from './metadata'
import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'

export default function Insights() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    
    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active')
        }
      })
    }
    
    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll()
    
    return () => window.removeEventListener('scroll', revealOnScroll)
  }, [])

  const blogPosts = [
    {
      title: "How automation saves MSMEs hours every week",
      excerpt: "Discover how small and medium enterprises are leveraging automation to reclaim valuable time and focus on growth.",
      author: "Sarah Johnson",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "MSMEs",
      image: "automation-msme"
    },
    {
      title: "Why faster quotations lead to more closed deals",
      excerpt: "Learn the psychology behind quick quote responses and how speed can significantly impact your conversion rates.",
      author: "Mike Chen",
      date: "March 12, 2025",
      readTime: "7 min read",
      category: "Sales",
      image: "fast-quotes"
    },
    {
      title: "5 workflows businesses should automate now",
      excerpt: "Identify the most time-consuming workflows in your business and learn how to automate them effectively.",
      author: "Emily Davis",
      date: "March 8, 2025",
      readTime: "6 min read",
      category: "Automation",
      image: "workflows"
    },
    {
      title: "The future of AI in business automation",
      excerpt: "Explore emerging trends in AI-powered automation and what they mean for the future of business operations.",
      author: "Alex Kumar",
      date: "March 5, 2025",
      readTime: "8 min read",
      category: "AI & Technology",
      image: "ai-future"
    },
    {
      title: "Measuring ROI of automation tools",
      excerpt: "A comprehensive guide to calculating the return on investment for your automation initiatives.",
      author: "Lisa Wang",
      date: "March 1, 2025",
      readTime: "9 min read",
      category: "Business Strategy",
      image: "roi-measurement"
    },
    {
      title: "Building an automation-first company culture",
      excerpt: "How to foster a culture that embraces automation and continuous improvement across your organization.",
      author: "David Brown",
      date: "February 26, 2025",
      readTime: "6 min read",
      category: "Company Culture",
      image: "automation-culture"
    }
  ]

  const categories = [
    { name: "All", count: 24 },
    { name: "MSMEs", count: 8 },
    { name: "Sales", count: 6 },
    { name: "Automation", count: 12 },
    { name: "AI & Technology", count: 9 },
    { name: "Business Strategy", count: 7 },
    { name: "Company Culture", count: 4 }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 reveal">
            Insights & Resources
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto reveal">
            Expert insights, tips, and strategies to help you leverage automation for business growth.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="card-hover overflow-hidden reveal">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3777BC] to-[#60C3AD] flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="text-sm uppercase tracking-wide mb-2 opacity-90">Featured Article</div>
                    <h3 className="text-2xl font-bold mb-4">How automation saves MSMEs hours every week</h3>
                    <p className="text-sm opacity-90">Featured Image</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>March 15, 2025</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>Sarah Johnson</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-black mb-4">How automation saves MSMEs hours every week</h2>
                <p className="text-gray-600 mb-6">
                  Discover how small and medium enterprises are leveraging automation to reclaim valuable time and focus on growth. Learn practical strategies that you can implement today.
                </p>
                <Button asChild className="btn-gradient">
                  <Link href="#">
                    Read Article <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-bold text-black mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Find content relevant to your interests</p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.name === "All" ? "default" : "outline"}
                className={category.name === "All" ? "btn-gradient" : "btn-outline"}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600">Stay updated with the latest trends and insights</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="card-hover reveal overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-[#3777BC] to-[#60C3AD] flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-sm uppercase tracking-wide mb-2 opacity-90">{post.category}</div>
                    <p className="text-sm opacity-90">Article Image</p>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[#3777BC] hover:text-[#3777BC]">
                      Read More <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-4xl font-bold text-black mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest insights and automation tips delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3777BC]"
            />
            <Button className="btn-gradient">Subscribe</Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Join 10,000+ professionals who receive our weekly newsletter.
          </p>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Popular Topics</h2>
            <p className="text-xl text-gray-600">Explore our most read content categories</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { topic: "Business Automation", count: 15 },
              { topic: "Productivity Tips", count: 12 },
              { topic: "Technology Trends", count: 18 },
              { topic: "Growth Strategies", count: 9 },
              { topic: "Case Studies", count: 7 },
              { topic: "Industry Insights", count: 11 },
              { topic: "Tool Reviews", count: 8 },
              { topic: "Best Practices", count: 14 }
            ].map((topic, index) => (
              <Card key={index} className="card-hover reveal text-center">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">{topic.topic}</h3>
                  <p className="text-gray-600">{topic.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}