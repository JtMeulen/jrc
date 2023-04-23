import React, { ReactNode } from "react";
import cn from "classnames";
import "./Link.scss";

interface LinkProps {
  href: string;
  target?: string;
  children: ReactNode;
  inline?: boolean;
}

const Link: React.FC<LinkProps> = ({
  href,
  target = "_self",
  inline = false,
  children,
}) => {
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
