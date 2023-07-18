import { useSelector } from "react-redux";
import { selectIsLogged } from "../../state/slices/session.slice";
import LoggedNavItems from "./LoggedNavItems";
import NotLoggedNavItems from "./NotLoggedNavItems";
import { Link } from "react-router-dom";
import { ReactComponent as SiteLogo } from "../../assets/navbar-logo.svg";
import SearchOffers from "./SearchOffers";
import { useEffect, useState } from "react";

function UserNav() {
  const isAuthenticated = useSelector(selectIsLogged);
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") || "light",
  );

  const setTheme = (theme: string) => {
    if (
      theme === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
    setCurrentTheme(theme);
  };

  useEffect(() => {
    setTheme("auto");
  }, []);

  return (
    <header className="bg-navbar-dark pb-2 pb-md-0">
      <nav className="navbar navbar-expand navbar-dark bg-navbar-dark">
        <div className="container-xxl">
          <Link className="navbar-brand" to="/">
            <SiteLogo style={{ width: 120, height: "auto", fill: "#fff" }} />
          </Link>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item d-none d-md-flex me-md-1">
              <SearchOffers />
            </li>
            {isAuthenticated && <LoggedNavItems />}
            {!isAuthenticated && <NotLoggedNavItems />}
            <li className="nav-item dropdown">
              <button
                id="dropdown-notifications"
                className="btn btn-link text-white"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="Notifications"
              >
                <i
                  className={`bi ${
                    currentTheme === "auto"
                      ? "bi-circle-half"
                      : currentTheme === "light"
                      ? "bi-sun-fill"
                      : "bi-moon-stars-fill"
                  }`}
                />
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
                aria-labelledby="dropdown-notifications"
              >
                <li>
                  <span className="dropdown-header">Tema</span>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setTheme("light")}
                  >
                    <i className="bi bi-sun-fill" /> Claro
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setTheme("dark")}
                  >
                    <i className="bi bi-moon-stars-fill" /> Oscuro
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setTheme("auto")}
                  >
                    <i className="bi bi-circle-half" /> Automático
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <div className="d-flex d-md-none mt-1 mx-2">
        <SearchOffers />
      </div>
    </header>
  );
}

export default UserNav;
