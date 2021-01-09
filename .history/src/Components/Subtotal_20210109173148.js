import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getTotal } from './Reducer';
function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    
    return (
       
        <div className="subtotal">
            <CurrencyFormat
            
            renderText={(value)=>(
                <>
                <p>
                    Subtotal ({basket.length} items): <strong>{`$ ${value.getTotal(basket)}`}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/>
                    This order contains a gift.
                </small>
                </>
            )}

            decimalScale={2}
            value={getTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}   
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
