import clsx from "clsx";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  content: string;
}
const inputClassName = "border-zinc-900/20 rounded-full";

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(
        "flex flex-col w-[calc(10% - 10px)] mx-5 md:w-[calc(10% - 10px)] md:mx-40 xl:w-[calc(50% - 50px)] xl:mx-96  gap-4"
      )}
    >
      <h1 className="text-brand-darkest font-semibold text-3xl md:text-5xl pb-4 pt-20">
        Contact us
      </h1>
      <div className="w-12 h-0.5 rounded-xl bg-brand-darkest md:m-0"></div>

      <input
        type="text"
        placeholder="First name"
        {...register("firstName", { required: true, maxLength: 80 })}
        className={clsx(inputClassName, "mt-4")}
      />
      <input
        type="text"
        placeholder="Last name"
        {...register("lastName", { required: true, maxLength: 100 })}
        className={inputClassName}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        className={inputClassName}
      />
      <input
        type="tel"
        placeholder="Phone number"
        {...register("phone", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
        className={inputClassName}
      />
      <textarea
        placeholder="What can we help you with?"
        {...register("content", {
          required: true,
          maxLength: 1,
        })}
        className="rounded-xl border-zinc-900/20"
      />

      <input
        type="submit"
        className="bg-brand-darkest mb-20 mt-4 text-white w-fit px-8 py-4 rounded-full hover:animate-pulse"
      />
    </form>
  );
};

export default ContactForm;
