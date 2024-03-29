import { useLazyGetOffersQuery } from "../state/services/items.endpoints";
import { useEffect, useState } from "react";
import useInfiniteScroll from "react-easy-infinite-scroll-hook";

function useFeed() {
  const [response, setResponse] = useState([] as any[]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [getOffers] = useLazyGetOffersQuery();

  async function loadData() {
    setIsLoading(true);
    getOffers({ page })
      .then(({ data }) => {
        setResponse((prevState) => [...prevState, ...data["hydra:member"]]);
        const nextPage = data["hydra:view"]["hydra:next"] ? page + 1 : page;
        if (nextPage !== page) {
          setPage(nextPage);
          setHasMore(true);
        } else {
          setHasMore(false);
        }
      })
      .finally(() => setIsLoading(false));
  }

  const initialLoad = () => {
    loadData().finally();
  };

  useEffect(
    initialLoad,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const infinityRef = useInfiniteScroll<HTMLDivElement>({
    next: loadData,
    rowCount: response.length,
    hasMore: { down: hasMore },
  });

  return { data: response, isLoading, infinityRef };
}

export default useFeed;
