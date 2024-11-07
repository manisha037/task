

import CustomerTestimonials from '../components/CustomerTestimonials'
import WhyUseProdloop from '../components/WhyUseProdloop'

import Footer from '../components/Footer'
import Product from '../components/Product'
import Feedback from '../components/Feedback'
import MainHero from '../components/MainHero'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* <Hero /> */}
        <MainHero/>
        {/* <ProductOverview /> */}
        <Product/>
        <CustomerTestimonials />
        <WhyUseProdloop />
        {/* <GetMoreFeedback /> */}
        <Feedback/>
      </main>
      <Footer />
    </>
  )
}

export default Home
