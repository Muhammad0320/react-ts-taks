import Button from "../ui/Button";
import SessionList from "./SessionsList";
import Modal from "../ui/Modal";

type SessionModalType = {
  onCloseModal: () => void;
};

const SessionModal = ({ onCloseModal }: SessionModalType) => {
  return (
    <Modal closeModal={onCloseModal}>
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
