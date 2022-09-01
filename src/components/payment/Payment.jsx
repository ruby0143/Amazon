import React,{useState,useEffect} from "react";
import "./payment.css";
import { UseStateValue } from "../reactApi/StateProvider";
import { getBasketTotal } from "../reactApi/reducer";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { db } from "../../firebase";
import Axios from 'axios';

function Payment() {
  const [{ basket, user }, dispatch] = UseStateValue();
    const history = useHistory();

    

    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
            event.preventDefault();
            db
                .collection('users')
                .doc(user)
                .collection('orders')
                .doc()
                .set({
                    basket : basket,
                    amount : getBasketTotal(basket)
                });

            dispatch({
                type : "EMPTY_BASKET"
            });
        console.log("Successfully added to the db");
        history.push("/");
    };

    

    

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h3>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h3>


                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h4>Delivery Address</h4>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h4>Review items and delivery</h4>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
            

                
                <div className='payment__section'>
                    <div className="payment__title">
                        <h4>Payment Method</h4>
                    </div>
                    <div className="payment__details">
                            

                            <form onSubmit={handleSubmit}>
                                <CardElement />

                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button >
                                        <span>{"Buy Now"}</span>
                                    </button>
                                </div>

                                 
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
