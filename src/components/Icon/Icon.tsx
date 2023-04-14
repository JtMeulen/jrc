import React, { useState, useEffect } from "react";
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
  const [iconSrc, setIconSrc] = useState<string | undefined>(undefined);

  // Dynamically import the SVG file
  useEffect(() => {
    import(`./assets/${name}.svg`)
      .then((svg) => setIconSrc(svg.default))
      .catch((error) => console.error(`Error loading icon ${name}:`, error));
  }, [name])

  return (
    <div
      className={cn("icon", `icon--size-${size}`)}
      style={{ color: color }}
    >
      {iconSrc ? <ReactSVG src={iconSrc} title={title} /> : null}
    </div>
  );
};

export default Icon;
