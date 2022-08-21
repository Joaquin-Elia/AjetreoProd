import React from 'react'
import { useAuth } from '../../context/AuthContext'
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

export const UserProfile = () => {
    const {user, logout, loading} = useAuth();

    const handleLogout = async () => {
        try {
            await logout();    
        } catch (error) {
            console.log(error);
        }
    }

    if(loading) return <LoadingAnimation />

    return (
        <div style={{marginTop: '200px'}}>
            <h2>Bienvenido {user.email}</h2>
            <button onClick={handleLogout}>Salir</button>
        </div>
    )
}
