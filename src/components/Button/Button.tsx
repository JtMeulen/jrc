import React from "react";
import cn from "classnames";
import "./Button.scss";

export interface ButtonProps {
  type?: "primary" | "secondary" | "inverted";
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
      className={cn("button", `button--${size}`, `button--${type}`)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
