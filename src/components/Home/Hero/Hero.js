import { useState } from 'react';
import {motion} from 'framer-motion';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import Modal from '../../Modal/Modal';
import ModalSubscribe from './ModalSubscribe/ModalSubscribe';
import './Hero.css'

export default function Hero() {
  const [modalState, setModalState] = useState(false);

  return (
    <div className="container-hero">
      <div className='container-hero_bg'>
      <div>
        <div className='container-hero_title'>
          <h1 className='container-hero_title_h1'>
            <motion.span animate={{y: 0, opacity: 1}} initial={{y: 28, opacity: 0}} transition={{delay: 0.8, duration: 0.6}}>Lleva tu </motion.span> 
            <motion.span animate={{x: 0, opacity: 1}} initial={{x: 100, opacity: 0}} transition={{delay: 1.3, duration: 0.6}}> <strong>musica</strong> a lo </motion.span> 
            <motion.span animate={{y: 0, opacity: 1}} initial={{y: 28, opacity: 0}} transition={{delay: 1.8, duration: 0.6}}>mas <strong>alto</strong></motion.span>
          </h1>
          <motion.p 
            className='container-hero_title_p'
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            transition={{delay: 1.8, duration: 0.6}}
          >
              Necesitas un beat para tu proximo tema? Nosotros nos dedicamos a eso</motion.p>
        </div>
        <motion.div
          className='container-hero_btns'
          animate={{x: 0, opacity: 1}}
          initial={{x: -150, opacity: 0}}
          transition={{duration: 0.6, delay: 1.8}}
        >
          <button 
            onClick={()=> setModalState(!modalState)}
            className='container-hero_btns_btn'
          >
            Prueba gratis!
          </button>
          <button className='container-hero_btns_btn'>
            Conocer mas <HiOutlineArrowNarrowRight className='container-hero_btns_btn_icon' />
          </button>
        </motion.div>
        
        <Modal
          state={modalState} 
          changeState={setModalState}
        >
          <ModalSubscribe />
        </Modal>
      </div>

      <motion.div 
        className='container-hero_featured'
        animate={{y: 0, opacity: 1}}
        initial={{y: 150, opacity: 0}}
        transition={{duration: 1.3, delay: 2.3}}
      >
        <h4 className='container-hero_featured_title'>
          Los estilos en los que mas nos destacamos:
        </h4>
        <h2 className='container-hero_featured_name'> </h2>
      </motion.div>
    </div>
    </div>
  );
}


