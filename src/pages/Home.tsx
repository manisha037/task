
import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductOverview from '../components/ProductOverview'
import CustomerTestimonials from '../components/CustomerTestimonials'
import WhyUseProdloop from '../components/WhyUseProdloop'
import GetMoreFeedback from '../components/GetMoreFeedback'
import Footer from '../components/Footer'
import Product from '../components/Product'
import Feedback from '../components/Feedback'
import MainHero from '../components/MainHero'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <div className="min-h-screen bg-white">
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
    </div>
  )
}

export default Home
