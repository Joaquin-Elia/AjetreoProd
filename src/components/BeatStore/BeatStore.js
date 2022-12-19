import React, { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import BeatsContext from '../../context/BeatsContext';
import { FooterMusicPlayer } from '../FooterMusicPlayer/FooterMusicPlayer';
import {BsFillPlayFill} from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";


const BeatStore = () => {
  const {
    beatsFiles, 
    setCurrent, 
    setFooterPlayer, 
    footerPlayer, 
    currentSong } = useContext(BeatsContext);

  const [changeSong, setChangeSong] = useState(false);

  return (
    <>
        <div className='container-beats-home' >
            <h2 className='container-beats-home-title'>Catalogo de beats</h2>
            <div className='beats-store_titles'>
              <h4 className='beats-store_populars'>Los mas populares:</h4>
              <div className="container-card-beat custom-scroll">
                <Swiper
                  loop={true}
                  loopFillGroupWithBlank={true}
                  navigation={true}
                  modules={[Navigation]}
                  breakpoints={{
                    "@0.25": {
                      slidesPerView: 1.6,
                      spaceBetween: 30,
                    },
                    "@0.60": {
                      slidesPerView: 2.5,
                      spaceBetween: 30,
                    },
                    "@0.75": {
                      slidesPerView: 3.2,
                      spaceBetween: 25,
                    },
                    "@1.25": {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                    "@1.50": {
                      slidesPerView: 4.5,
                      spaceBetween: 30,
                    },
                    "@1.75": {
                      slidesPerView: 5.8,
                      spaceBetween: 25,
                    }}}
                >
                  {beatsFiles.map(({id, title, img}, i) => 
                    <div
                      key={id}
                      className={'beat-card ' + (footerPlayer && currentSong === i ? "selected-beat" : '')}
                      
                    > 
                  <SwiperSlide 
                    key={id}
                    onClick={() => {
                      setCurrent(i);
                      setFooterPlayer(true);
                    }}
                  >
                      <h5 className='beat-card-title'>{title}</h5>
                      <div className="beat-card-play-container" >
                        {!footerPlayer &&
                          <div className='beat-card-play-icon'>
                            <BsFillPlayFill />
                          </div>
                        }
                        {footerPlayer && currentSong === i ?
                          <div className="beat-card-playing">
                            <h4>Reproduciendo</h4>
                          </div>
                            : 
                          <div className='beat-card-play-icon' onClick={() => setChangeSong(!changeSong)} >
                            <BsFillPlayFill/>
                          </div>
                        }
                        <img 
                          className='beat-card-img'
                          loading='lazy'
                          src={img}
                          alt={title}
                        />
                        </div>
                    </SwiperSlide>
                    </div>
                  )}
                  </Swiper>
              </div>
              <h4 className='beats-store_recent'>Los mas recientes:</h4>
            </div>
            <div className="btn-go-allbeats-container">
              <Link 
                to='/beatstore'
                className='btn-go-allbeats'
              >
                Ir a BeatStore
              </Link>
            </div>
              <div className="cilindro"></div>
        </div> 
        {footerPlayer && 
          <FooterMusicPlayer footerPlayer={footerPlayer} currentSong={currentSong} changeSong={changeSong}/>
        }
    </>
  )
}

export default BeatStore