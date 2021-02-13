import React from "react";
import { useSelector } from "react-redux";
import AddCardForm from "../Components/AddCardForm/AddCardForm";
import CardList from "../Components/CardList/CardList";
import Modal from "../Components/Modal/Modal";
import { getIsModalOpen } from "../redux/selectors";

export default function Main() {
  const isModalOpen = useSelector(getIsModalOpen);
  return (
    <div>
      {isModalOpen ? (
        <>
          <h2>Edit card</h2>
          <Modal />
        </>
      ) : (
        <>
          <h2>Password manager</h2>
          <AddCardForm />
          <CardList />
        </>
      )}
    </div>
  );
}
