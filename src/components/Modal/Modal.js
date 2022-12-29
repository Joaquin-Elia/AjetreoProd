import React, { useRef } from 'react';
import {CgClose} from 'react-icons/cg';
import { UseClickOutside } from '../../hooks/useClickOutside';
import { motion } from 'framer-motion'; 
import './Modal.css'

const Modal = ({children, state, changeState, title, showHeader}) => {
  const ref = useRef(null);
  UseClickOutside(ref, ()=> changeState(false));

  return (
    <>
        {state &&
          <motion.div       
            className='overlay-modal'
            animate={{y: 0, opacity: 1}}
            initial={{y: 150, opacity: 0}}
            transition={{duration: 0.25}}       
          >
            <div ref={ref} className='container-modal'>
              {showHeader &&
                <div className='header-modal'>
                  <h4 className='modal-title'>{title}</h4>
                </div>
              }
              <button 
                className='close-modal'
                onClick={()=> changeState(false)}
              >
                <CgClose />
              </button>
              {children}
            </div>
          </motion.div>
        }
    </>
  )
}

export default Modal