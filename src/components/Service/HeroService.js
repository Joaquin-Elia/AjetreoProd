import React from 'react';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useFirestore } from '../../hooks/useFirestore';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import './HeroService.css';

const HeroService = () => {
  const [dataServices, loading] = useFirestore();
  const heroServiceData = dataServices.filter(({showInHero}) => {
    return showInHero === true;
  })

  
  return (
    <div className='service-container'>
      <div className='service-container-text-animated'>
          <h2 className='service-container_text-animated-transparent'>Ajetreo Services</h2>
          <h2>Ajetreo Services</h2>
          <h2 className='service-container_text-animated-transparent'>Ajetreo Services</h2>
          <h2>Ajetreo Services</h2>
      </div>
      <>
        {/* <p>Comenzar de cero en el mundo de la musica y subir tus canciones es mas simple de lo que pensás</p>
        <h2>Nuestros servicios</h2> */}
        {loading ? 
          <div className='service-container-loading'>
            <LoadingAnimation /> 
          </div> 
            : 
          <>
          <div className='service-container-service custom-scroll'>
            {heroServiceData.map(({id, img, title, description})=> 
              <div
                className='service-container_service-item' 
                key={id} 
              > 
                <img 
                  src={img}
                  alt={`Icono ${title}`}
                  className='service-container_service_item-img'
                  loading='lazy'
                />
                <h3 className='service-container_service_item-title'>{title}</h3>
                <p className='service-container_service_item-p'>{description}</p>
              </div>
            )}
        </div>
        <div className='service-container-more'>
          <Link 
            to='/service'
            className='service-container-more-link'
          >
            Ver todos 
            <HiOutlineArrowNarrowRight 
              className='service-container-more-icon'
            /> 
        </Link>
        </div>
      </>}
      </>
    </div>
    // sos un artista o queres iniciarte en la musica? entonces te podemos ayudar, tenemos la mejor variedad de beats y licencias para que puedas crear tu musica y subirla a tus sitios favoritos
  )
}

export default HeroService