// src/features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

//Initial state: When app boots up, assume nobody is logged in yet
const initialState = {
  status: false,    // true = authenticated, false = guest
  userData: null,   // will hold { email, name, role } once logged in
};

//  The slice: defines the state and the mutations (reducers)
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Action 1: Runs when a user logs in successfully
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    // Action 2: Runs when a user clicks log out
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

// Export the actions so components can trigger them (dispatch)
export const { login, logout } = authSlice.actions;

// Export the reducer so the central store can register it
export default authSlice.reducer;