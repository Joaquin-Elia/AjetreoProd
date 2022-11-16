import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import {BsHandbag} from 'react-icons/bs';

const AllServiceItem = ({
    id,
    img,
    title,
    description,
    price
}) => {
    const value = useContext(CartContext);
    const addItem = value.addItem;
    const [added, setAdded] = useState(false);

    const deleteBtn = () =>{
      addItem(id)
      setAdded(!added)
    }

  return (
    <div className='all_services_cards'>
          <img 
            src={img}
            alt={`Icono ${title}`}
            className='all_services_card_img'
          />
          <div className="all_services_content">
            <h3 className='all_service_card_title'>{title}</h3>
            <p className='all_service_card_description'>{description}</p>
            <div className="add_price_content">
              {!added && <div className='container_add_cart'>
                <BsHandbag />
                <button 
                  className="btn_add_cart"
                  onClick={()=> deleteBtn()}
                >
                  Agregar
                </button>
              </div>}
              {added && <div className="container_add_cart">
                <Link 
                  to='/cart'
                  className="btn_added"
                >
                  Ir al carrito
                </Link>
              </div> }
              <div className="services_price_container">
                <span className='services_price_before'>$35</span>
                <span className='services_price_after'>${price} USD</span>
              </div>
            </div>
          </div>
    </div>
)}

export default AllServiceItem