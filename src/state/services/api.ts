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
  tagTypes: ["ENTITY_OFFER", "ENTITY_BID"],
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
      invalidatesTags: ["ENTITY_OFFER"],
    }),
    getOffers: builder.query({
      query: (page: number) => ({
        url: "/offers",
        params: { page },
      }),
      providesTags: ["ENTITY_OFFER"],
    }),
    postMedia: builder.mutation({
      query: (arg: FormData) => ({
        url: "/media_objects",
        body: arg,
        method: "POST",
      }),
      invalidatesTags: ["ENTITY_OFFER"],
    }),
    postBid: builder.mutation({
      query: (args: BidInputs) => ({
        url: "/bids",
        body: args,
        method: "POST",
      }),
      invalidatesTags: ["ENTITY_BID"],
    }),
    getHighestBidPerOffer: builder.query({
      query: (offerId) => ({
        url: `/offer/${offerId}/bids/highest`,
      }),
      providesTags: ["ENTITY_BID"],
    }),
    getOffersByUserId: builder.query({
      query: ({
        userId,
        page = 1,
        itemsPerPage = 30,
      }: {
        userId: string;
        page?: number;
        itemsPerPage?: number;
      }) => ({
        url: `/user/${userId}/offers`,
        params: { page, itemsPerPage },
      }),
      providesTags: ["ENTITY_BID"],
    }),
    getBidsPerUser: builder.query({
      query: ({
        userId,
        page = 1,
        itemsPerPage = 30,
      }: {
        userId: string;
        page?: number;
        itemsPerPage?: number;
      }) => ({
        url: `/user/${userId}/bids`,
        params: { page, itemsPerPage },
      }),
      providesTags: ["ENTITY_BID"],
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
  useGetOffersByUserIdQuery,
  useGetBidsPerUserQuery,
} = api;
export default api;
