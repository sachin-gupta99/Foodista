import React, { Fragment, useEffect, useState } from "react";
import IndividualOrder from "./IndividualOrder";
import Modal from "../UI/Modal";
import Button from "../UI/Button";

import "./Order.css";
import { ORDERS_ENDPOINT } from "../../endpoints";

const Order = (props) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchOrders = async () => {
      const response = await fetch(ORDERS_ENDPOINT);
      const data = await response.json();

      const Orders = [];

      for (const order in data) {
        Orders.push({
          id: order,
          name: data[order].name,
          street: data[order].Street,
          code: data[order].Postal_Code,
          city: data[order].city,
          date: data[order].date,
          orders: data[order].orders,
          totalAmount: data[order].totalAmount,
        });
      }
      setIsLoading(false);
      setOrders(Orders);
    };

    fetchOrders().catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <Modal onClick={props.onCancel} className="order">
      {isLoading && <p className="loading">Loading...</p>}
      <ol className="order-list">
        {orders.map((orderItem) => {
          return (
            <Fragment>
              <IndividualOrder key={orderItem.id} item={orderItem} />
              <hr className="hr" />
              <hr className="hr" />
            </Fragment>
          );
        })}
      </ol>
      <div className="action-buttons">
        <Button
          title="Close"
          className="close-button"
          onClick={props.onCancel}
        ></Button>
      </div>
    </Modal>
  );
};

export default Order;
