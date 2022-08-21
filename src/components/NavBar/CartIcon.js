import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import {BsHandbag} from 'react-icons/bs';

function CartIcon() {
    const value = useContext(CartContext);
    const [cart] = value.cart;

    return (
        <Link to='/cart'>
            <BsHandbag className='cart-widget'/>
            {cart.length > 0 && 
                <span className='item_count'>
                    {cart.length}
                </span>
            }
        </Link>
    )
}

export default CartIcon