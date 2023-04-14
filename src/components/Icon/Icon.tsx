import React from "react";
import { ReactSVG } from "react-svg";
import cn from "classnames";

import "./Icon.scss";

export interface IconProps {
  name: string;
  size?: "sm" | "md" | "lg";
  color?: string;
  title?: string;
}

const Icon = ({ name, size = "md", color, title }: IconProps) => {
  try {
    const iconSrc = require(`./assets/${name}.svg`);
    return (
      <div
        className={cn("icon", `icon--size-${size}`)}
        style={{ color: color }}
      >
        <ReactSVG src={iconSrc} title={title} />
      </div>
    );
  } catch {
    console.error(`No icon with name ${name} found.`);
    return null;
  }
};

export default Icon;
