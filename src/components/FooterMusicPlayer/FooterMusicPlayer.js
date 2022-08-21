// import React, { useEffect, useRef, useState } from 'react';
// import {MdSkipNext, MdSkipPrevious, MdOutlinePauseCircleFilled, MdPlayCircle} from 'react-icons/md'

// export const FooterMusicPlayer = ({currentSong, setCurrentSong, songs, setSongs, getBeatImg, getBeatSrc}) => {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [duration, setDuration] = useState(0);
//     const [currentTime, setCurrentTime] = useState(0);

//     const audioPlayerRef = useRef();
//     const progressBarRef = useRef();
//     const animationRef = useRef();

//     useEffect(() => {
//         const seconds = Math.floor(audioPlayerRef.current.duration);
//         setDuration(seconds)
//     },[
//         audioPlayerRef?.current?.loadedmetadata,
//         audioPlayerRef?.current?.readyState
//     ])

//     const calculateTime = sec => {
//         const minutes = Math.floor(sec / 60);
//         // <10 -> 09 or 11,12...
//         const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`

//         const seconds = Math.floor(sec % 60);
//         const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`

//         return `${returnMin}: ${returnSec}`
//     }

//     const whilePlaying = () => {
//         progressBarRef.current.value = audioPlayerRef.current.currentTime;
//         changeCurrentTime();
//         animationRef.current = requestAnimationFrame(whilePlaying);
//     }

//     const changeProgress = () =>{
//         audioPlayerRef.current.currentTime = progressBarRef.current.value;
//         changeCurrentTime()
//     }
    
//     const changeCurrentTime = () => {
//         progressBarRef.current.style.setProperty(
//             '--player-played', 
//             `${(progressBarRef.current.value / duration) * 100}%`
//             );
//         setCurrentTime(progressBarRef.current.value);
//     }
 
//     const playPause = () => {
//         setIsPlaying(!isPlaying);
//     }
    
//     const skipBack = () => {
//         const index = songs.findIndex(x => x.id === songs.id);
//         if(index === 0){
//             setSongs(songs[songs.length - 1])
//         }
//         else{
//             setSongs(songs[index - 1])
//         }
//         audioPlayerRef.current.currentTime = 0;
//     }

//     const skipNext = () => {
//         const index = songs.findIndex(x => x.id === currentSong.id);
//         if(index == songs.length -1){
//             setCurrentSong(songs[0])
//         }
//         else{
//             setCurrentSong(songs[index + 1])
//         }
//         audioPlayerRef.current.currentTime = 0;
//     }

//     useEffect(() => {
//         if(isPlaying){
//             audioPlayerRef.current.play();
//             animationRef.current = requestAnimationFrame(whilePlaying);
//         }else{
//             audioPlayerRef.current.pause();
//             cancelAnimationFrame(animationRef.current)
//         }
//     }, [isPlaying])
    

//   return (
//     <div className='footer-music-player'>
//         <img src={getBeatImg} style={{width: 100}}/>
//         <h5 style={{color: 'black'}}>{currentSong.title}</h5>
//         <MdSkipPrevious onClick={skipBack}/>
//         {isPlaying ? 
//             <MdOutlinePauseCircleFilled onClick={playPause}/> : 
//             <MdPlayCircle onClick={playPause}/>
//         }
//         <MdSkipNext onClick={skipNext}/>
//         <p>{calculateTime(currentTime)}</p>
//         <input 
//             ref={progressBarRef}
//             type='range'
//             onChange={changeProgress}
//             style={{width: `${currentSong.progress + '%'}`}}
//         />
//         <p>{(duration && !isNaN(duration) && calculateTime(duration) ? 
//                 calculateTime(duration) : '00:00')
//             }
//         </p>
//         <audio
//             controlsList='nodownload'
//             ref={audioPlayerRef} 
//             src={getBeatSrc}
//             preload='metadata'
//         />
//     </div>
//   )
// }
import React, { useContext, useEffect, useRef, useState } from 'react';
import {MdSkipNext, MdSkipPrevious, MdOutlinePauseCircleFilled, MdPlayCircle} from 'react-icons/md';
import {IoVolumeLowOutline, IoVolumeMediumOutline, IoVolumeMuteOutline, IoVolumeHighOutline} from 'react-icons/io5'
import BeatsContext from '../../context/BeatsContext';
import {motion} from 'framer-motion';
import './FooterMusicPlayer.css';

export const FooterMusicPlayer = ({footerPlayer}) => {
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
        if(footerPlayer){
            audioRef.current.play();
            setIsPlaying(true);
        }else{
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }, [footerPlayer, setIsPlaying]);

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
                    <motion.h5 
                        className='title-footer-beat'>
                        {beatsFiles[currentSong].title}
                    </motion.h5>
                    <div>
                        {(stateVolume === 0 && < IoVolumeMuteOutline onClick={() => unmuteBeat()}/>) || 
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
                                <MdOutlinePauseCircleFilled onClick={() =>setIsPlaying(false)} /> : 
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

