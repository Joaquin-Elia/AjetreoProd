import React, { useEffect, useState } from 'react';
import {MdOutlineKeyboardArrowUp} from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import './ScrollToTop.css'

const ScrollToTop = () => {
    const [visibleBtn, setVisibleBtn] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        scrollToTop()
    }, [pathname])
    
    useEffect(() => {
        const toggleVissible = () =>{
            const scrolled = document.documentElement.scrollTop;
            if(scrolled >= 800){
                setVisibleBtn(true);
            }else if(scrolled <= 800){
                setVisibleBtn(false);
            }
        }
        window.addEventListener('scroll', toggleVissible);
    
      return () => {
        window.removeEventListener('scroll', toggleVissible);
      }
    }, [visibleBtn])
    
    const scrollToTop = ()=>{
        window.scrollTo(0,0)
    }
    
  return (
    <>
        {visibleBtn && 
            <div 
                className='scroll-top' 
                onClick={scrollToTop}
            >
                <MdOutlineKeyboardArrowUp />
            </div>
        }
    </>
  )
}

export default ScrollToTop