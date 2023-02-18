import { Outlet } from "react-router-dom";
import GoBackBtn from "../common/GoBackBtn";
import usePageTitle from "../../hooks/page-title.hook";

function UserHome() {
  usePageTitle({ name: "Perfil" });
  return (
    <div className="container-xxl mt-3">
      <GoBackBtn to="/muro" />
      <Outlet />
    </div>
  );
}

export default UserHome;
