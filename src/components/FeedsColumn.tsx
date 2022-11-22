import { dummyOffers } from "../data/dummy-offers";
import FeedOffer from "./FeedOffer";

function FeedsColumn() {
  return (
    <div className="feed-column">
      {dummyOffers.map((item) => (
        <FeedOffer key={item.id} />
      ))}
    </div>
  );
}

export default FeedsColumn;
