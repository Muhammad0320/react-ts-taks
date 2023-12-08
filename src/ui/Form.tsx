import {
  ComponentPropsWithRef,
  EventHandler,
  FormEvent,
  forwardRef,
  useRef,
} from "react";

type FormType = {
  onSave: (vale: unknown) => void;
} & ComponentPropsWithRef<"form">;

type FormRef = {
  clear: () => void;
};

const Form = forwardRef<FormRef, FormType>(
  ({ children, onSave, ...otherProps }, ref) => {
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData = new FormData(e.currentTarget);

      const data = Object.fromEntries(formData);

      onSave(data);
    };

    return <form ref={formRef} onSubmit={handleSubmit} {...otherProps}></form>;
  }
);

export default Form;
