import { Button, Container } from "reactstrap";
import useGoBack from "../hooks/go-back.hooks";

function UserOffers() {
  document.title = "Ofertas";
  const { goBackTo: goBackToFeed } = useGoBack("/user/feed");
  return (
    <Container>
      <Button onClick={goBackToFeed}>
        <i className="bi bi-arrow-left-circle-fill" />
      </Button>
    </Container>
  );
}

export default UserOffers;
