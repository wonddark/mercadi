import { Button, Nav, Navbar, NavbarBrand, NavItem, Tooltip } from "reactstrap";
import { useState } from "react";

function UserNav() {
  const [notificationsTooltipIsOpen, setNotificationTooltipIsOpen] =
    useState(false);
  const [addArticleTooltipIsOpen, setAddArticleTooltipIsOpen] = useState(false);
  const toggleNotificationTooltipIsOpen = () => {
    setNotificationTooltipIsOpen((prevState) => !prevState);
  };
  const toggleAddArticleTooltipIsOpen = () => {
    setAddArticleTooltipIsOpen((prevState) => !prevState);
  };
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
              aria-label="Agregar artículo"
              id="add-article"
            >
              <i className="bi bi-plus-circle-fill" />
            </Button>
            <Tooltip
              target="add-article"
              isOpen={addArticleTooltipIsOpen}
              toggle={toggleAddArticleTooltipIsOpen}
              placement="bottom-end"
            >
              Agregar artículo
            </Tooltip>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
}

export default UserNav;
