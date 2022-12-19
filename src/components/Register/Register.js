import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';
import { FormAlert } from '../FormAlert/FormAlert';

export const Register = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const {signup} = useAuth();
  const value = useContext(CartContext);
  const [cart] = value.cart;  
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({target: {name, value}}) =>
    setUser({...user, [name]: value})
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signup(user.email, user.password)
      cart.length === 0 ? navigate('/profile') : navigate('/cart');
    } catch (error) {
      if(error.code === 'auth/internal-error' || error.code === 'auth/invalid-email')
        setError('Error: Correo invalido');
      
      else if(error.code === 'auth/email-already-in-use')
        setError('Error: El correo ya esta en uso')
       
      else if(error.code === 'auth/weak-password')
        setError('Error: La contraseña debe tener al menos 6 caracteres')
      
      else setError('Error: Ocurrio un error intentelo de nuevo')
    }
  }

  return (
    <div className='register-bg'>
    {error && <FormAlert message={error} />}
      <form 
        onSubmit={handleSubmit} 
        className='form-container'
      > 
        <div 
          className='backdrop-form'
        >
          <h3 
            className='title-form-h3'
          >
            Crear una cuenta
          </h3>
          <h5 
            className='title-form-h5'
          >
            Registrate para continuar
          </h5>
        </div>
        <div className="container-inputs">
          <label hetmlfor='email'>Correo elecctronico</label>
          <input
            className='inputs-form'
            type='email' 
            name='email'
            placeholder='Ingrese su correo'
            onChange={handleChange}
          />
          <label hetmlfor='password'>Contraseña</label>
          <input
            className='inputs-form' 
            type='password' 
            name='password'
            placeholder='Ingrese su contraseña' 
            id='password'
            onChange={handleChange}
          />
        </div>
        <div className='container-btn-submit'>
          <button className='btn-submit'>Registrarse</button>
        </div>
        <div className='question-form'>
          <p>¿Ya tenes una cuenta?</p>
          <Link to='/login'>Iniciar sesión</Link>
        </div>
      </form>
    </div>
  )
}
