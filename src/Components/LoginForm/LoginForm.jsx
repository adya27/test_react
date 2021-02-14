import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/reducers";

export default function LoginForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => dispatch(loginUser(data));
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
