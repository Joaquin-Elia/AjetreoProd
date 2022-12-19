import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import {db} from '../../FireBase/Firebase'
import { addDoc, collection } from 'firebase/firestore/lite';
import { useAuth } from '../../context/AuthContext';
import PaypalCheckout from '../PaypalCheckout/PaypalCheckout'

const GenerateOrder = () => {
    const value = useContext(CartContext);
    const [cart] = value.cart;  
    const [total] = value.total;
    const {user} = useAuth();

    const userEmail = user.email;
    const [idOrder, setIdOrder] = useState(null);

    const generateOrder = async () => {

        const collectionRef = collection(db, 'orders')
        const order = {
            buyer: userEmail,
            total: total,
            items: cart.map(({id, title, price})=>{
                        const idProduct = id;
                        const titleProduct = title;
                        const priceProduct = price;
                        return {idProduct, titleProduct, priceProduct}
                    })
        }
        await addDoc(collectionRef, order)
        .then((IdDocument)=>{
            setIdOrder(IdDocument.id)
        })
    }
  return (
    <div>
        <PaypalCheckout generateOrder={generateOrder}/>
    </div>
  )
}

export default GenerateOrder