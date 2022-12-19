import React, { useContext, useEffect, useRef, useState } from 'react';
import {MdSkipNext, MdSkipPrevious, MdOutlinePauseCircleFilled, MdPlayCircle} from 'react-icons/md';
import {IoVolumeLowOutline, IoVolumeMediumOutline, IoVolumeMuteOutline, IoVolumeHighOutline} from 'react-icons/io5'
import BeatsContext from '../../context/BeatsContext';
import {motion} from 'framer-motion';
import './FooterMusicPlayer.css';

export const FooterMusicPlayer = ({footerPlayer, changeSong}) => {
    const {
        currentSong,
        beatsFiles,
        nextSong,
        prevSong,
        togglePlaying,
        handleEnd,
        isPlaying,
        setIsPlaying
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
            setIsPlaying(true) || 
        changeSong && 
        audioRef.current.play()
    }, [footerPlayer, changeSong]);

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
                <img 
                    className='footer-img-beat'
                    src={beatsFiles[currentSong].img}
                    alt={beatsFiles[currentSong].title}
                />
                <div className='container-title-volume'>
                    <h5 
                        className='title-footer-beat'>
                        {beatsFiles[currentSong].title}
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
                    onEnded={handleEnd}
                    preload='true'
                    controlsList='nodownload'
                    src={beatsFiles[currentSong].audio}
                />
                <div className="btns-audio-functions">
                    <MdSkipPrevious onClick={prevSong} />
                    <div onClick={() => {
                        togglePlaying();
                        toggleAudio();
                    }}>
                        <div className='btn-pause-play'>
                            {isPlaying ? 
                                <MdOutlinePauseCircleFilled onClick={() =>{setIsPlaying(false)}} /> : 
                                <MdPlayCircle onClick={() => setIsPlaying(true)} />
                            }
                        </div>
                    </div>
                    <MdSkipNext onClick={nextSong}/>
                </div>
            </div>
        </motion.div>
      </>
  )
}

