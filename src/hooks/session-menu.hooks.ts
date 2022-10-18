import { useNavigate } from "react-router-dom";

function useSessionMenuActions(toggleMenu: () => void) {
  const navigate = useNavigate();
  const goToOffers = () => {
    navigate("/user/offers");
    toggleMenu();
  };
  const goToBids = () => {
    navigate("/user/bids");
    toggleMenu();
  };
  const goToFeed = () => {
    navigate("/user/feed");
    toggleMenu();
  };
  return { goToOffers, goToBids, goToFeed };
}

export default useSessionMenuActions;
