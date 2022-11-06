import { useForm } from "react-hook-form";
import { ChangeEvent, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  useAuthenticateMutation,
  useLazyWhoAmIQuery,
} from "../state/services/api";
import { useAppSelector } from "./state.hooks";
import { selectIsLogged, selectName } from "../state/slices/session";
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
  const state = useAppSelector((state) => state);
  const isLogged = selectIsLogged(state);
  const name = selectName(state);
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
    authenticate(data);
  };

  const submitForm = handleSubmit(login);

  const getPersonalInfo = () => {
    isLogged && whoAmI({});
  };

  const goToUserFeed = () => {
    if (isLogged) {
      if (name) {
        navigate("/user/feed");
      } else {
        navigate("/registration/complete");
      }
    }
  };

  useEffect(
    getPersonalInfo,
    // eslint-disable-next-line
    [isLogged]
  );
  useEffect(
    goToUserFeed,
    // eslint-disable-next-line
    [isLogged, name]
  );

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
