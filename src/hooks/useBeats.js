import { collection, getDocs, query} from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import {db} from '../FireBase/Firebase';

export const useBeats = () => {
    const [dataBeats, setDataBeats] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading]= useState(true);

    useEffect(()=> {
        const getDataBeats = async() => {
            try {
                setLoading(true)
                const dataRef = collection(db, "beats")
                const q = query(dataRef)
                const querySnapshot = await getDocs(q)
                const docs = []
                querySnapshot.forEach((doc) => {
                    docs.push({...doc.data(), id: doc.id})
                })
                setDataBeats(docs)
    
            } catch (error) {
                console.log(error);
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        getDataBeats()
    }, [])
    
    return (
        [dataBeats,
        loading,
        error]
    )
}