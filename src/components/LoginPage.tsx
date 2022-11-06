import { Controller } from "react-hook-form";
import useLogin from "../hooks/login.hook";

function LoginPage() {
  const { registerPassword, submitForm, control, isValid, isLoading } =
    useLogin();
  return (
    <div className="container col-xl-10 col-xxl-8 px-4">
      <div className="row align-items-center py-3">
        <div className="col-md-10 mx-auto col-lg-5">
          <h1 className="display-4 fw-bold lh-1 mb-3 text-center">Subastia</h1>
          <form
            onSubmit={submitForm}
            className="p-4 p-md-5 border rounded-3 bg-light bg-gradient"
          >
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className={`form-control ${error ? "is-invalid" : ""}`}
                    id="floatingInput"
                    placeholder="nombre@dominio.com"
                    {...field}
                  />
                  <label htmlFor="floatingInput">Correo electrónico</label>
                  {error && (
                    <div className="invalid-feedback">{error.message}</div>
                  )}
                </div>
              )}
            />
            <div className="form-floating mb-3">
              <input
                type="password"
                className={`form-control`}
                id="floatingPassword"
                placeholder="********"
                name="password"
                onChange={registerPassword}
              />
              <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            <button
              className="w-100 btn btn-lg btn-primary"
              type="submit"
              disabled={isLoading || !isValid}
            >
              Acceder
            </button>
            <hr className="my-4" />
            <a
              href="/registro"
              className="d-block mt-3 w-75 mx-auto btn btn-link"
            >
              Crea tu cuenta
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
