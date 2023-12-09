import { ReactNode, useEffect, useRef } from "react";

import { createPortal } from "react-dom";

type ModalPropTypes = {
  closeModal: () => void;
  children: ReactNode;
  openModal: boolean;
};

const Modal = ({ closeModal, children, openModal }: ModalPropTypes) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  console.log(openModal);

  useEffect(() => {
    if (openModal) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [openModal]);

  return createPortal(
    <dialog onCancel={closeModal} className="modal" ref={modalRef}>
      {children}
    </dialog>,

    document.getElementById("modal-root")!
  );
};

export default Modal;
