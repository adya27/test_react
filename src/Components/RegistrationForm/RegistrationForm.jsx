import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/reducers";

export default function RegistrationForm() {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => dispatch(addUser(data));

  // localStorage.setItem("passwords", JSON.stringify(data));
  //   const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="name"
        type="name"
        placeholder="name"
        ref={register({ required: true })}
      />
      {errors.name && <span>This field is required</span>}

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
