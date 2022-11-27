import FeedQuickAccess from "./FeedQuickAccess";
import FeedsColumn from "./FeedsColumn";

function HomeFeed() {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col col-12 col-lg-8">
          <FeedsColumn />
        </div>
        <div className="col d-none d-lg-block col-lg-4">
          <FeedQuickAccess />
        </div>
      </div>
    </div>
  );
}

export default HomeFeed;
