import { combineReducers, createSlice } from "@reduxjs/toolkit";

const modalInitialState = {
  modalIsOpen: false,
  name: "",
  password: "",
  id: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState: modalInitialState,
  reducers: {
    editCard(state, action) {
      state.modalIsOpen = true;
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.id = action.payload.id;
    },
    closeModal(state, action) {
      state.modalIsOpen = false;
    },
  },
});

const sortPasswordsByName = (array) => {
  if (array.length > 1) {
    return array.sort((a, b) =>
      a.name[0].toLowerCase() >= b.name[0].toLowerCase() ? 1 : -1
    );
  } else return array;
};

const passwordsSlice = createSlice({
  name: "passwords",
  initialState: [],
  reducers: {
    addPassword(state, action) {
      state.push(action.payload);
      sortPasswordsByName(state);
    },
    deletePassword(state, action) {
      return sortPasswordsByName(
        state.filter((card) => card.id !== action.payload)
      );
    },
    editPassword(state, action) {
      return sortPasswordsByName([
        ...state.filter((card) => card.id !== action.payload.id),
        action.payload,
      ]);
    },
    togglePassword(state, action) {
      const currentPassword = state.find((card) => card.id === action.payload);
      return sortPasswordsByName([
        ...state.filter((card) => card.id !== action.payload),
        { ...currentPassword, isVisible: !currentPassword.isVisible },
      ]);
    },
  },
});

export const passwords = passwordsSlice.reducer;
export const modal = modalSlice.reducer;

export const { editCard, closeModal } = modalSlice.actions;
export const {
  addPassword,
  deletePassword,
  editPassword,
  togglePassword,
} = passwordsSlice.actions;
