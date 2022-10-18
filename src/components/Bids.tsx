import { Container } from "reactstrap";
import { dummyBids } from "../data/dummy-bids";
import BidsQuickView from "./BidsQuickView";
import { Link } from "react-router-dom";

function Bids() {
  return (
    <Container className="px-0">
      <Link
        to="/user/bids"
        className="small fw-bold text-muted text-decoration-none"
      >
        Tus pujas
      </Link>
      <Container className="px-0">
        {dummyBids.slice(0, 3).map((item) => (
          <BidsQuickView
            id={item.id}
            name={item.name}
            initialOffer={item.initialBid}
            currentOffer={item.currentBid}
            myOffer={item.myBid}
            key={item.id}
          />
        ))}
      </Container>
    </Container>
  );
}

export default Bids;
