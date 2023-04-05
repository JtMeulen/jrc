import React from "react";
import classNames from "classnames";
import "./Notification.css";

export interface NotificationProps {
  type: "error" | "info" | "warning" | "success";
  header?: string;
  content?: string;
  dismissable?: boolean;
  onDismiss: () => void
}

const Notification = ({
  type,
  header,
  content,
  dismissable = false,
}: NotificationProps) => {
  // Set display: none if dismissed (use state here) and call onDismiss();

  return (
    <div className="notification">
      <div className={classNames("notification__side-border", `notification__side-border--${type}`)}></div>
      <div>
        {header && <h2>{header}</h2>}
        {content && <p>{content}</p>}
      </div>
      {dismissable && <button>X</button>}
    </div>
  );
};

export default Notification;
