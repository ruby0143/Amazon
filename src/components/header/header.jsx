import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { UseStateValue } from "../reactApi/StateProvider";
import { auth } from "../../firebase";

function header() {
  const [{ basket, user }, dispatch] = UseStateValue();

  const hanldeLogin = () => {
    if (user) {
      dispatch({
        type: "EMPTY_BASKET",
      });
      auth.signOut();
    }
  };
  return (
    
    <nav className="navbar sticky-top header navbar-dark bg-dark">
      <div className="container-fluid">
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="logo">
            <img
              className="header__logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
          </div>
        </Link>
        <div class="header__search search_nav">
          <input class="header__searchInput" type="text" />
          <div class="header__searchIcon">🔎</div>
        </div>
        <Link style={{ textDecoration: "none" }} to="/checkout">
          <div className="header__optionBasket">
            <div className="header__optionBasket">
              🧺
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
            {/* <ShoppingBasketIcon /> */}
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item m4">
              <span className="header__optionLineTwo white">Hello {user} </span>
              <Link
                style={{ textDecoration: "none" }}
                to={user ? "/" : "/login"}
              >
                <div className="header__option" onClick={hanldeLogin}>
                  <span className="header__optionLineTwo">
                    {!user ? "Sign In" : "Sign Out"}
                  </span>
                </div>
              </Link>
            </li>
            
            <li class="nav-item m4">
              <Link style={{ textDecoration: "none" }} to={"/orders"}>
                <div className="header__option">
                  <span className="header__optionLineTwo">
                    Returns & Orders
                  </span>
                </div>
              </Link>
            </li>
            <li class="nav-item m4">
              <div className="header__option prime">
                <span className="header__optionLineTwo">Your Prime</span>
              </div>
            </li>
            <li className="nav-item m4">
              <div class="header__search toggler">
                <input class="header__searchInput " type="text" />
                <div class="header__searchIcon">🔎</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default header;
