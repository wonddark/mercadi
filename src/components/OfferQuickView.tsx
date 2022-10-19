import useToggleOpen from "../hooks/toggle-open.hooks";
import CloseOffer from "./CloseOffer";
import { formatMoney } from "../helpers/formatters.helper";

interface Props {
  id: string;
  name: string;
  initialOffer: string;
  currentOffer: string;
}
function OfferQuickView({ name, initialOffer, currentOffer }: Props) {
  const { isOpen, toggleIsOpen } = useToggleOpen();
  return (
    <div className="card card-body my-2">
      <div className="container-fluid">
        <div className="row">
          <div className="col col-12">
            <span className="h6">{name}</span>
          </div>
          <div className="row justify-content-between">
            <div className="col col-10">
              <span className="small text-muted d-block">
                Puja inicial: <strong>{formatMoney(initialOffer)}</strong>
              </span>
              <span className="small text-muted d-block">
                Puja actual: <strong>{formatMoney(currentOffer)}</strong>
              </span>
            </div>
            <div className="col col-1 mt-2">
              <button
                className="btn btn-primary btn-sm"
                onClick={toggleIsOpen}
                title="Cerrar oferta"
              >
                <i className="bi bi-x-circle-fill" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <CloseOffer isOpen={isOpen} toggle={toggleIsOpen} />}
    </div>
  );
}

export default OfferQuickView;
