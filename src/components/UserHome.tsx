import { Outlet } from "react-router-dom";
import UserNav from "./UserNav";

function UserHome() {
  return (
    <div className="container-fluid p-0">
      <UserNav />
      <div className="mt-3">
        <Outlet />
      </div>
    </div>
  );
}

export default UserHome;
