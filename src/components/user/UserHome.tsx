import { Outlet } from "react-router-dom";
import useGoBack from "../../hooks/go-back.hooks";
import { pageTitle } from "../../helpers/page-title.helper";

function UserHome() {
  const { goBackTo: goBackToFeed } = useGoBack("/muro");
  pageTitle("Perfil");
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
