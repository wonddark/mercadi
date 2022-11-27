import useToggleOpen from "../../hooks/toggle-open.hooks";
import RetireBid from "./RetireBid";
import { formatMoney } from "../../helpers/formatters.helper";
import { useGetHighestBidPerOfferQuery } from "../../state/services/api";

interface Props {
  id: string;
  offerId: string;
  offerName: string;
  userBid: number;
}
function BidsQuickView({ offerId, offerName, userBid }: Props) {
  const { isOpen, toggleIsOpen } = useToggleOpen();
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
          <div className="col col-2">
            <i
              className="bi bi-x-circle-fill text-danger fs-6"
              onClick={toggleIsOpen}
              title="Retirar oferta"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      {isOpen && <RetireBid isOpen={isOpen} toggle={toggleIsOpen} />}
    </div>
  );
}

export default BidsQuickView;
