import React, {useState} from 'react'
import { useAuth } from '../../context/AuthContext'
import { FormAlert } from '../FormAlert/FormAlert';

export const ResetPassword = () => {
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
        <>
        {error && <FormAlert message={error}/> }
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Correo</label>
            <input 
                name='email'
                type='email'
                placeholder='Ingrese su correo'
                onChange={e => setEmail(e.target.value)}
                />
            <button 
                type='submit'
            >
                Recuperar
            </button>
        </form>
        </>
    </>
  )
}
