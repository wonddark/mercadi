import { ReactComponent as EmailSent } from "../assets/undraw_mail_sent.svg";

function ConfirmRegistration() {
  return (
    <div className="container-fluid">
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
            Subastia, por favor, ve a tu bandeja de entrada, confirma el
            registro y nos vemos aquí de nuevo
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
              disabled
            >
              Volver a enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmRegistration;
