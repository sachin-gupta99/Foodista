import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import Button from "../../UI/Button";
import "./CartButton.css";
import CartCount from "./CartCount";
import CartIcon from "./CartIcon";

let cartCount=0;

const CartButton = (props) => {
  const [addedNewItem, setAddedNewItem] = useState(false);
  const cartCtx = useContext(CartContext);
  
  cartCount = cartCtx.items.reduce((curr, item) => {
    return curr+item.amount;
  }, 0)

  const {items} = cartCtx;
  const le = items.length;

  const btnClasses = `cart-button ${addedNewItem? 'bump': ''}`;

  useEffect(() => {
    if(le === 0) return;
    setAddedNewItem(true);

    const timer = setTimeout(() => {
      setAddedNewItem(false);
    }, 300);
    
    return () => {
      clearTimeout(timer);
    }

  }, [le])

  return (
    <Button className={btnClasses} onClick={props.onClick}>
      <CartIcon />
      <span className="cart-text">Your Cart</span>
      <CartCount count={cartCount} />
    </Button>
  );
};

export default CartButton;
