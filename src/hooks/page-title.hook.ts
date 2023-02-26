import { useAppDispatch } from "./state.hooks";
import { useEffect } from "react";
import { resetPageTitle, setTitle } from "../state/slices/page-title.slice";

function usePageTitle({
  name,
  loading,
  reset,
}: {
  name?: string;
  loading?: boolean;
  reset?: boolean;
}) {
  if (!name && !loading && !reset) {
    throw Error("Debes especificar al menos un parámetro");
  }

  const dispatch = useAppDispatch();
  const updatePageTitle = () => {
    if (!reset) {
      dispatch(setTitle(!loading ? `${name}` : "Cargando..."));
    } else {
      dispatch(resetPageTitle());
    }
  };

  useEffect(updatePageTitle, [dispatch, loading, name, reset]);
}

export default usePageTitle;
