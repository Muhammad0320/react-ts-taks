import Input from "./Input";
import Modal from "./Modal";
import Button from "./Button";
import Form, { FormRef } from "./Form";
import { useRef } from "react";
import { SESSIONS } from "../dummy-sessions";
import { useParams } from "react-router-dom";
import { SessionItem, useSessionContext } from "../../store/BookingContext";

type SessionModalType = {
  onCloseModal: () => void;
};

const BookingForm = ({ onCloseModal }: SessionModalType) => {
  const formRf = useRef<FormRef>(null);

  const { addSession } = useSessionContext();
  const { id } = useParams<{ id: string }>();

  const extratedData = SESSIONS.find((session) => session.id === id);

  const data: SessionItem = {
    id: extratedData!.id,
    title: extratedData!.title,
    summary: extratedData!.summary,
    date: extratedData!.date,
  };

  const handleSave = (formData: unknown) => {
    const extracted = formData as { name: string; email: string };

    console.log(extracted);

    addSession(data);

    console.log(data);

    console.log("I see");

    onCloseModal();

    formRf.current?.clear();
  };

  return (
    <Modal closeModal={onCloseModal}>
      <h2> Booking session </h2>
      <Form ref={formRf} onSave={handleSave}>
        <Input label="Your name" name="name" id="name" />
        <Input label="Your email" name="email" id="email" />
        <p className="actions">
          <Button el="button" textOnly onClick={onCloseModal}>
            cancel
          </Button>
          <Button el="button">Book session</Button>
        </p>
      </Form>
    </Modal>
  );
};

export default BookingForm;
