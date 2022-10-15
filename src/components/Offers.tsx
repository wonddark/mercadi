import { Container } from "reactstrap";
import OfferQuickView from "./OfferQuickView";
import { dummyOffers } from "../data/dummy-offers";
import { Link } from "react-router-dom";

function Offers() {
  return (
    <Container className="px-0">
      <Link
        to="/user/offers"
        className="small fw-bold text-muted text-decoration-none"
      >
        Tus ofertas
      </Link>
      <Container
        className="px-0 pe-1"
        style={{
          height: "calc(32vh)",
          overflow: "auto",
        }}
      >
        {dummyOffers.slice(0, 3).map((item) => (
          <OfferQuickView
            id={item.id}
            name={item.name}
            initialOffer={item.initialBid}
            currentOffer={item.currentBid}
            key={item.id}
          />
        ))}
      </Container>
    </Container>
  );
}

export default Offers;
