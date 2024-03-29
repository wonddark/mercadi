import { ReactComponent as EmailSent } from "../../assets/undraw_mail_sent.svg";
import useConfirmRegistration from "../../hooks/confirm-registration.hook";
import usePageTitle from "../../hooks/page-title.hook";
import useIsLogged from "../../hooks/is-logged.hook";

function ConfirmRegistration() {
  useIsLogged();
  const { validationId, updateValidationId, submitValidation } =
    useConfirmRegistration();
  usePageTitle({ name: "Confirmar registro" });
  return (
    <div className="container-xxl">
      <div className="px-4 py-5 my-5 text-center">
        <EmailSent
          style={{ width: "80px", height: "auto" }}
          className="mx-auto mb-4"
        />
        <h1 className="display-5 fw-bold">Pendiente</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Hemos recibido tu solicitud y la hemos respondido con un mensaje que
            contiene los pasos necesarios para confirmar tu registro en
            {process.env.REACT_APP_APP_NAME}, por favor, ve a tu bandeja de
            entrada, confirma el registro y nos vemos aquí de nuevo
          </p>
          <form>
            <input
              type="text"
              className="form-control form-control-lg my-3"
              placeholder="Pega tu código de verificación aquí"
              value={validationId}
              onChange={updateValidationId}
            />
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="submit"
                className="btn btn-primary btn-lg"
                onClick={submitValidation}
                disabled={!Boolean(validationId)}
              >
                <i className="bi bi-check-circle-fill" /> Validar registro
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
                disabled
              >
                Volver a enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConfirmRegistration;
