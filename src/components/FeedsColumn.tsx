import FeedOffer from "./article/FeedOffer";
import useFeed from "../hooks/feed.hook";
import FeedOfferPlaceholder from "./article/FeedOfferPlaceholder";

function FeedsColumn() {
  const { data, isLoading } = useFeed();
  return (
    <div className="feed-column container-xxl">
      {isLoading ? (
        [1, 2, 3, 4, 5].map((item) => <FeedOfferPlaceholder key={item} />)
      ) : data.length > 0 ? (
        data.map((item) => <FeedOffer key={item.id} item={item} />)
      ) : (
        <p className="lead">No hay nada para mostrar</p>
      )}
    </div>
  );
}

export default FeedsColumn;
