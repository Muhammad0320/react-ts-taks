import { useEffect, useRef } from "react";

import { createPortal } from "react-dom";

type ModalPropTypes = {
  openModal: boolean;
  closeModal: () => boolean;
};

const Modal = ({ openModal, closeModal }: ModalPropTypes) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) {
      modalRef.current?.close();
    } else {
      modalRef.current?.showModal();
    }
  }, [openModal]);

  return createPortal(
    <dialog ref={modalRef} onCancel={closeModal}></dialog>,
    document.querySelector("#modal-root")!
  );
};

export default Modal;
