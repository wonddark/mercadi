import Offers from "./article/Offers";
import Bids from "./bid/Bids";

function FeedQuickAccess() {
  return (
    <div className="quick-access-container">
      <Offers />
      <hr className="my-3" />
      <Bids />
    </div>
  );
}

export default FeedQuickAccess;
