import React, { memo, useContext, useEffect, useRef, useState } from 'react';
import {CgClose} from 'react-icons/cg';
import BeatsContext from '../../../../context/BeatsContext';
import LoadingAnimation from '../../../LoadingAnimation/LoadingAnimation';
import { UseClickOutside } from '../../../../hooks/useClickOutside';

const AboutUs = memo(({ activeIndex, dataSlider, loading }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [getVideoSrc, setGetVideoSrc] = useState('');
  const {setIsPlayingVideo} = useContext(BeatsContext);

  const ref = useRef(null);
  UseClickOutside(ref, ()=> setShowVideo(false));

  const getVideo = (video) =>{
    setGetVideoSrc(video);
    setShowVideo(!showVideo);
    setIsPlayingVideo(true)
}

  return (
    <div className='about-container'>
      {showVideo &&
        <div className={showVideo ? 'video-container open' : 'video-container'}>
          {getVideo &&
            <iframe 
              src={getVideoSrc} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen />
          }
          <CgClose 
            onClick={()=> setShowVideo(false)}
            className='close-video'
          />   
        </div>
      }
        {loading ? 
          <div className='slider-container-loading'>
            <LoadingAnimation />
          </div> 
          : 
        dataSlider.map(({id, img, title, authors, video}, index) => 
          <div
            ref={ref}
            key={id}
            className={index === activeIndex ? "slides slide-active" : "slide-inactive"}
          >
            <img 
              loading='lazy'
              className="slide-image" 
              src={img} 
              alt={title + ' - ' + authors}
            />
            <h2 className={title.length >= 8 ? 'slide-title slide-title-long' : 'slide-title'}>{title}</h2>
            <h3 className='slide-authors'>{authors}</h3>
            <p className='slide-text'>El artista Tian VCK tenía compuesto un tema con KKKevin, necesitaban una grabación y producción a la altura de este hit. Colaboramos grabando las voces con una cadena de audio profesional, sin equipos millonarios, pero con un excelente asesoramiento. Mezcla y master 100% digital pero con un sonido cálido y profesional, logrando así ¡5 Millones de visitas en plataformas de manera 100% Independiente!</p>
            <button 
              onClick={()=> {getVideo(video) }}
              className='slide-btn'
            >
              Ver video
            </button>
          </div>
        )}
    </div>
  )
})

export default AboutUs