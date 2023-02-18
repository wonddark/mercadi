import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const SEARCH_STORE_KEY = "search";
type SearchState = {
  name: string;
  description: string;
};
const initialState: SearchState = {
  name: "",
  description: "",
};
const searchSlice = createSlice({
  name: SEARCH_STORE_KEY,
  initialState,
  reducers: {
    setName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
    },
    setDescription: (state, { payload }: PayloadAction<string>) => {
      state.description = payload;
    },
  },
});

export const selectName = (state: RootState) => state[SEARCH_STORE_KEY].name;
export const selectDescription = (state: RootState) =>
  state[SEARCH_STORE_KEY].description;
export const { setName, setDescription } = searchSlice.actions;
export default searchSlice.reducer;
