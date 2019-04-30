import React from "react";

const Button = (props) => {

  const { type } = props
  const { title } = props
  const { style } = props
  const { onClick } = props

  return (
    <button
      style={style}
      className={type}
      onClick={onClick}>
      {title}
    </button>
  );
};

export default Button
