import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useOrders } from '../../hooks/useOrders';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

export const UserProfile = () => {
    const {user, logout, loading} = useAuth();
    const [dataOrders, loadingOrders] = useOrders();

    const userOrders = dataOrders.filter(({buyer}) => {
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
        <div style={{marginTop: '12.5rem'}}>
            {user.email === 'joaquin.elia@hotmail.com' ? 
                <h2>Bienvenido: Admin de ajetreo</h2>
                : <h2>Bienvenido {user.email}</h2>
            }
            <button onClick={handleLogout}>Salir</button>
            {dataOrders && <> {
                loadingOrders ? <LoadingAnimation /> : 
                    <>{userOrders.map(({id, total, buyer})=>{
                        return (
                            (user.email === 'joaquin.elia@hotmail.com') ?
                                <div key={id}>
                                    <h3>Email del comprador: {buyer}</h3>
                                    <h3>El numero de orden es: {id}</h3>
                                    <h3>El total de la compra es de: USD {total}</h3>
                                </div>
                                :
                                <div key={id}>
                                    <h3>Tu numero de orden es: {id}</h3>
                                    <h3>El total de tu compra es de: USD {total}</h3>
                                </div>
                                )
                        }
                    )}</>
                }</>}
                
        </div>
    )
}
