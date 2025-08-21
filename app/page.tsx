'use client'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import HeroContent from './components/landingPage/HeroContent'
import CardCarouselParent from './components/HomeCards/CardCarouselParent'
import TemplateCard from './components/HomeCards/TemplateCard'
import SpecialCards from './components/HomeCards/SpecialCards'
import AiInputCard from './components/HomeCards/AiInputCard'
import ThemeChange from './components/HomeCards/ThemeChange'
import ScrollSection from './components/HomeCards/ScrollSection'
import Footer from './components/HomeCards/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroContent/>
      <CardCarouselParent/>
      <TemplateCard/>
      <SpecialCards/>
      <AiInputCard/>
      <ThemeChange/>
      <ScrollSection/>
      <Footer/>
    </div>
  )
}

export default page