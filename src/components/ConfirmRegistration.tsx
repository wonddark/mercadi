import { useLocation } from "react-router-dom";

function ConfirmRegistration() {
  const { state } = useLocation();
  return (
    <div className="container-fluid">
      Hola {state?.["name"]}, nos enorgullece que quieras formar parte de
      nuestro club. Te hemos enviado un email de confirmación a la dirección{" "}
      {state?.["email"]}. Por favor, revisa tu bandeja de entrada y activa tu
      cuenta, te estamos esperando!
    </div>
  );
}

export default ConfirmRegistration;
