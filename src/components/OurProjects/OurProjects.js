import React from 'react';
import {motion, useViewportScroll, useTransform} from 'framer-motion';
import './OurProjects.css';

const OurProjects = () => { 
    const {scrollYProgress} = useViewportScroll();
    const titleScrollX = useTransform(scrollYProgress, [0.730, 1], [0, -770]);
    
  return (
        <>

            <div className="our-projects">
                <motion.h3
                    className='our-projects-title'
                    style={{x: titleScrollX}}
                >
                    Nuestros Trabajos
                </motion.h3>
            </div>

        </>
    )
}

export default OurProjects
