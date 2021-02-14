import React from "react";
import Navigation from "../Components/Navigation/Navigation";

import RegistrationForm from "../Components/RegistrationForm/RegistrationForm";

export default function Registration() {
  return (
    <div>
      <Navigation />
      <h2>Registration</h2>
      <RegistrationForm />
    </div>
  );
}
