import FeedQuickAccess from "./FeedQuickAccess";
import FeedsColumn from "./FeedsColumn";

function HomeFeed() {
  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col col-md-8">
          <FeedsColumn />
        </div>
        <div className="col col-md-4">
          <FeedQuickAccess />
        </div>
      </div>
    </div>
  );
}

export default HomeFeed;
