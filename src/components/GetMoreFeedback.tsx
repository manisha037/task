import React from 'react'

const GetMoreFeedback = () => {
  return (
    <section className="bg-indigo-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Get More Out Of Your Feedback Using AI</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Get more natural, real-time conversations with advanced voice. Senses and responds to humor, sarcasm, interruptions, and more.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="bg-white text-indigo-600 px-6 py-3 rounded-md hover:bg-gray-100">
            Get Started for Free
          </a>
          <a href="#" className="border border-white px-6 py-3 rounded-md hover:bg-indigo-700">
            Book a demo call with us
          </a>
        </div>
      </div>
    </section>
  )
}

export default GetMoreFeedback