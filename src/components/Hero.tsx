import React from 'react'
import { MessageSquare, TrendingUp } from 'lucide-react'

const Hero = () => {
  return (
    <section className="bg-[#FFF8F6] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pl-12">
            <div className="max-w-lg">
              <h2 className="text-2xl font-medium text-[#1E293B] mb-2">Convert</h2>
              <h1 className="text-5xl font-bold text-[#1E293B] mb-2 flex items-center">
                Customer Feedback <MessageSquare className="ml-2 text-[#6366F1]" size={40} />
              </h1>
              <h2 className="text-2xl font-medium text-[#1E293B] mb-2">Into</h2>
              <h1 className="text-5xl font-bold text-[#1E293B] mb-6 flex items-center">
                Revenue Growth <TrendingUp className="ml-2 text-[#6366F1]" size={40} />
              </h1>
              <p className="text-lg font-medium text-[#6366F1] mb-4">
                AI Powered Speech And Text Feedback Analytics Tool
              </p>
              <p className="text-sm text-[#64748B] mb-8">
                Generate insights from feedback data from customer support calls and surveys using natural language
              </p>
              <a
                href="#"
                className="bg-[#6366F1] text-white px-6 py-3 rounded-full hover:bg-indigo-700 inline-flex items-center"
              >
                Get Started for Free
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-3xl shadow-lg p-8 aspect-[4/3]">
              {/* Placeholder for the GIF or image */}
              <div className="w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500">Sample GIF Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero