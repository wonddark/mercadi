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
                <span key={token.id} className="me-auto">
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
            <button className="btn btn-primary mt-3">
              <i className="bi bi-flag-fill me-2" />
              Haz tu oferta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedOffer;
