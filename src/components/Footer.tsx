import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const footerItems = [
  {
    title: 'Product',
    links: ['Features', 'Integrations', 'Enterprise', 'Solutions']
  },
  {
    title: 'Use Cases',
    links: ['Customer Support', 'Sales', 'Marketing', 'HR']
  },
  {
    title: 'Resources',
    links: ['Blog', 'Guides', 'Help Center', 'API Docs']
  },
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Partners', 'Contact Us']
  },
  {
    title: 'Pricing',
    links: ['Plans', 'Comparison', 'Contact Sales', 'Free Trial']
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
  }
]

const FooterColumn = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const hasDropdown = ['Product', 'Use Cases', 'Pricing', 'Resources'].includes(item.title)

  return (
    <div className="mb-6">
      <div 
        className={`flex justify-between items-center cursor-pointer ${hasDropdown ? 'mb-2' : 'mb-3'}`}
        onClick={hasDropdown ? toggleDropdown : undefined}
      >
        <h3 className="font-semibold text-gray-800">{item.title}</h3>
        {hasDropdown && (
          isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />
        )}
      </div>
      <ul className={`space-y-2 ${hasDropdown && !isOpen ? 'hidden' : 'block'}`}>
        {item.links.map((link) => (
          <li key={link}>
            <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {footerItems.map((item) => (
            <FooterColumn key={item.title} item={item} />
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          © 2023 Prodloop. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer