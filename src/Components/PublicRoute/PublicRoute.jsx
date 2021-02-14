import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/selectors";

export default function PublicRoute({
  children,
  // restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn;
  //  && restricted;
  return (
    <Route routeProps>{shouldRedirect ? <Redirect to="/" /> : children}</Route>
  );
}
