import React from "react";
import cn from "classnames";
import "./Button.scss";

export interface ButtonProps {
  color?: "primary" | "secondary" | "inverted";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  color = "primary",
  size = "medium",
  label,
  onClick,
}) => {
  return (
    <button
      className={cn("button", `button--${size}`, `button--${color}`)}
      onClick={onClick}
      data-testid="jrc-button"
    >
      {label}
    </button>
  );
};

export default Button;
