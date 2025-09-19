'use client'

import { metadata } from './metadata'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { FileText, Zap, CheckCircle, TrendingUp, Send } from 'lucide-react'

export default function ForgeQuote() {
 const [formData, setFormData] = useState({
  name: '',
  companyName: '',
  email: '',
  contactNo: '',
  pricingOption: '',
  promocode: '',
  notes: ''
})

const [subtotal, setSubtotal] = useState(0)
const [gstAmount, setGstAmount] = useState(0)
const [totalAmount, setTotalAmount] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [discount, setDiscount] = useState(0)
const [discountDescription, setDiscountDescription] = useState('')

  const pricingOptions = [
  { id: 'starter', name: 'Starter Plan', price: 2999, description: 'Perfect for small businesses' },
  { id: 'pro', name: 'Pro Plan', price: 7999, description: 'For growing businesses' },
  { id: 'enterprise', name: 'Enterprise Plan', price: 19999, description: 'For large organizations' }
]

const calculateTotal = (pricingOptionId: string) => {
  const selectedOption = pricingOptions.find(option => option.id === pricingOptionId)
  if (selectedOption) {
    const subtotal = selectedOption.price
    const gstAmount = Math.round(subtotal * 0.18) // 18% GST
    const total = subtotal + gstAmount
    
    setSubtotal(subtotal)
    setGstAmount(gstAmount)
    setTotalAmount(total)
  } else {
    setSubtotal(0)
    setGstAmount(0)
    setTotalAmount(0)
  }
}

const validatePromocode = (code: string) => {
  const validPromocodes = {
    'WELCOME10': { discount: 10, description: '10% off' },
    'SAVE20': { discount: 20, description: '20% off' },
    'FIRST100': { discount: 100, description: '₹100 off' }
  }
  
  return validPromocodes[code.toUpperCase()] || null
}

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

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value } = e.target
  setFormData(prev => ({
    ...prev,
    [name]: value
  }))
  
  // If pricing option changes, recalculate total
  if (name === 'pricingOption') {
    calculateTotal(value)
  }
  if (name === 'promocode') {
    const promo = validatePromocode(value)
    if (promo) {
      if (promo.discount > 1) {
        // Fixed amount discount
        setDiscount(promo.discount)
      } else {
        // Percentage discount
        setDiscount(Math.round(totalAmount * (promo.discount / 100)))
      }
      setDiscountDescription(promo.description)
    } else {
      setDiscount(0)
      setDiscountDescription('')
    }
  }
}

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    console.log('Submitting form data:', formData)
    
    // Include pricing information in the submission
    const submissionData = {
      ...formData,
      pricingDetails: {
        selectedOption: formData.pricingOption,
        subtotal: subtotal,
        gstAmount: gstAmount,
        totalAmount: totalAmount
      }
    }
    
    console.log('Complete submission data:', submissionData)
    
    // Use your local n8n webhook URL
    const webhookUrl = 'http://localhost:5678/webhook-test/41d3b9c0-67dc-4f66-9b1b-8a34ed9960c8'
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify(submissionData),
    })
    
    console.log('Response status:', response.status)
    
    if (response.ok) {
      setIsSubmitted(true)
    } else {
      const errorText = await response.text()
      console.error('Error response:', errorText)
      throw new Error(`HTTP error! status: ${response.status}`)
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    
    let errorMessage = 'There was an error submitting your form. Please try again.'
    
    if (error instanceof Error) {
      if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Unable to connect to the server. Please make sure n8n is running on localhost:5678.'
      } else if (error.message.includes('CORS')) {
        errorMessage = 'CORS error. Please check your n8n webhook configuration or try using a different browser.'
      } else {
        errorMessage = `Error: ${error.message}`
      }
    }
    
    // User-friendly error display
    const errorDiv = document.createElement('div')
    errorDiv.className = 'fixed top-4 right-4 p-4 bg-red-500 text-white rounded-lg shadow-lg z-50 max-w-md'
    errorDiv.innerHTML = `
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium">${errorMessage}</p>
        </div>
        <div class="ml-auto pl-3">
          <button onclick="this.parentElement.parentElement.remove()" class="inline-flex text-white hover:text-gray-200">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    `
    document.body.appendChild(errorDiv)
    
    setTimeout(() => {
      if (errorDiv.parentElement) {
        errorDiv.remove()
      }
    }, 5000)
  } finally {
    setIsSubmitting(false)
  }
}

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 reveal">
            See Forge Quote in Action — Right Now
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto reveal">
            Fill in a few details and instantly get a professional quote from AiForge.
          </p>
          <div className="flex justify-center reveal">
            <div className="animate-bounce">
              <svg className="w-8 h-8 text-[#3777BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Form */}
            <div className="lg:col-span-2 reveal">
              <Card className="card-hover">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-black mb-6">Create Your Quote</h2>
                  
                  {isSubmitted ? (
  <div className="text-center py-8">
    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <Send className="h-8 w-8 text-green-600" />
    </div>
    <h3 className="text-xl font-semibold text-black mb-2">Quote Request Submitted Successfully!</h3>
    <p className="text-gray-600 mb-4">
      Thank you for your interest in Forge Quote. Our team will contact you shortly.
    </p>
    {totalAmount > 0 && (
      <Card className="bg-gradient-to-r from-[#3777BC] to-[#60C3AD] text-white max-w-md mx-auto">
        <CardContent className="p-4">
          <p className="text-sm opacity-90">Selected Plan Total:</p>
          <p className="text-2xl font-bold">₹{totalAmount.toLocaleString('en-IN')}</p>
        </CardContent>
      </Card>
    )}
  </div>
) : (
  // Form goes here
                   <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="name" className="block text-black font-medium mb-2">
        Name *
      </label>
      <input
        id="name"
        name="name"
        type="text"
        required
        value={formData.name}
        onChange={handleInputChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3777BC] focus:border-transparent transition-all duration-200"
        placeholder="Enter your full name"
      />
    </div>
    
    <div>
      <label htmlFor="companyName" className="block text-black font-medium mb-2">
        Company Name *
      </label>
      <input
        id="companyName"
        name="companyName"
        type="text"
        required
        value={formData.companyName}
        onChange={handleInputChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3777BC] focus:border-transparent transition-all duration-200"
        placeholder="Enter your company name"
      />
    </div>
  </div>
  
  <div className="grid md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="email" className="block text-black font-medium mb-2">
        Email *
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        value={formData.email}
        onChange={handleInputChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3777BC] focus:border-transparent transition-all duration-200"
        placeholder="your@email.com"
      />
    </div>
    
    <div>
      <label htmlFor="contactNo" className="block text-black font-medium mb-2">
        Contact No *
      </label>
      <input
        id="contactNo"
        name="contactNo"
        type="text"
        required
        value={formData.contactNo}
        onChange={handleInputChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3777BC] focus:border-transparent transition-all duration-200"
        placeholder="+91 98765 43210"
      />
    </div>
  </div>
  
  <div>
    <label htmlFor="pricingOption" className="block text-black font-medium mb-2">
      Interested in pricing options *
    </label>
    <select
      id="pricingOption"
      name="pricingOption"
      required
      value={formData.pricingOption}
      onChange={handleInputChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3777BC] focus:border-transparent transition-all duration-200"
    >
      <option value="">Select a pricing option</option>
      {pricingOptions.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name} - ₹{option.price.toLocaleString('en-IN')}
        </option>
      ))}
    </select>
  </div>
  
  {/* Pricing Summary */}
  {formData.pricingOption && (
    <Card className="bg-gradient-to-r from-[#3777BC] to-[#60C3AD] text-white">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Pricing Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between">
            <span>GST (18%):</span>
            <span>₹{gstAmount.toLocaleString('en-IN')}</span>
          </div>
          <div className="border-t border-white/30 pt-2 mt-2">
            <div className="flex justify-between font-semibold text-lg">
              <span>Total:</span>
              <span>₹{totalAmount.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )}
  
  <div>
    <label htmlFor="promocode" className="block text-black font-medium mb-2">
      Promocode (Optional)
    </label>
    <input
      id="promocode"
      name="promocode"
      type="text"
      value={formData.promocode}
      onChange={handleInputChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3777BC] focus:border-transparent transition-all duration-200"
      placeholder="Enter promocode for discount"
    />
    <p className="text-sm text-gray-500 mt-1">
      💡 Use promocode "WELCOME10" for 10% off on your first purchase!
    </p>
  </div>
  
  <div>
    <label htmlFor="notes" className="block text-black font-medium mb-2">
      Notes
    </label>
    <textarea
      id="notes"
      name="notes"
      value={formData.notes}
      onChange={handleInputChange}
      rows={4}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3777BC] focus:border-transparent transition-all duration-200"
      placeholder="Any additional requirements or questions..."
    />
  </div>
  
  <Button 
    type="submit" 
    size="lg" 
    className="w-full btn-gradient glow-hover"
    disabled={isSubmitting || !formData.pricingOption}
  >
    {isSubmitting ? 'Processing...' : 'Get Quote Now'}
  </Button>
