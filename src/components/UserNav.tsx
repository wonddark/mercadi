import { Button, Nav, Navbar, NavbarBrand, NavItem, Tooltip } from "reactstrap";
import useToggleOpen from "../hooks/toggle-open.hooks";
import AddOffer from "./AddOffer";

function UserNav() {
  const {
    isOpen: notificationsTooltipIsOpen,
    toggleIsOpen: toggleNotificationTooltipIsOpen,
  } = useToggleOpen();
  const {
    isOpen: addArticleTooltipIsOpen,
    toggleIsOpen: toggleAddArticleTooltipIsOpen,
  } = useToggleOpen();
  const { isOpen: addArticle, toggleIsOpen: toggleAddArticle } =
    useToggleOpen();
  return (
    <header>
      <Navbar dark color="dark" container expand>
        <NavbarBrand>Casa de Subastas</NavbarBrand>
        <Nav navbar className="ms-auto">
          <NavItem className="me-1">
            <Button aria-label="Notifications" id="notifications-button">
              <i className="bi bi-bell" />
            </Button>
            <Tooltip
              target="notifications-button"
              isOpen={notificationsTooltipIsOpen}
              toggle={toggleNotificationTooltipIsOpen}
              placement="bottom-end"
            >
              Notifications
            </Tooltip>
          </NavItem>
          <NavItem>
            <Button
              color="primary"
              aria-label="Agregar oferta"
              id="add-article"
              onClick={toggleAddArticle}
            >
              <i className="bi bi-plus-circle-fill" />
            </Button>
            <Tooltip
              target="add-article"
              isOpen={addArticleTooltipIsOpen}
              toggle={toggleAddArticleTooltipIsOpen}
              placement="bottom-end"
            >
              Agregar oferta
            </Tooltip>
          </NavItem>
        </Nav>
      </Navbar>
      {addArticle && <AddOffer isOpen={addArticle} toggle={toggleAddArticle} />}
    </header>
  );
}

export default UserNav;
