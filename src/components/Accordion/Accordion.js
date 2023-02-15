import { useState } from 'react';
import {RiArrowDownSFill, RiArrowRightSFill} from 'react-icons/ri';
import '../Accordion/Accordion.css'

const Accordion = (
    {id, 
    title, 
    cookieType,
    description,
    linkDescription,
    moreInfo,
    linkMoreInfo
}) => {
    const [accordion, setAccordion] = useState(false);

    const toggleAccordion = (id) => {
        if(id === accordion){
            setAccordion(false);
            return
        }
        setAccordion(id);
    }


  return (
    <div className="container-accordion">
        <div 
            className='accordion-title'
            onClick={()=> toggleAccordion(id)}
        >
            <h3>{title}</h3>
            <div>
                <span>{cookieType}</span>
                {accordion === id
                    ?  
                <RiArrowDownSFill className='accordion-arrow'/> 
                    : 
                <RiArrowRightSFill className='accordion-arrow'/>
                }
            </div>
        </div>
        {accordion === id && <div className='accordion-info'>
            <div>
                <span className='accordion-info-span'>Uso: </span>
                <p className='accordion-info-description'>
                    {description}
                    <a className='cookie-link' href={linkDescription} target="_blank" rel="noopener noreferrer"> Leer más.</a>
                </p>
            </div>
            <div className="moreinfo-cookie">
                <span className='moreinfo-cookie-span'>Compartir datos:</span>
                <p>{moreInfo}</p>
                <a 
                    className='moreinfo-link' 
                    href={linkMoreInfo} target="_blank" rel="noopener noreferrer"
                >
                    politica de privacidad de {title}.
                </a>
            </div>
        </div>}
    </div>
  )
}

export default Accordion