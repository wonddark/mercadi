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

function UserNav() {
  const { isOpen: addArticle, toggleIsOpen: toggleAddArticle } =
    useToggleOpen();
  const { isOpen: sessionMenuOpen, toggleIsOpen: toggleSessionMenuOpen } =
    useToggleOpen();
  const { isOpen: login, toggleIsOpen: toggleLogin } = useToggleOpen();
  const { goToOffers, goToBids, goToFeed } = useSessionMenuActions(
    toggleSessionMenuOpen
  );
  return (
    <header>
      <Navbar dark color="dark" container expand>
        <NavbarBrand>Casa de Subastas</NavbarBrand>
        <Nav navbar className="ms-auto">
          <NavItem className="me-1">
            <Button
              color="primary"
              aria-label="Agregar oferta"
              title="Agregar oferta"
              onClick={toggleAddArticle}
            >
              <i className="bi bi-plus-circle-fill" />
            </Button>
          </NavItem>
          <NavItem className="me-1">
            <Button
              aria-label="Notifications"
              title="Notificaciones"
              color="transparent"
              className="text-white"
            >
              <i className="bi bi-bell" />
            </Button>
          </NavItem>
          <NavItem>
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
                <i className="bi bi-person-circle" />
              </DropdownToggle>
              <DropdownMenu dark>
                <DropdownItem onClick={goToFeed}>Feed</DropdownItem>
                <DropdownItem onClick={goToOffers}>Tus ofertas</DropdownItem>
                <DropdownItem onClick={goToBids}>Tus pujas</DropdownItem>
                <DropdownItem>Cerrar sesión</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem>
          <NavItem className="me-1">
            <Button color="light" outline onClick={toggleLogin}>
              Acceder
            </Button>
          </NavItem>
          <NavItem>
            <Button color="primary">Crear cuenta</Button>
          </NavItem>
        </Nav>
      </Navbar>
      {addArticle && <AddOffer isOpen={addArticle} toggle={toggleAddArticle} />}
      {login && <Login isOpen={login} toggle={toggleLogin} />}
    </header>
  );
}

export default UserNav;
