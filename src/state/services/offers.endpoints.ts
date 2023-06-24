import api from "./api";
import { BidInputs, UserBidsInputs } from "../../types/bid.types";

const offersEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    postBid: builder.mutation({
      query: (args: BidInputs) => ({
        url: "/bids",
        body: args,
        method: "POST",
      }),
      invalidatesTags: ["ENTITY_BID", "ENTITY_ITEM"],
    }),
    deleteBid: builder.mutation({
      query: (bidId: string) => ({
        url: `/bids/${bidId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ENTITY_BID", "ENTITY_ITEM"],
    }),
    getBidsPerUser: builder.query({
      query: ({
        userId,
        page = 1,
        itemsPerPage = 30,
        openOffers = undefined,
      }: UserBidsInputs) => ({
        url: `/user/${userId}/bids`,
        params: { page, itemsPerPage, "offer.open": openOffers },
      }),
      providesTags: ["ENTITY_BID"],
    }),
  }),
  overrideExisting: false,
});

export const {
  usePostBidMutation,
  useDeleteBidMutation,
  useGetBidsPerUserQuery,
} = offersEndpoints;
