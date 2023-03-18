import React, { useState, useRef, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import MenuItems from './MenuItems';
import { CgMenuGridO, CgClose } from 'react-icons/cg';
import CartIcon from './CartIcon';
import Logo  from '../../imgs/logoHeader.webp';
import { UseClickOutside } from '../../hooks/useClickOutside';
import { CursorContext } from '../../context/CursorContext';
import './NavBar.css';

const NavBar = () => {
    const {setCursorType} = useContext(CursorContext)
    const [menuClick, setMenuClick] = useState(false);
    const handleClick = () => setMenuClick(!menuClick);
    const [changeNavbar, setChangeNavbar] = useState(false)
    const ref = useRef(null);
    UseClickOutside(ref, () => setMenuClick(false));

    const changeNavbarBg = () =>{
        if(window.scrollY >= 50){
            setChangeNavbar(true)
        }else{
            setChangeNavbar(false)
        }
    }
    window.addEventListener('scroll', changeNavbarBg)

  return (
    <>
        <nav 
            ref={ref}
            className={changeNavbar 
                ? 
            'navbar-container navbar-container-active' 
                : 
            'navbar-container'
            }
        >
            <Link 
                to='/'
                className='logo-link'
                onClick={()=> setMenuClick(false)}
            >
                <img 
                    src={Logo}
                    alt='Logo ajetreo'
                    className='navbar-logo'
                />  
            </Link>
            <div 
                className='menu-icon' 
                onClick={handleClick}
            >
                {menuClick ? <CgClose /> : <CgMenuGridO />}
            </div>

            <div className='container-links' 
                onMouseEnter={()=>setCursorType('cursor-hover')}
                onMouseLeave={() =>setCursorType('default')}
            >
                <ul className={menuClick ? 'nav-menu menu-active' : 'nav-menu'}>
                    {MenuItems.map(({id, title, cName, url, src})=> 
                        url ? 
                        <li key={id}>
                            <NavLink 
                                className={cName}
                                to={url}
                                onClick={()=> setMenuClick(false)}
                            >
                                {title}
                            </NavLink>
                        </li> :
                        
                        <li key={id}>
                            <a
                                className={cName}
                                href={src}
                                onClick={()=> setMenuClick(false)}
                            >
                                {title}
                            </a>
                        </li>
                )}
                </ul>
                <div className='cart-container'>
                    {/* <Link to='/register' className=''>Regístrate</Link> */}
                    <div onClick={()=> setMenuClick(false)}> 
                        <CartIcon />
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar