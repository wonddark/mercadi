import useSessionMenuActions from "../hooks/session-menu.hooks";
import useToggleOpen from "../hooks/toggle-open.hooks";
import AddOffer from "./AddOffer";
import useProfile from "../hooks/profile.hook";

function LoggedNavItems() {
  const { goToOffers, goToBids, goToFeed } = useSessionMenuActions();
  const { isOpen: addArticle, toggleIsOpen: toggleAddArticle } =
    useToggleOpen();
  const { name, closeSession } = useProfile();
  return (
    <>
      <li className="nav-item me-1">
        <button
          className="btn btn-primary"
          aria-label="Agregar oferta"
          title="Agregar oferta"
          onClick={toggleAddArticle}
        >
          <i className="bi bi-plus-circle-fill me-md-2" />
          <span className="d-none d-md-inline">Crear oferta</span>
        </button>
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
              Tus ofertas
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={goToBids}>
              Tus pujas
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
      {addArticle && <AddOffer isOpen={addArticle} toggle={toggleAddArticle} />}
    </>
  );
}

export default LoggedNavItems;
