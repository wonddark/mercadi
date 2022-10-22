import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { RegisterBodyTypes } from "./register-body.types";

export const API_STORE_KEY = "api";
const api = createApi({
  reducerPath: API_STORE_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000",
    mode: "cors",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (arg: RegisterBodyTypes) => ({
        url: "/register",
        method: "POST",
        body: arg,
      }),
    }),
  }),
});

export const { reducer } = api;
export const { useRegisterMutation } = api;
export default api;
