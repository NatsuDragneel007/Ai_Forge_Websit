'use client'

import { metadata } from './metadata'
import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { Building2, Users, Building, TrendingUp, Clock, Shield } from 'lucide-react'

export default function Industries() {
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

  const industries = [
    {
      title: "MSMEs",
      subtitle: "Small and Medium Enterprises",
      icon: Building2,
      description: "Affordable, efficient tools designed for growing businesses with limited resources.",
      features: [
        { icon: TrendingUp, text: "Cost-effective automation solutions" },
        { icon: Clock, text: "Quick setup and implementation" },
        { icon: Shield, text: "Scalable as your business grows" }
      ],
      color: "from-blue-500 to-teal-500"
    },
    {
      title: "Agencies",
      subtitle: "Service-Based Businesses",
      icon: Users,
      description: "Faster client delivery with streamlined workflows and professional outputs.",
      features: [
        { icon: TrendingUp, text: "Rapid quote generation for clients" },
        { icon: Clock, text: "Faster project turnaround times" },
        { icon: Shield, text: "Consistent professional branding" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Corporates",
      subtitle: "Large Enterprises",
      icon: Building,
      description: "Scalable enterprise systems with advanced features and integrations.",
      features: [
        { icon: TrendingUp, text: "Enterprise-grade security" },
        { icon: Clock, text: "Advanced workflow automation" },
        { icon: Shield, text: "Custom integrations and API access" }
      ],
      color: "from-green-500 to-blue-500"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 reveal">
            Industries We Serve
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto reveal">
            Tailored automation solutions for every business size and type.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="card-hover reveal overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${industry.color}`}></div>
                <CardContent className="p-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                    <industry.icon className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-black mb-2 text-center">{industry.title}</h2>
                  <p className="text-gray-600 mb-4 text-center">{industry.subtitle}</p>
                  <p className="text-gray-700 mb-6 text-center">{industry.description}</p>
                  
                  <div className="space-y-3">
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <feature.icon className="h-5 w-5 text-[#3777BC] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="w-full mt-6 btn-gradient">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real results from businesses like yours</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover reveal">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Building2 className="h-5 w-5 text-[#3777BC]" />
                  <span className="text-sm font-semibold text-[#3777BC]">MSME</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">TechStart Solutions</h3>
                <p className="text-gray-600 text-sm mb-4">
                  "Forge Quote helped us reduce quote creation time by 80% and improved our close rate by 25%."
                </p>
                <div className="text-xs text-gray-500">50 employees • IT Services</div>
              </CardContent>
            </Card>

            <Card className="card-hover reveal">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="h-5 w-5 text-[#3777BC]" />
                  <span className="text-sm font-semibold text-[#3777BC]">Agency</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Creative Minds Agency</h3>
                <p className="text-gray-600 text-sm mb-4">
                  "We can now deliver quotes to clients in minutes instead of days. Our clients love the professional PDFs."
                </p>
                <div className="text-xs text-gray-500">25 employees • Digital Marketing</div>
              </CardContent>
            </Card>

            <Card className="card-hover reveal">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Building className="h-5 w-5 text-[#3777BC]" />
                  <span className="text-sm font-semibold text-[#3777BC]">Corporate</span>
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Global Corp Industries</h3>
                <p className="text-gray-600 text-sm mb-4">
                  "The enterprise features and integrations have streamlined our entire sales process across multiple departments."
                </p>
                <div className="text-xs text-gray-500">500+ employees • Manufacturing</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features by Industry */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Tailored Features</h2>
            <p className="text-xl text-gray-600">Specific capabilities for your industry</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="reveal">
              <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                <Building2 className="h-6 w-6 text-[#3777BC] mr-2" />
                For MSMEs
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#3777BC] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Simple, intuitive interface</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#3777BC] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Affordable pricing plans</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#3777BC] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Quick setup and training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#3777BC] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Mobile-friendly access</span>
                </li>
              </ul>
            </div>

            <div className="reveal">
              <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                <Users className="h-6 w-6 text-[#3777BC] mr-2" />
                For Agencies
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#3777BC] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Custom branding options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#3777BC] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Team collaboration features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#3777BC] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Client management tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#3777BC] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Advanced reporting</span>
                </li>
              </ul>
            </div>

            <div className="reveal">
              <h3 className="text-xl font-bold text-black mb-4 flex items-center">
                <Building className="h-6 w-6 text-[#3777BC] mr-2" />
                For Corporates
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#3777BC] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Enterprise-grade security</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#3777BC] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#3777BC] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Advanced workflow automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-[#3777BC] mt-0.5 mr-2 flex-shrink-0" />
                  <span>Dedicated support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of businesses that have revolutionized their workflows with AiForge.
          </p>
          <Button asChild size="lg" className="btn-gradient glow-hover">
            <Link href="/contact">Schedule a Demo</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// CheckCircle component for the list items
function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  )
}