import React from 'react';
import {BsWhatsapp} from 'react-icons/bs';
import './BtnWhatsApp.css'

const BtnWhatsApp = () => {
  return (
    <div className='container-widget'>
        <a 
            href="https://wa.link/o8foo4" 
            target="_blank"
            className='icon-whatsapp'
        >
            <BsWhatsapp/>
        </a>
    </div>
  )
}

export default BtnWhatsApp