</form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Cherry Mascot Section */}
            <div className="reveal">
              <Card className="card-hover border-2 border-transparent hover:border-[#3777BC] transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-6 animate-pulse">
                    <img 
                      src="/assets/img/cherry.png" 
                      alt="Cherry Mascot" 
                      className="w-32 h-32 mx-auto rounded-full object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-lg font-medium text-gray-700">
                    {isSubmitted 
                      ? "All done! Check your inbox 🎉" 
                      : "Fill the form and I'll whip up your quote in seconds 🚀"
                    }
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {isSubmitted && (
        <section className="py-20 bg-gradient-to-r from-[#3777BC] to-[#60C3AD] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
            <h2 className="text-4xl font-bold mb-6">
              Liked how fast this was? Imagine scaling it for your entire sales process.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's talk about how Forge Quote can transform your business.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-[#3777BC] hover:bg-gray-100 glow-hover"
            >
              <Link href="https://calendly.com/your-calendly-link" target="_blank" rel="noopener noreferrer">
                Book a Call
              </Link>
            </Button>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to create winning quotations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover reveal">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3777BC] to-[#60C3AD] rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Professional PDFs</h3>
                <p className="text-gray-600">
                  Generate beautifully branded quotations that impress clients and close deals faster.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover reveal">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3777BC] to-[#60C3AD] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Efficient Workflows</h3>
                <p className="text-gray-600">
                  Streamlined quote creation process saves hours every week on manual paperwork.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover reveal">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#3777BC] to-[#60C3AD] rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">Seamless Conversion</h3>
                <p className="text-gray-600">
                  Convert approved quotes to invoices with a single click, eliminating data entry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}