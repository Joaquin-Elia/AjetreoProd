import React from 'react'
import Hero from './Hero/Hero';
import Service from '../Service/HeroService';
import BeatStore from '../BeatStore/BeatStore'
import AboutUs from './AboutUs/AboutUs';
import Slider from './AboutUs/Slider/Slider';

const Home = () => {
  return (
    <div>
        <Hero />
        <Service />
        <BeatStore />
        <AboutUs />
        <Slider />
    </div>
  )
}

export default Home