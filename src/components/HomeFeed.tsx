import FeedQuickAccess from "./FeedQuickAccess";
import FeedsColumn from "./FeedsColumn";
import { useAppSelector } from "../hooks/state.hooks";
import { selectId, selectIsLogged } from "../state/slices/session";
import { pageTitle } from "../helpers/page-title.helper";
import MustBeAuthenticated from "./MustBeAuthenticated";

function HomeFeed() {
  const state = useAppSelector((state) => state);
  const isLogged = selectIsLogged(state);
  const userId = selectId(state);
  pageTitle("Home");
  return (
    <div className="container-xxl mt-3">
      <div className="row">
        <div className="col col-12 col-lg-8">
          <FeedsColumn />
        </div>
        <div className="col d-none d-lg-block col-lg-4">
          {isLogged && userId ? <FeedQuickAccess /> : <MustBeAuthenticated />}
        </div>
      </div>
    </div>
  );
}

export default HomeFeed;
