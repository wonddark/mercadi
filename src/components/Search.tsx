import usePageTitle from "../hooks/page-title.hook";
import { useSearchParams } from "react-router-dom";
import { useLazyGetOffersQuery } from "../state/services/offers.endpoints";

function Search() {
  usePageTitle({ name: "Buscar" });
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [getOffers] = useLazyGetOffersQuery();
  return (
    <div className="container-xxl mt-3">
      <div className="row">
        <div className="col col-12 col-md-8 order-1 order-md-0">
          This will be search result
        </div>
        <div className="col col-12 col-md-4 order-0 order-md-1">
          This will be search form
        </div>
      </div>
    </div>
  );
}

export default Search;
