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
    <button className="btn btn-secondary" onClick={goBackToFeed}>
      <i className="bi bi-arrow-left-circle-fill" />
    </button>
  );
}

export default GoBackBtn;
