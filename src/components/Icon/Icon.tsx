import React from "react";
import cn from "classnames";
import * as Icons from './assets/index';
import "./Icon.scss";

export interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  alt?: string;
}

const Icon = ({
  name,
  size = "md",
  color,
  alt
}: IconProps) => {
  return (
    <img
      className={cn("icon", `icon--size-${size}`)}
      // src={Icons[name.toLowerCase()]} does not work TS
      style={{ fill: color, stroke: color, color: color }}
      aria-hidden={Boolean(alt)} // Do not render in a11y tree if no alt text (thus being for styling only)
      alt={alt}
    />
  );
};

export default Icon;
