import Button from "../ui/Button";
import SessionList from "./SessionsList";
import Modal from "../ui/Modal";

type SessionModalType = {
  modalIsOpen: boolean;
  handleCloseModal: () => void;
};

const SessionModal = ({ modalIsOpen, handleCloseModal }: SessionModalType) => {
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
