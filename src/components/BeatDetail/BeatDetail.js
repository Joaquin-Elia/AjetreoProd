import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import BeatsContext from "../../context/BeatsContext";
import { useBeats } from "../../hooks/useBeats";
import { FooterMusicPlayer } from "../FooterMusicPlayer/FooterMusicPlayer";
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'

export const BeatDetail = () => {
    const [dataBeats, loading] = useBeats()
    const [beatDetail, setBeatDetail] = useState(dataBeats)
    const {currentSong, setCurrent, setFooterPlayer, footerPlayer} = useContext(BeatsContext);
    const {id} = useParams();

    useEffect(() => {
      getData()
    }, [dataBeats])
    
    const getData = () => {
        const filter = dataBeats.filter(data => data.id === id)
        setBeatDetail(filter)
    }


  return (
    <div>
      {loading ? <div><LoadingAnimation /></div> : <>
        {beatDetail.map(({id, title, category, price, description},i) => 
          <div 
            style={{padding: '5rem'}}
            key={i}
          >
            <h3
              onClick={() => {
              setCurrent(i);
              setFooterPlayer(true)
               }}>
              {title}</h3>
            <p>{category}</p>
            <p>{price}</p>
            <p>{description}</p>
          </div>
        )}
          {footerPlayer &&
            <FooterMusicPlayer footerPlayer={footerPlayer} setFooterPlayer={setFooterPlayer}/>
          }
      </>
      }
    </div>
  )
}
