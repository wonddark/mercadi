import RegistrationForm from "./security/RegistrationForm";
import { ReactComponent as SiteLogo } from "../assets/navbar-logo.svg";
import usePageTitle from "../hooks/page-title.hook";
import useIsLogged from "../hooks/is-logged.hook";
import { Link } from "react-router-dom";

function HomePage() {
  useIsLogged();
  usePageTitle({ reset: true });
  return (
    <div className="container-xl">
      <div className="row align-items-center g-lg-5 py-3">
        <div className="col-md-6 col-lg-7 text-center text-md-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">
            <SiteLogo style={{ width: "5em", height: "auto", fill: "#000" }} />
          </h1>
          <p>
            <em>El precio ideal para tus ventas</em>
          </p>
          <p className="col-lg-10 fs-4">
            El lugar para encontrar la mejor oferta para tus artículos en venta
          </p>
        </div>
        <div className="d-none d-md-block col-md-6 col-lg-5 mx-auto">
          <RegistrationForm />
        </div>
        <div className="d-block d-md-none col-md-6 text-center">
          <Link to="/registro" className="btn btn-primary me-2">
            Registro
          </Link>
          <Link to="/acceder" className="btn btn-outline-primary">
            Acceder
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
