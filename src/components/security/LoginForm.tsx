import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/login.hook";

function LoginForm() {
  const {
    registerPassword,
    submitForm,
    control,
    isValid,
    isLoading,
    wrongCredentials,
  } = useLogin();
  return (
    <form onSubmit={submitForm} className="form-accented">
      <p className="display-6">Acceder</p>
      {wrongCredentials ? (
        <div className="alert alert-danger" role="alert">
          Credenciales incorrectas
        </div>
      ) : null}
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
            {error && <div className="invalid-feedback">{error.message}</div>}
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
  );
}

export default LoginForm;
