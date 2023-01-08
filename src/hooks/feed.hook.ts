import { useGetOffersQuery } from "../state/services/offers.endpoints";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDescription, selectName } from "../state/slices/search";

function useFeed() {
  const [response, setResponse] = useState([] as any[]);
  const name = useSelector(selectName);
  const description = useSelector(selectDescription);
  const { data, isLoading } = useGetOffersQuery({ page: 1, name, description });

  const loadData = () => {
    if (!isLoading && data) {
      setResponse(data["hydra:member"]);
    }
  };

  useEffect(loadData, [isLoading, data]);

  return { data: response, isLoading };
}

export default useFeed;
