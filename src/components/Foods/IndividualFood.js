import { useContext, useRef } from "react";
import CartContext from "../store/cart-context";
import Button from "../UI/Button";
import Input from "../UI/Input";
import "./IndividualFood.css";

const IndividualFood = (props) => {
  const id = "food-quantity-" + props.foodItem.id;
  const CartCtx = useContext(CartContext);

  const InputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +InputRef.current.value;

    if (enteredAmount === 0 || enteredAmount < 1 || enteredAmount > 5) {
      return;
    }

    CartCtx.addItem({
      id: props.foodItem.id,
      name: props.foodItem.name,
      price: props.foodItem.price,
      description: props.foodItem.description,
      amount: enteredAmount,
    });
  };

  return (
    <li className="individual-food">
      <div>
        <p className="food-name">{props.foodItem.name}</p>
        <p className="food-description">{props.foodItem.description}</p>
        <p className="food-price">$ {props.foodItem.price}</p>
      </div>
      <form className="food-form" onSubmit={submitHandler}>
        <Input
          id={id}
          ref={InputRef}
          label="Amount"
          type="number"
          min="1"
          max="5"
          default="1"
          step="1"
          className="amount-field"
        />
        <Button className="add-button" title="+ Add" />
      </form>
    </li>
  );
};

export default IndividualFood;
