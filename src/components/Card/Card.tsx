import React, { KeyboardEvent, ReactNode } from "react";
import cn from "classnames";
import "./Card.scss";

export interface CardProps {
  children: ReactNode;
  headerImage?: {
    src: string;
    alt: string;
  };
  actionable: boolean;
  onClick?: () => void;
}

const Card = ({
  children,
  headerImage,
  actionable = false,
  onClick = () => {},
}: CardProps) => {
  const handleonKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      onClick();
    }
  };

  return (
    <article
      className={cn("card", { "card--actionable": actionable })}
      onClick={onClick}
      onKeyDown={handleonKeyDown}
      tabIndex={actionable ? 0 : -1}
    >
      {headerImage && (
        <img
          src={headerImage.src}
          alt={headerImage.alt}
          className="card__header-image"
        />
      )}
      <section>{children}</section>
    </article>
  );
};

export default Card;
