'use client'

import { metadata } from './metadata'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { Mail, Phone, MapPin, Calendar, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Create mailto link
    const subject = encodeURIComponent('Demo Request from AiForge Website')
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n\n` +
      `Message:\n${formData.message}`
    )
    
    window.location.href = `mailto:demo@aiforge.com?subject=${subject}&body=${body}`
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@aiforge.com",
      description: "Get in touch for general inquiries"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Monday to Friday, 9 AM to 6 PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Innovation Drive, Tech City, TC 12345",
      description: "Schedule a visit to our office"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 reveal">
            Let's Build Together
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto reveal">
            Ready to transform your business with automation? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Form and Calendly */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="reveal">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl text-black flex items-center">
                    <Send className="h-6 w-6 text-[#3777BC] mr-2" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-black mb-2">Message Sent!</h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-black font-medium">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-black font-medium">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="your@email.com"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="company" className="text-black font-medium">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-black font-medium">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="mt-1"
                          rows={5}
                          placeholder="Tell us about your automation needs..."
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full btn-gradient glow-hover"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Calendly Embed */}
            <div className="reveal">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl text-black flex items-center">
                    <Calendar className="h-6 w-6 text-[#3777BC] mr-2" />
                    Schedule a Demo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <p className="text-gray-600 mb-4">
                      Book a 30-minute demo with our automation experts to see how AiForge can transform your business.
                    </p>
                  </div>
                  
                  {/* Calendly Placeholder */}
                  <div className="bg-gradient-to-br from-[#3777BC] to-[#60C3AD] rounded-lg p-8 text-white text-center min-h-[400px] flex items-center justify-center">
                    <div>
                      <Calendar className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Calendly Integration</h3>
                      <p className="text-sm opacity-90 mb-4">
                        Interactive scheduling calendar will be embedded here
                      </p>
                      <Button variant="secondary" className="text-[#3777BC]">
                        Open Scheduling Tool
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-sm text-gray-600 text-center">
                    <p>Available slots: Monday - Friday, 9:00 AM - 6:00 PM EST</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach our team</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-hover reveal text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#3777BC] to-[#60C3AD] rounded-full flex items-center justify-center mx-auto mb-6">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">{info.title}</h3>
                  <p className="text-lg text-[#3777BC] mb-2">{info.value}</p>
                  <p className="text-gray-600">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How quickly can I get started with AiForge?",
                answer: "You can start using Forge Quote immediately after signup. Most users are up and running within minutes."
              },
              {
                question: "Do you offer training and onboarding?",
                answer: "Yes, we provide comprehensive onboarding for all new customers, including video tutorials and documentation."
              },
              {
                question: "Can I integrate AiForge with my existing tools?",
                answer: "Yes, we offer integrations with popular business tools. Enterprise customers get custom integration support."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We offer email and chat support for all customers, with 24/7 dedicated support for enterprise clients."
              }
            ].map((faq, index) => (
              <Card key={index} className="reveal">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Automate?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of businesses that have transformed their workflows with AiForge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-gradient glow-hover">
              <Link href="#contact-form">Start Free Trial</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-outline">
              <Link href="#calendly">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}