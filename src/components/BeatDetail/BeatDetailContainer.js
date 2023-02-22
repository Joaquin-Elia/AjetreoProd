import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import BeatsContext from "../../context/BeatsContext";
import { useBeats } from "../../hooks/useBeats";
import { FooterMusicPlayer } from "../FooterMusicPlayer/FooterMusicPlayer";
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import { BeatDetail } from "./BeatDetail";
import './BeatDetail.css'

export const BeatDetailContainer = () => {
    const [dataBeats, loading] = useBeats()
    const {currentSong, setCurrent} = useContext(BeatsContext);
    const [footerPlayer, setFooterPlayer] = useState(false)
    const [dataDetail, setDataDetail] = useState(dataBeats)
    const {id} = useParams();

    useEffect(() => {
      const getData = () => {
        const filter = dataBeats.filter(data => data.id === id)
        setDataDetail(filter)
    }
        getData()
    }, [dataBeats, id])
  

  return (
    <div>
      {loading ? <div className="loading-animation"><LoadingAnimation /></div> : <>
        <BeatDetail 
          dataDetail={dataDetail}
          setCurrent={setCurrent} 
          currentSong={currentSong}
          setFooterPlayer={setFooterPlayer}
          footerPlayer={footerPlayer}
        />
      </>
      }
      {footerPlayer &&
        <FooterMusicPlayer 
          dataDetail={dataDetail}
          id={id}
          footerPlayer={footerPlayer} 
          setFooterPlayer={setFooterPlayer} 
          currentSong={currentSong}
        />
      }
    </div>
  )
}
