import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductOverview from './components/ProductOverview'
import CustomerTestimonials from './components/CustomerTestimonials'
import WhyUseProdloop from './components/WhyUseProdloop'
import GetMoreFeedback from './components/GetMoreFeedback'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductOverview />
        <CustomerTestimonials />
        <WhyUseProdloop />
        <GetMoreFeedback />
      </main>
      <Footer />
    </div>
  )
}

export default App