import { ReactNode } from "react";

import { createPortal } from "react-dom";

type ModalPropTypes = {
  closeModal: () => void;
  children: ReactNode;
};

const Modal = ({ closeModal, children }: ModalPropTypes) => {
  // const modalRef = useRef<HTMLDialogElement>(null);

  // useEffect(() => {
  //   if (openModal) {
  //     modalRef.current?.close();
  //   } else {
  //     modalRef.current?.showModal();
  //   }
  // }, [openModal]);

  return createPortal(
    <dialog onCancel={closeModal} className="modal" open>
      {children}
    </dialog>,

    document.getElementById("modal-root")!
  );
};

export default Modal;
