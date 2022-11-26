import { formatMoney } from "../../helpers/formatters.helper";

interface Props {
  item: {
    name: string;
    myBid: string;
    currentBid: string;
    publishedAt: string;
    status: string;
  };
}
function RowBid({
  item: { name, myBid, currentBid, publishedAt, status },
}: Props) {
  return (
    <div className="card card-body my-1" style={{ cursor: "pointer" }}>
      <div
        className={`row ${
          status === "Closed" ? "text-decoration-line-through text-muted" : ""
        }`}
      >
        <div className="col">{name}</div>
        <div className="col text-end d-none d-md-block">
          {formatMoney(myBid)}
        </div>
        <div className="col text-end">{formatMoney(currentBid)}</div>
        <div className="col text-center d-none d-md-block">
          {new Date(publishedAt).toLocaleString()}
        </div>
        <div className="col text-center d-none d-lg-block">{status}</div>
      </div>
    </div>
  );
}

export default RowBid;
