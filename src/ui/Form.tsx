import {
  type ComponentPropsWithRef,
  type FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

type FormType = {
  onSave: (vale: unknown) => void;
} & ComponentPropsWithRef<"form">;

export type FormRef = {
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

    useImperativeHandle(ref, () => {
      return {
        clear() {
          formRef.current?.reset();
        },
      };
    });

    return (
      <form ref={formRef} onSubmit={handleSubmit} {...otherProps}>
        {children}
      </form>
    );
  }
);

export default Form;
