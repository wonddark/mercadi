import { useAppDispatch, useAppSelector } from "./state.hooks";
import {
  logout,
  selectLastname,
  selectName,
} from "../state/slices/session.slice";

function useProfile() {
  const state = useAppSelector((state) => state);
  const name = selectName(state);
  const lastname = selectLastname(state);
  const dispatch = useAppDispatch();

  const closeSession = () => {
    dispatch(logout());
  };

  return { name, lastname, closeSession };
}

export default useProfile;
