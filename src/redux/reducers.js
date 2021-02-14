import { combineReducers, createSlice } from "@reduxjs/toolkit";

const usersInitialState = {
  isLoggedIn: false,
  allUsers: [],
  currentUser: {},
};

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
  initialState: usersInitialState,
  reducers: {
    addUser(state, action) {
      state.allUsers.push(action.payload);
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },
    loginUser(state, { payload }) {
      const userMatchedByEmail = state.allUsers.find(
        (user) => user.email === payload.email
      );
      if (userMatchedByEmail?.password === payload.password) {
        state.isLoggedIn = true;
        state.currentUser = userMatchedByEmail;
      }
    },
    logOutUser(state) {
      state.isLoggedIn = false;
      state.currentUser = {};
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

export const { addUser, loginUser, logOutUser } = usersSlice.actions;
export const { editCard, closeModal } = modalSlice.actions;
export const {
  addPassword,
  deletePassword,
  editPassword,
  togglePassword,
} = passwordsSlice.actions;
export default rootReducer;
