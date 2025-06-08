import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import Navbar from '../components/Navbar'
import OurServices from '../components/Home/OurServices'
import OurVision from '../components/Home/OurVision'
import RecentProjects from '../components/Home/RecentProjects'
import ModularKitchens from '../components/Home/ModularKitchens'
import WhyChoose from '../components/Home/WhyChoose'
import Footer from '../components/Footer'
import Client from '../components/Home/Client'

function Home() {
  return (
    <div>
      <HeroSection />
      <OurServices />
      <OurVision />
      <RecentProjects />
      <ModularKitchens />
      <WhyChoose />
      <Client />
      <Footer />
    </div>
  )
}

export default Home