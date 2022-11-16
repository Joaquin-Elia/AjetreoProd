import React, { createContext, useContext, useEffect, useState } from 'react';
import { BsLockFill } from 'react-icons/bs';
import { useFirestore } from '../hooks/useFirestore';
import BeatsContext from './BeatsContext';

export const CartContext = createContext()

const CartProvider = (props) => {
  const {beatsFiles} = useContext(BeatsContext);
  const [products, setProducts] = useState([]);
  const [beats, setBeats] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [dataServices, loading] = useFirestore()

  useEffect(() => {
    const product = dataServices;
    const beat = beatsFiles;
    if (product) {
      setProducts(product);
    } else {
      setProducts([]);
    } if(beat) {
      setBeats(beat);
    } else{
      setBeats([])
    }
  }, [dataServices, beatsFiles])

  const addItem = (id) => {
    // funcion que evalua que item.id sea diferente al id,
    // si es diferente retorna true si es igual false
    const check = cart.every(item => {
      return item.id !== id;
    })
    if(check){
      // filtro en products el que sea igual al id y
      // lo guardo en cart 
      const dataProducts = products.filter(product =>{
        return product.id === id
      })
      const dataBeats = beats.filter(beat =>{
        return beat.id === id
      })
      // guardo lo que hay en cart y lo que hay en data
      setCart([...cart, ...dataProducts, ...dataBeats])
    }
  }

  // Total
  useEffect(() =>{
    const getTotal = () =>{
      const res = cart.reduce((prev, item)=> {
        return prev + (item.price)
      }, 0)
      setTotal(res)
  }
  getTotal()
  }, [cart])

  useEffect(() => {
    // revisando si hay algo en cart
    const dataCart = JSON.parse(localStorage.getItem('dataCart')
    )
    if (dataCart) {
      setCart(dataCart)
    } 
  },[])
  
  // si hay algo en cart entonces lo guardo 
  useEffect(() =>{
    localStorage.setItem('dataCart', JSON.stringify(cart))
  },[cart])

  const value = {
    products: [products],
    loading: loading,
    addItem: addItem,
    cart: [cart, setCart],
    total: [total, setTotal],
  }

  return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
  )
}

export default CartProvider