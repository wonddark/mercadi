import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
} from "reactstrap";
import useSessionMenuActions from "../hooks/session-menu.hooks";
import useToggleOpen from "../hooks/toggle-open.hooks";
import AddOffer from "./AddOffer";

function LoggedNavItems() {
  const { isOpen: sessionMenuOpen, toggleIsOpen: toggleSessionMenuOpen } =
    useToggleOpen();
  const { goToOffers, goToBids, goToFeed } = useSessionMenuActions(
    toggleSessionMenuOpen
  );
  const { isOpen: addArticle, toggleIsOpen: toggleAddArticle } =
    useToggleOpen();
  return (
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
      {addArticle && <AddOffer isOpen={addArticle} toggle={toggleAddArticle} />}
    </>
  );
}

export default LoggedNavItems;
