export type BidInputs = {
  offer: string;
  quantity: number | string;
};

export type UserBidsInputs = {
  userId: string;
  page?: number;
  itemsPerPage?: number;
  openOffers?: boolean;
};
