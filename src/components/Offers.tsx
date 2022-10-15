import { Container } from "reactstrap";
import OfferQuickView from "./OfferQuickView";
import { dummyArticles } from "../data/dummy-articles";
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
        {dummyArticles.slice(0, 3).map((item, index) => (
          <OfferQuickView
            id={`${index}`}
            name={item.name}
            initialOffer={item.initialOffer}
            currentOffer={item.currentOffer}
            key={index}
          />
        ))}
      </Container>
    </Container>
  );
}

export default Offers;
