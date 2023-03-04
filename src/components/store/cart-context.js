import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    increaseItem: (item) => {},
    decreaseItem: (item) => {},
    resetCart: () => {}
});

export default CartContext;