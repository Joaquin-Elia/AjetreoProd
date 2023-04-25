import {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext';

const Coupons = () => {
    const [coupon, setCoupon] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const {couponCode, removeCoupon, applyCoupon} = useContext(CartContext);;

    const handleSubmit = (e) => {
        e.preventDefault();
        applyCoupon(coupon);
        setCoupon('');
        setSubmitted(true);
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={coupon}
                onChange={e => setCoupon(e.target.value)}
                placeholder="Cupon de descuento"
                required
            />
            <button type='submit'>
                Aplicar cupón 
            </button>
        </form>
        {submitted && couponCode && 
            <div>
                <small>Cupon aplicado: {coupon}</small>
                <button onClick={removeCoupon}
                >Eliminar cupón</button>
            </div>
        }
        </>
    )
    }

export default Coupons