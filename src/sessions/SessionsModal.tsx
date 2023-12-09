import Button from "../ui/Button";
import SessionList from "./SessionsList";

const SessionModal = () => {
  return (
    <>
      <h2> Upcoming session </h2>
      <SessionList />
      <p className="actions">
        <Button el="button"> Close </Button>
      </p>
    </>
  );
};

export default SessionModal;
