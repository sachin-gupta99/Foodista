import { Fragment, useContext, useState } from "react";
import CartContext from "../store/cart-context";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import "./Cart.css";
import Checkout from "./Checkout";
import IndividualCartItem from "./IndividualCartItem";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const CartCtx = useContext(CartContext);

  const CheckoutHandler = () => {
    if (CartCtx.items.length === 0) return;
    setIsCheckout(true);
  };

  return (
    <Modal onClick={props.onCancel} className="cart">
      <ul className="cart-items">
        {CartCtx.items.map((cartItem) => {
          return (
            <Fragment>
              <IndividualCartItem key={cartItem.id} item={cartItem} />
              <hr />
            </Fragment>
          );
        })}
      </ul>
      <div className="total">
        <span className="total-text">Amount</span>
        <span className="total-amount">$ {CartCtx.totalAmount.toFixed(2)}</span>
      </div>
      {!isCheckout && (
        <div className="actions">
          <Button
            title="Close"
            onClick={props.onCancel}
            className="close-button"
          />
          <Button
            title="Order"
            className="order-button"
            onClick={CheckoutHandler}
          />
        </div>
      )}

      {isCheckout && (
        <div className="checkout-content">
          <hr />
          <Checkout onCancel={props.onCancel} onOrder={setIsCheckout} />
        </div>
      )}
    </Modal>
  );
};

export default Cart;
