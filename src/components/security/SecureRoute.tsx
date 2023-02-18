import { useAppSelector } from "../../hooks/state.hooks";
import { selectIsLogged } from "../../state/slices/session.slice";
import { Navigate } from "react-router-dom";

function SecureRoute({ children }: { children: JSX.Element }) {
  const state = useAppSelector((state) => state);
  const isLogged = selectIsLogged(state);
  if (isLogged) {
    return children;
  } else {
    return <Navigate to="/acceder" />;
  }
}

export default SecureRoute;
