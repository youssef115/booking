import React from 'react'
import HeroText from './HeroText'
import HeroTitle from './HeroTitle'
import car1 from "../../assets/car1.jpg"
import car2 from "../../assets/car2.jpg"
import car3 from "../../assets/car3.jpg"
import HeroSearch from './HeroSearch'


function Hero() {
  return (
    <div className='hero-container'>
      <div className='hero-content'>
        <HeroTitle/>
        <HeroText/>
        <HeroSearch/>
      </div>
      <div className='hero-image-container'>
        <div className='hero-image-background'>.</div>
        <img className='hero-image ' src={car1} alt=""/>
        <img className='hero-image  md:ml-20 lg:ml-40' src={car2} alt=""/>
        <img className='hero-image ' src={car3} alt=""/>
       </div>
    </div>
  )
}

export default Hero