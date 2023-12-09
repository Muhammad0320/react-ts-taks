import { useNavigate } from "react-router-dom";

import Button from "../ui/Button";

type SessionItemType = {
  title: string;
  image: string;
  summary: string;
  id: string;
};

const SessionItem = ({ id, title, image, summary }: SessionItemType) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/sessions/${id}`);
  };

  return (
    <li>
      <article className="session-item">
        <img src={image} alt={title} />
        <div className="session-data">
          <h3> {title} </h3>
          <p> {summary} </p>
        </div>

        <div className="actions">
          <Button el="button" onClick={handleClick}>
            {" "}
            Learn more{" "}
          </Button>
        </div>
      </article>
    </li>
  );
};

export default SessionItem;
