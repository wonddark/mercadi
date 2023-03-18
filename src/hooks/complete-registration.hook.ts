import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUpdateUserDataMutation } from "../state/services/api";
import { useAppSelector } from "./state.hooks";
import { selectId } from "../state/slices/session.slice";
import { useLocation, useNavigate } from "react-router-dom";

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
  const id = useAppSelector(selectId);
  const [updateUserData, { isLoading, isError }] = useUpdateUserDataMutation();
  const navigate = useNavigate();
  const { state } = useLocation();

  const completeRegistration = (data: { name: string; lastname: string }) => {
    updateUserData({ id, name: data.name, lastname: data.lastname })
      .unwrap()
      .then(() => {
        if ("backTo" in state) {
          navigate(state.backTo);
        } else {
          navigate("/muro");
        }
      });
  };

  const submitForm = handleSubmit(completeRegistration);

  return { control, submitForm, isLoading, isError };
}

export default useCompleteRegistration;
