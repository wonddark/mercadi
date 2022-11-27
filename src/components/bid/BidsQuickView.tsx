import { formatMoney } from "../../helpers/formatters.helper";
import { useGetHighestBidPerOfferQuery } from "../../state/services/api";
import RetireBidBtn from "./RetireBidBtn";

interface Props {
  id: string;
  offerId: string;
  offerName: string;
  userBid: number;
  isDeletable: boolean;
}
function BidsQuickView({
  id,
  offerId,
  offerName,
  userBid,
  isDeletable,
}: Props) {
  const { data, isLoading } = useGetHighestBidPerOfferQuery(offerId);
  return (
    <div className="card card-body my-2">
      <div className="container-fluid p-0">
        <div className="row justify-content-between">
          <div className="col col-9">
            <span className="h6">{offerName}</span>
            <span className="small text-muted d-block">
              Tu oferta: <strong>{formatMoney(`${userBid}`)}</strong>
            </span>
            <span className="small text-muted d-block">
              {!isLoading ? (
                <>
                  Oferta actual:{" "}
                  <strong>{formatMoney(`${data.quantity}`)}</strong>
                </>
              ) : (
                "Cargando"
              )}
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
