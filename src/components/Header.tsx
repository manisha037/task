import React, { useState } from 'react'
import {  ChevronDown } from 'lucide-react'
import logo from "../public/assets/Full Logo.png";
import DropdownMenu from './DropdownMenu';

const menuItems = [
  {
    title: 'Product',
    items: ['Features', 'Integrations', 'Enterprise', 'Solutions']
  },
  // {
  //   title: 'Use Cases',
  //   items: ['Customer Support', 'Sales', 'Marketing', 'HR']
  // },
  {
    title: 'Pricing',
    items: ['Plans', 'Comparison', 'Contact Sales', 'Free Trial']
  },
  // {
  //   title: 'Resources',
  //   items: ['Blog', 'Guides', 'Help Center', 'API Docs']
  // }
]

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null)

  const handleDropdownToggle = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(index)
    }
  }

  const DropdownMenuItem = ({ item, index }) => {
    const isOpen = openDropdown === index

    return (
      <li className=" group">
        <button
          className="flex items-center text-gray-600 hover:text-indigo-600 focus:outline-none"
          onClick={() => handleDropdownToggle(index)}
        >
          {item.title}
          <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && <DropdownMenu/>
          // <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          //   {item.items.map((subItem, subIndex) => (
          //     <li key={subIndex}>
          //       <a
          //         href="#"
          //         className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
          //       >
          //         {subItem}
          //       </a>
          //     </li>
          //   ))}
          // </ul>
        }
      </li>
    )
  }

  return (
    <header className="bg-white ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
       <img src={logo} alt="logo" width={180} height={29} />
        <nav>
          <ul className="flex space-x-6">
            {menuItems.map((item, index) => (
              <DropdownMenuItem key={index} item={item} index={index} />
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-indigo-600 hover:text-indigo-700">Log In</a>
          <a 
            href="https://calendly.com/raja-prodloop/30min" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header