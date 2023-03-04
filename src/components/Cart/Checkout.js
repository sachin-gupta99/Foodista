import React, { Fragment, useContext, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import CartContext from "../store/cart-context";
import { useFormik } from "formik";
import * as Yup from 'yup';

import "./Checkout.css";

const Checkout = (props) => {
  const CartCtx = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    await fetch(
      "https://react-http-cc704-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          Street: values.street,
          Postal_Code: values.code,
          city: values.city,
          orders: CartCtx.items,
          date: (new Date()).toLocaleDateString("en-US", {month: 'short',year: 'numeric', day: 'numeric' }),
          totalAmount: CartCtx.totalAmount.toFixed(2),
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    CartCtx.resetCart();
    props.onOrder(false);
    setIsSubmitting(false);
  };

  const initialValues = {
    name: "",
    street: "",
    code: "",
    city: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      street: Yup.string().required('Required'),
      code: Yup.number().required('Required'),
      city: Yup.string().required('Required')
    }),
    onSubmit,
  });

  return (
    <Fragment>
      <form className="checkout-form" onSubmit={formik.handleSubmit}>
        <Input
          label="Name"
          id="name"
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={(formik.touched.name && formik.errors.name)? 'error': null}
        />
        {/* {formik.touched.name && formik.errors.name && <div className="error-text">{formik.errors.name}</div>} */}
        <Input
          label="Street"
          id="street"
          type="text"
          name="street"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={(formik.touched.street && formik.errors.street)? 'error': null}
        />
        {/* {formik.touched.street && formik.errors.street && <div className="error-text">{formik.errors.street}</div>} */}
        <Input
          label="Postal Code"
          id="code"
          type="number"
          name="code"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={(formik.touched.code && formik.errors.code)? 'error': null}
        />
        {/* {formik.touched.code && formik.errors.code && <div className="error-text">{formik.errors.code}</div>} */}
        <Input
          label="City"
          id="city"
          type="text"
          name="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={(formik.touched.city && formik.errors.city)? 'error': null}
        />
        {/* {formik.touched.city && formik.errors.city && <div className="error-text">{formik.errors.city}</div>} */}
        <div className="action-buttons">
          <Button
            type="button"
            title="Cancel"
            className="cancel-button"
            onClick={props.onCancel}
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            title="Checkout"
            className="checkout-button"
            disabled={isSubmitting}
          />
        </div>
      </form>
      {isSubmitting && (
        <p className="wait-text">Order is being placed. Please Wait...</p>
      )}
    </Fragment>
  );
};

export default Checkout;
