import { formatMoney } from "../../helpers/formatters.helper";

interface Props {
  item: {
    name: string;
    initialBid: string;
    currentBid: string;
    publishedAt: string;
    status: string;
  };
}
function RowOffer({
  item: { name, initialBid, currentBid, publishedAt, status },
}: Props) {
  return (
    <div className="card card-body my-1" style={{ cursor: "pointer" }}>
      <div
        className={`row ${
          status === "Closed" ? "text-decoration-line-through text-muted" : ""
        }`}
      >
        <div className="col">{name}</div>
        <div className="col text-end">{formatMoney(initialBid)}</div>
        <div className="col text-end">{formatMoney(currentBid)}</div>
        <div className="col text-center">
          {new Date(publishedAt).toLocaleString()}
        </div>
        <div className="col text-center">{status}</div>
      </div>
    </div>
  );
}

export default RowOffer;
