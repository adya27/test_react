import React from "react";
import { useDispatch } from "react-redux";
import { deletePassword, editCard, togglePassword } from "../../redux/reducers";

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
    <li>
      <p>site {card.name}</p>
      <p onClick={handleClickPassword}>
        password{" "}
        {card.isVisible ? card.password : "*".repeat(card.password.length)}
      </p>
      <button onClick={handleEditCard} type="button">
        edit
      </button>
      <button onClick={handleDeleteCard} type="button">
        delete
      </button>
    </li>
  );
}
