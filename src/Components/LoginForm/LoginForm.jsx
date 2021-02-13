import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="email"
        name="email"
        type="email"
        ref={register({ required: true })}
      />
      {errors.email && <span>This field is required</span>}

      <input
        placeholder="password"
        name="password"
        type="password"
        ref={register({ required: true })}
      />

      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
