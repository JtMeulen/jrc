import React, { useEffect, useRef, ReactNode } from "react";
import cn from "classnames";
import "./Modal.scss";

export interface ModalProps {
  children: ReactNode;
  open: boolean;
  withBlur?: boolean;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  open = false,
  withBlur = false,
  onClose = () => {},
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      modalRef?.current?.showModal();
    } else {
      handleClose();
    }
  }, [open]);

  const handleClose = () => {
    modalRef?.current?.close();
  };

  return (
    <dialog
      className={cn("modal", { "modal--blurred": withBlur })}
      ref={modalRef}
      onClose={onClose}
    >
      {
        <button
          className="modal__close-button"
          onClick={handleClose}
          aria-label="Close"
        >
          X
        </button>
      }
      {children}
    </dialog>
  );
};

export default Modal;
