import dayjs from "dayjs";
import PostBidBtn from "../bid/PostBidBtn";
import { selectId } from "../../state/slices/session";
import { useAppSelector } from "../../hooks/state.hooks";

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
    };
  };
};

function FeedOffer({ item }: Props) {
  const state = useAppSelector((state) => state);
  const userId = selectId(state);
  return (
    <div className="card card-body shadow-sm mb-4">
      <div className="container">
        <div className="row row-cols-2">
          <div className="col col-2">
            <div
              className="mt-4 card card-body p-1"
              style={{ width: "64px", height: "64px" }}
            >
              <img
                src="/images/user.jpg"
                alt="user-placeholder"
                className="img-fluid"
              />
            </div>
            <span className="d-block mb-4">{item.user.name}</span>
            <span className="text-start d-block text-muted small">Ofertas</span>
            <>
              {item.bids.map((token) => (
                <span key={token.id} className="d-block me-auto p-1 ps-0">
                  ${token.quantity}
                </span>
              ))}
            </>
          </div>
          <div className="col col-10">
            <span className="fw-light fs-4 lh-sm">{item.name}</span>
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
