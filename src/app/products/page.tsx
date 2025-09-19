'use client'

import { metadata } from './metadata'
import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { Star, Bot, Clock, FileText, Bell, Zap } from 'lucide-react'

export default function Products() {
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

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 reveal">
            Explore AiForge Products
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto reveal">
            Simple tools that automate critical workflows and transform your business operations.
          </p>
        </div>
      </section>

      {/* Forge Quote Product */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="card-hover border-2 border-[#3777BC] reveal">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-20 h-20 bg-gradient-to-r from-[#3777BC] to-[#60C3AD] rounded-lg flex items-center justify-center mb-6">
                    <Star className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Forge Quote</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    The intelligent quotation system that helps you create, send, and convert professional quotes in record time.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-[#3777BC]" />
                      <span className="text-gray-700">Dynamic builder with smart templates</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-[#3777BC]" />
                      <span className="text-gray-700">Branded PDF generation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Zap className="h-5 w-5 text-[#3777BC]" />
                      <span className="text-gray-700">Seamless invoice conversion</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Bell className="h-5 w-5 text-[#3777BC]" />
                      <span className="text-gray-700">Automated follow-up reminders</span>
                    </div>
                  </div>
                  
                  <Button asChild size="lg" className="btn-gradient glow-hover">
                    <Link href="/forge-quote">Learn More</Link>
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-[#3777BC] to-[#60C3AD] rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <Star className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Forge Quote Interface</p>
                      <p className="text-sm opacity-90">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Future Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Coming Soon</h2>
            <p className="text-xl text-gray-600">We're expanding our automation suite</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover reveal">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Bot className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Forge Invoice</h3>
                <p className="text-gray-600 mb-6">
                  Automated invoicing with smart payment tracking and reminders.
                </p>
                <div className="text-sm text-gray-500">Q2 2025</div>
              </CardContent>
            </Card>

            <Card className="card-hover reveal">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Bot className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Forge CRM</h3>
                <p className="text-gray-600 mb-6">
                  Intelligent customer relationship management with AI insights.
                </p>
                <div className="text-sm text-gray-500">Q3 2025</div>
              </CardContent>
            </Card>

            <Card className="card-hover reveal">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Bot className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Forge Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Business intelligence and automated reporting dashboard.
                </p>
                <div className="text-sm text-gray-500">Q4 2025</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the power of Forge Quote and be the first to know about our upcoming products.
          </p>
          <Button asChild size="lg" className="btn-gradient glow-hover">
            <Link href="/contact">Request a Demo</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}