import { Outlet } from "react-router-dom";
import useGoBack from "../../hooks/go-back.hooks";

function UserHome() {
  const { goBackTo: goBackToFeed } = useGoBack("/muro");
  return (
    <div className="container-fluid mt-3">
      <button className="btn btn-secondary" onClick={goBackToFeed}>
        <i className="bi bi-arrow-left-circle-fill" />
      </button>
      <Outlet />
    </div>
  );
}

export default UserHome;
