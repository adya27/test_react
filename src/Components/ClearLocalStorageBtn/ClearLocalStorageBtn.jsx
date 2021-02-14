import React from "react";
import { Button } from "react-bootstrap";

import styles from "./ClearLocalStorageBtn.module.css";

export default function ClearLocalStorageBtn() {
  return (
    <div className={styles.container}>
      <p>Everything is stored in Local Storage, so maybe you want to</p>
      <Button
        variant="light"
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        clear LS
      </Button>
    </div>
  );
}
