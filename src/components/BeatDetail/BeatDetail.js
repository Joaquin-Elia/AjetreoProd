import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import { BsHandbag ,BsFillPlayFill } from 'react-icons/bs'
import BeatsContext from "../../context/BeatsContext";

export const BeatDetail = ({dataDetail, setFooterPlayer, footerPlayer}) => {

  const value = useContext(CartContext);
  const addItem = value.addItem;
  const {setCurrent} = useContext(BeatsContext);
  // const [license, setLicense] = value.license;

  return (
    <div>
      {dataDetail.map(({id, title, img, category, price, description}, i) => 
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
            <div className="beat-detail-info">
              <h2 className='beat-detail-title'>
                {title}
              </h2>
              <small className='beat-detail-category'>Categoria: {category}</small>
              <h3 className='beat-detail-price'>$USD {
                // license === 'Stems en WAV' 
                //     ?
                // price * 1.8 
                //     : 
                // license === 'WAV sin TAG'
                //     ? 
                // price * 1.5 
                //     : 
                price}
              </h3>
              {/* <p>{description}</p>*/}

              {/* <button onClick={() => setLicense('Mp3 sin TAG')}>Mp3 sin TAG</button>
              <button onClick={() => setLicense('WAV sin TAG')}>WAV sin TAG</button>
              <button onClick={() => setLicense('Stems en WAV')}>Stems en WAV</button> */}
              <div className="container-btn-add">
                <button 
                  onClick={()=> addItem(id)}
                  className='beat-detail-add'
                >
                  <BsHandbag className='icon-cart'/>
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}
