import OfferQuickView from "./OfferQuickView";
import { Link } from "react-router-dom";
import { useGetOffersByUserIdQuery } from "../../state/services/api";
import { useAppSelector } from "../../hooks/state.hooks";
import { selectId } from "../../state/slices/session";
import OfferQuickViewPlaceholder from "./OfferQuickViewPlaceholder";

function Offers() {
  const state = useAppSelector((state) => state);
  const userId = selectId(state);
  const { data, isLoading } = useGetOffersByUserIdQuery({
    userId,
    itemsPerPage: 3,
  });
  return (
    <div className="container-xxl">
      <Link
        to="/perfil/ofertas"
        className="small fw-bold text-muted text-decoration-none fs-6"
      >
        Tus artículos
      </Link>
      <div className="container-xxl p-0">
        {!isLoading ? (
          data["hydra:member"].map(
            (item: {
              id: string;
              name: string;
              currentBid: string;
              highestBid: any;
            }) => (
              <OfferQuickView
                id={item.id}
                name={item.name}
                key={item.id}
                highestBid={item.highestBid.quantity}
              />
            )
          )
        ) : (
          <>
            {[1, 2, 3].map((item) => (
              <OfferQuickViewPlaceholder key={item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Offers;
