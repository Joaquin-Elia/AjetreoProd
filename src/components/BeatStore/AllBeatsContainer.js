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
            {loading ? <div className='all-beats-loading'><LoadingAnimation /></div> : <>
                <div className='container-beatstore'>
                    {/* <h2>Selecciona una licencia</h2>
                    <button onClick={() => setLicense('Mp3 sin TAG')}>Mp3 sin TAG</button>
                    <button onClick={() => setLicense('WAV sin TAG')}>WAV sin TAG</button>
                    <button onClick={() => setLicense('Stems en WAV')}>Stems en WAV</button> */}
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
