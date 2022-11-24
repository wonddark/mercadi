import { dummyBids } from "../data/dummy-bids";
import BidsQuickView from "./BidsQuickView";
import { Link } from "react-router-dom";

function Bids() {
  return (
    <div className="container-fluid">
      <Link
        to="/perfil/pujas"
        className="small fw-bold text-muted text-decoration-none fs-6"
      >
        Tus pujas
      </Link>
      <div className="container-fluid p-0">
        {dummyBids.slice(0, 3).map((item) => (
          <BidsQuickView
            id={item.id}
            name={item.name}
            currentOffer={item.currentBid}
            myOffer={item.myBid}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Bids;
