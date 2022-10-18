import { configureStore } from "@reduxjs/toolkit";
import sessionReducer, { SESSION_STORE_KEY } from "./slices/session";

export const store = configureStore({
  reducer: {
    [SESSION_STORE_KEY]: sessionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
