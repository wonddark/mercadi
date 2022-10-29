import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../state/services/api";
import { useNavigate } from "react-router-dom";

function useRegister() {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      password_confirm: "",
    },
  });
  const navigate = useNavigate();
  const [queryRegister, { isLoading }] = useRegisterMutation();
  const register = (data: any) => {
    queryRegister({
      email: data.email,
      password: data.password,
    })
      .unwrap()
      .then(() => {
        navigate("/registration/confirm");
      })
      .catch(() => null);
  };
  const submitForm = handleSubmit(register);

  return { submitForm, control, isValid, isLoading };
}

export default useRegister;
