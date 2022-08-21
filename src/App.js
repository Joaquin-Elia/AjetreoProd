import React from 'react';
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
import './App.css';
import { PlayerState } from './context/PlayerState';
import { AllBeats } from './components/BeatStore/AllBeats';

function App() {
  return (
    <AuthProvider>
      <PlayerState>
        <CartProvider>
          <div className="App">
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route exact path='/' element={ <Home/> }/>
                <Route exact path='/service' element={ <AllService/> }/>
                <Route exact path='/beatstore' element={ <AllBeats /> }/>
                <Route exact path='/cart' element={ <Cart />}/>
                <Route exact path='/login' element={<Login />}/>
                <Route exact path='/register' element={<Register />}/>
                <Route exact path='/profile' element={
                  <ProtectedRoutes>
                    <UserProfile />
                  </ProtectedRoutes> 
                }/>
              </Routes>
            </BrowserRouter>
          </div>
        </CartProvider>
      </PlayerState>
    </AuthProvider>
  );
}

export default App;
