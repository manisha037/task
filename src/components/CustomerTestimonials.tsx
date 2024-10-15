import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import logo from "../public/assets/image 367.png"

const testimonials = [
  {
    text: "The AI summarization by Prodloop does add a lot of value to our user research study.",
    name: "Antoan Boonstra",
    role: "Founder, Z-Lead Labs"
  },
  {
    text: "Prodloop has revolutionized how we handle customer feedback. It's an indispensable tool for our team.",
    name: "Sarah Johnson",
    role: "CTO, TechInnovate"
  },
  {
    text: "The insights we've gained through Prodloop have directly contributed to our product improvements.",
    name: "Michael Chang",
    role: "Product Manager, FutureSoft"
  },
  {
    text: "Prodloop's AI-powered analysis has saved us countless hours in processing customer feedback.",
    name: "Emily Rodriguez",
    role: "Customer Success Lead, DataDrive"
  },
  {
    text: "We've seen a significant increase in customer satisfaction since implementing Prodloop's recommendations.",
    name: "David Nguyen",
    role: "CEO, CloudSolutions"
  }
]

const CustomerTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const testimonialRef = useRef(null)

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
    <section className="bg-[#F4F1FF] py-20 w-[95%] mx-auto rounded-[32px]">
      <div className="container mx-auto ">
        <h2 className="text-[36px] mb-10 text-center font-geologica text-[#1B2559]">What Our Customers Say</h2>
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
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full px-4">
                  <div className="bg-white p-6 rounded-lg border-[0.8px] border-[#C0B3F8] flex flex-col gap-4 max-w-2xl mx-auto">
                    <p className="text-[#1B2559] mb-4 text-[22px] leading-[28px]">
                      "{testimonial.text}"
                    </p>
                   
                    <hr className="bg-[#4318FF] border-0 m-0" style={{ height: '0.61px' }} />
<div className='flex justify-between'>
                    <div className="flex items-center gap-4">
                      <img
                        src={`https://i.pravatar.cc/40?img=${index + 1}`}
                        alt={testimonial.name}
                        className="rounded-full w-[66px] h-[66px]"
                      />
                      <div>
                        <p className="text-[19px] text-[#1B2559] font-geologica ">{testimonial.name}</p>
                        <p className=" font-geologica text-[19px] font-thin text-[#1B2559]">{testimonial.role}</p>
                      </div>
                    </div>
                    <img src={logo} width={56} height={56} alt="" />
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