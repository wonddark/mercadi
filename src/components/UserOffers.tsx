import { Button, Container } from "reactstrap";
import useGoBack from "../hooks/go-back.hooks";
import { dummyOffers } from "../data/dummy-offers";
import RowOffer from "./RowOffer";
import HeaderOffer from "./HeaderOffer";

function UserOffers() {
  document.title = "Ofertas";
  const { goBackTo: goBackToFeed } = useGoBack("/user/feed");
  return (
    <Container>
      <Button onClick={goBackToFeed}>
        <i className="bi bi-arrow-left-circle-fill" />
      </Button>
      <HeaderOffer />
      <div
        className="pe-1"
        style={{
          height: "calc(65vh)",
          overflow: "auto",
        }}
      >
        {dummyOffers.map((item) => (
          <RowOffer item={item} key={item.id} />
        ))}
      </div>
    </Container>
  );
}

export default UserOffers;
