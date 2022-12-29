import { collection, getDocs, orderBy, query} from 'firebase/firestore/lite';
import { useEffect, useState } from 'react';
import { db } from '../FireBase/Firebase';

export const SliderImage = () =>{
  const [dataSlider, setDataSlider] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const getDataSlider = async() => {
        try {
            setLoading(true)
            const dataRef = collection(db, "slider")
            const q = query(dataRef, orderBy("order"))
            const querySnapshot = await getDocs(q)
            const docs = []
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id})
            })
            setDataSlider(docs)
        } catch (error) {
            console.log(error);
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }
    getDataSlider()
  }, [])

    return (
      [dataSlider,
      loading,
      error]
    )
}