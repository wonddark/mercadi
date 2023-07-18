import FeedOffer from "./article/FeedOffer";
import useFeed from "../hooks/feed.hook";
import FeedOfferPlaceholder from "./article/FeedOfferPlaceholder";
import FeedNoArticles from "./article/FeedNoArticles";

function FeedsColumn() {
  const { data, isLoading, infinityRef } = useFeed();
  return (
    <div className="feed-column container-xxl">
      {isLoading ? (
        <FeedOfferPlaceholder />
      ) : data.length > 0 ? (
        <div ref={infinityRef}>
          {data.map((item) => (
            <FeedOffer key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <FeedNoArticles />
      )}
    </div>
  );
}

export default FeedsColumn;
