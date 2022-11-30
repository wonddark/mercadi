import { useGetOffersQuery } from "../state/services/api";
import { useEffect, useState } from "react";

function useFeed() {
  const [response, setResponse] = useState([] as any[]);
  const { data, isLoading } = useGetOffersQuery(1);

  const loadData = () => {
    if (!isLoading && data) {
      setResponse(data["hydra:member"]);
    }
  };

  useEffect(loadData, [isLoading, data]);

  return { data: response, isLoading };
}

export default useFeed;
