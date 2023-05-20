import { useForm } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  useAuthenticateMutation,
  useLazyWhoAmIQuery,
} from "../state/services/api";
import { useLocation, useNavigate } from "react-router-dom";
import httpStatus from "http-status";

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

  const { state } = useLocation();

  const [wrongCredentials, setWrongCredentials] = useState(false);
  const login = (data: { email: string; password: string }) => {
    authenticate(data)
      .unwrap()
      .then(() => {
        whoAmI({})
          .unwrap()
          .then((resp) => {
            if (resp.name && resp.lastname) {
              if (state && "backTo" in state) {
                navigate(state.backTo);
              } else {
                navigate("/muro");
              }
            } else {
              navigate("/registro/completar", { state });
            }
          });
      })
      .catch((err) => {
        if (err.status === httpStatus.UNAUTHORIZED) {
          setWrongCredentials(true);
        }
      });
  };

  const submitForm = handleSubmit(login);

  return {
    registerPassword,
    submitForm,
    control,
    isValid,
    wrongCredentials,
    isLoading: isAuthenticating || isGettingPersonalInfo,
    isError: errorAuthenticating || errorGettingPersonalInfo,
  };
}

export default useLogin;
