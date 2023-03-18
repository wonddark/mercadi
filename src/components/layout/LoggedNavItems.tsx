import useSessionMenuActions from "../../hooks/session-menu.hooks";
import useProfile from "../../hooks/profile.hook";
import { Link } from "react-router-dom";

function LoggedNavItems() {
  const { goToOffers, goToBids, goToFeed } = useSessionMenuActions();
  const { name, closeSession } = useProfile();
  return (
    <>
      <li className="nav-item">
        <Link
          to="/perfil/ofertas/crear"
          className="btn btn-success"
          aria-label="Agregar oferta"
          title="Agregar nuevo artículo en venta"
        >
          <i className="bi bi-plus-circle-fill me-sm-2" />
          <span className="d-none d-sm-inline">Crear artículo</span>
        </Link>
      </li>
      <li className="nav-item dropdown">
        <button
          id="dropdown-notifications"
          className="btn btn-link text-white"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          aria-label="Notifications"
        >
          <i className="bi bi-bell" />
        </button>
        <ul
          className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
          aria-labelledby="dropdown-notifications"
        >
          <li>
            <span className="dropdown-header">Notificaciones</span>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <button className="dropdown-item" onClick={goToFeed}>
              Feed
            </button>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <button className="dropdown-item" onClick={goToOffers}>
              Tus artículos
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={goToBids}>
              Tus ofertas
            </button>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <button className="dropdown-item" onClick={closeSession}>
              Cerrar sesión
            </button>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <button
          className="btn btn-link text-white"
          id="dropdown-profile"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          aria-label="Profile"
        >
          <i className="bi bi-person-circle" />
        </button>
        <ul
          className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
          aria-labelledby="dropdown-profile"
        >
          <li>
            <span className="dropdown-header">{name}</span>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <button className="dropdown-item" onClick={goToFeed}>
              Feed
            </button>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <button className="dropdown-item" onClick={goToOffers}>
              Tus artículos
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={goToBids}>
              Tus ofertas
            </button>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <button className="dropdown-item" onClick={closeSession}>
              Cerrar sesión
            </button>
          </li>
        </ul>
      </li>
    </>
  );
}

export default LoggedNavItems;
