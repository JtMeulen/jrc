import React, { ReactNode } from "react";
import cn from "classnames";
import "./Link.scss";

export interface LinkProps {
  href: string;
  target?: string;
  children: ReactNode;
  inline?: boolean;
}

const Link = ({
  href,
  target = "_self",
  inline = false,
  children,
}: LinkProps) => {
  return (
    <a
      className={cn("link", { "link--inline": inline })}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
};

export default Link;
