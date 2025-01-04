import { useState } from 'react';
import logo from "../public/assets/Full Logo.png";
import { ChevronDown } from 'lucide-react';
import DropdownMenu from './DropdownMenu';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Tracks the active dropdown
  const navigate = useNavigate();

  const toggleDropdown = (index: number) => {
    if (index === 2) {
      navigate("/pricing");
    } else {
      setOpenIndex(openIndex === index ? null : index); // Toggle dropdown
    }
  };

  const handleClose = () => setOpenIndex(null);

  const menuItems = [
    {
      title: 'Product',
      items: ['Features', 'Integrations', 'Enterprise', 'Solutions'],
    },
    {
      title: 'Pricing',
      items: ['Plans', 'Comparison', 'Contact Sales', 'Free Trial'],
    },
  ];

  return (
    <>
      <div className="max-w-[1152px] mx-auto h-[64px] relative items-center">
        <div className="xl:w-[100%] w-[90%] mx-auto flex items-center my-5 justify-between">
          <img
            src={logo}
            width={180}
            height={29}
            alt="Logo"
            className="cursor-pointer lg:w-[138px] lg:h-[22px] w-[110px] h-[18px] "
            onClick={() => navigate("/")}
          />
          <div className="flex gap-7">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer sm:flex hidden items-center`}
                onClick={() => toggleDropdown(index + 1)} // Toggle based on index
              >
                <p
                  className={`xl:text-[16px] md:text-[14px] sm:text-[12px] font-sans text-[#1B2559] font-semibold ${
                    openIndex === index + 1
                      ? 'text-[#4318FF] border-b-4 border-[#4318FF]'
                      : ''
                  }`}
                >
                  {item.title}
                </p>
                {item.title !== 'Pricing' && (
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform ${
                      openIndex === index + 1
                        ? 'rotate-180 text-[#4318FF]'
                        : ''
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="font-medium xl:text-[16px] text-[12px]  md:text-[14px]  text-[#4318FF] font-sans cursor-pointer">
              Log In
            </div>
            <div className="text-white cursor-pointer bg-[#4318FF] font-bold rounded-full xl:text-[16px] text-[12px] md:text-[14px] w-[100px] h-[25px] grid place-content-center xl:w-[133px] xl:h-[40px] border-[1.5px] border-[#7252FF]  items-center ">
              Book a demo
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="w-[95%] mx-auto -mt-3 mb-4 border border-[#C0B3F8] rounded-full p-[5px] flex sm:hidden item-center gap-8 justify-center">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer flex items-center`}
            onClick={() => toggleDropdown(index + 1)}
          >
            <p
              className={`text-[14px] text-[#1B2559] font-sans font-semibold ${
                openIndex === index + 1
                  ? 'text-[#4318FF] border-b-4 border-[#4318FF]'
                  : ''
              }`}
            >
              {item.title}
            </p>
            {item.title !== 'Pricing' && (
              <ChevronDown
                className={`ml-1 w-4 h-4 text-[#1B2559] transition-transform ${
                  openIndex === index + 1 ? 'rotate-180 text-[#4318FF]' : ''
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Modal for Dropdown */}
      <Modal
        open={openIndex !== null} // Ensure open is a boolean
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      
        slotProps={{
          backdrop: {
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent background
              backdropFilter: 'none', // Disable blur
            },
          },
        }}
      >
       
        
            <DropdownMenu  />
        
      
      </Modal>
    </>
  );
};

export default Navbar;
