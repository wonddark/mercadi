import { configureStore } from "@reduxjs/toolkit";
import sessionReducer, { SESSION_STORE_KEY } from "./slices/session";
import { API_STORE_KEY, reducer as apiReducer } from "./services/api";

export const store = configureStore({
  reducer: {
    [SESSION_STORE_KEY]: sessionReducer,
    [API_STORE_KEY]: apiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
