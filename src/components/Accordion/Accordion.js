import React, { useState } from 'react';
import {RiArrowDownSFill, RiArrowRightSFill} from 'react-icons/ri';
import './Accordion.css';

export const Accordion = ({accordionData}) => {
    const [accordion, setAccordion] = useState(false);

    const toggleAccordion = (i) => {
        if(i === accordion){
            setAccordion(false);
            return
        }
        setAccordion(i);
    }

    return (
        <>
            {accordionData.map(({id, title, cookieType, description, linkDescription, moreInfo, linkMoreInfo},i) => 
                <div key={id} className='container-accordion'>
                    <div 
                        className='accordion-title'
                        onClick={()=> toggleAccordion(i)}
                    >
                        <h3>{title}</h3>
                        <div className='accordion-cookie-type'>
                            <span>{cookieType}</span>
                            {accordion === i 
                                ?  
                            <RiArrowDownSFill className='accordion-arrow'/> 
                                : 
                            <RiArrowRightSFill className='accordion-arrow'/>
                            }
                            </div>
                    </div>
                    {accordion === i && 
                        <div className='accordion-info'>
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
                        </div>
                    }
                </div>
            )}
        </>
  )
}
