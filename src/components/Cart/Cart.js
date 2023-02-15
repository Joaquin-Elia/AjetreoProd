import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import {BsFillBagXFill , BsTrash} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { NeedSignIn } from '../NeedSignIn/NeedSignIn';
import { useAuth } from '../../context/AuthContext';
import GenerateOrder from '../GenerateOrder/GenerateOrder';
import { useSEO } from '../../hooks/useSEO';
import './Cart.css'

const Cart = () => {
  const value = useContext(CartContext);
  const [cart, setCart] = value.cart;  
  const [total] = value.total;
  const [license] = value.license;
  const {user} = useAuth();
  const [modalState, setModalState] = useState(false);
  useSEO({title: 'Carrito', description: 'Carrito'})

  const removeItem = id => {
    cart.forEach((items , i) =>{
      if(items.id === id){
        cart.splice(i, 1)
      }
    })
    setCart([...cart])
  }

  return (
    <div className='cart'>
      <div className="cart_bg">
        {cart.length === 0 ? 
          <div className='cart_empty'>
            <BsFillBagXFill className='cart_empty_icon'/>
            <h2 className='cart_empty_title'>Tu carrito está vacio</h2>
            <p className='cart_empty_p'>En las secciones de "Servicios" o "Beatstore" podés agregar el producto que quieras y lo veras acá</p>
            <Link to='/service' className='cart_empty_btn1'>Ir a Servicios</Link>
            <Link to='/beatstore' className='cart_empty_btn2'>Ir a Beatstore</Link>
          </div> 
          : <>
          <div className="cart_table">
            <h4>Producto</h4>
            <h4>Licencia</h4>
            <h4>Precio</h4>
          </div>
          {cart.map(({id, img, title, price}) => 
              <div 
                className="cart_items"
                key={id}
              >
                <img
                  className='cart_items_img' 
                  src={img} 
                  alt={title}
                />
                <h3 className='cart_items_title'>{title}</h3>
                <p className='cart_items_license'>{license}</p>
                <span className='cart_items_price'><small className='price_badge'>$USD</small> 
                  {
                    license === 'Stems en WAV' 
                        ?
                    price * 1.8 
                        : 
                    license === 'WAV sin TAG'
                        ? 
                    price * 1.5 
                        : 
                    price
                  }
                  </span>
                <div className='items_delete_container'>
                  <button 
                    className="cart_items_delete"
                    onClick={()=> removeItem(id)}
                  >
                    X
                  </button>
                </div>
              </div>        
          )}
        <div className="cart_delete_all">
          <div 
            className="cart_delete_all_btn"
            onClick={()=> setCart([])}
          >
            <BsTrash className='cart_delete_all_icon'/>
            <p>Vaciar carrito</p>
          </div>
        </div>
        <div className="cart_detail">
          <h3>Total: $USD {total}</h3>
          {!user && 
            <button 
              className='cart_detail_btn'
              onClick={()=> setModalState(!modalState)}
            >
              Comprar
            </button>
          }
          {user &&
            <GenerateOrder className='paypal-buttons'/>
          }
            <Modal
              className='modal-purchase'
              state={modalState} 
              changeState={setModalState}
              showHeader
              title={!user ? 'Paso: 1/2' : 'Paso: 2/2'}
            >
              {!user &&
                <NeedSignIn />
              }
            </Modal>
        </div>
        </>}
      </div>
    </div>
  )
}

export default Cart