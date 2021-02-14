import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCurrentUserName } from "../../redux/auth/auth-selectors";
import { logOutUser } from "../../redux/auth/auth-reducers";
import styles from "./UserMenu.module.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function UserMenu() {
  const name = useSelector(getCurrentUserName);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <div className={styles.container}>
      <h5>Hello, {name}</h5>
      <Button variant="outline-primary" onClick={handleLogOut}>
        Logout
      </Button>
    </div>
  );
}
