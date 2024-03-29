import {configureStore} from "@reduxjs/toolkit";
import sessionReducer, {SESSION_STORE_KEY} from "./slices/session.slice";
import api, {API_STORE_KEY, reducer as apiReducer} from "./services/api";
import pageTitleReducer, {PAGE_TITLE_KEY} from "./slices/page-title.slice";
import breadcrumbReducer, {
    BREADCRUMB_STORE_KEY,
} from "./slices/breadcrumb.slice";

const STORAGE_KEY = "stocked";
const persistedState = (() => {
  try {
    const rawState = localStorage.getItem(STORAGE_KEY);
    if (rawState) {
      const parsed = JSON.parse(rawState);
      delete parsed[API_STORE_KEY];
      return parsed;
    }
    return undefined;
  } catch (e) {
    return undefined;
  }
})();

export const store = configureStore({
  reducer: {
    [SESSION_STORE_KEY]: sessionReducer,
    [API_STORE_KEY]: apiReducer,
    [PAGE_TITLE_KEY]: pageTitleReducer,
    [BREADCRUMB_STORE_KEY]: breadcrumbReducer,
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

store.subscribe(() => {
  const stateToStore = JSON.parse(JSON.stringify(store.getState()));
  process.env.NODE_ENV === "production" && delete stateToStore[API_STORE_KEY];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToStore));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
