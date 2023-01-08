import { useSelector } from "react-redux";
import { selectIsLogged } from "../../state/slices/session";
import LoggedNavItems from "./LoggedNavItems";
import NotLoggedNavItems from "./NotLoggedNavItems";
import { Link } from "react-router-dom";
import { ReactComponent as SiteLogo } from "../../assets/navbar-logo.svg";
import SearchOffers from "./SearchOffers";

function UserNav() {
  const isAuthenticated = useSelector(selectIsLogged);
  return (
    <header className="bg-navbar-dark pb-2 pb-md-0">
      <nav className="navbar navbar-expand navbar-dark bg-navbar-dark">
        <div className="container-xxl">
          <Link className="navbar-brand" to="/">
            <SiteLogo style={{ width: 120, height: "auto" }} />
          </Link>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item d-none d-md-flex me-md-1">
              <SearchOffers />
            </li>
            {isAuthenticated && <LoggedNavItems />}
            {!isAuthenticated && <NotLoggedNavItems />}
          </ul>
        </div>
      </nav>
      <div className="d-flex d-md-none mt-1 mx-2">
        <SearchOffers />
      </div>
    </header>
  );
}

export default UserNav;
