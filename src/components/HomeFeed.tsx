import FeedQuickAccess from "./FeedQuickAccess";
import FeedsColumn from "./FeedsColumn";
import { useAppSelector } from "../hooks/state.hooks";
import { selectIsLogged } from "../state/slices/session";
import { pageTitle } from "../helpers/page-title.helper";

function HomeFeed() {
  const state = useAppSelector((state) => state);
  const isLogged = selectIsLogged(state);
  pageTitle("Home");
  return (
    <div className="container-xxl mt-3">
      <div className="row">
        <div className="col col-12 col-lg-8">
          <FeedsColumn />
        </div>
        <div className="col d-none d-lg-block col-lg-4">
          {isLogged && <FeedQuickAccess />}
          {!isLogged && (
            <p className="lead">You must be logged to see this column</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeFeed;
