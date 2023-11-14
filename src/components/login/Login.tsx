import { TextField, Button } from "@mui/material";
import { TSignUpSchema, signUpSchema } from "../../lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, type FieldValues } from "react-hook-form";
import "./login.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: TSignUpSchema) => {
    const response = await fetch(
      "https://b2mfc7l4-8181.euw.devtunnels.ms/api/users/login",
      {
        method: "GET",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      alert("Submitting form failed!");
      return;
    }

    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      } else {
        alert("Something went wrong!");
      }
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
      <div className="fieldContainer">
        <TextField
          className="loginField"
          label="Email"
          {...register("email")}
        />
        {errors.email && (
          <p className="loginError">{`${errors.email.message}`}</p>
        )}
      </div>
      <div className="fieldContainer">
        <TextField
          className="loginField"
          label="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="loginError">{`${errors.password.message}`}</p>
        )}
      </div>
      <Button disabled={isSubmitting} type="submit" variant="contained">
        LOGIN
      </Button>
    </form>
  );
}
