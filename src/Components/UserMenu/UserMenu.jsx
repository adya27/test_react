import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCurrentUserName } from "../../redux/auth/auth-selectors";
import { logOutUser } from "../../redux/auth/auth-reducers";

export default function UserMenu() {
  const name = useSelector(getCurrentUserName);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <div>
      <h3>Hello, {name}</h3>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
}
