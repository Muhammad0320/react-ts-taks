import { useSessionContext } from "../../store/BookingContext";
import SessionItem from "./SessionItem";

const SessionList = () => {
  const { item } = useSessionContext();

  if (!item.length) {
    <p> You have not booked any session </p>;
  }

  return (
    <ul>
      {item.map((el) => (
        <li key={el.id}>
          <SessionItem {...el} />
        </li>
      ))}
    </ul>
  );
};

export default SessionList;
