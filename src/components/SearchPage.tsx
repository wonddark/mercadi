import usePageTitle from "../hooks/page-title.hook";
import { useSearchParams } from "react-router-dom";
import { useLazyGetOffersQuery } from "../state/services/items.endpoints";
import { ChangeEventHandler, useEffect, useState } from "react";
import FeedOffer, { FeedOfferProps } from "./article/FeedOffer";

function useSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [requestParams, setRequestParams] = useState<{
    page: number;
    open: boolean;
  }>({
    page: 1,
    open: true,
  });
  const [getOffers, { data, isLoading, isSuccess, isError }] =
    useLazyGetOffersQuery();
  useEffect(() => {
    if (query !== null) {
      getOffers({
        page: requestParams.page,
        open: requestParams.open ? true : undefined,
        query,
      });
    }
  }, [query, getOffers, requestParams.page, requestParams.open]);
  const updateQuery: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setSearchParams((prev) => {
      prev.set("q", value);
      return prev;
    });
  };

  const toggleOpenOffers: ChangeEventHandler<HTMLInputElement> = ({
    target: { checked },
  }) => {
    setRequestParams((prevState) => ({ ...prevState, open: checked }));
  };

  return {
    articles: data?.["hydra:member"] || [],
    query,
    updateQuery,
    requestParams,
    toggleOpenOffers,
    isLoading,
    isSuccess,
    isError,
  };
}

function SearchPage() {
  usePageTitle({ name: "Buscar" });
  const {
    articles,
    query,
    updateQuery,
    requestParams,
    toggleOpenOffers,
    isLoading,
    isSuccess,
  } = useSearch();
  return (
    <div className="container-xxl mt-3">
      <div className="row">
        <div className="col col-12 col-md-8 order-1 order-md-0">
          {!isLoading ? (
            isSuccess ? (
              articles.map((item: FeedOfferProps["item"]) => (
                <FeedOffer key={item.id} item={item} />
              ))
            ) : (
              <>Algo ha salido mal</>
            )
          ) : (
            <>Cargando resultados</>
          )}
        </div>
        <div className="col col-12 col-md-4 order-0 order-md-1">
          <div className="mb-3">
            <input
              type="search"
              className="form-control"
              value={query || ""}
              onChange={updateQuery}
            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={requestParams.open}
              id="flexCheckDefault"
              onChange={toggleOpenOffers}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Solo ofertas abiertas
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
