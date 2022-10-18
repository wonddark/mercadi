import { useNavigate } from "react-router-dom";

function useSessionMenuActions() {
  const navigate = useNavigate();
  const goToOffers = () => {
    navigate("/user/offers");
  };
  const goToBids = () => {
    navigate("/user/bids");
  };
  const goToFeed = () => {
    navigate("/user/feed");
  };
  return { goToOffers, goToBids, goToFeed };
}

export default useSessionMenuActions;
