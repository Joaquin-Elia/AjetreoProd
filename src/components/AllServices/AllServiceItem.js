import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import {BsHandbag} from 'react-icons/bs';
import {TiTick} from 'react-icons/ti'

const AllServiceItem = ({
    id,
    title,
    price
}) => {
    const value = useContext(CartContext);
    const addItem = value.addItem;
    const [addedProductIds] = value.addedProduct;
  
    const isInCart = addedProductIds.includes(id);

    const handleAddToCart = () => {
      if(!isInCart)
        addItem(id);
    };

  return (
    <div className='all_services_cards'>
          <div className="all_services_content">
            <div className='service-card-header'>
                <h3 className='service-card-header-title'>{title}</h3>
                <small className='service-card-header-ideal'>Ideal para principiantes</small>
                <div>
                  <span className='service-card-header-price-before'>USD {Math.floor(price * 1.63)},00</span>
                  <span className='service-card-header-offer'> Ahorrá 63%</span>
                </div>
                <span className='service-card-header-price'><small className='service-price-curency'>USD</small> {price},00</span>
            </div>
            <ul className='card-items-container'>
              <li className='card-items'><TiTick/> Edición</li>
              <li className='card-items'><TiTick/> Mezcla de voces</li>
              <li className='card-items'><TiTick/> Pistas instrumentales</li>
              <li className='card-items'><TiTick/> SFX</li>
              <li className='card-items'><TiTick/> 20 pistas</li>
              <li className='card-items'><TiTick/> Calidad profesional</li> 
            </ul>
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
            onClick={()=> handleAddToCart()}
            className='container_add_cart'
          >
            <BsHandbag />
            <button className="btn_add_cart">Agregar</button>
          </div>
        }
    </div>
)}

export default AllServiceItem