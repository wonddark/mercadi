import api from "./api";
import {
  GETOffersParameters,
  POSTOfferParameters,
} from "../../types/offer.types";

const itemsEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    postOffer: builder.mutation({
      query: (args: POSTOfferParameters) => ({
        url: "/items",
        method: "POST",
        body: args,
      }),
      invalidatesTags: ["ENTITY_ITEM"],
    }),
    getOffers: builder.query({
      query: ({
        page = 1,
        itemsPerPage = 15,
        open = undefined,
        query = "",
      }: GETOffersParameters) => ({
        url: "/items",
        params: { page, itemsPerPage, open, query },
      }),
      providesTags: ["ENTITY_ITEM"],
    }),
    postMedia: builder.mutation({
      query: (arg: FormData) => ({
        url: "/media_objects",
        body: arg,
        method: "POST",
      }),
      invalidatesTags: ["ENTITY_ITEM"],
    }),
    getOffersByUserId: builder.query({
      query: ({
        userId,
        page = 1,
        itemsPerPage = 15,
        open = true,
      }: {
        userId: string;
        page?: number;
        itemsPerPage?: number;
        open?: boolean | null;
      }) => ({
        url: `/user/${userId}/items`,
        params: { page, itemsPerPage, open },
      }),
      providesTags: ["ENTITY_ITEM"],
    }),
    closeOffer: builder.mutation({
      query: (offerId: string) => ({
        url: `/items/${offerId}`,
        method: "DELETE",
        body: undefined,
      }),
      invalidatesTags: ["ENTITY_ITEM"],
    }),
    getOfferById: builder.query({
      query: (offerId: string) => ({
        url: `/items/${offerId}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  usePostOfferMutation,
  useLazyGetOffersQuery,
  usePostMediaMutation,
  useGetOffersByUserIdQuery,
  useCloseOfferMutation,
  useGetOfferByIdQuery,
} = itemsEndpoints;
