import { dummyOffers } from "../data/dummy-offers";
import FeedOffer from "./FeedOffer";

function FeedsColumn() {
  return (
    <div style={{ height: "calc(85vh)", overflow: "auto" }}>
      {dummyOffers.map((item) => (
        <FeedOffer key={item.id} />
      ))}
    </div>
  );
}

export default FeedsColumn;
