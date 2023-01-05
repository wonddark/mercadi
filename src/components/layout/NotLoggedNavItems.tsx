import { Link } from "react-router-dom";

function NotLoggedNavItems() {
  return (
    <>
      <li className="nav-item d-none d-md-inline me-md-1">
        <Link to="/acceder" className="nav-link link-light">
          <span className="">Acceder</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/registro" className="btn btn-success">
          <i className="bi bi-person-plus-fill me-md-2" />
          <span className="d-none d-md-inline">Crear cuenta</span>
        </Link>
      </li>
    </>
  );
}

export default NotLoggedNavItems;
