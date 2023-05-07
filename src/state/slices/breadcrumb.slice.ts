import { createSlice } from "@reduxjs/toolkit";

export const BREADCRUMB_STORE_KEY = "breadcrumb";

type BreadcrumbState = {
  name: string;
  path: string;
  current: boolean;
}[];
const initialState: BreadcrumbState = [];
const breadcrumbSlice = createSlice({
  name: BREADCRUMB_STORE_KEY,
  initialState,
  reducers: {
    addBreadcrumbItem: (state, { payload }) => {
      state.concat(payload);
    },
    activateBreadcrumbItem: (state, { payload }) => {
      const currentIndex = state.findIndex((item) => item.current);
      if (currentIndex > -1) {
        state[currentIndex].current = false;
      }
      state.concat(payload);
    },
    removeBreadcrumbItem: (state, { payload }) => {
      state = state.filter((item) => item.path !== payload);
      return state;
    },
    resetBreadcrumbItem: () => {
      return initialState;
    },
  },
});

export default breadcrumbSlice.reducer;
