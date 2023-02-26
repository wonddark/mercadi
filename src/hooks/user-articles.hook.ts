import { useAppSelector } from "./state.hooks";
import { selectId } from "../state/slices/session.slice";
import { useGetOffersByUserIdQuery } from "../state/services/offers.endpoints";

function useUserArticles({
  itemsPerPage,
  open = true,
}: {
  itemsPerPage: number;
  open?: boolean | null;
}) {
  const state = useAppSelector((state) => state);
  const userId = selectId(state);
  const { data, isLoading, isError } = useGetOffersByUserIdQuery({
    userId,
    itemsPerPage,
    open,
  });

  return { data, isLoading, isError };
}

export default useUserArticles;
