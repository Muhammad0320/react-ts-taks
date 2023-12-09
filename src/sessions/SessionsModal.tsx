import Button from "../ui/Button";
import SessionList from "./SessionsList";
import Modal from "../ui/Modal";

type SessionModalType = {
  modalIsOpen: boolean;
  onCloseModal: () => void;
};

const SessionModal = ({ modalIsOpen, onCloseModal }: SessionModalType) => {
  return (
    <Modal openModal={modalIsOpen} closeModal={onCloseModal}>
      <h2> Upcoming session </h2>
      <SessionList />
      <p className="actions">
        <Button el="button" onClick={onCloseModal}>
          {" "}
          Close{" "}
        </Button>
      </p>
    </Modal>
  );
};

export default SessionModal;
