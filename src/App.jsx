import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import AppStore from './components/AppStore/AppStore'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  });

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App