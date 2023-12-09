import { useRef } from "react";
import Form, { FormRef } from "./Form";
import Input from "./Input";
import { useParams } from "react-router-dom";
import { SESSIONS } from "../dummy-sessions";
import { SessionItem, useSessionContext } from "../../store/BookingContext";

const BookingForm = () => {
  const formRf = useRef<FormRef>(null);

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
    <>
      <h2> Booking session </h2>
      <Form ref={formRf} onSave={handleSave}>
        <Input label="Your name" name="name" id="name" />
        <Input label="Your email" name="email" id="email" />
      </Form>
    </>
  );
};

export default BookingForm;
