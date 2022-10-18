import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
} from "reactstrap";
import useToggleOpen from "../hooks/toggle-open.hooks";
import AddOffer from "./AddOffer";
import useSessionMenuActions from "../hooks/session-menu.hooks";
import Login from "./Login";
import Register from "./Register";
import { useSelector } from "react-redux";
import { selectIsLogged } from "../state/slices/session";

function UserNav() {
  const { isOpen: addArticle, toggleIsOpen: toggleAddArticle } =
    useToggleOpen();
  const { isOpen: sessionMenuOpen, toggleIsOpen: toggleSessionMenuOpen } =
    useToggleOpen();
  const { isOpen: login, toggleIsOpen: toggleLogin } = useToggleOpen();
  const { isOpen: register, toggleIsOpen: toggleRegister } = useToggleOpen();
  const { goToOffers, goToBids, goToFeed } = useSessionMenuActions(
    toggleSessionMenuOpen
  );
  const isLogged = useSelector(selectIsLogged);
  return (
    <header>
      <Navbar dark color="dark" container expand>
        <NavbarBrand>Subastia</NavbarBrand>
        <Nav navbar className="ms-auto">
          {isLogged && (
            <>
              <NavItem className="me-1">
                <Button
                  color="primary"
                  aria-label="Agregar oferta"
                  title="Agregar oferta"
                  onClick={toggleAddArticle}
                >
                  <i className="bi bi-plus-circle-fill me-md-2" />
                  <span className="d-none d-md-inline">Crear oferta</span>
                </Button>
              </NavItem>
              <NavItem className="me-1">
                <Button
                  aria-label="Notifications"
                  title="Notificaciones"
                  color="transparent"
                  className="text-white"
                >
                  <i className="bi bi-bell me-md-2" />
                  <span className="d-none d-md-inline">Notificaciones</span>
                </Button>
              </NavItem>
              <Dropdown
                isOpen={sessionMenuOpen}
                toggle={toggleSessionMenuOpen}
                nav
                inNavbar
                direction="end"
              >
                <DropdownToggle
                  nav
                  title="Perfil"
                  color="transparent"
                  className="text-white"
                >
                  <i className="bi bi-person-circle me-md-2" />
                  <span className="d-none d-md-inline">Perfil</span>
                </DropdownToggle>
                <DropdownMenu dark>
                  <DropdownItem onClick={goToFeed}>Feed</DropdownItem>
                  <DropdownItem onClick={goToOffers}>Tus ofertas</DropdownItem>
                  <DropdownItem onClick={goToBids}>Tus pujas</DropdownItem>
                  <DropdownItem>Cerrar sesión</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </>
          )}
          {!isLogged && (
            <>
              <NavItem className="me-1">
                <Button color="light" onClick={toggleLogin}>
                  <i className="bi bi-box-arrow-in-right me-md-2" />
                  <span className="d-none d-md-inline">Acceder</span>
                </Button>
              </NavItem>
              <NavItem>
                <Button color="primary" onClick={toggleRegister}>
                  <i className="bi bi-person-plus-fill me-md-2" />
                  <span className="d-none d-md-inline">Crear cuenta</span>
                </Button>
              </NavItem>
            </>
          )}
        </Nav>
      </Navbar>
      {addArticle && <AddOffer isOpen={addArticle} toggle={toggleAddArticle} />}
      {login && <Login isOpen={login} toggle={toggleLogin} />}
      {register && <Register isOpen={register} toggle={toggleRegister} />}
    </header>
  );
}

export default UserNav;
