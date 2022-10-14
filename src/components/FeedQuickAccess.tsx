import AuctionArticles from "./AuctionArticles";
import AuctionOffers from "./AuctionOffers";
import { Container } from "reactstrap";

function FeedQuickAccess() {
  return (
    <Container className="px-0 py-2">
      <AuctionArticles />
      <div className="mt-5" />
      <AuctionOffers />
    </Container>
  );
}

export default FeedQuickAccess;
