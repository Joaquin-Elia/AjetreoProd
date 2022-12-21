import React, { useContext, useState} from 'react';
import ReactDOM  from 'react-dom';
import { CartContext } from '../../context/CartContext';
import SuccessfulPurchase from '../SuccessfulPurchase/SuccessfulPurchase';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const PaypalCheckout = ({generateOrder}) => {
    const value = useContext(CartContext);
    const [total] = value.total;
    const [purchaseInfo, setPurchaseInfo] = useState(false);

    const createOrder = (data, actions) => {
        return actions.order.create({
          purchase_units: [
                {
                    amount: {
                        currency_code: 'USD',
                        value: total,
                    }
                },
            ],
        });
    }

    const onApprove = (data, actions) => {
        return actions.order.capture()
        .then(() => {
            generateOrder();
            setPurchaseInfo(!purchaseInfo);
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
        {!purchaseInfo &&
            <PayPalButton 
                createOrder={(data, actions) => createOrder(data, actions)}
                onApprove={(data, actions) => onApprove(data, actions)}
                onCancel={(data, actions) => onCancel(data, actions)}
                onError={(error)=> onError(error)}
            />
        }
        {purchaseInfo &&
            <SuccessfulPurchase />
        }
    </div>
  )
}

export default PaypalCheckout