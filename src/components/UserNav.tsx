import { Nav, Navbar, NavbarBrand } from "reactstrap";
import { useSelector } from "react-redux";
import { selectIsLogged } from "../state/slices/session";
import LoggedNavItems from "./LoggedNavItems";
import NotLoggedNavItems from "./NotLoggedNavItems";

function UserNav() {
  const isLogged = useSelector(selectIsLogged);
  return (
    <header>
      <Navbar dark color="dark" container expand>
        <NavbarBrand>Subastia</NavbarBrand>
        <Nav navbar className="ms-auto">
          {isLogged && <LoggedNavItems />}
          {!isLogged && <NotLoggedNavItems />}
        </Nav>
      </Navbar>
    </header>
  );
}

export default UserNav;
