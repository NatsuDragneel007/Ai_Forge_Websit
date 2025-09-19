'use client'

import { metadata } from './metadata'
import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { Zap, Bot, TrendingUp, Star } from 'lucide-react'

export default function Home() {
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 reveal">
            Automation, Simplified.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto reveal">
            AiForge builds AI-powered systems that save time and scale businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
            <Button asChild size="lg" className="btn-gradient glow-hover">
              <Link href="/contact">Request a Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-outline">
              <Link href="/products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Snapshot */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Our Products</h2>
            <p className="text-xl text-gray-600">Powerful automation tools for modern businesses</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Forge Quote Card */}
            <Card className="card-hover reveal">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3777BC] to-[#60C3AD] rounded-lg flex items-center justify-center mb-6">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Forge Quote</h3>
                <p className="text-gray-600 mb-6">
                  Generate quotations instantly. Convert to invoices. Close deals faster.
                </p>
                <Button asChild className="btn-gradient">
                  <Link href="/forge-quote">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Future Products Card */}
            <Card className="card-hover reveal">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                  <Bot className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">More Products Coming Soon</h3>
                <p className="text-gray-600 mb-6">
                  AiForge is expanding automation for every workflow.
                </p>
                <Button variant="outline" className="btn-outline">
                  <Link href="/products">View Roadmap</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why AiForge */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Why AiForge</h2>
            <p className="text-xl text-gray-600">The advantage of intelligent automation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center reveal">
              <div className="w-20 h-20 bg-gradient-to-r from-[#3777BC] to-[#60C3AD] rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Faster</h3>
              <p className="text-gray-600">hours → seconds</p>
            </div>
            
            <div className="text-center reveal">
              <div className="w-20 h-20 bg-gradient-to-r from-[#3777BC] to-[#60C3AD] rounded-full flex items-center justify-center mx-auto mb-6">
                <Bot className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Smarter</h3>
              <p className="text-gray-600">automation without complexity</p>
            </div>
            
            <div className="text-center reveal">
              <div className="w-20 h-20 bg-gradient-to-r from-[#3777BC] to-[#60C3AD] rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Scalable</h3>
              <p className="text-gray-600">built for all businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="card-hover reveal">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <blockquote className="text-2xl text-gray-700 mb-6 italic">
                "AiForge transformed our workflow. What used to take hours now takes minutes. The automation is seamless and the results are outstanding."
              </blockquote>
              <cite className="text-lg text-gray-600 not-italic">
                — Sarah Johnson, CEO at TechCorp
              </cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of businesses already using AiForge to automate their workflows.
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