import Offers from "./Offers";
import Bids from "./Bids";
import { Container } from "reactstrap";

function FeedQuickAccess() {
  return (
    <Container
      className="px-0 pe-1 py-2"
      style={{
        height: "calc(85vh)",
        overflow: "auto",
      }}
    >
      <Offers />
      <div className="mt-5" />
      <Bids />
    </Container>
  );
}

export default FeedQuickAccess;
