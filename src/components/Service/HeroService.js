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

  const images = [      
    'https://images.unsplash.com/photo-1633933769681-dc8d28bdeb6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    'https://images.pexels.com/photos/1481311/pexels-photo-1481311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg',
    'https://images.pexels.com/photos/352505/pexels-photo-352505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/10933702/pexels-photo-10933702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.unsplash.com/photo-1633933769681-dc8d28bdeb6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
  ]
  
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
            <h2 className='service-container_text-animated-transparent'>Ajetreo Services</h2>
          </div>
        <>
          <div className='service-container-service custom-scroll'>
            {heroServiceData.map(({id, img, title, price}, i)=> 
              <div
                className='service-container_service-item' 
                key={id} 
              >
                <div className='service-card-header'>
                {images[i] &&
                    <div className='service_header_bg' style={{backgroundImage: `url(${images[i]})`}}/>
                }
                 
                  <h3 className='service-card-header-title'>{title}</h3>
                  <small className='service-card-header-ideal'>Ideal para principiantes</small>
                  <div>
                    <span className='service-card-header-price-before'>USD {Math.floor(price * 1.63)},00</span>
                    <span className='service-card-header-offer'> Ahorrá 63%</span>
                  </div>
                  <span className='service-card-header-price'><small className='service-price-curency'>USD</small> {price},00</span>
                </div>
                <ul className='card-items-container'>
                  <li className='card-items'><TiTick/> Edición</li>
                  <li className='card-items'><TiTick/> Mezcla de voces</li>
                  <li className='card-items'><TiTick/> Pistas instrumentales</li>
                  <li className='card-items'><TiTick/> SFX</li>
                  <li className='card-items'><TiTick/> 20 pistas</li>
                  <li className='card-items'><TiTick/> Calidad profesional</li>
                </ul>
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
  )
}

export default HeroService;