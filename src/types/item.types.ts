export type POSTItemParameters = {
  description: string;
  price: number;
  bidding: boolean;
  contactPhones: string[];
  additionalInfo: string;
  homeDelivery: number;
};

export type GETOffersParameters = {
  page?: number;
  itemsPerPage?: number;
  open?: boolean;
  query?: string;
};
