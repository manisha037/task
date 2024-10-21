import { useState } from 'react';
import logo from "../public/assets/Full Logo.png";
import { ChevronDown } from 'lucide-react';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  // State to track the index of the currently open dropdown
  const [openIndex, setOpenIndex] = useState(null);


  // Function to toggle the dropdown state based on index
  const toggleDropdown = (index :any) => {
 
    setOpenIndex(openIndex === index ? null : index); // Close if the same index is clicked
  };

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

  return (
    <div className='w-[100%] h-[80px] relative items-center'>
      <div className='w-[90%] mx-auto flex items-center my-5 justify-between' >
        <img src={logo} width={180} height={29} alt="Logo" />
        <div className='flex gap-7'>
         
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex cursor-pointer items-center`} 
              onClick={() => toggleDropdown(index+1)} // Toggle based on index
            >
              <p className={`text-[18px] text-[#1B2559] font-semibold  ${openIndex === index+1 ? 'text-[#4318FF] border-b-4 border-[#4318FF]' : ''}`}>{item.title}</p>
              <ChevronDown 
                className={`ml-1 w-4 h-4 transition-transform ${openIndex === index+1 ? 'rotate-180 text-[#4318FF]' : ''}`} 
              />
            </div>
          ))}
        </div>
        
        <div className='flex items-center gap-4'>
          <div className='font-medium text-[20px] text-[#4318FF] cursor-pointer'>Log In</div>
          <div className='text-white cursor-pointer bg-[#4318FF] font-bold rounded-full text-[20px] px-[24px] py-[12px] border-[1.5px] border-[#7252FF]'>
            Book a demo
          </div>
        </div>
      </div>
      {openIndex &&<DropdownMenu/>
}
    </div>
  );
};

export default Navbar;
