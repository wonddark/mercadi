import { NavLink, Outlet, useLocation } from "react-router-dom";

function Home() {
  const { pathname } = useLocation();
  return (
    <div className="container-fluid p-0">
      {pathname === "/" ? (
        <h1>
          Bienvenido a Subastia
          <NavLink to="/user/feed">lo último que tenemos para ti</NavLink>
        </h1>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default Home;
