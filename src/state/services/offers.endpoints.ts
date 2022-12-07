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
    closeOffer: builder.mutation({
      query: (offerId: string) => ({
        url: `/offers/${offerId}`,
        method: "DELETE",
        body: undefined,
      }),
      invalidatesTags: ["ENTITY_OFFER"],
    }),
  }),
  overrideExisting: false,
});

export const {
  usePostOfferMutation,
  useGetOffersQuery,
  usePostMediaMutation,
  useGetOffersByUserIdQuery,
  useCloseOfferMutation,
} = offersEndpoints;
