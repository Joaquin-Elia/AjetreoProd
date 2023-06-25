import React, {useContext, useState} from 'react';
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
    const [added, setAdded] = useState(false);

    const deleteBtn = () =>{
      addItem(id)
      setAdded(!added)
    }

    // const images = [      
    //   'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg',
    //   'https://images.unsplash.com/photo-1633933769681-dc8d28bdeb6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    //   'https://images.pexels.com/photos/1481311/pexels-photo-1481311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   'https://images.pexels.com/photos/10933702/pexels-photo-10933702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   'https://images.pexels.com/photos/352505/pexels-photo-352505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   'https://images.unsplash.com/photo-1633933769681-dc8d28bdeb6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    // ]
  return (
    <div className='all_services_cards'>
          <div className="all_services_content">
            <div className='service-card-header'>
              {/* {images.map((img, i) => <div key={i} className='service_header_bg' style={{backgroundImage: `url(${img})` }}/>  */}
                {/* )} */}
                <h3 className='service-card-header-title'>{title}</h3>
                <small className='service-card-header-ideal'>Ideal para principiantes</small>
                <div>
                  <span className='service-card-header-price-before'>USD {Math.floor(price * 1.63)},00</span>
                  <span className='service-card-header-offer'> Ahorrá 63%</span>
                </div>
                <span className='service-card-header-price'><small className='service-price-curency'>USD</small> {price},00</span>
            </div>
            <ul className='card-items-container'>
              <li className='card-items'><TiTick /> Edición</li>
              <li className='card-items'><TiTick/> Mezcla de voces</li>
              <li className='card-items'><TiTick/> Pistas instrumentales</li>
              <li className='card-items'><TiTick/> SFX</li>
              <li className='card-items'><TiTick/> 20 pistas</li>
              <li className='card-items'><TiTick/> Calidad profesional</li>
            </ul>
        </div>
        {!added && 
          <div className='container_add_cart'>
            <BsHandbag />
            <button 
              className="btn_add_cart"
              onClick={()=> deleteBtn()}
            >
              Agregar
            </button>
          </div>
        }
        {added && 
          <div className="container_add_cart">
            <Link 
              to='/cart'
              className="btn_added"
            >
              Ir al carrito
            </Link>
          </div> 
        }
    </div>
)}

export default AllServiceItem