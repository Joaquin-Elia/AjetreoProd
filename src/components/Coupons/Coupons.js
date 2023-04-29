import React, {useContext, useState} from 'react'
import { CartContext } from '../../context/CartContext';
import './Coupons.css'

const Coupons = () => {
    const [coupon, setCoupon] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const {couponCode, applyCoupon, removeCoupon, 
        couponError, setCouponError
    } = useContext(CartContext);

    const handleSubmit = (e) => {
        setCouponError(null)
        e.preventDefault();
        applyCoupon(coupon);
        setCoupon('');
        setSubmitted(true);
    };

    return (
        <>  
            {submitted && couponCode ? <>
                {
                <div className='coupon-description'>
                    <p>Cupón aplicado: <span className='coupon-code'>{couponCode}</span>.</p>
                    <p>Descuento: %{
                        couponCode === '2023AJETREO10' && 10 ||
                        couponCode === 'DESCUENTARDO' && 20 ||
                        couponCode === 'AJETREOCAMPEONES' && 30 
                    }
                    </p>
                </div>
                }
                <button 
                    className='coupon-delete'
                    onClick={removeCoupon}
                >
                    Eliminar cupón
                </button> 
                </>
                : 
            <form onSubmit={handleSubmit} className="coupon-form">
                <input 
                    className='coupon-input'
                    type="text"
                    value={coupon}
                    onChange={e => setCoupon(e.target.value)}
                    placeholder="Cupon de descuento"
                    required
                />
                <button 
                    className="coupon-send"
                    type='submit'
                >
                    Aplicar cupón 
                </button>
                {couponError && <p className='coupon-error'>{couponError}</p> }
            </form>
            }
        </>
    )
    }

export default Coupons