import { useWhoAmIQuery } from "../state/services/api";
import { useSelector } from "react-redux";
import { selectIsLogged } from "../state/slices/session.slice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function useIsLogged() {
  useWhoAmIQuery({});
  const isLogged = useSelector(selectIsLogged);
  const navigate = useNavigate();
  function checkIsLogged() {
    if (isLogged) {
      navigate("/muro");
    }
  }
  useEffect(checkIsLogged, [isLogged, navigate]);
}

export default useIsLogged;
