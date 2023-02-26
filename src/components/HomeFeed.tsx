import FeedQuickAccess from "./FeedQuickAccess";
import { useAppSelector } from "../hooks/state.hooks";
import {
  selectId,
  selectIsLogged,
  selectName,
} from "../state/slices/session.slice";
import MustBeAuthenticated from "./MustBeAuthenticated";
import { Outlet } from "react-router-dom";
import usePageTitle from "../hooks/page-title.hook";

function HomeFeed() {
  const isLogged = useAppSelector(selectIsLogged);
  const userId = useAppSelector(selectId);
  const userName = useAppSelector(selectName);
  usePageTitle({ name: userName });
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
