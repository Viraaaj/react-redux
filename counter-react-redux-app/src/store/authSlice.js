import { createSlice } from "@reduxjs/toolkit";

// Authentication
const initialAuthState = {
  isAuthenticated: false,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authenticationSlice.actions;
// by creating this we don't need to worry about unique identifiers as redux will create that for us

export default authenticationSlice;
