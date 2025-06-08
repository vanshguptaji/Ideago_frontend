import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import OurServices from '../components/OurServices'
import OurVision from '../components/OurVision'
import RecentProjects from '../components/RecentProjects'
import ModularKitchens from '../components/ModularKitchens'

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurServices />
      <OurVision />
      <RecentProjects />
      <ModularKitchens />
    </div>
  )
}

export default Home