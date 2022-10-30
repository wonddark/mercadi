import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { RegisterBodyTypes } from "./register-body.types";

export const API_STORE_KEY = "api";
const api = createApi({
  reducerPath: API_STORE_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000",
    mode: "cors",
    cache: "no-cache",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (arg: RegisterBodyTypes) => ({
        url: "/register",
        method: "POST",
        body: arg,
      }),
    }),
    checkRegistration: builder.query({
      query: (id: string) => ({
        url: `/registration/check/${id}`,
      }),
    }),
    activateRegistration: builder.mutation({
      query: (id: string) => ({
        url: `/registration/activate/${id}`,
        method: "PATCH",
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/merge-patch+json",
          Accept: "application/json",
        },
      }),
    }),
    testEmail: builder.query({
      query: (email: string) => ({
        url: `/registration/test/${email}`,
      }),
    }),
  }),
});

export const { reducer } = api;
export const {
  useRegisterMutation,
  useCheckRegistrationQuery,
  useActivateRegistrationMutation,
  useLazyTestEmailQuery,
} = api;
export default api;
