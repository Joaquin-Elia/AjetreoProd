import React, {useReducer, useState} from 'react';
import playerReducer from './PlayerReducer';
import BeatsContext from './BeatsContext';
import { BeatsFiles } from '../components/BeatStore/BeatsFiles';

export const PlayerState = (props) => {
  const initialState = {
        currentSong: 0,
        beatsFiles: BeatsFiles,
        repeat: false,
        random: false,
        playing: false,
  }
  const [isPlaying, setIsPlaying] = useState(false);
  const [footerPlayer, setFooterPlayer] = useState(false);
  const [state, dispatch] = useReducer(playerReducer, initialState);

  const setCurrent = id => dispatch({type: 'SET_CURRENT_SONG', data: id});

  const togglePlaying = () => 
    dispatch({type: 'TOGGLE_PLAYING', data: state.playing ? false : true});

  const prevSong = () => {
      if (state.currentSong === 0){
          setCurrent(state.beatsFiles.length - 1);
          setIsPlaying(false);
      } else{
          setCurrent(state.currentSong - 1);
          setIsPlaying(false);
      }
  }
  
  const nextSong = () => {
      if (state.currentSong === state.beatsFiles.length - 1){
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
            data: ~ (Math.random() * state.beatsFiles.length),
        })
    }else {
        if(state.repeat){
            nextSong();
        }else if (state.currentSong === state.beatsFiles.length - 1){
            return
        } else {
            nextSong();
        }
    }
  }

    return  <BeatsContext.Provider 
                value={{
                    currentSong: state.currentSong,
                    beatsFiles: state.beatsFiles,
                    repeat: state.repeat,
                    random: state.random,
                    playing: state.playing,
                    setCurrent,
                    nextSong,
                    prevSong,
                    togglePlaying,
                    handleEnd,
                    isPlaying,
                    setIsPlaying,
                    setFooterPlayer,
                    footerPlayer
                }}>
                    {props.children}
            </BeatsContext.Provider>
}
