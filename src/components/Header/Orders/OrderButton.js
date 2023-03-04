import React from "react";
import Button from "../../UI/Button";
import OrderIcon from "./OrderIcon";

import "./OrderButton.css";

const OrderButton = (props) => {
  return (
    <Button className="orders" onClick={props.onClick}>
      <OrderIcon />
      <span className="order-text">Orders</span>
    </Button>
  );
};

export default OrderButton;
