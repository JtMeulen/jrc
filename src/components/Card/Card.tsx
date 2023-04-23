import React, { KeyboardEvent, ReactNode } from "react";
import cn from "classnames";
import "./Card.scss";

interface CardProps {
  children: ReactNode;
  headerImage?: {
    src: string;
    alt: string;
  };
  actionable?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  headerImage,
  actionable = false,
  onClick = () => {},
}) => {
  const handleonKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      onClick();
    }
  };

  return (
    <article
      className={cn("card", { "card--actionable": actionable })}
      onClick={onClick} // TODO: Should we prevent onClick to be called if not actionable?
      onKeyDown={handleonKeyDown}
      tabIndex={actionable ? 0 : -1}
      data-testid="jrc-card"
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
