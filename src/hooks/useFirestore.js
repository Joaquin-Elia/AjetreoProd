import { collection, getDocs, orderBy, query } from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import {db} from '../FireBase/Firebase';

export const useFirestore = () => {
    const [dataServices, setDataServices] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading]= useState(true);

    useEffect(()=> {
        const getDataServices = async() => {
            try {
                setLoading(true)
                const dataRef = collection(db, "services")
                const q = query(dataRef, orderBy("order"))
                const querySnapshot = await getDocs(q)
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({...doc.data(), id: doc.id})
                })
                setDataServices(docs)
    
            } catch (error) {
                console.log(error);
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        getDataServices()
    }, [])
    
    return (
        [dataServices,
        loading]
    )
}