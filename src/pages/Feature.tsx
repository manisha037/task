import Navbar from '../components/Navbar'
import Product from '../components/Product'
import Footer from '../components/Footer'
import Feedback from '../components/Feedback'
import MainHero from '../components/MainHero'
import WhyUseProdloop from '../components/WhyUseProdloop'
import FeatureHero from '../components/FeatureHero'


const Feature = () => {
  return (
    <>
      <Navbar/>
      <FeatureHero/>
      <Product/>
      <WhyUseProdloop/>
      <Feedback/>
      
      <Footer/>
    </>
  )
}

export default Feature
