import { Link } from 'react-router-dom';
import LogoFooter from '../../imgs/LogoFooter.png';
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF, FaPhoneAlt } from 'react-icons/fa';
import MenuItems from '../NavBar/MenuItems';
import { FormNewsletter } from '../FormNewsletter/FormNewsletter';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-newsletter">
        <h2 className='footer-newsletter-title'>Queres obtener beats <span className='newsletter-title-span'>GRATIS?</span></h2>
        <FormNewsletter />
      </div>
      <div className='footer-container'>
        <Link to='/'>
          <img className='footer-logo' src={LogoFooter} />
        </Link>
        <div className="footer-columns">
          <h3 className="columns-title">Menu</h3>
          {MenuItems.map(({ id, title, url, src }) =>
            url ?
              <li key={id} className='columns-links'>
                <Link to={url}>{title}</Link>
              </li> :
              <li key={id} className='columns-links'>
                <a href={src}>{title}</a>
              </li>
          )}
        </div>
        <div className="footer-columns">
          <h3 className="columns-title">Información</h3>
          <Link className='columns-links' to='/politica-de-cookies'>Politica de cookies</Link>
          <Link className='columns-links' to='/'>Politica de privacidad</Link>
          <Link className='columns-links' to='/'>Terminos y condiciones</Link>
          <Link className='columns-links' to='/'>Boton de arrepentimiento</Link>
        </div>
        <div className="footer-columns">
          <h3 className="columns-title">Contacto</h3>
          <p className='columns-links'> <AiOutlineMail className='footer-contact-icons' /> contactoajetreo@gmail.com</p>
          <p className='columns-links'> <FaPhoneAlt className='footer-contact-icons' /> +54 11 12-3456 </p>
        </div>
      </div>
      <div className='copyright-social'>
        <div className="social-icons">
          <a href="#"><FaFacebookF /> </a>
          <a href="#"><AiOutlineInstagram /> </a>
          <a href="#"><AiOutlineYoutube /> </a>
        </div>
        <span className='copyright-text'>© 2023 Ajetreo producciones | Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}

export default Footer