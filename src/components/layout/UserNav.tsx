import { useSelector } from "react-redux";
import { selectIsLogged } from "../../state/slices/session";
import LoggedNavItems from "./LoggedNavItems";
import NotLoggedNavItems from "./NotLoggedNavItems";
import { Link } from "react-router-dom";

function UserNav() {
  const isLogged = useSelector(selectIsLogged);
  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Subastia
          </Link>
          <ul className="navbar-nav ms-auto">
            {isLogged && <LoggedNavItems />}
            {!isLogged && <NotLoggedNavItems />}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default UserNav;
