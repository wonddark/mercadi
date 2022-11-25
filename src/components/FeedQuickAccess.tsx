import Offers from "./Offers";
import Bids from "./Bids";

function FeedQuickAccess() {
  return (
    <div className="container quick-access-container">
      <Offers />
      <hr className="my-3" />
      <Bids />
    </div>
  );
}

export default FeedQuickAccess;
