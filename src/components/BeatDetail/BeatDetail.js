import { useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";
import { BsHandbag ,BsFillPlayFill } from 'react-icons/bs'
import BeatsContext from "../../context/BeatsContext";

export const BeatDetail = ({dataDetail, setFooterPlayer, footerPlayer}) => {

  const value = useContext(CartContext);
  const addItem = value.addItem;
  const [selectedLicense, setSelectedLicense] = useState('Mp3 sin TAG');
  const {setCurrent} = useContext(BeatsContext);

  return (
    <div>
      {dataDetail.map(({id, title, img, category, price, licenses}, i) => 
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
              <h3 className='beat-detail-price'>USD {Math.floor(
                // selectedLicense === 'Stems en WAV' 
                //     ?
                // price * 1.8 
                //     : 
                // selectedLicense === 'WAV sin TAG'
                //     ? 
                // price * 1.5 
                //     : 
                price)},00
              </h3>
              {/* <p>{description}</p>*/}

              <button onClick={() => setSelectedLicense(licenses[0])}>{licenses[0]}</button>
              <button onClick={() => setSelectedLicense(licenses[1])}>{licenses[1]}</button>
              <button onClick={() => setSelectedLicense(licenses[2])}>{licenses[2]}</button>
              <div className="container-btn-add">
                <button 
                  onClick={()=> addItem(id, selectedLicense)}
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
