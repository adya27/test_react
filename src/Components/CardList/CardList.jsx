import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { getPasswords } from "../../redux/selectors";

export default function CardList() {
  const passwords = useSelector(getPasswords);
  return (
    <ul>
      {passwords.length !== 0 &&
        passwords.map((card) => <Card key={card.id} card={card} />)}
    </ul>
  );
}
