import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useOrders } from '../../hooks/useOrders';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import {useSEO} from '../../hooks/useSEO';
import './UserProfile.css'

export const UserProfile = () => {
    const {user, logout, loading} = useAuth();
    const [dataOrders, loadingOrders] = useOrders();
    useSEO({title: 'Perfil de el usuario'})

    const userOrders = dataOrders.filter(({buyer, uid}) => {
        if(user.email === 'joaquin.elia@hotmail.com'){
            return dataOrders;
        } return (user.email === buyer);
      })

    const handleLogout = async () => {
        try {
            await logout();    
        } catch (error) {
            console.log(error);
        }
    }

    if(loading) return <LoadingAnimation />
    return (
        <div className='container-profile'>
            {user.email === 'joaquin.elia@hotmail.com' 
                ? <h1 className='profile-welcome'>Bienvenido: Admin de ajetreo</h1>
                : <h1 className='profile-welcome'>Bienvenido: {user.email}</h1>
            }
            <div className="container-logout">
                <button 
                    onClick={handleLogout}
                    className='profile-logout'
                >
                    Cerrar sesión
                </button>
            </div>
            {userOrders.length > 0 && <h2>Tus pedidos:</h2>}
            
            {dataOrders && <> {
                loadingOrders ? <LoadingAnimation /> : 
                    <>{userOrders.map(({id, total, buyer})=>{
                        return (
                            (user.email === 'joaquin.elia@hotmail.com') ? 
                                <div key={id} className='profile-orders'>
                                    <ol className='list-orders'>
                                        <li className='list-orders-items'><strong>Email del comprador:</strong> {buyer}</li>
                                        <li className='list-orders-items'><strong>El numero de orden es:</strong> {id}</li>
                                        <li className='list-orders-items'><strong>El total de la compra es de:</strong> USD {total}</li>
                                    </ol>
                                </div>
                                :
                                <div key={id} className='profile-orders'>
                                    <ol className='list-orders'>
                                        <li className='list-orders-items'><strong>Tu numero de orden es: </strong> {id} </li>
                                        <li className='list-orders-items'><strong>El total de tu compra es de: </strong> USD {total}</li>
                                    </ol>
                                </div>
                                )
                        }
                    )}</>
                }</>}
                
        </div>
    )
}
