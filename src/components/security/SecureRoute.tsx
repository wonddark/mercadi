import { useAppSelector } from "../../hooks/state.hooks";
import { selectIsLogged } from "../../state/slices/session.slice";
import { Navigate, useLocation } from "react-router-dom";

function SecureRoute({ children }: { children: JSX.Element }) {
  const isLogged = useAppSelector(selectIsLogged);
  const { pathname } = useLocation();
  if (isLogged) {
    return children;
  } else {
    return <Navigate to="/acceder" state={{ backTo: pathname }} />;
  }
}

export default SecureRoute;
