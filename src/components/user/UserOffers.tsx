import useGoBack from "../../hooks/go-back.hooks";
import { dummyOffers } from "../../data/dummy-offers";
import RowOffer from "../article/RowOffer";
import HeaderOffer from "../article/HeaderOffer";

function UserOffers() {
  document.title = "Ofertas";
  const { goBackTo: goBackToFeed } = useGoBack("/perfil/muro");
  return (
    <div className="container-fluid">
      <button className="btn btn-secondary" onClick={goBackToFeed}>
        <i className="bi bi-arrow-left-circle-fill" />
      </button>
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
    </div>
  );
}

export default UserOffers;
