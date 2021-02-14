import React from "react";
import ClearLocalStorageBtn from "../Components/ClearLocalStorageBtn/ClearLocalStorageBtn";
import LoginForm from "../Components/LoginForm/LoginForm";
import Navigation from "../Components/Navigation/Navigation";

export default function Login() {
  return (
    <div>
      <ClearLocalStorageBtn />

      <Navigation />
      <h2>Please login</h2>
      <LoginForm />
    </div>
  );
}
