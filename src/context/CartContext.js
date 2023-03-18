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

  const addItem = (id, selectedLicense) => {
    // funcion que evalua que item.id sea diferente al id,
    // si es diferente retorna true si es igual false
    const check = cart.every(item => item.id !== id)
    if(check){
      // filtro en products el que sea igual al id y lo guardo en cart 
      const dataProducts = products.filter(product => {
        return product.id === id;
      });
      const dataBeats = beats.filter(beat =>{
        return beat.id === id;
      });

      let newItem = null;
      if (dataBeats.length > 0) {
        // Si se agrega un beat, agrega la información de la licencia seleccionada
        const selectedBeat = dataBeats[0];
        const license = selectedLicense;
        const licensePrice = selectedLicense === 'Stems en WAV' 
          ? 
        selectedBeat.price * 1.9 
          : 
        selectedLicense === 'WAV sin TAG' 
          ? 
        selectedBeat.price * 1.4 
          : 
        selectedBeat.price;
        newItem = {
          ...selectedBeat,
          price: licensePrice,
          license: license || null
        };

      } else if (dataProducts.length > 0) {
        newItem = {
          ...(dataProducts[0]),
          price: dataProducts[0].price,
          licence: null
        };
      } 
      // guardo lo que hay en cart y lo que hay en data
      setCart([...cart, newItem])
    }
  }


  // Total
  useEffect(() =>{
    const getTotal = () =>{
      const res = cart.reduce((prev, item)=> {
          return prev + (item.price);
      }, 0)
      setTotal(Math.floor(res))
  }
  getTotal()
  }, [cart])


  useEffect(() => {
    // revisando si hay algo en cart
    const dataCart = JSON.parse(localStorage.getItem('dataCart'))
      setCart(dataCart)
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
            {children}
        </CartContext.Provider>
  )
}

export default CartProvider