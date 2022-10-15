import useGoBack from "../hooks/go-back.hooks";
import { Button, Container } from "reactstrap";
import HeaderBid from "./HeaderBid";
import { dummyBids } from "../data/dummy-bids";
import RowBid from "./RowBid";

function UserBids() {
  document.title = "Pujas";
  const { goBackTo: goBackToFeed } = useGoBack("/user/feed");
  return (
    <Container>
      <Button onClick={goBackToFeed}>
        <i className="bi bi-arrow-left-circle-fill" />
      </Button>
      <HeaderBid />
      <div
        className="pe-1"
        style={{
          height: "calc(65vh)",
          overflow: "auto",
        }}
      >
        {dummyBids.map((item) => (
          <RowBid item={item} key={item.id} />
        ))}
      </div>
    </Container>
  );
}

export default UserBids;
