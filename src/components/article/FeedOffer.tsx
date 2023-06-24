import dayjs from "dayjs";
import { formatMoney } from "../../helpers/formatters.helper";
import { Link } from "react-router-dom";

export type FeedOfferProps = {
  item: {
    "@id": string;
    description: string;
    highestBid: any;
    id: string;
    medias: any[];
    name: string;
    publishedAt: string;
    user: {
      id: string;
      name: string;
      lastname: string;
    };
    bids: { highestOffer: number };
  };
};

function FeedOffer({ item }: FeedOfferProps) {
  return (
    <div className="card card-body shadow-sm mb-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <Link
              to={`/oferta/${item.id}`}
              className="fw-light fs-4 lh-sm d-block text-decoration-none"
            >
              {item.name}
            </Link>
            <span className="small">
              {`${item.user.name} ${item.user.lastname}`}
            </span>
            <span className="ms-2 small text-muted">
              {dayjs(item.publishedAt).format("DD/MM/YYYY HH:mm")}
            </span>
            <div className="container">
              <div className="row gap-1 my-3">
                {item.medias.slice(0, 4).map((token) => (
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
            </div>
            <p className="m-0">{item.description}</p>
            <span className="d-block mt-3 small fw-bold text-primary">
              <i className="bi bi-flag-fill me-1" />
              {formatMoney(`${item.bids.highestOffer}`)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedOffer;
