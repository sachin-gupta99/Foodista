import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartValue = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, actions) => {
  if (actions.type === "ADD") {
    let updatedItems;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === actions.item.id
    );

    if (existingCartItemIndex !== -1) {
      const existingItem = state.items[existingCartItemIndex];

      let updatedItem;
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + actions.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(actions.item);
    }

    const updatedTotalAmount =
      state.totalAmount + actions.item.price * actions.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (actions.type === "INCREASE") {
    let updatedItems;
    const reqdIndex = state.items.findIndex(
      (item) => item.id === actions.item.id
    );
    const reqdItem = state.items[reqdIndex];

    let updatedItem = {
      ...reqdItem,
      amount: reqdItem.amount + 1,
    };

    updatedItems = [...state.items];
    updatedItems[reqdIndex] = updatedItem;

    const updatedTotalAmount = state.totalAmount + actions.item.price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (actions.type === "DECREASE") {
    let updatedItems;
    const reqdIndex = state.items.findIndex(
      (item) => item.id === actions.item.id
    );
    const reqdItem = state.items[reqdIndex];

    if (reqdItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== actions.item.id);
      return {
        items: updatedItems,
        totalAmount: state.totalAmount - reqdItem.price,
      };
    }
    let updatedItem;
    updatedItem = {
      ...reqdItem,
      amount: reqdItem.amount - 1,
    };

    updatedItems = [...state.items];
    updatedItems[reqdIndex] = updatedItem;

    return {
      items: updatedItems,
      totalAmount: state.totalAmount - reqdItem.price,
    };
  } else if(actions.type === "RESET") {
    return defaultCartValue;
  }

  return defaultCartValue;
};

const CartProvider = (props) => {
  const [cartState, cartDispatcher] = useReducer(CartReducer, defaultCartValue);

  const increaseItem = (item) => {
    cartDispatcher({ type: "INCREASE", item: item });
  };

  const decreaseItem = (item) => {
    cartDispatcher({ type: "DECREASE", item: item });
  };

  const addItemToCart = (item) => {
    cartDispatcher({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id) => {
    cartDispatcher({ type: "REMOVE", id: id });
  };

  const resetCart = () => {
    cartDispatcher({ type: "RESET" });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    increaseItem: increaseItem,
    decreaseItem: decreaseItem,
    resetCart: resetCart
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
