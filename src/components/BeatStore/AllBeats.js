import { Link } from "react-router-dom";
import {BsHandbag} from 'react-icons/bs'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const AllBeats = ({data}) => {
    const value = useContext(CartContext);
    const addItem = value.addItem;
  return (
    <>
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
                                    // license === 'Stems en WAV' 
                                    //     ?
                                    // price * 1.8 
                                    //     : 
                                    // license === 'WAV sin TAG'
                                    //     ? 
                                    // price * 1.5 
                                    //     : 
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
    </>
  )
}
