import Offers from "./Offers";
import Bids from "./Bids";
import { Container } from "reactstrap";

function FeedQuickAccess() {
  return (
    <Container className="px-0 py-2">
      <Offers />
      <div className="mt-5" />
      <Bids />
    </Container>
  );
}

export default FeedQuickAccess;
