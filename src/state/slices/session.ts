import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import api from "../services/api";

export const SESSION_STORE_KEY = "session";
interface SessionState {
  isLogged: boolean;
  token: string;
  email: string;
  roles: string[];
  lastname: string;
  name: string;
  id: string;
}
const initialState: SessionState = {
  isLogged: false,
  token: "",
  email: "",
  roles: [],
  lastname: "",
  name: "",
  id: "",
};
const sessionSlice = createSlice({
  name: SESSION_STORE_KEY,
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.authenticate.matchFulfilled,
      (state, { payload: { token } }) => {
        state.isLogged = true;
        state.token = token;
      }
    );
    builder.addMatcher(
      api.endpoints.whoAmI.matchFulfilled,
      (
        state,
        {
          payload: {
            account: { email, roles },
            name,
            lastname,
            id,
          },
        }
      ) => {
        state.email = email;
        state.lastname = lastname;
        state.name = name;
        state.roles = roles;
        state.id = id;
      }
    );
    builder.addMatcher(
      api.endpoints.updateUserData.matchFulfilled,
      (state, { payload: { lastname, name } }) => {
        state.lastname = lastname;
        state.name = name;
      }
    );
  },
});

export const { logout } = sessionSlice.actions;

export const selectIsLogged = (state: RootState) =>
  state[SESSION_STORE_KEY].isLogged;
export const selectName = (state: RootState) => state[SESSION_STORE_KEY].name;
export const selectId = (state: RootState) => state[SESSION_STORE_KEY].id;

export default sessionSlice.reducer;
