import { useLazyGetOffersQuery } from "../state/services/offers.endpoints";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDescription, selectName } from "../state/slices/search";
import useInfiniteScroll from "react-easy-infinite-scroll-hook";

function useFeed() {
  const [response, setResponse] = useState([] as any[]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const name = useSelector(selectName);
  const description = useSelector(selectDescription);
  const [getOffers, { isLoading }] = useLazyGetOffersQuery();

  const infinityRef = useInfiniteScroll<HTMLDivElement>({
    next: loadData,
    rowCount: response.length,
    hasMore: { down: hasMore },
  });

  async function loadData() {
    getOffers({ page, name, description }).then(({ data }) => {
      setResponse((prevState) => [...prevState, ...data["hydra:member"]]);
      const nextPage = data["hydra:view"]["hydra:next"] ? page + 1 : page;
      if (nextPage !== page) {
        setPage(nextPage);
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    });
  }

  const initialLoad = () => {
    loadData().finally();
  };

  useEffect(
    initialLoad,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return { data: response, isLoading, infinityRef };
}

export default useFeed;
