import Login from "./Login";
import Register from "./Register";
import useToggleOpen from "../hooks/toggle-open.hooks";

function NotLoggedNavItems() {
  const { isOpen: login, toggleIsOpen: toggleLogin } = useToggleOpen();
  const { isOpen: register, toggleIsOpen: toggleRegister } = useToggleOpen();
  return (
    <>
      <li className="nav-item me-1">
        <button className="btn btn-light" onClick={toggleLogin}>
          <i className="bi bi-box-arrow-in-right me-md-2" />
          <span className="d-none d-md-inline">Acceder</span>
        </button>
      </li>
      <li className="nav-item">
        <button className="btn btn-primary" onClick={toggleRegister}>
          <i className="bi bi-person-plus-fill me-md-2" />
          <span className="d-none d-md-inline">Crear cuenta</span>
        </button>
      </li>
      {login && <Login isOpen={login} toggle={toggleLogin} />}
      {register && <Register isOpen={register} toggle={toggleRegister} />}
    </>
  );
}

export default NotLoggedNavItems;
