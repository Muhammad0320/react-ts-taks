import { useState } from "react";
import Button from "../ui/Button";
import SessionList from "./SessionsList";
import Modal from "../ui/Modal";

const SessionModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal openModal={modalIsOpen} closeModal={handleCloseModal}>
      <h2> Upcoming session </h2>
      <SessionList />
      <p className="actions">
        <Button el="button" onClick={handleCloseModal}>
          {" "}
          Close{" "}
        </Button>
      </p>
    </Modal>
  );
};

export default SessionModal;
