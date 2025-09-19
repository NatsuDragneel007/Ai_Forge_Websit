'use client'

import { metadata } from './metadata'
import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { Target, Eye, Calendar, Users, Award, Rocket } from 'lucide-react'

export default function About() {
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

  const timeline = [
    {
      year: "2024",
      title: "The Beginning",
      description: "AiForge was founded with a simple mission: to make automation accessible to every business.",
      icon: Rocket
    },
    {
      year: "2025",
      title: "Forge Quote Launch",
      description: "Our first product, Forge Quote, revolutionizes how businesses create and manage quotations.",
      icon: Award
    },
    {
      year: "2025",
      title: "Growing Family",
      description: "Expanding our product suite with Forge Invoice, Forge CRM, and Forge Analytics in development.",
      icon: Users
    },
    {
      year: "2026",
      title: "Global Reach",
      description: "Planning to serve businesses worldwide with localized automation solutions.",
      icon: Target
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 reveal">
            About AiForge
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto reveal">
            We're on a mission to simplify business through intelligent automation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-hover reveal">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3777BC] to-[#60C3AD] rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black mb-4">Our Mission</h2>
                <p className="text-lg text-gray-600">
                  AiForge exists to simplify business with automation. We believe that every business, regardless of size, deserves access to powerful automation tools that save time, reduce errors, and drive growth.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover reveal">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3777BC] to-[#60C3AD] rounded-lg flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-black mb-4">Our Vision</h2>
                <p className="text-lg text-gray-600">
                  To make automation accessible, practical, and scalable for every business. We envision a future where repetitive tasks are eliminated, and human creativity is amplified through intelligent automation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">The story of AiForge's growth and innovation</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-[#3777BC] to-[#60C3AD]"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 reveal">
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-[#3777BC] to-[#60C3AD] rounded-full flex items-center justify-center">
                            <item.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-[#3777BC]">{item.year}</div>
                            <div className="text-lg font-semibold text-black">{item.title}</div>
                          </div>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="hidden md:block md:w-0 md:flex-shrink-0">
                    <div className="w-4 h-4 bg-gradient-to-r from-[#3777BC] to-[#60C3AD] rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover reveal">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3777BC] to-[#60C3AD] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Customer First</h3>
                <p className="text-gray-600">
                  We build products that solve real problems for real businesses, always putting our customers' needs first.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover reveal">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3777BC] to-[#60C3AD] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for perfection in every line of code, every design element, and every customer interaction.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover reveal">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3777BC] to-[#60C3AD] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We push boundaries and explore new possibilities to create solutions that transform how businesses operate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Meet the Team</h2>
            <p className="text-xl text-gray-600">Passionate individuals building the future of automation</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Alex Chen", role: "CEO & Founder" },
              { name: "Sarah Johnson", role: "CTO" },
              { name: "Mike Rodriguez", role: "Head of Design" },
              { name: "Emily Davis", role: "Lead Developer" }
            ].map((member, index) => (
              <Card key={index} className="card-hover reveal">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#3777BC] to-[#60C3AD] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-4xl font-bold text-black mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of the automation revolution. Let's build the future of business together.
          </p>
          <Button asChild size="lg" className="btn-gradient glow-hover">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}