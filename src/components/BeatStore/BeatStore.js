import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import BeatsContext from '../../context/BeatsContext';
import { FooterMusicPlayer } from '../FooterMusicPlayer/FooterMusicPlayer';
import {BsFillPlayFill} from 'react-icons/bs'

const BeatStore = () => {
  const {
    beatsFiles, 
    setCurrent, 
    setFooterPlayer, 
    footerPlayer, 
    currentSong } = useContext(BeatsContext);

  return (
    <>
        <div className='container-beats-home'>
            <h2 className='container-beats-home-title'>Catalogo de beats</h2>
            <div className='beats-store_titles'>
                <h4 className='beats-store_populars'>Los mas populares:</h4>
              <div className="container-card-beat custom-scroll">
                {beatsFiles.map((beat, i) => 
                  <div
                    key={i}
                    className={'beat-card ' + (footerPlayer && currentSong === i ? "selected-beat" : '')}
                    onClick={() => {
                      setCurrent(i);
                      setFooterPlayer(true);
                    }}
                  >
                    <div className="beat-card-play-container">
                      {!footerPlayer &&
                        <div className='beat-card-play-icon'>
                          <BsFillPlayFill />
                        </div>
                      }
                      {footerPlayer && currentSong === i && 
                        <div className="beat-card-playing">
                          <h4>Reproduciendo</h4>
                        </div>
                      }
                      <img 
                        className='beat-card-img'
                        src={beat.img}
                        alt={beat.title}
                      />
                    </div>
                    <h5 className='beat-card-title'>{beat.title}</h5>
                  </div>
                )}
              </div>
              <h4 className='beats-store_populars'>Los mas recientes:</h4>
            </div>
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
          <FooterMusicPlayer footerPlayer={footerPlayer} />
        }
    </>
  )
}

export default BeatStore