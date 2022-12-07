import { useAppSelector } from "./state.hooks";
import { selectId } from "../state/slices/session";
import { useGetOffersByUserIdQuery } from "../state/services/offers.endpoints";

function useUserArticles({ itemsPerPage }: { itemsPerPage: number }) {
  const state = useAppSelector((state) => state);
  const userId = selectId(state);
  const { data, isLoading, isError } = useGetOffersByUserIdQuery({
    userId,
    itemsPerPage,
  });

  return { data, isLoading, isError };
}

export default useUserArticles;
