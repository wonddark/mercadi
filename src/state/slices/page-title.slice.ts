import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

export const PAGE_TITLE_KEY = "page-title";

type PAGE_TITLE_STATE = string;
const SITE_NAME = process.env.APP_NAME;
const SITE_SLOGAN = "El precio ideal para tus ventas";
const initialState: PAGE_TITLE_STATE = `${SITE_NAME} - ${SITE_SLOGAN}`;

const pageTitleSlice = createSlice({
  name: PAGE_TITLE_KEY,
  initialState,
  reducers: {
    setTitle: (state, { payload }: PayloadAction<string>) => {
      return `${payload} - ${SITE_NAME}`;
    },
    resetPageTitle: () => {
      return initialState;
    },
  },
});

export const selectPageTitle = (state: RootState) => state[PAGE_TITLE_KEY];

export const { setTitle, resetPageTitle } = pageTitleSlice.actions;
export default pageTitleSlice.reducer;
