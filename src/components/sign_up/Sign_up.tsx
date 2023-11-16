import { TextField, Button } from "@mui/material";
import { TSignUpSchema, signUpSchema } from "../../lib/signUpTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import "./Sign_up.css";

export default function Sign_up() {
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
    console.log(data);
    try {
      const response = await fetch(
        "https://api-service-store-projects.onrender.com/api/users/register",
        {
          method: "POST",
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
        if (errors.fullName) {
          setError("full_name", {
            type: "server",
            message: errors.fullName,
          });
        } else if (errors.email) {
          setError("email", {
            type: "server",
            message: errors.email,
          });
        } else if (errors.city) {
          setError("address.city", {
            type: "server",
            message: errors.city,
          });
        } else if (errors.street) {
          setError("address.street", {
            type: "server",
            message: errors.street,
          });
        } else if (errors.departmentNumber) {
          setError("address.apartment_number", {
            type: "server",
            message: errors.departmentNumber,
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
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
      alert("An error occurred while submitting the form");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signUpForm">
      <div className="fieldContainer">
        <TextField
          className="signUpField"
          label="Full Name"
          {...register("full_name")}
        />
        {errors.full_name && (
          <p className="signUpError">{`${errors.full_name.message}`}</p>
        )}
      </div>
      <div className="fieldContainer">
        <TextField
          className="signUpField"
          label="Email"
          {...register("email")}
        />
        {errors.email && (
          <p className="signUpError">{`${errors.email.message}`}</p>
        )}
      </div>
      <div className="fieldContainer">
        <TextField
          className="signUpField"
          label="City"
          {...register("address.city")}
        />
        {errors.address && (
          <p className="signUpError">{`${errors.address.message}`}</p>
        )}
      </div>
      <div className="fieldContainer">
        <TextField
          className="signUpField"
          label="Street"
          {...register("address.street")}
        />
        {errors.address && (
          <p className="signUpError">{`${errors.address.message}`}</p>
        )}
      </div>
      <div className="fieldContainer">
        <TextField
          className="signUpField"
          label="Department Number"
          {...register("address.apartment_number")}
        />
        {errors.address && (
          <p className="signUpError">{`${errors.address.message}`}</p>
        )}
      </div>
      <div className="fieldContainer">
        <TextField
          className="signUpField"
          label="Password"
          {...register("password")}
        />
        {errors.password && (
          <p className="signUpError">{`${errors.password.message}`}</p>
        )}
      </div>
      <Button disabled={isSubmitting} type="submit" variant="contained">
        SIGN UP
      </Button>
    </form>
  );
}
