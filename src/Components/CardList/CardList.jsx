import React from "react";
import { useSelector } from "react-redux";

import Card from "../Card/Card";
import { getPasswords } from "../../redux/card/card-selectors";
import { getCurrentUserId } from "../../redux/auth/auth-selectors";

export default function CardList() {
  const passwords = useSelector(getPasswords);
  const currentUserId = useSelector(getCurrentUserId);

  const currentUserPasswords = passwords.filter(
    (card) => card.owner === currentUserId
  );
  return (
    <ul>
      {currentUserPasswords.length !== 0 &&
        passwords.map((card) => <Card key={card.id} card={card} />)}
    </ul>
  );
}
