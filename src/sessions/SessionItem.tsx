import {
  useSessionContext,
  type SessionItem,
} from "../../store/BookingContext";
import Button from "../ui/Button";

const SessionItemContainer = ({ summary, title, date, id }: SessionItem) => {
  const { removeSession } = useSessionContext();

  const handleDelete = () => {
    removeSession(id);
  };

  return (
    <article className="upcoming-session">
      <div>
        <h3> {title} </h3>
        <p> {summary} </p>
        <time dateTime={new Date(date).toISOString()}>
          {new Date(date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
      </div>

      <p className="actions">
        <Button el="button" textOnly onClick={handleDelete}>
          cancel
        </Button>
      </p>
    </article>
  );
};

export default SessionItemContainer;
