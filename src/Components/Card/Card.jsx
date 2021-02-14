import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import {
  deletePassword,
  editCard,
  togglePassword,
} from "../../redux/card/card-reducers";
import styles from "./Card.module.css";

export default function Card({ card }) {
  const dispatch = useDispatch();
  const handleDeleteCard = () => {
    dispatch(deletePassword(card.id));
  };
  const handleClickPassword = () => {
    console.log("click", card.id);
    dispatch(togglePassword(card.id));
  };

  const handleEditCard = () => {
    dispatch(editCard(card));
  };
  return (
    <li className={styles.container}>
      <p>site: {card.name}</p>
      <p className={styles.clickable} onClick={handleClickPassword}>
        password:{" "}
        {card.isVisible ? card.password : "*".repeat(card.password.length)}
      </p>
      <div className={styles.buttons}>
        <Button onClick={handleEditCard} type="button">
          edit
        </Button>
        <Button onClick={handleDeleteCard} type="button">
          delete
        </Button>
      </div>
    </li>
  );
}
