import { useWhoAmIQuery } from "../state/services/api";
import { useSelector } from "react-redux";
import { selectIsLogged } from "../state/slices/session.slice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function useIsLogged() {
  const { isFetching, isError, isSuccess } = useWhoAmIQuery({});
  const isLogged = useSelector(selectIsLogged);
  const navigate = useNavigate();
  function checkIsLogged() {
    if (!isFetching) {
      if (isSuccess && isLogged) {
        navigate("/muro");
      }
    }
  }
  useEffect(checkIsLogged, [
    isFetching,
    isError,
    isSuccess,
    isLogged,
    navigate,
  ]);
}

export default useIsLogged;
