import { formatMoney } from "../../helpers/formatters.helper";
import RetireBidBtn from "./RetireBidBtn";

interface Props {
  id: string;
  offerId: string;
  offerDescription: string;
  userBid: number;
  isDeletable: boolean;
  bids: { highestOffer: number };
}
function BidsQuickView({
  id,
  bids,
  offerDescription,
  userBid,
  isDeletable,
}: Props) {
  return (
    <div className="card card-body my-2">
      <div className="container-xxl p-0">
        <div className="row justify-content-between">
          <div className="col col-9">
            <span className="h6">{offerDescription}</span>
            <span className="small text-muted d-block">
              Tu oferta: <strong>{formatMoney(`${userBid}`)}</strong>
            </span>
            <span className="small text-muted d-block">
              Oferta actual:{" "}
              <strong>{formatMoney(`${bids.highestOffer}`)}</strong>
            </span>
          </div>
          {isDeletable && (
            <div className="col col-2">
              <RetireBidBtn bidId={id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BidsQuickView;
