import React from "react";
import css from "./Button.module.css";
import cn from "classnames";

function Button({ text, onClick, size }) {
  return (
    <button
      onClick={onClick}
      className={cn(css.base, css[size])}
      data-testid="button"
    >
      {text}
    </button>
  );
}

export default Button;
