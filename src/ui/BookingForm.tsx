import Input from "./Input";
import Modal from "./Modal";
import Button from "./Button";
import Form, { FormRef } from "./Form";
import { useRef, useState } from "react";
import { SESSIONS } from "../dummy-sessions";
import { useParams } from "react-router-dom";
import { SessionItem, useSessionContext } from "../../store/BookingContext";

const BookingForm = () => {
  const formRf = useRef<FormRef>(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const { id } = useParams<{ id: string }>();

  const extratedData = SESSIONS.find((session) => session.id === id);

  const data: SessionItem = {
    id: extratedData!.id,
    title: extratedData!.title,
    summary: extratedData!.summary,
    date: extratedData!.date,
  };

  const { addSession } = useSessionContext();

  const handleSave = (formData: unknown) => {
    const extractedData = formData as { name: string; email: string };

    console.log(extractedData);

    addSession(data);

    formRf.current?.clear();
  };

  return (
    <Modal openModal={modalIsOpen} closeModal={handleCloseModal}>
      <h2> Booking session </h2>
      <Form ref={formRf} onSave={handleSave}>
        <Input label="Your name" name="name" id="name" />
        <Input label="Your email" name="email" id="email" />
      </Form>
      <p className="actions">
        <Button el="button" textOnly>
          cancel
        </Button>
        <Button el="button" onClick={handleModalOpen}>
          Book session
        </Button>
      </p>
    </Modal>
  );
};

export default BookingForm;
