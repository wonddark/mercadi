import { Controller } from "react-hook-form";
import useCompleteRegistration from "../../hooks/complete-registration.hook";
import usePageTitle from "../../hooks/page-title.hook";

function CompleteRegistration() {
  const { control, submitForm } = useCompleteRegistration();
  usePageTitle({ name: "Completar registro" });
  return (
    <div className="container col-xl-10 col-xxl-8 px-4">
      <div className="row align-items-center py-3">
        <div className="col-md-10 mx-auto col-lg-5">
          <p className="p-2 lead">
            Aún no sabemos nada de ti además de tu email, quisiéramos conocer
            algunos datos más
          </p>
          <form
            onSubmit={submitForm}
            className="p-4 p-md-5 border rounded-3 bg-light bg-gradient"
          >
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={`form-control ${error ? "is-invalid" : ""}`}
                    id="floatingInput"
                    placeholder="nombre@dominio.com"
                    {...field}
                  />
                  <label htmlFor="floatingInput">Nombre (requerido)</label>
                  {error && (
                    <div className="invalid-feedback">{error.message}</div>
                  )}
                </div>
              )}
            />
            <Controller
              name="lastname"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className={`form-control ${error ? "is-invalid" : ""}`}
                    id="floatingInput"
                    placeholder="nombre@dominio.com"
                    {...field}
                  />
                  <label htmlFor="floatingInput">Apellidos (requerido)</label>
                  {error && (
                    <div className="invalid-feedback">{error.message}</div>
                  )}
                </div>
              )}
            />
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompleteRegistration;
