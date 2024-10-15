import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"

import Hero from "../components/pricing/Hero"
import Plans from "../components/pricing/Plans"
import Feedback from '../components/Feedback'


const Pricing = () => {
  return (
   <><Navbar/>
   <Hero/>
   <Plans/>
   <Feedback/>
   <Footer/>
   
   </>
  )
}

export default Pricing
