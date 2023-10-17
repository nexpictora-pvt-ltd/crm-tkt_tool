import { createSlice } from "@reduxjs/toolkit";
import INITIAL_STATE from "./user.state";

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setIsUserAuthenticated(state, action) {
      state.isUserAuthenticated = action.payload;
    },

  },
});

export const { setIsUserAuthenticated } = userSlice.actions;

export const userReducer = userSlice.reducer;
