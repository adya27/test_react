import React from "react";
// import storage from "redux-persist/lib/storage";

export default function ClearLocalStorageBtn() {
  return (
    <div>
      <p>Everything is stored in Local Storage, so maybe you want to</p>
      <button onClick={() => localStorage.clear()}>clear LS</button>
    </div>
  );
}
