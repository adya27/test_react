import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPassword } from "../../redux/reducers";
import nextId from "react-id-generator";

export default function AddCardForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    data.id = nextId();
    data.isVisible = false;
    dispatch(addPassword(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="name"
          name="name"
          type="name"
          ref={register({ required: true })}
        />
        {errors.name && <span>This field is required</span>}

        <input
          placeholder="password"
          name="password"
          type="name"
          ref={register({ required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}
