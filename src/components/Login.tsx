import CommonDlg from "./CommonDlg";
import { Form, FormGroup, Input } from "reactstrap";
import { useAppDispatch } from "../hooks/state.hooks";
import { login } from "../state/slices/session";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}
function Login({ isOpen, toggle }: Props) {
  const dispatch = useAppDispatch();
  const submitLogin = () => {
    dispatch(login());
    toggle();
  };
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
      acceptFunction={submitLogin}
    />
  );
}

export default Login;
