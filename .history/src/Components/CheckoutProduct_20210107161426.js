import React from 'react'
import StarIcon from '@material-ui/icons/Star'
import './CheckoutProduct.css'
function CheckoutProduct({id,title,image,price,rating}) {
    return (
       <div className="checkoutProduct">
           <img src={image} alt=""/>
           <div className="checkoutProduct__info">
               <p className="checkoutProduct__title">{title}</p>
             <p className="checkoutProduct__price">
                 <small>$</small>
                 <strong>{price}</strong>
             </p>
             <p className="checkoutProduct__rating">
             {Array(rating)
            .fill()
            .map((_)=>(
                <StarIcon/>
            ))}
             </p>
           </div>
       </div>
    )
}

export default CheckoutProduct
