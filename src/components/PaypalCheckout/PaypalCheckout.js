import React, { useContext, useEffect } from 'react';
import ReactDOM  from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const PaypalCheckout = ({generateOrder}) => {
    const value = useContext(CartContext);
    const [setCart] = value.cart;
    const [total] = value.total;
    const navigate = useNavigate();

    const createOrder = (data, actions) => {
        return actions.order.create({
          purchase_units: [
                {
                    description: 'Compra en Ajetreo Producciones',
                    amount: {
                        currency_code: 'USD',
                        value: total,
                    },
                },
            ],
        });
    }

    const onApprove = (data, actions) => {
        return actions.order.capture()
        .then(() => {
            generateOrder();
            setCart([])
            navigate('/profile')
        })
        .catch(error => {
            console.log(error);
        })
    }

    const onError = error => {
        console.log(error);
    }
    const onCancel = (data, actions) => {
        console.log('Pago no realizado, el usuario cancelo el proceso');
    } 

  return (
    <div>
        <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
            onCancel={(data, actions) => onCancel(data, actions)}
            onError={(error)=> onError(error)}
        />
    </div>
  )
}

export default PaypalCheckout