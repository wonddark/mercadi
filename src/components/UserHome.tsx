import { Outlet } from "react-router-dom";
import UserNav from "./UserNav";

function UserHome() {
  return (
    <>
      <UserNav />
      <div className="mt-3">
        <Outlet />
      </div>
    </>
  );
}

export default UserHome;
