import { useContext } from "react";
import Button from "../UI/Button";
import "./IndividualCartItem.css";
import CartContext from "../store/cart-context";

const IndividualCartItem = (props) => {
  const CartCtx = useContext(CartContext);

  const increaseItemHandler = () => {
    CartCtx.increaseItem(props.item);
  };

  const decreaseItemHandler = () => {
    CartCtx.decreaseItem(props.item);
  };

  return (
    <li className="individual-item">
      <div className="item-detail">
        <div className="item-name">{props.item.name}</div>
        <div className="item-price">${props.item.price}</div>
        
      </div>
      <div className="increase-decrease">
        <Button
          title="-"
          className="decrease-button"
          onClick={decreaseItemHandler}
        />
        <div className="item-amount">{props.item.amount}</div>
        <Button
          title="+"
          className="increase-button"
          onClick={increaseItemHandler}
        />
      </div>
    </li>
  );
};

export default IndividualCartItem;
