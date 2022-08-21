import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import {BsFillBagXFill , BsTrash} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = () => {
  const value = useContext(CartContext);
  const [cart, setCart] = value.cart;  
  const [total] = value.total;

  const removeItem = id => {
    cart.forEach((item,index) =>{
      if(item.id === id){
        cart.splice(index,1)
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
            <h4>Precio</h4>
          </div>
          {cart.map((item) => 
              <div 
                className="cart_items"
                key={item.id}
              >
                <img
                  className='cart_items_img' 
                  src={item.img} 
                  alt={item.title}
                />
                <h3 className='cart_items_title'>{item.title}</h3>
                <span className='cart_items_price'><small className='price_badge'>$USD</small> {item.price}</span>
                <div className='items_delete_container'>
                  <button 
                    className="cart_items_delete"
                    onClick={()=> removeItem(item.id)}
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
          <button className='cart_detail_btn'>Comprar</button>
        </div>
        </>}
      </div>
    </div>
  )
}

export default Cart