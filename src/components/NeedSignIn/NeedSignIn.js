import React from 'react';
import { Link } from 'react-router-dom';
import './NeedSignIn.css'

export const NeedSignIn = () => {
  return (
    <div className='container-login-register'>
        <Link 
            to='/register'
            className='btn-login-register'
        >
            Registrate
        </Link>
        <h3>O si ya tenes una cuenta:</h3>
        <Link 
            to='/login'
            className='btn-login-register'
        >
            Inicia sesión
        </Link>
    </div>
  )
}
