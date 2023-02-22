import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useOrders } from '../../hooks/useOrders';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import {useSEO} from '../../hooks/useSEO';
import './UserProfile.css'

export const UserProfile = () => {
    const {user, logout, loading} = useAuth();
    const [dataOrders, loadingOrders] = useOrders();
    const admin = 'joaquin.elia@hotmail.com'
    useSEO({title: 'Perfil de el usuario'})

    const userOrders = dataOrders.filter(({buyer}) => {
        if(user.email === admin){
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
            {user.email === admin
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
                    <>{userOrders.map(({id, total, buyer, items})=>{
                        return (
                            (user.email === admin) ? 
                                <div key={id} className='profile-orders'>
                                    <ol className='list-orders'>
                                        <li className='list-orders-items'><strong>Email del comprador:</strong> {buyer}</li>
                                        <li className='list-orders-items'><strong>El numero de orden es:</strong> {id}</li>
                                        <li className='list-orders-items'><strong>Nombre del Producto: </strong> {items[0].titleProduct}.</li>
                                        <li className='list-orders-items'><strong>ID del Producto: </strong> {items[0].titleProduct}.</li>
                                        <li className='list-orders-items'><strong>Sub total: </strong>$USD {items[0].priceProduct}.</li>
                                        <li className='list-orders-items'><strong>El total de la compra es de:</strong> USD {total}.</li>
                                    </ol>
                                </div>
                                :
                                <div key={id} className='profile-orders'>
                                    <ol className='list-orders'>
                                        <li className='list-orders-items'><strong>Tu numero de orden es: </strong> {id} </li>
                                        <li className='list-orders-items'><strong>Nombre del Producto: </strong> {items[0].titleProduct}.</li>
                                        <li className='list-orders-items'><strong>Identificador del Producto: </strong> {items[0].titleProduct}.</li>
                                        <li className='list-orders-items'><strong>Sub total: </strong>$USD {items[0].priceProduct}.</li>
                                        <li className='list-orders-items'><strong>El total de tu compra es de: </strong>$USD {total}.</li>
                                    </ol>
                                </div>
                                )
                        }
                    )}</>
                }</>}
                
        </div>
    )
}
