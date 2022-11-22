import useGoBack from "../hooks/go-back.hooks";
import HeaderBid from "./HeaderBid";
import { dummyBids } from "../data/dummy-bids";
import RowBid from "./RowBid";

function UserBids() {
  document.title = "Pujas";
  const { goBackTo: goBackToFeed } = useGoBack("/perfil/muro");
  return (
    <div className="container-fluid">
      <button className="btn btn-secondary" onClick={goBackToFeed}>
        <i className="bi bi-arrow-left-circle-fill" />
      </button>
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
    </div>
  );
}

export default UserBids;
