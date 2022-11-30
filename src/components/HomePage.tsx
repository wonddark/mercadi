import RegistrationForm from "./security/RegistrationForm";
import { pageTitle } from "../helpers/page-title.helper";

function HomePage() {
  pageTitle();
  return (
    <div className="container col-xl-10 col-xxl-8 px-4">
      <div className="row align-items-center g-lg-5 py-3">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Subastia</h1>
          <p className="col-lg-10 fs-4">
            El lugar para encontrar la mejor oferta para tus artículos en venta
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
