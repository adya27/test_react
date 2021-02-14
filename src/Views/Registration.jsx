import React from "react";
import ClearLocalStorageBtn from "../Components/ClearLocalStorageBtn/ClearLocalStorageBtn";
import Navigation from "../Components/Navigation/Navigation";

import RegistrationForm from "../Components/RegistrationForm/RegistrationForm";

export default function Registration() {
  return (
    <div>
      <ClearLocalStorageBtn />
      <Navigation />
      <h2>Registration</h2>
      <RegistrationForm />
    </div>
  );
}
