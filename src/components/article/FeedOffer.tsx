import dayjs from "dayjs";
import PostBidBtn from "../bid/PostBidBtn";
import { selectId } from "../../state/slices/session";
import { useAppSelector } from "../../hooks/state.hooks";
import { formatMoney } from "../../helpers/formatters.helper";

type Props = {
  item: {
    "@id": string;
    bids: any[];
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
  };
};

function FeedOffer({ item }: Props) {
  const state = useAppSelector((state) => state);
  const userId = selectId(state);
  return (
    <div className="card card-body shadow-sm mb-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <span className="fw-light fs-4 lh-sm d-block">{item.name}</span>
            <span className="small">
              {`${item.user.name} ${item.user.lastname}`}
            </span>
            <span className="ms-2 py-1 px-2 small fw-bold bg-light-gray text-primary">
              <i className="bi bi-flag-fill me-1" />
              {formatMoney(item.highestBid.quantity)}
            </span>
            <div className="container">
              <div className="row gap-1 my-3">
                {item.medias.slice(0, 4).map((token) => (
                  <div
                    key={token.id}
                    className="col offer-media"
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
            <p className="m-0 text-muted">
              {dayjs(item.publishedAt).format("DD/MM/YYYY HH:mm")}
            </p>
            {item.user.id !== userId && (
              <div className="mt-3">
                <PostBidBtn
                  offerId={item["@id"]}
                  highestBid={item.highestBid.quantity}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedOffer;
