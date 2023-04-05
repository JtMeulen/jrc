import React from "react";
import classNames from "classnames";
import "./Button.css";

export interface ButtonProps {
  type?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  type = "primary",
  size = "medium",
  label,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={classNames("button", `button--${size}`, `button--${type}`)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
