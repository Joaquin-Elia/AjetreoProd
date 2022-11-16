import React, { useContext } from 'react';
import BeatsContext from '../../context/BeatsContext';
import { CartContext } from '../../context/CartContext';
import {FooterMusicPlayer} from '../FooterMusicPlayer/FooterMusicPlayer';
import {BsHandbag} from 'react-icons/bs';
import './BeatStore.css'

export const AllBeats = () => {
   
    const {beatsFiles, currentSong, setCurrent, setFooterPlayer, footerPlayer} = useContext(BeatsContext);
    const value = useContext(CartContext);
    const addItem = value.addItem;

    return (
        <div className='container-beatstore'>
            {beatsFiles.map((beat, i) => (
                <div 
                    className={"beats-container " + 
                    (footerPlayer && currentSong === i ? "selected-beat" : '')}
                    key={i}
                >
                    <div
                        onClick={() => {
                        setCurrent(i);
                        setFooterPlayer(true);
                    }}>
                        <img 
                            className='img-beat'
                            src={beat.img} 
                            alt={beat.title}
                        />
                        <div className='beat-info'>
                            <h5 className='beat-info-title'>{beat.title}</h5>
                            <span className='beat-info-price'>$USD {beat.price}</span>
                        </div>
                    </div>
                    <button 
                        className='add-beat-cart'
                        onClick={()=> addItem(beat.id)}
                    >
                        <BsHandbag className='icon-cart'/>
                        Agregar
                    </button>
                </div>
                ))
            }
            {footerPlayer &&
                <FooterMusicPlayer footerPlayer={footerPlayer}/>
            }
        </div>
    )
}
