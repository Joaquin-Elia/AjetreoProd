import React, { useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import BeatsContext from '../../context/BeatsContext';
import { FooterMusicPlayer } from '../FooterMusicPlayer/FooterMusicPlayer';
import {BsFillPlayFill} from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import { useBeats } from '../../hooks/useBeats';
import { CursorContext } from '../../context/CursorContext';
import "swiper/swiper.min.css";
import "swiper/css/navigation";


const BeatStore = () => {
  const [dataBeats, loading] = useBeats()
  const {setCursorType} = useContext(CursorContext)
  const {
    setCurrent,
    currentSong } = useContext(BeatsContext);
    const [footerPlayer, setFooterPlayer] = useState(false)
    const [changeSong, setChangeSong] = useState(false);

  return (
    <>
        <div className='container-beats-home' id='beats'>
          {loading ? <div className='beats-loading'><LoadingAnimation /></div> : 
            <>
            <div className='beats-store_titles'>
                <h2 className='beats-text-animated-bolder'>Catalogo de Beats</h2>
                <h2 className='beats-text-animated'>Ajetreo Beats</h2>
                <h2 className='beats-text-animated-bolder'>Catalogo de Beats</h2>
                <h2 className='beats-text-animated'>Ajetreo Beats</h2>
            </div>
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
                      slidesPerView: 5.3,
                      spaceBetween: 25,
                    }}}
                >
                  {dataBeats.map(({id, title, img}, i) => 
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
                      <h2 className='beat-card-title'>{title}</h2>
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
                          <div 
                            className='beat-card-play-icon' 
                            onClick={() => setChangeSong(!changeSong)}
                          >
                            <BsFillPlayFill                             
                              onMouseEnter={()=> setCursorType('cursor-hover')}
                              onMouseLeave={()=> setCursorType('default')}
                              onClick={()=> setCursorType('default')}
                            />
                          </div>
                        }
                        <img 
                          loading='lazy'
                          className='beat-card-img'
                          src={img}
                          alt={title}
                        />
                        </div>
                    </SwiperSlide>
                    </div>
                  )}
                  </Swiper>
              </div>
              {/* <h3 className='beats-store_recent'>Los mas recientes:</h3> */}
          
          </>
          }
            <div className="btn-go-allbeats-container">
              <Link 
                to='/beatstore'
                className='btn-go-allbeats'
              >
                Ir a BeatStore
              </Link>
            </div>
        </div> 
        {footerPlayer && 
          <FooterMusicPlayer footerPlayer={footerPlayer} setFooterPlayer={setFooterPlayer} currentSong={currentSong} changeSong={changeSong}/>
        }
    </>
  )
}

export default BeatStore