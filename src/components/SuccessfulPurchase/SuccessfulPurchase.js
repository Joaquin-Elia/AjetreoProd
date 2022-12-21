import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './SuccessfulPurchase.css';

const SuccessfulPurchase = () => {
    const value = useContext(CartContext);
    const [cart, setCart] = value.cart;  
    const [total] = value.total;
    const navigate = useNavigate();

    const btnOkay = () =>{
        setCart([])
        navigate('/profile')
    }

  return (
    <>
    <div className='overlay-background'>
    <div className="finish-purchase">
      <span className='finish-purchase-tick'>✔</span>
      <h2 className="finish-purchase-h2"> Compra realizada con exito!</h2>
      <h3 className="finish-purchase-h3"> Muchas gracias por elegirnos</h3>
      <p>A la brevedad nos comunicaremos con vos</p>
      {cart.map(({id, title, price})=> 
        <div key={id}>
          <ol>
            <li className='finish-purchase-list'>Nombre de el productos: {title}</li>
            <li className='finish-purchase-list'>Precio unitario: $USD {price}</li>
          </ol>
        </div>
      )}
      <span className='finish-purchase-span'>Total: <strong className='finish-purchase-strong'>$USD {total}</strong></span>
      <button
      className='finish-purchase-btn'
      onClick={() => btnOkay()}
      >
      Aceptar
      </button>
    </div>
    </div>
    </>
  )
}

export default SuccessfulPurchase