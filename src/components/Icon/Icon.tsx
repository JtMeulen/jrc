import React from "react";
import cn from "classnames";

import "./Icon.scss";

interface IconProps {
  name: string;
  size?: "sm" | "md" | "lg";
  color?: string;
  title?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = "md", color, title }) => {
  return (
    <div
      className={cn("icon", `icon--size-${size}`, `icon--${name}`)}
      style={{ backgroundColor: color }}
      aria-label={title}
    ></div>
  );
};

export default Icon;
