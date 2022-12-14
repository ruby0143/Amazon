import React from "react";
import "./product.css";
import { UseStateValue } from "../reactApi/StateProvider";

function product({ id, title, image, price, rating }) {
  const [{ basket, user }, dispatch] = UseStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    if (!user) {
      alert("Please login first");
    } else {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    }
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      
      <img src={image} alt="" />


      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default product;
