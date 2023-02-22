import React, { useContext, useEffect, useRef, useState } from 'react';
import {MdSkipNext, MdSkipPrevious} from 'react-icons/md';
import {IoVolumeLowOutline, IoVolumeMediumOutline, IoVolumeMuteOutline, IoVolumeHighOutline, IoPlay, IoPause, IoClose} from 'react-icons/io5'
import BeatsContext from '../../context/BeatsContext';
import {motion} from 'framer-motion';
import './FooterMusicPlayer.css';
import { Link } from 'react-router-dom';

export const FooterMusicPlayer = ({dataDetail, footerPlayer, setFooterPlayer, changeSong, id}) => {
    const {
        currentSong,
        dataBeats,
        nextSong,
        prevSong,
        togglePlaying,
        // handleEnd,
        isPlaying,
        setIsPlaying,
        // repeat
    } = useContext(BeatsContext);

    const [stateVolume, setStateVolume] = useState(0.3);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const audioRef = useRef('audio_tag');

    const handleVolume = q => {
        setStateVolume(q);
        audioRef.current.volume = q;
    }
    const muteBeat = () => {
        setStateVolume(0);
        audioRef.current.volume = 0;
    }
    const unmuteBeat = () => {
        setStateVolume(.3);
        audioRef.current.volume = .3;
    }

    const toggleAudio = () => 
        audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();

    const handleProgress = value => {
        let compute = (value * duration);
        setCurrentTime(compute);
        audioRef.current.currentTime = compute;
    }
    const fmtMSS = s => {
        return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + Math.floor(s)
    }

    useEffect(() => {
        footerPlayer && 
            audioRef.current.play() &&
            setIsPlaying(true) && 
        changeSong && 
        audioRef.current.play()
    }, [footerPlayer, changeSong, setIsPlaying]);

  return (
      <>
        <motion.div 
            animate={{y: 0, opacity: 1}}
            initial={{y: 60, opacity: 0}}
            transition={{duration: .41}}
            className='container-all-footer-player'
        >
            <div className="time-song-current">
                <span>{fmtMSS(currentTime)}</span>
                <span>{fmtMSS(duration)}</span>
            </div>
            <div className='container-beat-progressbar'>
                <progress 
                    className='beat-progressbar'
                    id='prgbar'
                    value={duration ? (currentTime * 100) / duration : 0}
                    max='100'
                    onClick={e => {
                        handleProgress(
                            ((e.clientX - e.target.offsetLeft) / e.target.offsetWidth)
                        )
                    }}
                />
            </div>
            <div className='footer-music-player'>
                <Link to={`/detail/${dataBeats[currentSong].id}`}>
                <img 
                    loading='lazy'
                    className='footer-img-beat'
                    src={id ? dataDetail[currentSong].img : dataBeats[currentSong].img}
                    alt={id ? dataDetail[currentSong].title : dataBeats[currentSong].title}
                />

                </Link>
                <div className='container-title-volume'>
                    <h5 
                        className='title-footer-beat'>
                        {id ? dataDetail[currentSong].title : dataBeats[currentSong].title}
                    </h5>
                    <div className='container-title-volume-icons'>
                        {(stateVolume === 0 && <IoVolumeMuteOutline onClick={() => unmuteBeat()}/>) || 
                        (stateVolume < .4 && <IoVolumeLowOutline onClick={() => muteBeat()}/>) || 
                        (stateVolume < .7 && <IoVolumeMediumOutline onClick={() => muteBeat()}/>) ||
                        (stateVolume >= .7 && <IoVolumeHighOutline onClick={() => muteBeat()}/>)
                        }
                        <input 
                            className='footer-volume-bar'
                            value={Math.round(stateVolume * 100)}
                            type='range'
                            name='volBar'
                            id='volBar'
                            onChange={(e) => handleVolume(e.target.value / 100)}
                        />
                    </div>
                </div>
                <audio ref={audioRef} 
                    onTimeUpdate={e => setCurrentTime(e.target.currentTime)}
                    onCanPlay={e => setDuration(e.target.duration)}
                    // onEnded={handleEnd}
                    preload='true'
                    controlsList='nodownload'
                    src={id ? dataDetail[currentSong].audio : dataBeats[currentSong].audio}
                />
                <div className="btns-audio-functions">
                    {!id && 
                        <MdSkipPrevious 
                            onClick={prevSong}
                            className='prev-next-audio'
                        />
                    }
                    <div onClick={() => {
                        togglePlaying();
                        toggleAudio();
                    }}>
                        <div className='btn-pause-play'>
                            {isPlaying ? 
                                <IoPause onClick={() =>{setIsPlaying(false)}} /> : 
                                <IoPlay onClick={() => setIsPlaying(true)} />
                            }
                        </div>
                    </div>
                    {!id && 
                        <MdSkipNext 
                            className='prev-next-audio'
                            onClick={nextSong}
                        />
                    }
                    <IoClose 
                        className='btn-close-footer'
                        onClick={() => setFooterPlayer(!footerPlayer)}
                    />
                </div>
            </div>
        </motion.div>
      </>
  )
}

