import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navigation() {
  let { pathname } = useLocation();

  return (
    <nav>
      <ul>
        {pathname !== "/login" && (
          <li>
            <NavLink exact to="/login">
              Have already account? Login!
            </NavLink>
          </li>
        )}
        {pathname !== "/registration" && (
          <li>
            <NavLink exact to="/registration">
              Don't have an account? Sign up!
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
