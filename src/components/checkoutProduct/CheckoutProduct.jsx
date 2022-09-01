import React from 'react';
import './cp.css'
import { UseStateValue } from "../reactApi/StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = UseStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct row'>
            <div className='col-lg-4'>

            <img className='checkoutProduct__image' src={image} />
            </div>

            <div className='col-lg-8'>

            <div className='checkoutProduct__info col-sm-8'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                {!hideButton && (
                    <button class="checkoutProduct__button" onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
            </div>
        </div>
    )
}

export default CheckoutProduct