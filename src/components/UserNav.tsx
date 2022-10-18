import { useSelector } from "react-redux";
import { selectIsLogged } from "../state/slices/session";
import LoggedNavItems from "./LoggedNavItems";
import NotLoggedNavItems from "./NotLoggedNavItems";

function UserNav() {
  const isLogged = useSelector(selectIsLogged);
  return (
    <header>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Subastia
          </a>
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
