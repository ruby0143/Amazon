import React from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./components/checkout/checkout";
import Login from './components/login/Login';
import { auth } from "./firebase";
import { UseStateValue } from "./components/reactApi/StateProvider";
import { useEffect } from "react";
import Payment from "./components/payment/Payment";
import Protected from "./components/Protected";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./components/Orders/Orders";

function App() {
  const Promise = loadStripe("pk_test_51LJcSTSHJa2XCHKSlRu7wQ6qFfUHGtW8fKLMJHkhuibkHpljcg3ulBMIrXNqj2yBCVk0RstUUAG2yTDWEJnOiqQM00T1VSi9Ri");

  const [{user},dispatch] = UseStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authObj=>{
      if(authObj){
        console.log(authObj);
        dispatch({
          type : "ADD_USER",
          user : authObj.email,
        });
      }
      else{
        dispatch({
          type : "ADD_USER",
          user : null,
        });
      }
    });
  }, []);
  

  return (

    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Protected isLoggedin={user}>
              <Checkout />
            </Protected>
          </Route>

          <Route path="/orders">
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/payment">
            <Protected isLoggedin={user}>
            <Elements stripe={Promise}>

              <Payment />
            </Elements>
            </Protected>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
