import { useNavigate } from "react-router-dom";

function useGoBack(to: string) {
  const navigate = useNavigate();
  const goBackTo = () => {
    navigate(to);
  };
  return { goBackTo };
}

export default useGoBack;
