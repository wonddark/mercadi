import HeaderBid from "../bid/HeaderBid";
import { dummyBids } from "../../data/dummy-bids";
import RowBid from "../bid/RowBid";
import { pageTitle } from "../../helpers/page-title.helper";

function UserBids() {
  pageTitle("Mis ofertas");
  return (
    <>
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
    </>
  );
}

export default UserBids;
