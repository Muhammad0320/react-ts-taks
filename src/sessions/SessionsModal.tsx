import Button from "../ui/Button";
import SessionList from "./SessionsList";
import Modal from "../ui/Modal";

type SessionModalType = {
  onCloseModal: () => void;
  openModal: boolean;
};

const SessionModal = ({ onCloseModal, openModal }: SessionModalType) => {
  return (
    <Modal closeModal={onCloseModal} openModal={openModal}>
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
