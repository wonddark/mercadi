import CommonDlg from "./CommonDlg";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}
function Register({ isOpen, toggle }: Props) {
  const registerForm = (
    <form>
      <div className="form-floating mb-3">
        <input
          type="text"
          placeholder="Nombre"
          name="user-first-name"
          id="user-first-name"
          className="form-control"
        />
        <label htmlFor="user-first-name">Nombre</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          placeholder="Apellidos"
          name="user-last-name"
          id="user-last-name"
          className="form-control"
        />
        <label htmlFor="user-last-name">Apellidos</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          placeholder="Correo electrónico"
          name="user-email"
          id="user-email"
          className="form-control"
        />
        <label htmlFor="user-email">Correo electrónico</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          placeholder="Contraseña"
          name="user-password"
          id="user-password"
          className="form-control"
        />
        <label htmlFor="user-password">Contraseña</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          placeholder="Confirmar contraseña"
          name="user-password-confirm"
          id="user-password-confirm"
          className="form-control"
        />
        <label htmlFor="user-password-confirm">Confirmar</label>
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          name="accept-terms"
          id="accept-terms"
          className="form-check-input"
        />
        <label htmlFor="accept-terms" className="form-check-label">
          Al registrarte en este sitio aceptas nuestros términos y condiciones
        </label>
      </div>
    </form>
  );
  return (
    <CommonDlg
      isOpen={isOpen}
      toggle={toggle}
      title={"Crear cuenta"}
      icon={<i className="bi bi-person-plus-fill me-2" />}
      content={registerForm}
      acceptLabel="Registrar"
    />
  );
}

export default Register;
