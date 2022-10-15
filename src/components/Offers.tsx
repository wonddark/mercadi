import { Container } from "reactstrap";
import OfferQuickView from "./OfferQuickView";
import { dummyArticles } from "../data/dummy-articles";

function Offers() {
  return (
    <Container className="px-0">
      <p className="small text- fw-bold text-muted">Tus ofertas</p>
      <Container
        className="px-0 pe-1"
        style={{
          height: "calc(32vh)",
          overflow: "auto",
        }}
      >
        {dummyArticles.slice(0, 3).map((item, index) => (
          <OfferQuickView
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
