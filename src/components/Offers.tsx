import OfferQuickView from "./OfferQuickView";
import { dummyOffers } from "../data/dummy-offers";
import { Link } from "react-router-dom";

function Offers() {
  return (
    <div className="container-fluid">
      <Link
        to="/user/offers"
        className="small fw-bold text-muted text-decoration-none"
      >
        Tus ofertas
      </Link>
      <div className="container-fluid">
        {dummyOffers.slice(0, 3).map((item) => (
          <OfferQuickView
            id={item.id}
            name={item.name}
            initialOffer={item.initialBid}
            currentOffer={item.currentBid}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Offers;
