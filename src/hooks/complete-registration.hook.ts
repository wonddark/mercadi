import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUpdateUserDataMutation } from "../state/services/api";
import { useAppSelector } from "./state.hooks";
import { selectId, selectName } from "../state/slices/session";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useCompleteRegistration() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      lastname: "",
    },
    mode: "onChange",
    resolver: yupResolver(
      yup.object({
        name: yup.string().required(),
        lastname: yup.string().required(),
      })
    ),
  });
  const state = useAppSelector((state) => state);
  const id = selectId(state);
  const name = selectName(state);
  const [updateUserData, { isLoading, isError }] = useUpdateUserDataMutation();
  const navigate = useNavigate();

  const completeRegistration = (data: { name: string; lastname: string }) => {
    updateUserData({ id, name: data.name, lastname: data.lastname });
  };

  const submitForm = handleSubmit(completeRegistration);

  const goToUserFeed = () => {
    name && navigate("/muro");
  };

  useEffect(
    goToUserFeed,
    // eslint-disable-next-line
    [name]
  );

  return { control, submitForm, isLoading, isError };
}

export default useCompleteRegistration;
