import { useForm } from "react-hook-form";
import { ChangeEvent } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  useAuthenticateMutation,
  useLazyWhoAmIQuery,
} from "../state/services/api";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const {
    handleSubmit,
    control,
    setValue,
    trigger,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(
      yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
      })
    ),
  });

  const [
    authenticate,
    { isLoading: isAuthenticating, isError: errorAuthenticating },
  ] = useAuthenticateMutation();
  const [
    whoAmI,
    { isLoading: isGettingPersonalInfo, isError: errorGettingPersonalInfo },
  ] = useLazyWhoAmIQuery();
  const navigate = useNavigate();

  const registerPassword = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValue("password", value);
    trigger().finally();
  };

  const login = (data: { email: string; password: string }) => {
    authenticate(data)
      .unwrap()
      .then(() => {
        whoAmI({})
          .unwrap()
          .then((resp) => {
            if (resp.name && resp.lastname) {
              navigate("/muro");
            } else {
              navigate("/registro/completar");
            }
          });
      });
  };

  const submitForm = handleSubmit(login);

  return {
    registerPassword,
    submitForm,
    control,
    isValid,
    isLoading: isAuthenticating || isGettingPersonalInfo,
    isError: errorAuthenticating || errorGettingPersonalInfo,
  };
}

export default useLogin;
