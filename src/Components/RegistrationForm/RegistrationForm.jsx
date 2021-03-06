import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import nextId from "react-id-generator";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addUser } from "../../redux/auth/auth-reducers";
import { getAllUsers } from "../../redux/auth/auth-selectors";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const notify = () => toast.warn("a user with this email already exists!");

  const { register, handleSubmit, errors, watch } = useForm();

  const [email, setEmail] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const allUsers = useSelector(getAllUsers);
  const allEmails = allUsers.map((user) => user.email);

  const dispatch = useDispatch();

  useEffect(() => {
    checksIfEmailIsUnique();
  });

  const onSubmit = (data) => {
    data.id = nextId("user");
    dispatch(addUser(data));
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const checksIfEmailIsUnique = () => {
    allEmails.forEach((emailFromArray) => {
      if (emailFromArray === email) {
        notify();
        setButtonDisabled(true);
      } else {
        setButtonDisabled(false);
      }
    });
  };

  return (
    <>
      <ToastContainer />
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
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
          onChange={handleChangeEmail}
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

        <input value="Sign up" type="submit" disabled={buttonDisabled} />
      </form>
    </>
  );
}
