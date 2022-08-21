import React from 'react';
import imgBg from '../../../../imgs/abstractBg.jpg'
import FormSubscribe from './FormSubscribe/FormSubscribe';
import './ModalSubscribe.css'

const ModalSubscribe = () => {
  return (
    <>
        <div className='modal-subscribe'>
            <img
                className='modal-subscribe_img'
                alt='Prueba gratis' 
                src={imgBg}
            />
            <div className='modal-subscribe_text'>
                <h3 className='modal-subscribe_text_title'>Queres recivir beats gratis?</h3>
                <p className='modal-subscribe_text_p'>Suscribite y te los enviamos a tu correo</p>
            </div>
              <FormSubscribe />
        </div>
    </>
  )
}

export default ModalSubscribe