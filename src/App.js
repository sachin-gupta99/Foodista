import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Foods from "./components/Foods/Foods";
import NavBar from "./components/Header/NavBar";
import Order from "./components/Order/Order";
import CartProvider from "./components/store/CartProvider";

const App = () => {
  const [cartShown, setCartShown] = useState(false);
  const [orderShown, setOrderShown] = useState(false);

  const CartHandler = () => {
    setCartShown(!cartShown);
  };

  const OrderHandler = () => {
    setOrderShown(!orderShown);
  };

  return (
    <CartProvider>
      <NavBar onCartClick={CartHandler} onOrderClick={OrderHandler} />
      <main>
        <Foods />
      </main>
      {orderShown && <Order onCancel={OrderHandler} />}
      {cartShown && <Cart onCancel={CartHandler} />}
    </CartProvider>
  );
};

export default App;
