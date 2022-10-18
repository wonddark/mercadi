import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const SESSION_STORE_KEY = "session";
interface SessionState {
  isLogged: boolean;
}
const initialState: SessionState = {
  isLogged: false,
};
const sessionSlice = createSlice({
  name: SESSION_STORE_KEY,
  initialState,
  reducers: {
    login: (state) => {
      state.isLogged = true;
      return state;
    },
    logout: () => initialState,
  },
});

export const { login, logout } = sessionSlice.actions;

export const selectIsLogged = (state: RootState) =>
  state[SESSION_STORE_KEY].isLogged;

export default sessionSlice.reducer;
