import { useContext} from 'react';
import BeatsContext from '../../context/BeatsContext';
import { CartContext } from '../../context/CartContext';
import {FooterMusicPlayer} from '../FooterMusicPlayer/FooterMusicPlayer';
import {BsHandbag} from 'react-icons/bs';
import { useSEO } from '../../hooks/useSEO';
// import { FilterButtons } from '../FilterButtons/FilterButtons';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import './BeatStore.css'
import { useBeats } from '../../hooks/useBeats';

export const AllBeats = () => {
    const [dataBeats, loading] = useBeats()
    const {currentSong, setCurrent, setFooterPlayer, footerPlayer} = useContext(BeatsContext);
    const value = useContext(CartContext);
    const addItem = value.addItem;
    const [license] = value.license;
    useSEO({title: 'Catalogo de beats', description: 'BeatStore'})
    

    return (
        <>
        {loading ? <div className='all-beats-loading'><LoadingAnimation /></div> : <>
        <div className='container-beatstore'>
        {/* <h2>Selecciona una licencia</h2>
        <button onClick={() => setLicense('Mp3 sin TAG')}>Mp3 sin TAG</button>
        <button onClick={() => setLicense('WAV sin TAG')}>WAV sin TAG</button>
        <button onClick={() => setLicense('Stems en WAV')}>Stems en WAV</button> */}
        {/* <FilterButtons /> */}
            {dataBeats.map(({id, img, title, price}, i) => (
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
                            src={img} 
                            alt={title}
                        />
                        <div className='beat-info'>
                            <h5 className='beat-info-title'>{title}</h5>
                            <span className='beat-info-price'>
                                $USD {
                                license === 'Stems en WAV' 
                                    ?
                                price * 1.8 
                                    : 
                                license === 'WAV sin TAG'
                                    ? 
                                price * 1.5 
                                    : 
                                price}
                            </span>
                        </div>
                    </div>
                        <p>Licencia: {license}</p>
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
                <FooterMusicPlayer footerPlayer={footerPlayer} setFooterPlayer={setFooterPlayer}/>
            }
        </div>
        </> }  
        </>
    )
}
