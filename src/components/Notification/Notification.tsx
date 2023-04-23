import React, { useState } from "react";
import cn from "classnames";
import { Icon } from "../index";
import "./Notification.scss";

interface NotificationProps {
  type: "error" | "info" | "warning" | "success";
  header?: string;
  content: string;
  dismissable?: boolean;
  onClose?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  type,
  header,
  content = "",
  dismissable = false,
  onClose = () => {},
}) => {
  const [hidden, setHidden] = useState(false);

  const onCloseClick = () => {
    setHidden(true);
    onClose();
  };

  return (
    <div
      className={cn("notification", `notification--${type}`, hidden && "notification--hidden")}
      data-testid="jrc-notification"
    >
      <div className="notification__icon-wrapper">
        <Icon size="sm" name={type} />
      </div>
      <div className="notification__text-wrapper">
        {header && <h2 className="notification__header">{header}</h2>}
        {content && <p className="notification__content">{content}</p>}
      </div>
      {dismissable && (
        <button
          className="notification__close-button"
          onClick={onCloseClick}
          aria-label="Close"
          data-testid="jrc-notification-close-button"
        >
          X
        </button>
      )}
    </div>
  );
};

export default Notification;
