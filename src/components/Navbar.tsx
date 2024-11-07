import { useState } from 'react';
import logo from "../public/assets/Full Logo.png";
import { ChevronDown } from 'lucide-react';
import DropdownMenu from './DropdownMenu';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  // State to track the index of the currently open dropdown
  const [openIndex, setOpenIndex] = useState(null);
  const navigate=useNavigate();


  // Function to toggle the dropdown state based on index
  const toggleDropdown = (index :any) => {
    if(index===2){
navigate("/pricing");
    }
 else
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
    <>
    <div className='w-screen h-[80px] relative items-center'>
      <div className='w-[90%] mx-auto flex items-center my-5 justify-between' >
        <img src={logo} width={180} height={29} alt="Logo" className='cursor-pointer md:w-[180px] md:h-[29px] w-[120px] h-[18px] ' onClick={()=>navigate("/")} />
        <div className='flex gap-7'>
         
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className={`cursor-pointer md:flex hidden items-center`} 
              onClick={() => toggleDropdown(index+1)} // Toggle based on index
            >
              <p className={`text-[18px] text-[#1B2559] font-semibold  ${openIndex === index+1 ? 'text-[#4318FF] border-b-4 border-[#4318FF]' : ''}`}>{item.title}</p>
             { item.title!=='Pricing' && <ChevronDown 
                className={`ml-1 w-4 h-4 transition-transform ${openIndex === index+1 ? 'rotate-180 text-[#4318FF]' : ''}`} 
              />}
            </div>
          ))}
        </div>
      
        
        <div className='flex items-center gap-4'>
          <div className='font-medium md:text-[20px] text-[14px] text-[#4318FF] cursor-pointer'>Log In</div>
          <div className='text-white cursor-pointer bg-[#4318FF] font-bold rounded-full text-[14px] md:text-[20px] w-[115px] h-[30px] grid place-content-center  md:w-[173px] md:h-[52px] border-[1.5px] border-[#7252FF]'>
            Book a demo
          </div>
        </div>
      </div>

    </div>
    <div className='w-[95%]  mx-auto mb-4 border border-[#C0B3F8] rounded-full p-4  flex md:hidden item-center gap-8 justify-center' >
    {menuItems.map((item, index) => (
            <div 
              key={index} 
              className={`cursor-pointer flex  items-center`} 
              onClick={() => toggleDropdown(index+1)} // Toggle based on index
            >
              <p className={`text-[18px] text-[#1B2559] font-semibold  ${openIndex === index+1 ? 'text-[#4318FF] border-b-4 border-[#4318FF]' : ''}`}>{item.title}</p>
             { item.title!=='Pricing' && <ChevronDown 
                className={`ml-1 w-4 h-4 transition-transform ${openIndex === index+1 ? 'rotate-180 text-[#4318FF]' : ''}`} 
              />}
            </div>
          ))}
            
            </div>
            {openIndex &&<DropdownMenu/>
            }
          
    </>
  );
};

export default Navbar;
