import Login from "./Login";
import useToggleOpen from "../hooks/toggle-open.hooks";

function NotLoggedNavItems() {
  const { isOpen: login, toggleIsOpen: toggleLogin } = useToggleOpen();
  return (
    <>
      <li className="nav-item me-1">
        <button className="btn btn-light" onClick={toggleLogin}>
          <i className="bi bi-box-arrow-in-right me-md-2" />
          <span className="d-none d-md-inline">Acceder</span>
        </button>
      </li>
      <li className="nav-item">
        <button className="btn btn-primary">
          <i className="bi bi-person-plus-fill me-md-2" />
          <span className="d-none d-md-inline">Crear cuenta</span>
        </button>
      </li>
      {login && <Login isOpen={login} toggle={toggleLogin} />}
    </>
  );
}

export default NotLoggedNavItems;
