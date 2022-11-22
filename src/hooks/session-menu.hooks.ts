import { useNavigate } from "react-router-dom";

function useSessionMenuActions() {
  const navigate = useNavigate();
  const goToOffers = () => {
    navigate("/perfil/ofertas");
  };
  const goToBids = () => {
    navigate("/perfil/pujas");
  };
  const goToFeed = () => {
    navigate("/perfil/muro");
  };
  return { goToOffers, goToBids, goToFeed };
}

export default useSessionMenuActions;
