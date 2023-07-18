import { Outlet } from "react-router-dom";

function HomeFeed() {
  return (
    <div className="container-xxl mt-3">
      <div className="row">
        <div className="col col-12 col-lg-8 mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomeFeed;
