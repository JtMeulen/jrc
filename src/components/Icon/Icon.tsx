import React from "react";
import cn from "classnames";

import "./Icon.scss";

export interface IconProps {
  name: string;
  size?: "sm" | "md" | "lg";
  color?: string;
  title?: string;
}

const Icon = ({ name, size = "md", color, title }: IconProps) => {
  return (
    <div
      className={cn("icon", `icon--size-${size}`, `icon--${name}`)}
      style={{ backgroundColor: color }}
      aria-label={title}
    ></div>
  );
};

export default Icon;
