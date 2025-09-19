'use client'

import { metadata } from './metadata'
import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { Check, Star, Zap, Shield, Users } from 'lucide-react'

export default function Pricing() {
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

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small businesses getting started with automation.",
      features: [
        "50 quotes/month",
        "Branded PDF templates",
        "Basic analytics",
        "Email support",
        "Mobile app access"
      ],
      excludedFeatures: [
        "Invoice conversion",
        "Automated reminders",
        "Team collaboration"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Pro",
      price: "$79",
      period: "per month",
      description: "For growing businesses that need advanced features.",
      features: [
        "Unlimited quotes",
        "Branded PDF templates",
        "Advanced analytics",
        "Priority email & chat support",
        "Mobile app access",
        "Invoice conversion",
        "Automated reminders",
        "Team collaboration (5 users)"
      ],
      excludedFeatures: [
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: true,
      color: "from-[#3777BC] to-[#60C3AD]"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with specific needs.",
      features: [
        "Unlimited everything",
        "Custom branding",
        "Advanced analytics & reporting",
        "24/7 dedicated support",
        "Mobile app access",
        "Invoice conversion",
        "Automated reminders",
        "Unlimited team users",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "Custom training"
      ],
      excludedFeatures: [],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 reveal">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto reveal">
            Choose the perfect plan for your business. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`card-hover relative reveal ${plan.popular ? 'border-2 border-[#3777BC] scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[#3777BC] to-[#60C3AD] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    {plan.name === "Starter" && <Zap className="h-8 w-8 text-white" />}
                    {plan.name === "Pro" && <Users className="h-8 w-8 text-white" />}
                    {plan.name === "Enterprise" && <Shield className="h-8 w-8 text-white" />}
                  </div>
                  <CardTitle className="text-2xl font-bold text-black">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-black">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <Button asChild className={`w-full ${plan.popular ? 'btn-gradient glow-hover' : 'btn-outline'}`}>
                    <Link href="/contact">Request a Demo</Link>
                  </Button>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.excludedFeatures.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 opacity-50">
                        <div className="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                          <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
                        </div>
                        <span className="text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Compare Features</h2>
            <p className="text-xl text-gray-600">Detailed breakdown of what's included in each plan</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-6 font-semibold text-black">Feature</th>
                    <th className="text-center p-6 font-semibold text-black">Starter</th>
                    <th className="text-center p-6 font-semibold text-[#3777BC]">Pro</th>
                    <th className="text-center p-6 font-semibold text-black">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Quotes per month", starter: "50", pro: "Unlimited", enterprise: "Unlimited" },
                    { feature: "Branded PDFs", starter: "✓", pro: "✓", enterprise: "✓" },
                    { feature: "Invoice conversion", starter: "✗", pro: "✓", enterprise: "✓" },
                    { feature: "Automated reminders", starter: "✗", pro: "✓", enterprise: "✓" },
                    { feature: "Team users", starter: "1", pro: "5", enterprise: "Unlimited" },
                    { feature: "Analytics", starter: "Basic", pro: "Advanced", enterprise: "Advanced" },
                    { feature: "Support", starter: "Email", pro: "Priority", enterprise: "24/7 Dedicated" },
                    { feature: "Custom integrations", starter: "✗", pro: "✗", enterprise: "✓" },
                    { feature: "API access", starter: "✗", pro: "Read-only", enterprise: "Full" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-6 text-gray-700">{row.feature}</td>
                      <td className="p-6 text-center">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                          row.starter === "✓" ? "bg-green-100 text-green-600" :
                          row.starter === "✗" ? "bg-red-100 text-red-600" :
                          "bg-gray-100 text-gray-600"
                        }`}>
                          {row.starter}
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                          row.pro === "✓" ? "bg-green-100 text-green-600" :
                          row.pro === "✗" ? "bg-red-100 text-red-600" :
                          "bg-blue-100 text-blue-600"
                        }`}>
                          {row.pro}
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                          row.enterprise === "✓" ? "bg-green-100 text-green-600" :
                          row.enterprise === "✗" ? "bg-red-100 text-red-600" :
                          "bg-purple-100 text-purple-600"
                        }`}>
                          {row.enterprise}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our pricing</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                question: "Do you offer discounts for annual billing?",
                answer: "Yes, we offer 20% off when you choose annual billing for any of our paid plans."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, debit cards, and bank transfers for enterprise customers."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a 14-day free trial for our Pro plan so you can test all features before committing."
              },
              {
                question: "Do you provide training and onboarding?",
                answer: "Yes, we provide comprehensive onboarding for all paid plans, with dedicated training for enterprise customers."
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
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the plan that's right for your business and start automating today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-gradient glow-hover">
              <Link href="/contact">Request a Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-outline">
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}