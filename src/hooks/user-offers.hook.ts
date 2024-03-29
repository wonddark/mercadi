import { useAppSelector } from "./state.hooks";
import { selectId } from "../state/slices/session.slice";
import { useGetBidsPerUserQuery } from "../state/services/offers.endpoints";

function useUserOffers({
  itemsPerPage = 30,
  openOffers = undefined,
}: {
  itemsPerPage?: number;
  openOffers?: boolean;
}) {
  const state = useAppSelector((state) => state);
  const userId = selectId(state);
  const { data, isLoading, isError } = useGetBidsPerUserQuery({
    userId,
    itemsPerPage,
    openOffers,
  });

  return { data, isLoading, isError };
}

export default useUserOffers;
