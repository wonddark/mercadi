import CommonDlg from "./CommonDlg";
import useRegister from "../hooks/register.hooks";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}
function Register({ isOpen, toggle }: Props) {
  const { registerForm, submitForm, termsAccepted, isValid, isLoading } =
    useRegister(toggle);
  return (
    <CommonDlg
      isOpen={isOpen}
      toggle={toggle}
      title={"Crear cuenta"}
      icon={<i className="bi bi-person-plus-fill me-2" />}
      content={registerForm}
      acceptLabel="Registrar"
      acceptFunction={submitForm}
      acceptDisabled={!termsAccepted || !isValid || isLoading}
    />
  );
}

export default Register;
