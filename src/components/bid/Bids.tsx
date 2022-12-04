import BidsQuickView from "./BidsQuickView";
import { Link } from "react-router-dom";
import { useGetBidsPerUserQuery } from "../../state/services/api";
import { useAppSelector } from "../../hooks/state.hooks";
import { selectId } from "../../state/slices/session";
import BidsQuickViewPlaceholder from "./BidsQuickViewPlaceholder";

function Bids() {
  const state = useAppSelector((state) => state);
  const userId = selectId(state);
  const { data, isLoading } = useGetBidsPerUserQuery({
    userId,
    itemsPerPage: 3,
  });
  return (
    <div className="container-xxl">
      <Link
        to="/perfil/pujas"
        className="small fw-bold text-muted text-decoration-none fs-6"
      >
        Tus ofertas
      </Link>
      <div className="container-xxl p-0">
        {!isLoading
          ? data["hydra:member"].map(
              (item: {
                id: string;
                quantity: number;
                deletable: boolean;
                offer: { id: string; name: string };
              }) => (
                <BidsQuickView
                  key={item.id}
                  id={item.id}
                  offerId={item.offer.id}
                  offerName={item.offer.name}
                  userBid={item.quantity}
                  isDeletable={item.deletable}
                />
              )
            )
          : [1, 2, 3].map((item) => <BidsQuickViewPlaceholder key={item} />)}
      </div>
    </div>
  );
}

export default Bids;
