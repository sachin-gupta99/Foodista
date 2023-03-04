import React from "react";
import "./Input.css";

const Input = React.forwardRef((props, ref) => {
    const classes = (props.className)? props.className: '';
  return (
    
    <div className="input">
      <label htmlFor={props.id} className={classes === 'error'? "error-label": ''}>{props.label}</label>
      <input
        type={props.type}
        ref={ref}
        id={props.id}
        min={props.min}
        max={props.max}
        step={props.step}
        defaultValue={props.default}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={classes}
      ></input>
    </div>
  );
});

export default Input;
