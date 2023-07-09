import { useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";
import { BsHandbag ,BsFillPlayFill } from 'react-icons/bs'
import BeatsContext from "../../context/BeatsContext";
import { Link } from "react-router-dom";

export const BeatDetail = ({dataDetail, setFooterPlayer, footerPlayer}) => {

  const value = useContext(CartContext);
  const addItem = value.addItem;
  const [addedProductIds] = value.addedProduct;
  // const [inCart, setInCart] = useState(false)
  const [selectedLicense, setSelectedLicense] = useState('Mp3 sin TAG');
  const {setCurrent} = useContext(BeatsContext);


  return (
    <div>
      {dataDetail.map(({id, title, img, category, price, licenses}, i) => {
        
        const isInCart = addedProductIds.includes(id);

        return (
          <div 
            className='detail-container'
            key={i}
          >
            <div 
              className="beat-play-container" 
              onClick={() => {
                setCurrent(i);
                setFooterPlayer(true)
              }}
            >
              {!footerPlayer ? 
                <div className='beat-play-icon'>
                    <BsFillPlayFill />
                </div>
                  :
                <div className="beat-playing">
                  <h4>Reproduciendo</h4>
                </div>
              }
              <div className="container-img-detail">
                <img 
                  className='img-beat-detail' 
                  src={img} 
                  alt={title}
                />
              </div>
            </div>
            <div className="beats-width-container">
              <div className="beat-detail-info">
                <h2 className='beat-detail-title'>
                  {title}
                </h2>
                <small className='beat-detail-category'>Categoria: {category}</small>
                <h3 className='beat-detail-price'>USD {Math.floor(
                  selectedLicense === 'Stems en WAV' 
                      ?
                  price * 1.9 
                      : 
                  selectedLicense === 'WAV sin TAG'
                      ? 
                  price * 1.4 
                      : 
                  price)},00
                </h3>
                <div className="container-licenses">
                  {licenses.map(license => 
                    <div key={license}
                      className={selectedLicense === license ? 'select-license active-license' : 'select-license'}
                      onClick={() => setSelectedLicense(license)}
                    >
                      <p className='title-license'>{license}</p>
                      {license === 'Mp3 sin TAG' && 
                        <span>
                          USD {Math.floor(price)},00
                        </span>   
                      }  
                      {license === 'WAV sin TAG' && 
                        <span>
                          USD {Math.floor(price * 1.4)},00
                        </span>   
                      }  
                      {license === 'Stems en WAV' && 
                        <span>
                          USD {Math.floor(price * 1.9)},00
                        </span>   
                      }  
                    </div>
                  )}
                </div>
                {isInCart ?
                  <Link 
                    className="container_add_cart"
                    to='/cart' 
                  >
                    Ir al carrito
                  </Link> 
                  :
                  <div 
                    onClick={()=> addItem(id, selectedLicense)} 
                    className="container-btn-add"
                  >
                    <BsHandbag className='icon-cart'/>
                    <button>
                      Agregar al carrito
                    </button>
                  </div>
                }
              </div>

            </div>
            </div>

        )
      }
        )}
    </div>
  )
}
