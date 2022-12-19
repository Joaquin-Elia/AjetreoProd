import React, { useContext, useState } from 'react';
import { useAuth } from '../../context/AuthContext'
import { CartContext } from '../../context/CartContext';
import { db } from '../../FireBase/Firebase';
import {doc, setDoc} from 'firebase/firestore/lite';

export const OrderPurchase = () => {
    const {email} = useAuth();
    const value = useContext(CartContext);
    const [cart] = value.cart;  
    const [total] = value.total;

    const userEmail = email;
    const [idOrder, setIdOrder] = useState(null);

    const generateOrder = async(e)=>{
        e.preventDefault();
        const buyerUser = {email};
        const ordersCollection = await setDoc(doc(db, 'orders'),{
            name: {buyerUser},
            product: 'Mezcla',
            time: 'Recien compa'
        })

    }
  return (
    <div
    style={{color: 'white', fontSize: '1.875rem'}} 
    onClick={generateOrder}>OrderPurchase {generateOrder && <>{idOrder}</>}</div>
  )
}
