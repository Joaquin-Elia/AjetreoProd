import React from 'react';
import {reasonsData} from './aboutUsData';
import {motion, useScroll, useTransform } from 'framer-motion';
import './AboutUs.css';
import CookiesAccordion from '../../CookiesPolicy/CookiesAccordion/CookiesAccordion';

const AboutUs = () => {
  const {scrollYProgress} = useScroll();
  const leftBg = useTransform(scrollYProgress, [0.430, 0.530], ['7vh', '60vh']);
  const rightSideScale = useTransform(scrollYProgress, [0.250, 0.530], [0, 1]);
  const rightSideY= useTransform(scrollYProgress, [0, 0.7], ['-20vh', '10vh']);

  return (
    <>
      <div className="container-choose-us" id='nosotros'>
        <div className="scroll-left-bg">
          <motion.div 
            style={{height: leftBg}}
            className="choose-us-titles"
          >
            <h3 className='choose-us-titles-h3'>Sobre nosotros</h3>
            <h2 className='choose-us-titles-h2'>Algunas razones para elegirnos</h2>
          </motion.div>
        </div>
        <motion.div 
          style={{y: rightSideY, scale: rightSideScale}} 
          className="choose-us-reasons"
        >
          {reasonsData.map(({id, number, description}) => 
            <div key={id} className="reasons-flex">
              <h3 className="reasons-numbers">{number}</h3>
              <p className="reasons-p">{description}</p>
            </div>
          )}
      {/* <CookiesAccordion /> */}
        </motion.div>
      </div>
      <div className="who-we-are">
        <h2 className='who-we-are-title'>
          Ajetreo es una <strong className='who-we-are-strong'>productora</strong> que tiene como <strong className='who-we-are-strong'>objetivo sacar</strong> a la luz a <strong className='who-we-are-strong'>artistas underground.</strong>
        </h2>
      </div>
    </>
  )
}

export default AboutUs