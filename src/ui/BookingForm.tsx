import { useRef } from "react";
import Form, { FormRef } from "./Form";
import Input from "./Input";

const BookingForm = () => {
  const formRf = useRef<FormRef>(null);

  const handleSave = (formData: unknown) => {
    const extractedData = formData as { name: string; email: string };

    console.log(extractedData);

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
