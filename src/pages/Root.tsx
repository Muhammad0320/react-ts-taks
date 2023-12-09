import { Outlet } from "react-router-dom";
import Button from "../ui/Button";
import { useState } from "react";
import SessionModal from "../sessions/SessionsModal";

export default function Root() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  return (
    <>
      {/* Todo: Add Header */}

      <SessionModal openModal={modalIsOpen} onCloseModal={handleCloseModal} />
      <header id="main-header">
        <h1> ReactMentoring </h1>
        <nav>
          <ul>
            <li>
              <Button el="link" to="/">
                {" "}
                Our mission{" "}
              </Button>
            </li>

            <li>
              {" "}
              <Button el="link" to="/sessions">
                {" "}
                Browse sessions{" "}
              </Button>{" "}
            </li>

            <li>
              <Button el="button" onClick={handleOpenModal}>
                {" "}
                Upcoming sessions{" "}
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
}
