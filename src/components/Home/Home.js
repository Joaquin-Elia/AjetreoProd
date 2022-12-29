import React from 'react'
import Hero from './Hero/Hero';
import Service from '../Service/HeroService';
import BeatStore from '../BeatStore/BeatStore'
import AboutUs from './AboutUs/AboutUs';
import Slider from './AboutUs/Slider/Slider';
import OurProjects from '../OurProjects/OurProjects';
import { useSEO } from '../../hooks/useSEO';

const Home = () => {
  useSEO({
    title: 'Venta de beats y servicios de produccion musical', 
    description: 'Productora Musical y Audiovisual especializada en géneros urbanos. Beats de trap, rap, drip, boombap,',
    // description2: 'Especializados en géneros urbanos. Beats de trap, rap, drip, boombap. Servicios de mezcla, mastering y diseño'
  })
  return (
    <main>
        <Hero />
        <Service />
        <BeatStore />
        <AboutUs />
        <OurProjects />
        <Slider />
    </main>
  )
}

export default Home