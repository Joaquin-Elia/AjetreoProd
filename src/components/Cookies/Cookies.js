import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cookies.css';

const Cookies = () => {
    const [cookiesAccepted, setCookiesAccepted] = useState(
        window.localStorage.getItem('clickAccept')
    );

    const setLocalStorage = value => {
        try {
            setCookiesAccepted(value);
            window.localStorage.setItem('clickAccept', value);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>  
    {!cookiesAccepted && <>
        <div className='bg-cookies' >
        </div>
        <div className='container-cookies'>
            <h3 className="cookies-title">Este sitio usa cookies</h3>
            <p className="cookies-p">Utilizamos cookies propias y de terceros para mejorar nuestros servicios.</p>
            <div className="cookies-btns">
                <button 
                    onClick={()=> setLocalStorage(true)}
                    className="accept-cookies"
                >
                    Aceptar
                </button>
                <Link 
                    to='/politica-de-cookies'
                    className='cookies-info-link'
                > 
                    Politica de cookies
                </Link>
            </div>
        </div>
    </>
    }
    </>
  )
}

export default Cookies