export type POSTItemParameters = {
  description: string;
  price: number;
  bidding: boolean;
  contactPhones: string[];
  additionalInfo: string | undefined;
  homeDelivery: number;
  conditionStatus: number | undefined;
};

export type GETOffersParameters = {
  page?: number;
  itemsPerPage?: number;
  open?: boolean;
  query?: string;
};
