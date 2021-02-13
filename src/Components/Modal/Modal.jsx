import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editPassword, closeModal } from "../../redux/reducers";
import { getPassword, getName, getId } from "../../redux/selectors";
// import nextId from "react-id-generator";

export default function Modal() {
  const dispatch = useDispatch();
  const password = useSelector(getPassword);
  const name = useSelector(getName);
  const id = useSelector(getId);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    data.id = id;
    data.isVisible = false;
    console.log(" new data", data);
    dispatch(editPassword(data));
    dispatch(closeModal());
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="name"
          name="name"
          type="name"
          defaultValue={name}
          ref={register({ required: true })}
        />
        {errors.name && <span>This field is required</span>}

        <input
          placeholder="password"
          name="password"
          type="name"
          defaultValue={password}
          ref={register({ required: true })}
        />
        {errors.password && <span>This field is required</span>}

        <input type="submit" />
        <button onClick={handleClose} type="button">
          close
        </button>
      </form>
    </div>
  );
}
