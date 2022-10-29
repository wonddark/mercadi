import { Controller } from "react-hook-form";
import useRegister from "../hooks/register.hooks";

function HomePage() {
  const { submitForm, control, isLoading, isValid } = useRegister();
  return (
    <div className="container-fluid p-0">
      <header>
        <div className="container col-xl-10 col-xxl-8 px-4">
          <div className="row align-items-center g-lg-5 py-3">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 mb-3">Subastia</h1>
              <p className="col-lg-10 fs-4">
                Below is an example form built entirely with Bootstrap’s form
                controls. Each required form group has a validation state that
                can be triggered by attempting to submit the form without
                completing it.
              </p>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <form
                onSubmit={submitForm}
                className="p-4 p-md-5 border rounded-3 bg-light bg-gradient"
              >
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        {...field}
                      />
                      <label htmlFor="floatingInput">Correo electrónico</label>
                    </div>
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        {...field}
                      />
                      <label htmlFor="floatingPassword">Contraseña</label>
                    </div>
                  )}
                />
                <Controller
                  name="password_confirm"
                  control={control}
                  render={({ field }) => (
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        {...field}
                      />
                      <label htmlFor="floatingPassword">
                        Confirmar contraseña
                      </label>
                    </div>
                  )}
                />
                <button
                  className="w-100 btn btn-lg btn-primary"
                  type="submit"
                  disabled={isLoading || !isValid}
                >
                  Crear cuenta
                </button>
                <hr className="my-4" />
                <small className="text-muted">
                  Al hacer click en Crear cuenta aceptas nuestros términos de
                  uso.
                </small>
                <a
                  href="/acceder"
                  className="d-block mt-3 w-75 mx-auto btn btn-link"
                >
                  Accede a tu cuenta
                </a>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomePage;