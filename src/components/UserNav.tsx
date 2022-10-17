import { Button, Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import useToggleOpen from "../hooks/toggle-open.hooks";
import AddOffer from "./AddOffer";

function UserNav() {
  const { isOpen: addArticle, toggleIsOpen: toggleAddArticle } =
    useToggleOpen();
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
            <Button color="transparent" className="text-white" title="Perfil">
              <i className="bi bi-person-circle" />
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
      {addArticle && <AddOffer isOpen={addArticle} toggle={toggleAddArticle} />}
    </header>
  );
}

export default UserNav;
