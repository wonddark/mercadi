import { dummyOffers } from "../../data/dummy-offers";
import RowOffer from "../article/RowOffer";
import HeaderOffer from "../article/HeaderOffer";

function UserOffers() {
  document.title = "Ofertas";
  return (
    <>
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
    </>
  );
}

export default UserOffers;
