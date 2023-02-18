import { useContext, useEffect, useState} from 'react';
import BeatsContext from '../../context/BeatsContext';
import { CartContext } from '../../context/CartContext';
import {FooterMusicPlayer} from '../FooterMusicPlayer/FooterMusicPlayer';
import {BsHandbag} from 'react-icons/bs';
import { useSEO } from '../../hooks/useSEO';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import { useBeats } from '../../hooks/useBeats';
import { Link } from 'react-router-dom';
import {FilterButtons} from '../FilterButtons/FilterButtons'
import './BeatStore.css'

export const AllBeats = () => {
    const [dataBeats, loading] = useBeats()
    const [data, setData] = useState(dataBeats);
    const {currentSong, setCurrent, setFooterPlayer, footerPlayer} = useContext(BeatsContext);
    // const allCategories = useState(['Todo', ...new Set(data.map(({category}) => category))])
    const value = useContext(CartContext);
    const addItem = value.addItem;
    const [license] = value.license;
    useSEO({title: 'Catalogo de beats', description: 'BeatStore'})

    useEffect(() => {
        setData(dataBeats)
    }, [dataBeats])
    
    const filterResult = async(category) => {
        const result = await dataBeats.filter((data) => {
            return data.category === category;
        })
        setData(result)
    }

    return (
        <>
        {loading ? <div className='all-beats-loading'><LoadingAnimation /></div> : <>
        <div className='container-beatstore'>
        {/* <h2>Selecciona una licencia</h2>
        <button onClick={() => setLicense('Mp3 sin TAG')}>Mp3 sin TAG</button>
        <button onClick={() => setLicense('WAV sin TAG')}>WAV sin TAG</button>
        <button onClick={() => setLicense('Stems en WAV')}>Stems en WAV</button> */}
        {/* <FilterButtons filterResult={filterResult}/> */}
        <div className="btns-categories">
              <button 
                  type='button'
                  className='category-btn'
                  onClick={() => setData(dataBeats)}
              >Todo</button>
              <button 
                  type='button'
                  className='category-btn'
                  onClick={() => filterResult('Trap')}
              >Trap</button>
              <button 
                  type='button'
                  className='category-btn'
                  onClick={() => filterResult('Rap')}
              >Rap</button>
              <button 
                  type='button'
                  className='category-btn'
                  onClick={() => filterResult('Boombap')}
              >Boombap</button>
        </div>
            {data.map(({id, img, title, price}, i) => (
                    <div
                    className="beats-container"
                        // className={"beats-container " + 
                        // (footerPlayer && currentSong === i ? "selected-beat" : '')}
                        key={i}
                    >
                        <Link to={`/detail/${id}`}>
                            <div
                            //onClick={() => {
                            //setCurrent(i);
                            //setFooterPlayer(true);
                            // }}
                            >
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
                        </Link>
                        <div className="container-add-cart">
                            <button 
                                className='add-beat-cart'
                                onClick={()=> addItem(id)}
                            >
                                <BsHandbag className='icon-cart'/>
                                Agregar
                            </button>
                        </div>
                    </div>
                ))
        }
            {/* {footerPlayer &&
                <FooterMusicPlayer footerPlayer={footerPlayer} setFooterPlayer={setFooterPlayer}/>
            } */}
        </div>
        </> }  
        </>
    )
}
