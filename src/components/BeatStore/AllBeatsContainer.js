import { useEffect, useState } from 'react';
import { useSEO } from '../../hooks/useSEO';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import { useBeats } from '../../hooks/useBeats';
import {FilterButtons} from '../FilterButtons/FilterButtons'
import { AllBeats } from './AllBeats';
import './BeatStore.css'

export const AllBeatsContainer = () => {
    const [dataBeats, loading] = useBeats()
    const [data, setData] = useState(dataBeats);
    const allCategories = ['Todo', ...new Set(dataBeats.map(beat => beat.category))]
    useSEO({title: 'Catalogo de beats', description: 'BeatStore'})

    useEffect(() => {
        setData(dataBeats)
    }, [dataBeats])

    const filterResult = (category) => {
        if (category === 'Todo') {
            setData(dataBeats)
            return
        }
        const result = dataBeats.filter((data) => {
            return data.category === category;
        })
        setData(result)
    }
    return (
        <>
            {loading ? <div className='beats-loading'><LoadingAnimation /></div> : <>
                <div className='container-beatstore'>
                    <FilterButtons 
                        filterResult={filterResult}
                        setData={setData} 
                        dataBeats={dataBeats}
                        allCategories={allCategories}
                    />
                    <AllBeats data={data}/>
                </div>
            </> }  
        </>
    )
}
