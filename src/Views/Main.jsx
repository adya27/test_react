import React from "react";
import { useSelector } from "react-redux";

import AddCardForm from "../Components/AddCardForm/AddCardForm";
import CardList from "../Components/CardList/CardList";
import Modal from "../Components/Modal/Modal";
import UserMenu from "../Components/UserMenu/UserMenu";
import { getIsModalOpen } from "../redux/card/card-selectors";
import { getIsLoggedIn } from "../redux/auth/auth-selectors";

export default function Main() {
  const isModalOpen = useSelector(getIsModalOpen);
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div>
      {isLoggedIn && <UserMenu />}
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
