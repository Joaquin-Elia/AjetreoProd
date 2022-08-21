import React from 'react';
import tick from '../../../imgs/redTick.png'
import homeStudio from '../../../imgs/homeStudio.jpg'
import speaker from '../../../imgs/speaker.jpg'
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
    <div className='container-why-chooseus'>
      <div className="bg-blur-1"></div>
      <div className="bg-blur-2"></div>
      <div className="reasons-imgs-container">
        <img 
            className='img-reasons-1'
            src={ speaker } 
            alt="Parlantes para produccion de musica" 
        />
        <img 
          className='img-reasons-2'
          src={ homeStudio } 
          alt="Estudio de produccion musical en casa" 
        />
      </div>
      <div className="container_title-reasons">
        <p className='mini-title-why'>Algunas razones</p>
        <h2 className="title-why">
          <span className='title-why-change'>
            Por qué
          </span> 
          <span> elegirnos?</span>
        </h2>
        <div className="our-reasons">
          <ul>
            <li className='reasons-list'>
              <img 
                className='reasons-list-icon'
                src={tick} 
                alt='Tilde rojo'
              />
              Lorem ipsum dolor lorem
            </li>
            <li className='reasons-list'>
              <img 
                className='reasons-list-icon'
                src={tick} 
                alt='Tilde rojo'
              />
              Lorem ipsum dolor lorem
            </li>
            <li className='reasons-list'>
              <img 
                className='reasons-list-icon'
                src={tick} 
                alt='Tilde rojo'
              />
              Lorem ipsum dolor lorem
            </li>
            <li className='reasons-list'>
              <img 
                className='reasons-list-icon'
                src={tick} 
                alt='Tilde rojo'
              />
              Lorem ipsum dolor lorem
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="our-works">
          <h2 className="our-works-title">
            <span className="change-text-our">Nuestros </span>
            trabajos
          </h2>
      </div> */}
      </div>
    </>
  )
}

export default AboutUs