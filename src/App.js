import React, { useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import AllService from './components/AllServices/AllServiceContainer';
import Cart from './components/Cart/Cart'
import CartProvider from './context/CartContext';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { AuthProvider } from './context/AuthContext';
import { UserProfile } from './components/UserProfile/UserProfile';
import { ProtectedRoutes } from './components/ProtectedRoute/ProtectedRoute';
import { PlayerState } from './context/PlayerState';
import { ResetPassword } from './components/ResetPassword/ResetPassword';
import BtnWhatsApp from './components/BtnWhatsApp/BtnWhatsApp';
import Cookies from './components/Cookies/Cookies';
import { CookiesPolicy } from './components/CookiesPolicy/CookiesPolicy';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Footer from './components/Footer/Footer';
import { BeatDetailContainer } from './components/BeatDetail/BeatDetailContainer';
import { AllBeatsContainer } from './components/BeatStore/AllBeatsContainer';
import { MouseEffect } from './components/MouseEffect/MouseEffect';
import CursorProvider from './context/CursorContext';
import './App.css';

function App() {

  useEffect(() => {
    const onLoad = () => {
      window.scrollTo({top: 0})
    }

    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
    }
  }, []);

  return (
    <AuthProvider>
      <CursorProvider>
        <PlayerState>
          <CartProvider>
            <div className="App">
              <MouseEffect />
              <BrowserRouter>
                <Cookies />
                <NavBar />
                <BtnWhatsApp />
                <ScrollToTop />
                <Routes>
                  <Route exact path='/' element={<Home/> }/>
                  <Route exact path='/service' element={<AllService/> }/>
                  <Route exact path='/beatstore' element={<AllBeatsContainer /> }/>
                  <Route exact path='/detail/:id' element={<BeatDetailContainer /> }/>
                  <Route exact path='/cart' element={<Cart />}/>
                  <Route exact path='/login' element={<Login />}/>
                  <Route exact path='/register' element={<Register />}/>
                  <Route exact path='/reset-password' element={<ResetPassword />}/>
                  <Route exact path='/politica-de-cookies' element={<CookiesPolicy />}/>
                  <Route exact path='/profile' element={
                    <ProtectedRoutes>
                      <UserProfile />
                    </ProtectedRoutes> 
                  }/>
                </Routes>
              <Footer />
              </BrowserRouter>
            </div>
          </CartProvider>
        </PlayerState>

      </CursorProvider>
    </AuthProvider>
  );
}

export default App;
