import CommonDlg from "./CommonDlg";
import { Form, FormGroup, Input, Label } from "reactstrap";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}
function Register({ isOpen, toggle }: Props) {
  const registerForm = (
    <Form>
      <FormGroup>
        <Input type="text" placeholder="Nombre" name="user-first-name" />
      </FormGroup>
      <FormGroup>
        <Input type="text" placeholder="Apellidos" name="user-last-name" />
      </FormGroup>
      <FormGroup>
        <Input
          type="email"
          placeholder="Correo electrónico"
          name="user-email"
        />
      </FormGroup>
      <FormGroup>
        <Input type="password" placeholder="Contraseña" name="user-password" />
      </FormGroup>
      <FormGroup>
        <Input
          type="password"
          placeholder="Confirmar contraseña"
          name="user-password-confirm"
        />
      </FormGroup>
      <FormGroup check>
        <Input type="checkbox" name="accept-terms" id="accept-terms" />
        <Label check htmlFor="accept-terms">
          Al registrarte en este sitio aceptas nuestros términos y condiciones
        </Label>
      </FormGroup>
    </Form>
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
