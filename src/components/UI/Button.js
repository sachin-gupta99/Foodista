import "./Button.css";

const Button = (props) => {
  const classes = props.className;
  return (
    <button
      type={props.type || "submit"}
      onClick={props.onClick}
      className={classes}
      disabled={props.disabled}
    >
      {props.children || props.title}
    </button>
  );
};

export default Button;
