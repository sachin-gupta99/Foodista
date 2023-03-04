import "./NavBar.css";

import mealsImage from "../../assets/meals.jpg";
import { Fragment } from "react";
import CartButton from "./Cart/CartButton";
import OrderButton from "./Orders/OrderButton";

const NavBar = (props) => {
  return (
    <Fragment>
      <div className="header">
        <div>
          <h2>Foodista</h2>
        </div>
        <div className="cart-orders">
          <OrderButton onClick={props.onOrderClick} />
          <CartButton onClick={props.onCartClick} />
        </div>
      </div>
      <div className="meal-image">
        <img src={mealsImage} alt="meals" />
      </div>
    </Fragment>
  );
};

export default NavBar;
