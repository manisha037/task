import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import logo from "../public/assets/image 367.png";
import testimonial from "../public/assets/Testimonial2.jpeg";
import testimonial1 from "../public/assets/unnamed.png";
import porter from "../public/assets/porter.svg";
const testimonials = [
  {
    text1: `Prodloop transformed thousands of customer conversations into quantified product priorities that drive business impact. Their AI eliminated manual call reviews and feedback tagging, saving our team 20+ hours weekly.`,
    text2: `The automated insights directly shaped our product roadmap, making it a game-changer for both product and CX teams.`,
    name: "Krishna Mohan Gadi",
    role: "Head of Product, Design, and User Research at Porter",
    profile: testimonial1,
    profile_logo: porter
  },
  {
    text1: `The AI summarization by Prodloop does add a lot of value to our user sentiment study.`,
    text2: `Reply generation and posting is perfect`,
    name: "Anirban Basumallik",
    role: "Founder - Z Level Labs",
    profile: testimonial,
    profile_logo: logo
  }
];
const CustomerTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  return (
    <section className="bg-[#F4F1FF] py-5 lg:py-8 w-[95%] lg:w-[100%] max-w-[1152px] xl:h-[370px] mx-auto rounded-[32px]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="xl:text-[26px] text-[20px] text-center font-geologica text-[#1B2559] mx-auto sm:mx-0">
            What Our Customers Say
          </h2>
          <div className="hidden sm:flex gap-10">
          
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white shadow-md"
            >
              <ArrowForward className="text-[#1B2559]" />
            </motion.button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 xl:w-[567px] snap-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-white px-4 sm:px-[25px] pt-[30px] pb-[16px] rounded-lg border-[0.8px] border-[#C0B3F8] flex flex-col gap-1 mx-auto h-full">
                  <div className='h-[132.78px] overflow-y-auto sm:overflow-clip'>
                    <p className="text-[#1B2559] xl:text-[15px] text-[14px] leading-[19px]">
                      {testimonial.text1} <br /><br /> {testimonial.text2}
                    </p>
                  </div>
                  <hr className="bg-[#4318FF] border-0 m-0" style={{ height: '0.61px' }} />
                  <div className='flex flex-col sm:flex-row justify-between h-auto sm:h-[67.7px] items-start sm:items-center gap-3 sm:gap-0 pt-3 sm:pt-0'>
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.profile}
                        alt={testimonial.name}
                        className="rounded-full w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] xl:w-[46px] xl:h-[46px]"
                      />
                      <div>
                        <p className="xl:text-[14px] text-[13px] text-[#1B2559] font-geologica">{testimonial.name}</p>
                        <p className="font-geologica text-[12px] lg:text-[13.41px] font-thin text-[#1B2559]">{testimonial.role}</p>
                      </div>
                    </div>
                    <img 
                      src={testimonial.profile_logo} 
                      width={40} 
                      height={40} 
                      alt="" 
                      className='hidden sm:block w-[35px] h-[35px] sm:w-[40px] sm:h-[40px]' 
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CustomerTestimonials;