import { Controller } from "react-hook-form";
import useLogin from "../../hooks/login.hook";
import { Link } from "react-router-dom";

function LoginPage() {
  const { registerPassword, submitForm, control, isValid, isLoading } =
    useLogin();
  return (
    <div className="container col-xl-10 col-xxl-8 px-4">
      <div className="row align-items-center py-3">
        <div className="col-md-10 mx-auto col-lg-5">
          <form onSubmit={submitForm} className="form-accented">
            <p className="display-6">Acceder</p>
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
            <hr />
            <Link to="/registro">Crea tu cuenta</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
