import React from 'react';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useFirestore } from '../../hooks/useFirestore';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import {TiTick} from 'react-icons/ti'
import './HeroService.css';

const HeroService = () => {
  const [dataServices, loading] = useFirestore();
  const heroServiceData = dataServices.filter(({showInHero}) => {
    return showInHero === true;
  })
  
  return (
    <div className='service-container'>
        {loading ? 
          <div className='service-container-loading'>
            <LoadingAnimation /> 
          </div> 
            : 
          <>
          <div className='service-container-text-animated'>
              <h2 className='service-container_text-animated-transparent'>Ajetreo Services</h2>
              <h2>Ajetreo Services</h2>
              <h2 className='service-container_text-animated-transparent'>Ajetreo Services</h2>
              <h2>Ajetreo Services</h2>
          </div>
        <>
          <div className='service-container-service custom-scroll'>
            {heroServiceData.map(({id, title, price})=> 
              <div
                className='service-container_service-item' 
                key={id} 
              >
                <div className='service-card-header'>
                  <h3 className='service-card-header-title'>{title}</h3>
                  <small className='service-card-header-ideal'>Ideal para principiantes</small>
                  <div>
                    <span className='service-card-header-price-before'>USD {Math.floor(price * 1.63)},00</span>
                    <span className='service-card-header-offer'> Ahorrá 63%</span>
                  </div>
                  <span className='service-card-header-price'><small className='service-price-curency'>USD</small> {price},00</span>
                </div>
                <div className='card-items-container'>
                  <li className='card-items'><TiTick/> Edición</li>
                  <li className='card-items'><TiTick/> Mezcla de voces</li>
                  <li className='card-items'><TiTick/> Pistas instrumentales</li>
                  <li className='card-items'><TiTick/> SFX</li>
                  <li className='card-items'><TiTick/> 20 pistas</li>
                  <li className='card-items'><TiTick/> Calidad profesional</li>
                </div>
              </div>
            )}
        </div>
        <div className='service-container-more'>
          <Link 
            to='/service'
            className='service-container-more-link'
          >
            Todos los servicios 
            <HiOutlineArrowNarrowRight 
              className='service-container-more-icon'
            /> 
        </Link>
        </div>
      </>
      </>}
    </div>
    // sos un artista o queres iniciarte en la musica? entonces te podemos ayudar, tenemos la mejor variedad de beats y licencias para que puedas crear tu musica y subirla a tus sitios favoritos
  )
}

export default HeroService