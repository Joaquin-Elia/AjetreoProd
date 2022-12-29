import React, {useState} from 'react'
import { useAuth } from '../../context/AuthContext'
import { FormAlert } from '../FormAlert/FormAlert';
import {BsArrowLeftCircleFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const ResetPassword = ({setShowReset, showReset}) => {
    const {resetPassword} = useAuth();
    const [email, setEmail] = useState('')
    const [ error, setError ] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        setError('')
        try {
            await resetPassword(email);
            setError('Te enviamos un correo con un link para que puedas recuperar tu contraseña(recuerda revisar en spam en caso de no encontrar el correo)')
        }catch (error) {
            if(error.code === 'auth/user-not-found')
            setError('Error: El correo no esta registrado')

          else if(error.code === 'auth/invalid-email')
            setError('Error: Correo invalido')
    
          else if(error.code === 'auth/missing-email')
            setError('Error: Ingrese su correo')
    
          else if(error.code === 'auth/internal-error')
            setError('Error: Verifique haber escrito correctamente su correo')
    
          else
            setError(error.message)
        }
      }

  return (
    <>
        <div className='reset-bg'>
        <form className='form-container' onSubmit={handleSubmit}>
          <div className='backdrop-form'>
            <h3
              className='title-form-h3-reset'
            >
              ¡Olvidaste tu contraseña?
            </h3>
            <h5 
              className='title-form-h5'
            >
              Ingresá tu correo para recuperarla
            </h5>
          </div>
        <div className="container-input-reset">
        <div className="btn-back">
          <Link to='/login'>
            <BsArrowLeftCircleFill className='icon-back' />
          </Link>
        </div>
        {error && <FormAlert message={error}/> }
          <label htmlFor="email">Correo</label>
          <input 
            className='inputs-form'
            name='email'
            type='email'
            placeholder='Ingrese su correo'
            onChange={e => setEmail(e.target.value)}
          />
        </div>
          <div className="container-btn-submit">
            <button 
                className='btn-submit'
                type='submit'
            >
                Recuperar
            </button>
          </div>
        </form>
        </div>
    </>
  )
}
