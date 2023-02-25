import {useReducer, useState} from 'react';
import playerReducer from './PlayerReducer';
import BeatsContext from './BeatsContext';
import { useBeats } from '../hooks/useBeats';

export const PlayerState = ({children}) => {
  const [dataBeats, loading] = useBeats()
  const initialState = {
        currentSong: 0,
        repeat: false,
        // random: false,
        playing: false,
  }
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [state, dispatch] = useReducer(playerReducer, initialState);

  const setCurrent = id => dispatch({type: 'SET_CURRENT_SONG', data: id});

  const togglePlaying = () => 
    dispatch({type: 'TOGGLE_PLAYING', data: state.playing ? false : true});

  const prevSong = () => {
      if (state.currentSong === 0){
          setCurrent(dataBeats.length - 1);
          setIsPlaying(false);
      } else{
          setCurrent(state.currentSong - 1);
          setIsPlaying(false);
      }
  }
  
  const nextSong = () => {
      if (state.currentSong === dataBeats.length - 1){
          setCurrent(0);
          setIsPlaying(false);
      } else{
          setCurrent(state.currentSong + 1);
          setIsPlaying(false);
      }
  }

  const handleEnd = () => {
    if(state.random){
        return dispatch({
            type: 'SET_CURRENT_SONG',
            data: ~ (Math.random() * dataBeats.length),
        })
    }else {
        if(state.repeat){
            nextSong();
        }else if (state.currentSong === dataBeats.length - 1){
            return
        } else {
            nextSong();
        }
    }
  }

    return  <BeatsContext.Provider 
                value={{
                    repeat: state.repeat,
                    // random: state.random,
                    currentSong: state.currentSong,
                    playing: state.playing,
                    dataBeats: dataBeats,
                    loading: loading,
                    setCurrent,
                    nextSong,
                    prevSong,
                    togglePlaying,
                    handleEnd,
                    isPlaying,
                    setIsPlaying,
                    isPlayingVideo, 
                    setIsPlayingVideo
                }}>
                    {children}
            </BeatsContext.Provider>
}
