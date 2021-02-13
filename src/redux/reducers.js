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

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
  },
});

const passwordsSlice = createSlice({
  name: "passwords",
  initialState: [],
  reducers: {
    addPassword(state, action) {
      state.push(action.payload);
    },
    deletePassword(state, action) {
      return state.filter((card) => card.id !== action.payload);
    },
    editPassword(state, action) {
      return [
        ...state.filter((card) => card.id !== action.payload.id),
        action.payload,
      ];
    },
    togglePassword(state, action) {
      console.log(
        "state.find",
        state.find((card) => card.id === action.payload)
      );
      const currentPassword = state.find((card) => card.id === action.payload);
      return [
        ...state.filter((card) => card.id !== action.payload),
        { ...currentPassword, isVisible: !currentPassword.isVisible },
      ];
    },
  },
});

const rootReducer = combineReducers({
  users: usersSlice.reducer,
  passwords: passwordsSlice.reducer,
  modal: modalSlice.reducer,
});

export const { addUser } = usersSlice.actions;
export const { editCard, closeModal } = modalSlice.actions;
export const {
  addPassword,
  deletePassword,
  editPassword,
  togglePassword,
} = passwordsSlice.actions;
export default rootReducer;
