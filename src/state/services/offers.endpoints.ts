import api from "./api";
import { POSTOfferParameters } from "../../types/offer.types";

const offersEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
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
  }),
  overrideExisting: false,
});

export const {
  usePostOfferMutation,
  useGetOffersQuery,
  usePostMediaMutation,
  useGetHighestBidPerOfferQuery,
  useGetOffersByUserIdQuery,
} = offersEndpoints;
