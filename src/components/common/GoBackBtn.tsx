import { useNavigate } from "react-router-dom";

function useGoBack(to: string) {
  const navigate = useNavigate();
  const goBackTo = () => {
    navigate(to);
  };
  return { goBackTo };
}

function GoBackBtn({ to }: { to: string }) {
  const { goBackTo: goBackToFeed } = useGoBack(to);
  return (
    <button className="btn btn-link btn-cancel" onClick={goBackToFeed}>
      <i className="bi bi-arrow-left" />
    </button>
  );
}

export default GoBackBtn;
