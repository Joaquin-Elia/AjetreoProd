import { collection, getDocs, query } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import {db} from '../FireBase/Firebase';

export const useOrders = () => {
    const [dataOrders, setDataOrders] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading]= useState(true);

    useEffect(()=> {
        const getDataOrders = async() => {
            try {
                setLoading(true)
                const dataRef = collection(db, "orders")
                const q = query(dataRef)
                const querySnapshot = await getDocs(q)
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({...doc.data(), id: doc.id})
                })
                setDataOrders(docs)
    
            } catch (error) {
                console.log(error);
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        getDataOrders()
    }, [])
    
    return (
        [dataOrders,
        loading]
    )
}