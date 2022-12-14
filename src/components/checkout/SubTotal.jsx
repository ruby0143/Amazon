import React from "react";
import "./subTotal.css";
import CurrencyFormat from "react-currency-format";
import { UseStateValue } from "../reactApi/StateProvider";
import { getBasketTotal } from "../reactApi/reducer";
import { Link, useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket}, dispatch] = UseStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket?.length}): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <Link to={"/payment"}>
        <button className="subButton">Proceed to Checkout</button>
      </Link>
    </div>
  );
}

export default Subtotal;
