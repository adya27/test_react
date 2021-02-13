import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/registration">
            Registration
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/">
            Main
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
