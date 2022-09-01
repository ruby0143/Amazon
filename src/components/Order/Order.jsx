import React from 'react'
import './Order.css'
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order( order ) {
    console.log("order-->",order);
    return (
        <div className='order'>
            <h2>Order</h2>
            <p className="order__id">
                <small>{order.order.id}</small>
            </p>

            {order.order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />   
        </div>
    )
}

export default Order