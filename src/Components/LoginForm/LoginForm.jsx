import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { loginUser } from "../../redux/auth/auth-reducers";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const notify = () => toast.error("a user with this email doesn't exist!");

  const onSubmit = (data) => {
    dispatch(loginUser(data));
    notify();
  };
  return (
    <>
      <ToastContainer />
      <Form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
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

        <input value="login" type="submit" />
      </Form>
    </>
  );
}
