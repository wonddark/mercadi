import OfferQuickView from "./OfferQuickView";
import { dummyOffers } from "../../data/dummy-offers";
import { Link } from "react-router-dom";

function Offers() {
  return (
    <div className="container-fluid">
      <Link
        to="/perfil/ofertas"
        className="small fw-bold text-muted text-decoration-none fs-6"
      >
        Tus artículos
      </Link>
      <div className="container-fluid p-0">
        {dummyOffers.slice(0, 3).map((item) => (
          <OfferQuickView
            id={item.id}
            name={item.name}
            currentOffer={item.currentBid}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Offers;
