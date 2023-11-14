"use client";
import { TextField, Button } from "@mui/material";
import { TSignUpSchema, signUpSchema } from "../../lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
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
    try {
      const response = await axios.post(
        "https://api-service-store-projects.onrender.com/api/users/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.data.ok) {
        alert("Submitting form failed!");
        return;
      }
      if (response.data.errors) {
        const serverErrors = response.data.errors;
        if (serverErrors.email) {
          setError("email", {
            type: "server",
            message: serverErrors.email,
          });
        } else if (serverErrors.password) {
          setError("password", {
            type: "server",
            message: serverErrors.password,
          });
        } else {
          alert("Something went wrong!");
        }
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
      alert("An error occurred while submitting the form");
    }
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
      <p className="p">
        you dont have account?{" "}
        <Link className="sign" to={"/sign up"}>
          sign up
        </Link>
      </p>
    </form>
  );
}
