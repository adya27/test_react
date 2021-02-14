import React from "react";
import { useSelector } from "react-redux";

import Card from "../Card/Card";
import { getPasswords } from "../../redux/card/card-selectors";
import { getCurrentUserId } from "../../redux/auth/auth-selectors";
import styles from "./CardList.module.css";

export default function CardList() {
  const passwords = useSelector(getPasswords);
  const currentUserId = useSelector(getCurrentUserId);

  const currentUserPasswords = passwords.filter(
    (card) => card.owner === currentUserId
  );
  return (
    <ul className={styles.container}>
      {currentUserPasswords.length !== 0 &&
        passwords.map((card) => <Card key={card.id} card={card} />)}
    </ul>
  );
}
