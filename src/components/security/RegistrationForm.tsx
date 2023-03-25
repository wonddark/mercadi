import { Controller } from "react-hook-form";
import useRegister from "../../hooks/register.hooks";
import { Link } from "react-router-dom";

function RegistrationForm() {
  const {
    submitForm,
    control,
    checkEmail,
    isLoading,
    isValid,
    emailAvailable,
  } = useRegister();
  return (
    <form onSubmit={submitForm} className="form-accented">
      <p className="display-6">Registro</p>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div className="form-floating mb-3">
            <input
              type="email"
              className={`form-control ${
                error || emailAvailable === false ? "is-invalid" : ""
              } ${emailAvailable ? "is-valid" : ""}`}
              id="floatingInput"
              placeholder="nombre@dominio.com"
              {...field}
              onChange={({ target: { value } }) =>
                checkEmail(value, field.onChange, error)
              }
            />
            <label htmlFor="floatingInput">Correo electrónico</label>
            {error && <div className="invalid-feedback">{error.message}</div>}
            {emailAvailable === false && (
              <div className="invalid-feedback">Ya registrado</div>
            )}
          </div>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div className="form-floating mb-3">
            <input
              type="password"
              className={`form-control ${error ? "is-invalid" : ""}`}
              id="floatingPassword"
              placeholder="Password"
              {...field}
            />
            <label htmlFor="floatingPassword">Contraseña</label>
            {error && <div className="invalid-feedback">{error.message}</div>}
          </div>
        )}
      />
      <Controller
        name="password_confirm"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div className="form-floating mb-3">
            <input
              type="password"
              className={`form-control ${error ? "is-invalid" : ""}`}
              id="floatingPasswordConfirm"
              placeholder="Password"
              {...field}
            />
            <label htmlFor="floatingPassword">Confirmar contraseña</label>
            {error && <div className="invalid-feedback">{error.message}</div>}
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
      <small>
        Al hacer click en Crear cuenta aceptas nuestros términos de uso.
      </small>
      <Link to="/acceder">Accede a tu cuenta</Link>
    </form>
  );
}

export default RegistrationForm;
