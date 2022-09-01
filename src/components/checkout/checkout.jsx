import React from "react";
import "./checkout.css";
import Subtotal from "./SubTotal";
import { UseStateValue } from "../reactApi/StateProvider";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";

function Checkout() {
  const [{ basket,user }, dispatch] = UseStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h4 className="m2">Hello {user}</h4>
          <h2 className="checkout__title m2">Your shopping Basket</h2>

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

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;