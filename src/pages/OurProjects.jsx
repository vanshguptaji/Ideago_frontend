import React from 'react'
import HeroSection from '../components/OurProjects/HeroSection'
import Collage from '../components/OurProjects/COllage'
import img1 from '../assets/OurProjects/image2.svg'
import img2 from '../assets/OurProjects/image4.svg'
import img3 from '../assets/OurProjects/image3.svg'
import Footer from '../components/Footer'
import Collage2 from '../components/OurProjects/RecentProjects'

function OurProjects() {
  const images = [
  { src: img1, title: "First Project" },
  { src: img2, title: "Second Project" },
  { src: img3, title: "Third Project" },
];
  return (
    <div>     
      <HeroSection />
      <Collage images={images} />
      <Collage2 />
    </div>
  )
}

export default OurProjects