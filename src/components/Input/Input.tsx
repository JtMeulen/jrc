import React from "react";
import cn from "classnames";
import "./Input.scss";

export interface InputProps {
}

const Input = ({
}: InputProps) => {
  return (
    <input
      className={cn("input")}
      data-testid="jrc-input"
    >
    </input>
  );
};

export default Input;
