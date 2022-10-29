import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../state/services/api";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function useRegister() {
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      password_confirm: "",
    },
    mode: "onChange",
    resolver: yupResolver(
      yup.object({
        email: yup
          .string()
          .email("Necesitamos un email válido")
          .required("Campo requerido"),
        password: yup
          .string()
          .required("Campo requerido")
          .min(8, "No menos de 8 caracteres")
          .max(16, "No más de 16 caracteres"),
        password_confirm: yup
          .string()
          .oneOf([yup.ref("password")], "No coincide"),
      })
    ),
  });
  console.log(isValid, errors);
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
