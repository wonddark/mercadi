import { formatMoney } from "../../helpers/formatters.helper";

interface Props {
  item: {
    id: string;
    deletable: boolean;
    offer: {
      name: string;
      open: boolean;
    };
    publishedAt: string;
    quantity: number;
  };
}
function RowBid({
  item: {
    deletable,
    offer: { name, open },
    publishedAt,
    quantity,
  },
}: Props) {
  return (
    <div className="card card-body my-1" style={{ cursor: "pointer" }}>
      <div className="row">
        <div className="col">{name}</div>
        <div className="col text-end d-none d-md-block">
          {formatMoney(`${quantity}`)}
        </div>
        <div className="col text-center d-none d-md-block">
          {new Date(publishedAt).toLocaleString()}
        </div>
        <div className="col text-center d-none d-lg-block">
          <small
            className={`${
              open ? "bg-light" : "bg-light-gray"
            } py-1 px-3 rounded-pill`}
          >
            {open ? "Abierta" : "Cerrada"}
          </small>
        </div>
        <div className="col col-1">
          {deletable ? (
            <button
              className="bg-transparent p-0 border-0"
              title="Retirar oferta"
            >
              <i className="bi bi-x-circle-fill text-danger fs-5" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default RowBid;
