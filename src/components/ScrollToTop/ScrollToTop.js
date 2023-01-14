import React, { useState } from 'react';
import {MdOutlineKeyboardArrowUp} from 'react-icons/md';
import './ScrollToTop.css'

const ScrollToTop = () => {
    const [visibleBtn, setVisibleBtn] = useState(false);
    
    const toggleVissible = () =>{
        const scrolled = document.documentElement.scrollTop;
        if(scrolled >= 800){
            setVisibleBtn(true);
        }else if(scrolled <= 800){
            setVisibleBtn(false);
        }
    }
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0
        })
    }
    window.addEventListener('scroll', toggleVissible);
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