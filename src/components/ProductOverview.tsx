import React from 'react'
import { Play } from 'lucide-react'

const ProductOverview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-stretch bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="w-full md:w-2/5 p-8 bg-gray-50">
            <div className="border border-gray-200 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-indigo-900">Product Overview</h2>
              <p className="text-gray-600 mb-6">
                An easy-to-use platform that helps you collect, analyse and generate insights from feedback data
              </p>
              <ul className="space-y-4 mb-8">
                {['AI Powered Speech', 'AI Powered Speech', 'AI Powered Speech', 'AI Powered Speech', 'AI Powered Speech'].map((feature, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{feature}</span>
                    <span className="text-indigo-600 font-semibold">00:02</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="text-indigo-600 hover:underline font-semibold flex items-center">
                Book a Quick Demo
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full md:w-3/5 relative">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              alt="Product Overview"
              className="w-full h-full object-cover rounded-r-2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white rounded-full p-4 shadow-lg">
                <Play className="text-indigo-600 w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductOverview