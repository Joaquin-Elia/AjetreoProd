import React, { createContext, useContext, useEffect, useState } from 'react';
import { useFirestore } from '../hooks/useFirestore';
import BeatsContext from './BeatsContext';

export const CartContext = createContext()

const CartProvider = ({children}) => {
  const {dataBeats} = useContext(BeatsContext);
  const [products, setProducts] = useState([]);
  const [beats, setBeats] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [license, setLicense] = useState('Mp3 sin TAG')
  const [dataServices, loading] = useFirestore();

  useEffect(() => {
    const product = dataServices;
    const beat = dataBeats;
    if (product) {
      setProducts(product);
    } else {
      setProducts([]);
    } if(beat) {
      setBeats(beat);
    } else{
      setBeats([])
    }
  }, [dataServices, dataBeats])

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
        if (license === 'Stems en WAV'){
            return prev + (item.price * 1.8);
          } else if (license === 'WAV sin TAG') {
             return prev + (item.price * 1.5);
          } 
          return prev + (item.price);
      }, 0)
      setTotal(res)
  }
  getTotal()
  }, [cart, license])


  useEffect(() => {
    // revisando si hay algo en cart
    const dataCart = JSON.parse(localStorage.getItem('dataCart'))
    const dataLicense = JSON.parse(localStorage.getItem('dataLicense'))
    if (dataCart) {
      setCart(dataCart)
    } 
    setLicense(dataLicense)
  },[])
  
  // si hay algo en cart entonces lo guardo 
  useEffect(() =>{
    localStorage.setItem('dataCart', JSON.stringify(cart))
    localStorage.setItem('dataLicense', JSON.stringify(license))
  },[cart, license])

  const value = {
    products: [products],
    loading: loading,
    addItem: addItem,
    cart: [cart, setCart],
    total: [total, setTotal],
    license: [license],
  }

  return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
  )
}

export default CartProvider