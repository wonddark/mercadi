import FeedQuickAccess from "./FeedQuickAccess";
import { useAppSelector } from "../hooks/state.hooks";
import { selectId, selectIsLogged } from "../state/slices/session.slice";
import { pageTitle } from "../helpers/page-title.helper";
import MustBeAuthenticated from "./MustBeAuthenticated";
import { Outlet } from "react-router-dom";

function HomeFeed() {
  const state = useAppSelector((state) => state);
  const isLogged = selectIsLogged(state);
  const userId = selectId(state);
  pageTitle("Home");
  return (
    <div className="container-xxl mt-3">
      <div className="row">
        <div className="col col-12 col-lg-8">
          <Outlet />
        </div>
        <div className="col d-none d-lg-block col-lg-4">
          {isLogged && userId ? <FeedQuickAccess /> : <MustBeAuthenticated />}
        </div>
      </div>
    </div>
  );
}

export default HomeFeed;
