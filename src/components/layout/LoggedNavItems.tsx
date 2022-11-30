import useSessionMenuActions from "../../hooks/session-menu.hooks";
import useProfile from "../../hooks/profile.hook";
import { Link } from "react-router-dom";

function LoggedNavItems() {
  const { goToOffers, goToBids, goToFeed } = useSessionMenuActions();
  const { name, closeSession } = useProfile();
  return (
    <>
      <li className="nav-item me-1">
        <Link
          to="/perfil/ofertas/crear"
          className="btn btn-success"
          aria-label="Agregar oferta"
          title="Agregar nuevo artículo en venta"
        >
          <i className="bi bi-plus-circle-fill me-md-2" />
          <span className="d-none d-md-inline">Crear artículo</span>
        </Link>
      </li>
      <li className="nav-item me-1">
        <button
          className="btn bg-transparent text-white"
          aria-label="Notifications"
          title="Notificaciones"
        >
          <i className="bi bi-bell me-md-2" />
          <span className="d-none d-md-inline">Notificaciones</span>
        </button>
      </li>
      <li className="nav-item dropdown">
        <button
          className="btn bg-transparent text-white dropdown-toggle"
          id="dropdown-profile"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="bi bi-person-circle me-md-2" />
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
