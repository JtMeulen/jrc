import React from "react";
import cn from "classnames";
import "./Breadcrumb.scss";

type BreadcrumbItem = {
  id: string;
  href: string;
  text: string;
};

interface BreadcrumbProps {
  data: BreadcrumbItem[];
  separator?: string;
  activeId?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  data = [],
  separator = "/",
  activeId,
}) => {
  return (
    <div className={cn("breadcrumb")}>
      {data.map((item) => {
        return (
          <>
            <a
              className={cn("breadcrumb__item", {
                "breadcrumb__item--is-active": activeId === item.id,
              })}
              href={item.href}
              id={item.id}
            >
              {item.text}
            </a>
            <span className="breadcrumb__separator">{separator}</span>
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
