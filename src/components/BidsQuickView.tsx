import useToggleOpen from "../hooks/toggle-open.hooks";
import RetireBid from "./RetireBid";
import { formatMoney } from "../helpers/formatters.helper";

interface Props {
  id: string;
  name: string;
  currentOffer: string;
  myOffer: string;
}
function BidsQuickView({ name, currentOffer, myOffer }: Props) {
  const { isOpen, toggleIsOpen } = useToggleOpen();
  return (
    <div className="card card-body my-2">
      <div className="container-fluid p-0">
        <div className="row justify-content-between">
          <div className="col col-9">
            <span className="h6">{name}</span>
            <span className="small text-muted d-block">
              Tu oferta: <strong>{formatMoney(myOffer)}</strong>
            </span>
            <span className="small text-muted d-block">
              Oferta actual: <strong>{formatMoney(currentOffer)}</strong>
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
