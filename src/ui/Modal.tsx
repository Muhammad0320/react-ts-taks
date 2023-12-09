import { ReactNode, useEffect, useRef } from "react";

import { createPortal } from "react-dom";

type ModalPropTypes = {
  closeModal: () => void;
  children: ReactNode;
  openModal: boolean;
};

const Modal = ({ closeModal, children, openModal }: ModalPropTypes) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) {
      modalRef.current?.close();
    } else {
      modalRef.current?.showModal();
    }
  }, [openModal]);

  return createPortal(
    <dialog onCancel={closeModal} className="modal" open={openModal}>
      {children}
    </dialog>,

    document.getElementById("modal-root")!
  );
};

export default Modal;
