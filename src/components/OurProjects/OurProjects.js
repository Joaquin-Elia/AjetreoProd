import React from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import './OurProjects.css';

const OurProjects = () => { 
    const {scrollYProgress} = useScroll();
    const titleScrollX = useTransform(scrollYProgress, [0.650, .85], [0, -580]);
    
  return (
        <>

            <div className="our-projects">
                <motion.h3
                    className='our-projects-title'
                    style={{x: titleScrollX}}
                >
                    Nuestros Trabajos - Our Projects - Ajetreo Producciones - Nuestros trabajos 
                </motion.h3>
            </div>
        </>
    )
}

export default OurProjects
