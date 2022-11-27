import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { RegisterBodyTypes } from "../../types/register-body.types";
import { RootState } from "../store";
import { SESSION_STORE_KEY } from "../slices/session";
import { POSTOfferParameters } from "../../types/offer.types";
import { BidInputs } from "../../types/bid.types";

export const API_STORE_KEY = "api";
const api = createApi({
  reducerPath: API_STORE_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    mode: "cors",
    cache: "no-store",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState)[SESSION_STORE_KEY].token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
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
    postOffer: builder.mutation({
      query: (args: POSTOfferParameters) => ({
        url: "/offers",
        method: "POST",
        body: args,
      }),
    }),
    getOffers: builder.query({
      query: (page: number) => ({
        url: "/offers",
        params: { page },
      }),
    }),
    postMedia: builder.mutation({
      query: (arg: FormData) => ({
        url: "/media_objects",
        body: arg,
        method: "POST",
      }),
    }),
    postBid: builder.mutation({
      query: (args: BidInputs) => ({
        url: "/bids",
        body: args,
        method: "POST",
      }),
    }),
    getHighestBidPerOffer: builder.query({
      query: (offerId) => ({
        url: `/offer/${offerId}/bids/highest`,
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
  usePostOfferMutation,
  useGetOffersQuery,
  usePostMediaMutation,
  usePostBidMutation,
  useGetHighestBidPerOfferQuery,
} = api;
export default api;
