import React, { useState } from "react";
import classNames from "classnames";
import "./Notification.css";

export interface NotificationProps {
  type: "error" | "info" | "warning" | "success";
  header?: string;
  content?: string;
  dismissable?: boolean;
  onDismiss: () => void;
}

const Notification = ({
  type,
  header,
  content,
  dismissable = false,
  onDismiss = () => {}
}: NotificationProps) => {
  const [hidden, setHidden] = useState(false);

  const onCloseClick = () => {
    setHidden(true);
    onDismiss();
  };

  return (
    <div className={classNames(
      "notification",
      hidden && 'notification--hidden'
    )}>
      <div
        className={classNames(
          "notification__side-border",
          `notification__side-border--${type}`
        )}
      ></div>
      <div className="notification__text-wrapper">
        {header && <h2 className="notification__header">{header}</h2>}
        {content && <p className="notification__content">{content}</p>}
      </div>
      {dismissable && (
        <button className="notification__close-button" onClick={onCloseClick}>
          X
        </button>
      )}
    </div>
  );
};

export default Notification;
