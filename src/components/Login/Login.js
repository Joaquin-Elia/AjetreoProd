import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { CartContext } from '../../context/CartContext';
import { FormAlert } from '../FormAlert/FormAlert';

export const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { login } = useAuth();
  const value = useContext(CartContext);
  const [cart] = value.cart;  
  const navigate = useNavigate();
  const [ error, setError ] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await login(user.email, user.password);
      cart.length === 0 ? navigate('/profile') : navigate('/cart');
    }catch (error) {
      if(error.code === 'auth/user-not-found')
        setError('Error: El usuario no existe')

      else if(error.code === 'auth/wrong-password')
        setError('Error: La contraseña es incorrecta')

      else if(error.code === 'auth/user-disabled')
        setError('Error: esta cuenta fue inhabilitada. Intente ingresar con otra cuenta o envie un correo a ajetreocontacto.prod@gmail.com')

      else if(error.code === 'auth/invalid-email')
        setError('Error: Correo invalido o no especificado')

      else if(error.code === 'auth/internal-error')
        setError('Error: Verifique haber escrito correctamente su correo y contraseña')

      else if(error.code === 'auth/too-many-requests')
        setError('Error: El acceso a esta cuenta fue temporalmente inhabilitado debido a muchos intentos fallidos para inciar sesion. Podes habilitarla cambiando la contraseña o podes intentarlo de nuevo mas tarde.')

      else
        setError(error.message)
      }
  }

  return (
    <div className='login-bg'>
      {error && <FormAlert message={error}/> }
      <form 
        onSubmit={handleSubmit} 
        className='form-container'
      >  
        <div className='backdrop-form'>
          <h3
            className='title-form-h3'
          >
            Bienvenido de nuevo!
          </h3>
          <h5 
            className='title-form-h5'
          >
            Inicia sesión para continuar
          </h5>
        </div>
        
        <div className="container-inputs">        
          <label hetmlfor='email'>Correo electronico</label>
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

        <div className="container-btn-submit">
            <button className='btn-submit'>Ingresar</button>
          </div>
          <Link 
            to='/reset-password'
            className='forget-password'
          >
            ¿Olvidaste tu contraseña?
          </Link>
        <div className='question-form'>
            <p>¿No tenes una cuenta?</p>
            <Link to='/register'>Registrate</Link>
        </div>
      </form>
    </div>
  )
}
