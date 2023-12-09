import { useSessionContext } from "../../store/BookingContext";
import SessionItem from "./SessionItem";

const SessionList = () => {
  const { item } = useSessionContext();

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
