import React, { useContext } from 'react';
import BeatsContext from '../../context/BeatsContext';
import { CartContext } from '../../context/CartContext';
import {FooterMusicPlayer} from '../FooterMusicPlayer/FooterMusicPlayer';
import {BsHandbag} from 'react-icons/bs';
import { useSEO } from '../../hooks/useSEO';
import './BeatStore.css'

export const AllBeats = () => {
   
    const {beatsFiles, currentSong, setCurrent, setFooterPlayer, footerPlayer} = useContext(BeatsContext);
    const value = useContext(CartContext);
    const addItem = value.addItem;
    useSEO({title: 'Catalogo de beats', description: 'BeatStore'})

    return (
        <div className='container-beatstore'>
            {beatsFiles.map(({id, img, title, price}, i) => (
                <div 
                    className={"beats-container " + 
                    (footerPlayer && currentSong === i ? "selected-beat" : '')}
                    key={id}
                >
                    <div
                        onClick={() => {
                        setCurrent(i);
                        setFooterPlayer(true);
                    }}>
                        <img 
                            className='img-beat'
                            src={img} 
                            alt={title}
                        />
                        <div className='beat-info'>
                            <h5 className='beat-info-title'>{title}</h5>
                            <span className='beat-info-price'>$USD {price}</span>
                        </div>
                    </div>
                    <button 
                        className='add-beat-cart'
                        onClick={()=> addItem(id)}
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
