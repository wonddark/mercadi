import { formatMoney } from "../../helpers/formatters.helper";

interface Props {
  item: {
    id: string;
    name: string;
    bids: any[];
    highestBid: any;
    publishedAt: string;
    open: boolean;
  };
}
function RowOffer({
  item: { id, name, bids, highestBid, publishedAt, open },
}: Props) {
  return (
    <div className="card card-body my-1" style={{ cursor: "pointer" }}>
      <a href={`/oferta/${id}`} className="text-decoration-none text-body">
        <div className="row">
          <div className="col">{name}</div>
          <div className="col text-end">{formatMoney(bids[0].quantity)}</div>
          <div className="col text-end">{formatMoney(highestBid.quantity)}</div>
          <div className="col text-end">{bids.length - 1}</div>
          <div className="col text-center">
            {new Date(publishedAt).toLocaleString("es-CU")}
          </div>
          <div className="col text-center">
            <small
              className={`${
                open ? "bg-light" : "bg-light-gray"
              } py-1 px-3 rounded-pill`}
            >
              {open ? "Abierta" : "Cerrada"}
            </small>
          </div>
          <div className="col col-1 text-center">
            {open ? (
              <button
                className="bg-transparent border-0 p-0"
                title="Cerrar ofertas"
              >
                <i className="bi bi-x-circle-fill text-primary" />
              </button>
            ) : null}
          </div>
        </div>
      </a>
    </div>
  );
}

export default RowOffer;
