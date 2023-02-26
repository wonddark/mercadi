import { ReactComponent as Welcoming } from "../../assets/undraw_welcoming_re_x0qo.svg";
import useActivateRegistration from "../../hooks/activate-registration.hook";
import { NavLink } from "react-router-dom";
import usePageTitle from "../../hooks/page-title.hook";
import useIsLogged from "../../hooks/is-logged.hook";

function ActivateRegistration() {
  useIsLogged();
  const { isLoading, error } = useActivateRegistration();
  usePageTitle({ name: "Activar registro" });
  return (
    <div className="container-xxl">
      <div className="px-4 py-5 my-5 text-center">
        <Welcoming
          style={{ width: "80px", height: "auto" }}
          className="mx-auto mb-4"
        />
        {!error && (
          <h1 className="display-5 fw-bold">
            {isLoading && <span>Activando registro...</span>}
            {!isLoading && <span>Registro activado</span>}
          </h1>
        )}
        {error && <h1 className="display-5 fw-bold">Error</h1>}
        {!error && (
          <div className="col-lg-6 mx-auto">
            {isLoading && (
              <p className="lead mb-4">
                Esto normalmente solo toma unos segundos
              </p>
            )}
            {!isLoading && (
              <>
                <p className="lead mb-4">
                  Tu registro ha sido activado, ahora puedes acceder a tu cuenta
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <NavLink
                    to="/acceder"
                    className="btn btn-primary btn-lg px-4"
                  >
                    Entrar ahora
                  </NavLink>
                </div>
              </>
            )}
          </div>
        )}
        {error && (
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ActivateRegistration;
