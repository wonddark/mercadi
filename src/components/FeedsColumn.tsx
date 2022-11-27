import FeedOffer from "./article/FeedOffer";
import useFeed from "../hooks/feed.hook";
import FeedOfferPlaceholder from "./article/FeedOfferPlaceholder";

function FeedsColumn() {
  const { data, isLoading } = useFeed();
  return (
    <div className="feed-column container-fluid">
      {isLoading
        ? [1, 2, 3, 4, 5].map((item) => <FeedOfferPlaceholder key={item} />)
        : data.map((item) => <FeedOffer key={item.id} item={item} />)}
    </div>
  );
}

export default FeedsColumn;
