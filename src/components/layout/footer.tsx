import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
 const footerLinks = [
  {
    title: 'Company',
    links: [
      { href: '/', label: 'Home', id: 'home' },
      { href: '/about', label: 'About', id: 'about' },
      { href: '/products', label: 'Products', id: 'products' },
      { href: '/contact', label: 'Contact', id: 'company-contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { href: '/forge-quote', label: 'Forge Quote', id: 'forge-quote' },
      { href: '/pricing', label: 'Pricing', id: 'pricing' },
      { href: '/industries', label: 'Industries', id: 'industries' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/insights', label: 'Insights', id: 'insights' },
      { href: '/contact#support', label: 'Support', id: 'support' },
      { href: '/contact#demo', label: 'Demo', id: 'demo' },
    ],
  },
]

  const socialLinks = [
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
    { href: '#', icon: Twitter, label: 'Twitter' },
    { href: '#', icon: Github, label: 'GitHub' },
    { href: '#', icon: Mail, label: 'Email' },
  ]

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4">AiForge</div>
            <p className="text-gray-300 mb-6">
              Automation, Simplified. Building AI-powered systems that save time and scale businesses.
            </p>
            <Button asChild className="btn-gradient">
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>

          {/* Footer Links */}
{footerLinks.map((section) => (
  <div key={section.title}>
    <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
    <ul className="space-y-2">
      {section.links.map((link) => (
        <li key={link.id}>  {/* Changed from link.href to link.id */}
          <Link
            href={link.href}
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 AiForge. All rights reserved.
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}