import { useGetOffersQuery } from "../state/services/api";
import { useEffect, useState } from "react";

function useFeed() {
  const [response, setResponse] = useState([] as any[]);
  const { data, isLoading } = useGetOffersQuery(1);

  useEffect(() => {
    if (data) setResponse(data["hydra:member"]);
  }, [data]);
  return { data: response, isLoading };
}

export default useFeed;
