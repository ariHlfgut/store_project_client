import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  fullName: string;
  email: string;
  city: string;
  street: string;
  departmentNumber: number;
  password: string;
  passwordConfirmation: string;
};

export default function Sign_up() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("fullName", {
          required: true,
          maxLength: 20,
          minLength: 2,
        })}
      />
      <input
        {...register("email", { required: true, maxLength: 20, minLength: 2 })}
      />
      <input
        {...register("city", { required: true, maxLength: 20, minLength: 2 })}
      />
      <input
        {...register("street", { required: true, maxLength: 20, minLength: 2 })}
      />
      <input
        {...register("departmentNumber", {
          required: true,
        })}
      />
      <input
        {...register("password", {
          required: true,
          maxLength: 20,
          minLength: 2,
        })}
      />
      <input
        {...register("passwordConfirmation", {
          required: true,
          maxLength: 20,
          minLength: 2,
        })}
      />
      <input type="submit" />
    </form>
  );
}
