import { Outlet } from "react-router-dom";
import { pageTitle } from "../../helpers/page-title.helper";
import GoBackBtn from "../common/GoBackBtn";

function UserHome() {
  pageTitle("Perfil");
  return (
    <div className="container-xxl mt-3">
      <GoBackBtn to="/muro" />
      <Outlet />
    </div>
  );
}

export default UserHome;
