import CommonDlg from "./CommonDlg";
import { Form, FormGroup, Input } from "reactstrap";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}
function Login({ isOpen, toggle }: Props) {
  const loginForm = (
    <Form>
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
    </Form>
  );
  return (
    <CommonDlg
      isOpen={isOpen}
      toggle={toggle}
      title="Acceder"
      icon={<i className="bi bi-box-arrow-in-right me-2" />}
      content={loginForm}
      acceptLabel="Entrar"
    />
  );
}

export default Login;
