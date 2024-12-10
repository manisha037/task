import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import logo from "../public/assets/image 367.png";
import testimonial from "../public/assets/Testimonial2.jpeg";
import testimonial1 from "../public/assets/unnamed.png";
import porter from "../public/assets/porter.jpeg";


const testimonials = [
  {
    text1: `Prodloop transformed thousands of customer conversations into quantified product priorities that drive business impact. Their AI eliminated manual call reviews and feedback tagging, saving our team 20+ hours weekly.`,
    text2:`The automated insights directly shaped our product roadmap, making it a game-changer for both product and CX teams.`,
    name: "Krishna Mohan Gadi",
    role: "Head of Product, Design, and User Research at Porter",
    profile:testimonial1,
    profile_logo:porter
  },
  {
    text1: `The AI summarization by Prodloop does add a lot of value to our user sentiment study.`,
    text2:`Reply generation and posting is perfect`,
    name: "Anirban Basumallik",
    role: "Founder - Z Level Labs",
    profile:testimonial,
    profile_logo:logo

  }
  // {
  //   text: "The insights we've gained through Prodloop have directly contributed to our product improvements.",
  //   name: "Michael Chang",
  //   role: "Product Manager, FutureSoft"
  // },
  // {
  //   text: "Prodloop's AI-powered analysis has saved us countless hours in processing customer feedback.",
  //   name: "Emily Rodriguez",
  //   role: "Customer Success Lead, DataDrive"
  // },
  // {
  //   text: "We've seen a significant increase in customer satisfaction since implementing Prodloop's recommendations.",
  //   name: "David Nguyen",
  //   role: "CEO, CloudSolutions"
  // }
]

const CustomerTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const testimonialRef = useRef(null)

  const cardsPerView = 3 // Set how many cards to show at once

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextTestimonial, 3000)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  return (
    <section className="bg-[#F4F1FF] py-5 lg:py-20 w-[95%] mx-auto rounded-[32px]">
      <div className="container mx-auto">
        <h2 className="lg:text-[36px] text-[18px] mb-10 text-center font-geologica text-[#1B2559]">What Our Customers Say</h2>
        <div className="relative"
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
            onClick={prevTestimonial}
          >
            <ChevronLeft size={24} className="text-indigo-600" />
          </button>
          <div className="overflow-hidden" ref={testimonialRef}>
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 lg:w-[804px] w-[320px] h-[360px] px-1"> {/* Show 3 cards at once */}
                  <div  className="bg-white p-6 rounded-lg border-[0.8px] border-[#C0B3F8] flex flex-col gap-4 mx-auto">
                    <p className="text-[#1B2559] h-[200px] text-[16px] lg:text-[22px] leading-[28px]">
                   {testimonial.text1} <br/>
                   <br/> {testimonial.text2}

                    </p>
                    <hr className="bg-[#4318FF] border-0 m-0" style={{ height: '0.61px' }} />
                    <div className='flex justify-between'>
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.profile}
                          alt={testimonial.name}
                          className="rounded-full w-[66px] h-[66px]"
                        />
                        <div>
                          <p className="lg:text-[19px] text-[14px] text-[#1B2559] font-geologica">{testimonial.name}</p>
                          <p className="font-geologica lg:text-[19px] text-[14px] font-thin text-[#1B2559]">{testimonial.role}</p>
                        </div>
                      </div>
                      <img src={testimonial.profile_logo} width={90} height={56} alt="" className='hidden lg:flex' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
            onClick={nextTestimonial}
          >
            <ChevronRight size={24} className="text-indigo-600" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CustomerTestimonials