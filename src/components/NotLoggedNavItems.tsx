import { Button, NavItem } from "reactstrap";
import Login from "./Login";
import Register from "./Register";
import useToggleOpen from "../hooks/toggle-open.hooks";

function NotLoggedNavItems() {
  const { isOpen: login, toggleIsOpen: toggleLogin } = useToggleOpen();
  const { isOpen: register, toggleIsOpen: toggleRegister } = useToggleOpen();
  return (
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
      {login && <Login isOpen={login} toggle={toggleLogin} />}
      {register && <Register isOpen={register} toggle={toggleRegister} />}
    </>
  );
}

export default NotLoggedNavItems;
