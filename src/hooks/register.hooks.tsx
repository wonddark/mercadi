import { useForm } from "react-hook-form";
import {
  useLazyTestEmailQuery,
  useRegisterMutation,
} from "../state/services/api";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";

const schema = yup.object({
  email: yup
    .string()
    .email("Necesitamos un email válido")
    .required("Campo requerido"),
  password: yup
    .string()
    .required("Campo requerido")
    .min(8, "No menos de 8 caracteres")
    .max(16, "No más de 16 caracteres"),
  password_confirm: yup.string().oneOf([yup.ref("password")], "No coincide"),
});

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
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [emailAvailable, setEmailAvailable] = useState<boolean | undefined>(
    undefined
  );
  const navigate = useNavigate();
  const [queryRegister, { isLoading }] = useRegisterMutation();
  const [testEmail, { data, isLoading: testingEmail }] =
    useLazyTestEmailQuery();

  const register = (data: any) => {
    queryRegister({
      email: data.email,
      password: data.password,
    })
      .unwrap()
      .then(() => {
        navigate("/registro/confirmar");
      })
      .catch(() => null);
  };
  const submitForm = handleSubmit(register);

  const checkEmail = (
    value: string,
    onChange: (value: string) => void,
    error: any | undefined
  ) => {
    onChange(value);
    if (value.includes("@") && !error) testEmail(value);
  };

  useEffect(() => {
    data && setEmailAvailable(data["hydra:totalItems"] === 0);
  }, [data]);

  return {
    submitForm,
    control,
    checkEmail,
    isValid,
    isLoading,
    testingEmail,
    emailAvailable,
  };
}

export default useRegister;
