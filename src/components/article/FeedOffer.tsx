import dayjs from "dayjs";
import { formatMoney } from "../../helpers/formatters.helper";
import { Link } from "react-router-dom";

export type FeedOfferProps = {
  item: {
    "@id": string;
    description: string;
    id: string;
    medias: any[];
    publishedAt: string;
    user: {
      id: string;
      name: string;
      lastname: string;
    };
    contactPhones: string[];
    bidding: boolean;
    price: number;
    homeDelivery: number;
    bids: { highestOffer: number };
    additionalInfo: string;
    conditionStatus: number | null;
  };
};

function FeedOffer({ item }: FeedOfferProps) {
  function formatContacts() {
    if (item.contactPhones.length > 0) {
      if (item.contactPhones.length > 1) {
        return (
          <div className="d-flex flex-column mb-1">
            <strong>Contactos</strong>
            {item.contactPhones.map((item, index) => (
              <a key={index} href={`tel:${item}`}>
                <i className="bi bi-telephone-inbound-fill me-1" />
                <span>{item}</span>
              </a>
            ))}
          </div>
        );
      } else {
        return (
          <div className="d-flex flex-column mb-1">
            <strong>Contacto</strong>
            {item.contactPhones.map((item, index) => (
              <a key={index} href={`tel:${item}`}>
                <i className="bi bi-telephone-inbound-fill me-1" />
                <span>{item}</span>
              </a>
            ))}
          </div>
        );
      }
    } else {
      return (
        <div className="mb-1">
          <i className="bi bi-telephone-inbound-fill me-1" />
          <span>Sin información de contacto</span>
        </div>
      );
    }
  }

  function formatHomeDelivery() {
    switch (item.homeDelivery) {
      case 0:
        return (
          <div className="mb-1">
            <i className="bi bi-truck me-1" />{" "}
            <span>Sin entrega a domicilio</span>
          </div>
        );
      case 1:
        return (
          <div className="mb-1">
            <i className="bi bi-truck me-1" />{" "}
            <span>Entrega a domicilio incluida</span>
          </div>
        );
      case 2:
        return (
          <div className="mb-1">
            <i className="bi bi-truck me-1" />{" "}
            <span>Entrega a domicilio con costo adicional</span>
          </div>
        );
    }
  }

  function formatBidding() {
    switch (item.bidding) {
      case true:
        return (
          <div className="mb-1">
            <i className="bi bi-bar-chart-steps me-1" /> <span>En subasta</span>
          </div>
        );
      case false:
        return (
          <div className="mb-1">
            <i className="bi bi-bar-chart-steps me-1" />{" "}
            <span>Sin subasta</span>
          </div>
        );
    }
  }

  function formatAdditionalInfo() {
    switch (item.additionalInfo.length > 0) {
      case true:
        return (
          <div className="mb-1">
            <i className="bi bi-info-square-fill me-1" />{" "}
            <span>Información adicional disponible</span>
          </div>
        );
      case false:
        return (
          <div className="mb-1">
            <i className="bi bi-info-square-fill me-1" />{" "}
            <span>Información adicional no disponible</span>
          </div>
        );
    }
  }

  function formatConditionStatus() {
    switch (item.conditionStatus) {
      case 0:
        return (
          <div className="mb-1">
            <i className="bi bi-box2-fill me-1" /> <span>Nuevo</span>
          </div>
        );
      case 1:
        return (
          <div className="mb-1">
            <i className="bi bi-box2-fill me-1" />{" "}
            <span>De uso sin detalles</span>
          </div>
        );
      case 2:
        return (
          <div className="mb-1">
            <i className="bi bi-box2-fill me-1" />{" "}
            <span>De uso con detalles menores</span>
          </div>
        );
      case 3:
        return (
          <div className="mb-1">
            <i className="bi bi-box2-fill me-1" />{" "}
            <span>Detalles estéticos pero trabajando</span>
          </div>
        );
      case 4:
        return (
          <div className="mb-1">
            <i className="bi bi-box2-fill me-1" /> <span>Reparado</span>
          </div>
        );
      case 5:
        return (
          <div className="mb-1">
            <i className="bi bi-box2-fill me-1" /> <span>Para piezas</span>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="card card-body shadow-sm mb-4">
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 mb-2">
            <Link
              to={`/oferta/${item.id}`}
              className="fw-light fs-4 lh-sm d-block text-decoration-none"
            >
              {item.description}
            </Link>
            <span className="small">
              {`${item.user.name} ${item.user.lastname}`}
            </span>
            <span className="ms-2 small text-muted">
              {dayjs(item.publishedAt).format("DD/MM/YYYY HH:mm")}
            </span>
            <span className="d-block mt-3 small fw-bold">
              <i className="bi bi-flag-fill me-1" />
              {formatMoney(
                `${item.bidding ? item.bids.highestOffer : item.price}`,
              )}
            </span>
          </div>
          <div className="col-12 col-md-4">
            {item.medias.slice(0, 1).map((token) => (
              <div
                key={token.id}
                className="col article-media"
                style={{
                  backgroundImage: `url("${
                    process.env.REACT_APP_API_URL + token.contentUrl
                  }")`,
                }}
              />
            ))}
          </div>
          <div className="col-12 col-md-8">
            {formatContacts()}
            {formatHomeDelivery()}
            {formatBidding()}
            {formatConditionStatus()}
            {formatAdditionalInfo()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedOffer;
