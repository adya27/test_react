import { createSlice } from "@reduxjs/toolkit";

const usersInitialState = {
  isLoggedIn: false,
  allUsers: [],
  currentUser: {},
};

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

const auth = usersSlice.reducer;

export const { addUser, loginUser, logOutUser } = usersSlice.actions;

export default auth;
