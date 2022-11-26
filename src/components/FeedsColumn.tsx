import { dummyOffers } from "../data/dummy-offers";
import FeedOffer from "./article/FeedOffer";
import useFeed from "../hooks/feed.hook";
import FeedOfferPlaceholder from "./article/FeedOfferPlaceholder";

function FeedsColumn() {
  const { data, isLoading } = useFeed();
  return (
    <div className="feed-column">
      {isLoading
        ? dummyOffers.map((item) => <FeedOfferPlaceholder key={item.id} />)
        : data.map((item) => <FeedOffer key={item.id} item={item} />)}
    </div>
  );
}

export default FeedsColumn;
