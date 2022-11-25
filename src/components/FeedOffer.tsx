import dayjs from "dayjs";

type Props = {
  item: {
    bids: any[];
    description: string;
    medias: any[];
    name: string;
    publishedAt: string;
    user: {
      name: string;
    };
  };
};

function FeedOffer({ item }: Props) {
  return (
    <div className="card card-body shadow-sm mb-4">
      <div className="container">
        <div className="row row-cols-2">
          <div className="col col-2">
            <div
              className="mx-auto mt-4 card card-body p-1"
              style={{ width: "64px", height: "64px" }}
            >
              <img
                src="/images/user.jpg"
                alt="user-placeholder"
                className="img-fluid"
              />
            </div>
            <span className="d-block mb-4 text-center">{item.user.name}</span>
            <span className="text-start d-block text-muted small">Ofertas</span>
            <>
              {item.bids.map((token) => (
                <span className="me-auto">${token.quantity}</span>
              ))}
            </>
          </div>
          <div className="col col-10">
            <div className="row row-cols-1 mb-2">
              <div className="col">
                <span className="fw-light fs-4 lh-sm">{item.name}</span>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2">
              {item.medias.map((token) => (
                <div key={token.id} className="col">
                  <img
                    src={token.contentUrl}
                    alt="article-media"
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>
            <p className="m-0">{item.description}</p>
            <p className="m-0 text-muted">
              {dayjs(item.publishedAt).format("DD/MM/YYYY HH:mm")}
            </p>
            <button className="btn btn-primary btn-sm mt-3">
              Haz tu oferta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedOffer;
