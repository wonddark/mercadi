import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { RegisterBodyTypes } from "./register-body.types";
import { RootState } from "../store";
import { SESSION_STORE_KEY } from "../slices/session";

export const API_STORE_KEY = "api";
const api = createApi({
  reducerPath: API_STORE_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000",
    mode: "cors",
    cache: "no-cache",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState)[SESSION_STORE_KEY].token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
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
    authenticate: builder.mutation({
      query: (args: { email: string; password: string }) => ({
        url: "/authenticate",
        method: "POST",
        body: args,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    whoAmI: builder.query({
      query: () => ({
        url: "/me",
      }),
    }),
    updateUserData: builder.mutation({
      query: (args: { id: string; name: string; lastname: string }) => ({
        url: `/users/${args.id}`,
        method: "PATCH",
        body: JSON.stringify({ name: args.name, lastname: args.lastname }),
        headers: {
          "Content-Type": "application/merge-patch+json",
        },
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
  useAuthenticateMutation,
  useLazyWhoAmIQuery,
  useUpdateUserDataMutation,
} = api;
export default api;
