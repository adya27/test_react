import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { getCurrentUserId, getPasswords } from "../../redux/selectors";

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
