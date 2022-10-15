import useGoBack from "../hooks/go-back.hooks";
import { Button, Container } from "reactstrap";

function UserBids() {
  document.title = "Pujas";
  const { goBackTo: goBackToFeed } = useGoBack("/user/feed");
  return (
    <Container>
      <Button onClick={goBackToFeed}>
        <i className="bi bi-arrow-left-circle-fill" />
      </Button>
    </Container>
  );
}

export default UserBids;
