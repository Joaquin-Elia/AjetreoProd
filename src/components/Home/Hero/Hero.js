import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Modal from '../../Modal/Modal';
import ModalSubscribe from './ModalSubscribe/ModalSubscribe';
import image1 from '../../../imgs/fuckItImg.webp'
import image2 from '../../../imgs/movesImg.webp'
import image3 from '../../../imgs/KendrickImg.jpg'
import image4 from '../../../imgs/ysyaImg.webp'
import './Hero.css'
// import { useBeats } from '../../../hooks/useBeats';

export default function Hero() {
  const [modalState, setModalState] = useState(false);
  // const [dataBeats, loading] = useBeats();

  // const [beatsImg, setBeatsImgs] = useState(dataBeats);
  // const heroImgs = dataBeats.filter(({showInHero}) => {
  //   return showInHero === true;
  // })

  const title = {
    hidden: { y: 28, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }
  const title2 = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  }
  const basicAnimation = {
    hidden: {opacity: 0 },
    visible: {opacity: 1 },
  }

  return (
    <div className="container-hero">
      <div className='container-hero_bg'>
        <div>
          <div className='container-hero_title'>
            <h1 className='container-hero_title_h1'>
              <div className="bg-blurs3"></div>
              <motion.span
                variants={title}
                animate='visible'
                initial='hidden'
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Lleva tu
              </motion.span>
              <motion.span
                variants={title2}
                animate='visible'
                initial='hidden'
                transition={{ delay: 1.3, duration: 0.6 }}
                > 
                <strong>musica </strong> 
                  a lo 
              </motion.span>
              <motion.span
                variants={title}
                animate='visible'
                initial='hidden'
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                mas 
                <strong> alto</strong>
              </motion.span>
            </h1>
            <motion.p
              className='container-hero_title_p'
              variants={basicAnimation}
              initial='hidden'
              animate='visible'
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              Necesitas una buena producción para tu proxima canción? Con nosotros ...</motion.p>
          </div>
          <div className="bg-blurs4"></div>
          <div className="bg-blurs4"></div>
          <motion.div
            className='container-hero_btns'
            variants={basicAnimation}
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.6, delay: 1.9 }}
          >
            <button
              onClick={() => setModalState(!modalState)}
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

        <div className='container-hero_featured'>
          <div className="container-images">
            <div className="bg-blurs"></div>
            <div className="bg-blurs2"></div>
            <motion.img
              src={image1}
              loading='lazy'
              className='image-hero1'
              alt='beat'
              initial={{ y: -120, x: -75, opacity: 0, scale: 0}}
              animate={{ y: 0, x: 0, opacity: 1, scale: 1}}
              transition={{ duration: .9, delay: 1.8 }}
            />
            <motion.img
              src={image2}
              loading='lazy'
              className='image-hero2'
              initial={{ y: -120, x: 75, opacity: 0, scale: 0}}
              animate={{ y: 0, x: 0, opacity: 1, scale: 1}}
              transition={{ duration: .9, delay: 1.9 }}
            />
            <motion.img
              src={image3}
              alt='YSYA Type beat'
              loading='lazy'
              className='image-hero3'
              initial={{ y: 120, x: -75, opacity: 0, scale: 0}}
              animate={{ y: 0, x: 0, opacity: 1, scale: 1}}
              transition={{ duration: .9, delay: 2 }}
            />
            <motion.img
              src={image4}
              alt='YSYA Type beat'
              loading='lazy'
              className='image-hero4'
              initial={{ y: 120, x: 75, opacity: 0, scale: 0}}
              animate={{ y: 0, x: 0, opacity: 1, scale: 1}}
              transition={{ duration: .9, delay: 2.05 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


