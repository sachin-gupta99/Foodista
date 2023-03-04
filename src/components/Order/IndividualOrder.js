import React from "react";

import "./IndividualOrder.css";

const IndividualOrder = (props) => {
  console.log(props.item);
  return (
    <li className="individual-order">
      <div>
        <p className="order-id">Order ID: {props.item.id}</p>
        <p className="order-date">Order date: {props.item.date}</p>
      </div>

      <hr />

      <ul className="order-items">
        {props.item.orders.map((order) => {
          return (
            <li className="individual-order-item">
              <div className="name-desc">
                <p className="little-bold name-desc__name">{order.name}</p>
                <small className="small-text" style={{ fontStyle: "italic" }}>
                  {order.description}
                </small>
              </div>
              <div className="little-bold price-qty">
                <p className="price-qty__price">$ {order.price}</p>
                <p className="price-qty__qty">Qty: {order.amount}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <hr />

      <div className="little-bold order-total-amount">
        <div>Total Amount: </div>
        <div className="order-total-amount__net">
          $ {props.item.totalAmount}
        </div>
      </div>

      <hr />

      <div className="user-details">
        <div className="user-name">
          <h4 className="detail-heading">Name</h4>
          <p className="little-bold user-name__name">{props.item.name}</p>
        </div>
        <div className="delivery-detail">
          <h4 className="detail-heading">Delivery</h4>
          <small className="small-text">Address: </small>
          <br />
          <span className="little-bold delivery-detail__address">
            {props.item.street}, <br /> {props.item.city} - {props.item.code}
          </span>
        </div>
      </div>
    </li>
  );
};

export default IndividualOrder;
