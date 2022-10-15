import { Container } from "reactstrap";
import { dummyOffers } from "../data/dummy-offers";
import BidsQuickView from "./BidsQuickView";

function Bids() {
  return (
    <Container className="px-0">
      <p className="small text- fw-bold text-muted">Tus pujas</p>
      <Container
        className="px-0 pe-1"
        style={{
          height: "calc(32vh)",
          overflow: "auto",
        }}
      >
        {dummyOffers.slice(0, 3).map((item, index) => (
          <BidsQuickView
            id={`${index}`}
            name={item.name}
            initialOffer={item.initialOffer}
            currentOffer={item.currentOffer}
            myOffer={item.myOffer}
            key={index}
          />
        ))}
      </Container>
    </Container>
  );
}

export default Bids;
