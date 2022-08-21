import React, { memo, useContext, useRef, useState } from 'react';
import {CgClose} from 'react-icons/cg';
import BeatsContext from '../../../../context/BeatsContext';
import LoadingAnimation from '../../../LoadingAnimation/LoadingAnimation';
import { UseClickOutside } from '../../../UseClickOutside/UseClickOutside';

const AboutUs = memo(({ activeIndex, dataSlider, loading }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [getVideoSrc, setGetVideoSrc] = useState('');
  const {setFooterPlayer} = useContext(BeatsContext);

  const ref = useRef(null);
  UseClickOutside(ref, ()=> setShowVideo(false));

  const getVideo = (video) =>{
        setGetVideoSrc(video);
        setShowVideo(!showVideo);
        setFooterPlayer(false)
  }

  return (
    <div className='about-container'>
      {showVideo &&
        <div className={showVideo ? 'video-container open' : 'video-container'}>
          {getVideo &&
            <iframe src={getVideoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
        dataSlider.map((slide, index) => 
          <div
            ref={ref}
            key={index}
            className={index === activeIndex ? "slides slide-active" : "slide-inactive"}
          >
            <img 
              className="slide-image" 
              src={slide.img} 
              alt={slide.title + ' - ' + slide.authors}
            />
            <h2 className={slide.title.length >= 8 ? 'slide-title slide-title-long' : 'slide-title'}>{slide.title}</h2>
            <h4 className='slide-authors'>{slide.authors}</h4>
            <p className='slide-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quos enim deserunt magnam sed nihil id odit nesciunt officia incidunt dolorem, quia hic obcaecati odio atque! Suscipit laborum delectus nisi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum soluta, enim</p>
            <button 
              onClick={()=> {getVideo(slide.video) }}
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