import React, { useState } from 'react';
import './FormSubscribe.css';

const FormSubscribe = () => {
    const [userEmail, setUserEmail] = useState('');
    const [focused, setFocused] = useState(false);
    const [show, setShow] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setShow(!show);
    }
    const handleChange = e => {
        setUserEmail({...userEmail, [e.target.name]: e.target.value})
    }
    const handleFocus = () =>{
        setFocused(true)
    }
    
    return (
        <div className='form_container'>
            {show ? 
                <div className='form_container_send'>
                    <h3 className='form_container_send_h3'>✔</h3>
                    <span className='form_container_send_span'>Correo enviado correctamente</span>
                </div> 
            :  
                <form onSubmit={handleSubmit}>
                    <h3 className='form_container_title'>Suscribirse</h3>
                    <input 
                        name='email'
                        type="email" 
                        placeholder='Correo Electronico'
                        onChange={handleChange}
                        onBlur={handleFocus}
                        focused={focused.toString()}
                        className='form_container_input'
                        pattern='^[^@]+@[^@]+\.[a-zA-Z]{2,}$'
                        required
                    />
                    <span className='form_container_error'>El correo no es valido</span>
                    <button 
                        type='submit'
                        className='form_container_submit'
                    >
                        Enviar
                    </button>
                </form>
            }
        </div>
  )
}

export default FormSubscribe