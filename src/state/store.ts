import { configureStore } from "@reduxjs/toolkit";
import sessionReducer, { SESSION_STORE_KEY } from "./slices/session";
import { API_STORE_KEY, reducer as apiReducer } from "./services/api";

const STORAGE_KEY = "subastia";
const persistedState = (() => {
  try {
    const rawState = localStorage.getItem(STORAGE_KEY);
    if (rawState) return JSON.parse(rawState);
    return undefined;
  } catch (e) {
    return undefined;
  }
})();

export const store = configureStore({
  reducer: {
    [SESSION_STORE_KEY]: sessionReducer,
    [API_STORE_KEY]: apiReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  const stateToStore = JSON.parse(JSON.stringify(store.getState()));
  process.env.NODE_ENV === "production" && delete stateToStore[API_STORE_KEY];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToStore));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
