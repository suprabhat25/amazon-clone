import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
function Checkout () {
    const [{basket}] = useStateValue()    
    return (
            <div className='checkout'>
                <img src="" alt="" className="checkout__ad"/>
            
            {basket?.length === 0 ?(
             <div>
               <h2>Your Shopping Basket is empty.</h2>
               <p>
                   You have no items in your basket.Click "Add to Basket" 
                   next to the item.
               </p>
            </div>
            ):(
              <div>
                  <h2 className="checkout__title">Your Shopping Basket Description :</h2>
              </div>
            )}
            
            </div>
        )
}

export default Checkout
