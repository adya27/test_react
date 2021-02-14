import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import nextId from "react-id-generator";

import { addPassword } from "../../redux/card/card-reducers";
import { getCurrentUserId } from "../../redux/auth/auth-selectors";
import styles from "./AddCardForm.module.css";

export default function AddCardForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const ownerId = useSelector(getCurrentUserId);

  const onSubmit = (data, e) => {
    data.owner = ownerId;
    data.id = nextId();
    data.isVisible = false;
    dispatch(addPassword(data));
    e.target.reset();
  };
  return (
    <div>
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
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

        <input type="submit" value="Add a card" />
      </form>
    </div>
  );
}
