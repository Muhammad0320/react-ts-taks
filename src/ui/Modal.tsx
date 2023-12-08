import { ReactNode, useEffect, useRef } from "react";

import { createPortal } from "react-dom";

type ModalPropTypes = {
  openModal: boolean;
  closeModal: () => boolean;
  children: ReactNode;
};

const Modal = ({ openModal, closeModal, children }: ModalPropTypes) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) {
      modalRef.current?.close();
    } else {
      modalRef.current?.showModal();
    }
  }, [openModal]);

  return createPortal(
    <dialog ref={modalRef} onCancel={closeModal}>
      {children}
    </dialog>,
    document.querySelector("#modal-root")!
  );
};

export default Modal;
